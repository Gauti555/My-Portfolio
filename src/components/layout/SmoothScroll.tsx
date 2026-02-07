import React, { useEffect } from "react"
import Lenis from "lenis"
import "lenis/dist/lenis.css"

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      lerp: 0.08,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
    })

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
