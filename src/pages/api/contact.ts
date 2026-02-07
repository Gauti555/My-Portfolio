import type { NextApiRequest, NextApiResponse } from "next"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

// simple in-memory rate limit
const rate = new Map<string, { count: number; time: number }>()
const WINDOW_MS = 60_000
const MAX_REQ = 5

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  // ---------- RATE LIMIT ----------
  const ip =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ??
    req.socket.remoteAddress ??
    "unknown"

  const now = Date.now()
  const entry = rate.get(ip)

  if (!entry || now - entry.time > WINDOW_MS) {
    rate.set(ip, { count: 1, time: now })
  } else {
    if (entry.count >= MAX_REQ) {
      return res.status(429).json({
        message: "Too many requests, try later",
      })
    }
    entry.count += 1
    rate.set(ip, entry)
  }

  // ---------- BODY ----------
  const { name, email, message, company } = req.body as {
    name?: string
    email?: string
    message?: string
    company?: string
  }

  if (!name || !email || !message) {
    return res.status(400).json({
      message: "Missing required fields",
    })
  }

  // honeypot (bots)
  if (company) {
    return res.status(200).json({ success: true })
  }

  // ---------- SEND EMAIL ----------
  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["savaliya686@gmail.com"],
      subject: "New contact form message",
      replyTo: email,
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Failed to send email"
    console.error("Email error:", errorMessage)
    return res.status(500).json({
      message: errorMessage,
    })
  }
}
