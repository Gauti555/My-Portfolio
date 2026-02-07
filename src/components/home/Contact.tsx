"use client"

import { motion } from "framer-motion"
import React, { type FormEvent, useRef, useState } from "react"
import { sendEmail } from "@/utils"




export const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null)

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setIsSuccess(false)

    try {
      await sendEmail(formRef.current!)
      setIsSuccess(true)
      formRef.current?.reset()
    } catch (err) {
      if (err instanceof Error) setError(err.message)
      else setError("Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-[#0a0a0a] scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-sm tracking-wide uppercase text-gray-500"
            >

            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-6 leading-[0.80] font-semibold text-white text-[64px] sm:text-[90px] md:text-[120px] lg:text-[132px]"
            >
              Reach me out
              <br />

            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
              className="mt-10 space-y-6"
            >
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Email:

                </p>
                <p className="mt-2 text-[18px] text-gray-300">
                  savaliya686@gmail.com
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Contact number
                </p>
                <p className="mt-2 text-[18px] text-gray-300">
                  +49 17656721333
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Address
                </p>
                <p className="mt-2 text-[18px] text-gray-300">
                  Bayern,Germany
                </p>
              </div>
            </motion.div>
          </div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-xl lg:ml-auto"
          >
            <div className="space-y-6">
              {/* honeypot for bots */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full p-4 bg-white/5 border border-white/10 text-white rounded-[18px] outline-none placeholder:text-gray-500 focus:border-primary/50 transition-colors"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full p-4 bg-white/5 border border-white/10 text-white rounded-[18px] outline-none placeholder:text-gray-500 focus:border-primary/50 transition-colors"
              />

              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                required
                className="w-full p-4 bg-white/5 border border-white/10 text-white rounded-[18px] outline-none placeholder:text-gray-500 resize-none focus:border-primary/50 transition-colors"
              />

              <button
                disabled={isLoading}
                type="submit"
                className="w-full p-4 bg-primary text-[#0a0a0a] rounded-[18px] font-bold hover:scale-[1.02] transition active:scale-[0.98] disabled:opacity-60 shadow-lg shadow-primary/20"
              >
                {isLoading ? "Sending..." : "Submit Message ↗"}
              </button>

              {!!error && (
                <p className="text-red-500 text-sm">
                  {error}
                </p>
              )}

              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="mt-4 rounded-[18px] border border-black/10 bg-white px-4 py-3 text-[#141414]"
                >
                  Message sent I will reply soon
                </motion.div>
              )}
            </div>
          </motion.form>

        </div>
      </div>
    </section>
  )
}
