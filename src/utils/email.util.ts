export async function sendEmail(form: HTMLFormElement) {
  const formData = new FormData(form)

  const payload = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
  }

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    interface ErrorResponse {
      message?: string
    }
    const data = (await res.json().catch(() => ({}))) as ErrorResponse
    throw new Error(data.message ?? "Failed to send message")
  }

  return res.json()
}
