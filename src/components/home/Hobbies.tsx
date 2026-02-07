"use client"

import Image from "next/image"
import React, { useEffect, useMemo, useRef, useState } from "react"
import { motion } from "framer-motion"
import { hobbiesImages, type HobbyImage } from "@/data/hobbies.data"

const tileClass = (shape: HobbyImage["shape"]) => {
  if (shape === "tall")
    return "w-[170px] sm:w-[190px] md:w-[210px] h-[280px] sm:h-[310px] md:h-[340px]"

  if (shape === "big")
    return "w-[200px] sm:w-[220px] md:w-[240px] h-[320px] sm:h-[350px] md:h-[380px]"

  if (shape === "mid")
    return "w-[190px] sm:w-[210px] md:w-[230px] h-[210px] sm:h-[230px] md:h-[250px]"

  return "w-[260px] sm:w-[300px] md:w-[340px] h-[180px] sm:h-[200px] md:h-[220px]"
}



export const Hobbies = () => {
  const items = useMemo(() => {
    return [...hobbiesImages, ...hobbiesImages, ...hobbiesImages]
  }, [])

  const trackRef = useRef<HTMLDivElement | null>(null)
  const [thirdWidth, setThirdWidth] = useState(0)

  const [paused, setPaused] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)

  const drag = useRef({
    active: false,
    startX: 0,
    startOffset: 0,
  })

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    const measure = () => {
      const w = el.scrollWidth
      if (w > 0) setThirdWidth(Math.floor(w / 3))
    }

    const ro = new ResizeObserver(() => requestAnimationFrame(measure))
    ro.observe(el)
    requestAnimationFrame(measure)

    return () => ro.disconnect()
  }, [items])

  const wrapOffset = (value: number) => {
    if (thirdWidth <= 0) return value
    let v = value
    while (v <= -thirdWidth) v += thirdWidth
    while (v > 0) v -= thirdWidth
    return v
  }

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return
    drag.current.active = true
    drag.current.startX = e.pageX
    drag.current.startOffset = dragOffset
    setPaused(true)
  }

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!drag.current.active) return
    e.preventDefault()
    const dx = e.pageX - drag.current.startX
    const next = drag.current.startOffset + dx
    setDragOffset(wrapOffset(next))
  }

  const endDrag = () => {
    if (!drag.current.active) return
    drag.current.active = false
    setPaused(false)
  }

  useEffect(() => {
    const onUp = () => endDrag()
    window.addEventListener("mouseup", onUp)
    return () => window.removeEventListener("mouseup", onUp)
  }, [])

  return (
    <section id="hobbies" className="bg-[#0a0a0a] scroll-mt-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-24 pb-10">
        <p className="text-sm tracking-wide uppercase text-gray-400"></p>

        <h2 className="mt-3 leading-[0.95] font-semibold text-white text-[42px] sm:text-[72px] md:text-[92px]">
          What I do outside work
        </h2>

        <p className="mt-6 text-gray-300 leading-relaxed max-w-xl">

        </p>
      </div>

      <div
        className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden cursor-grab active:cursor-grabbing select-none"

        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
      >
        <div
          style={{
            transform: `translate3d(${dragOffset}px, 0, 0)`,
            willChange: "transform",
          }}
        >
          <div
            ref={trackRef}
            className="flex items-end gap-10 w-max px-6 sm:px-10 py-12"
            style={{
              animationName: "hobbyMarquee",
              animationDuration: "60s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationPlayState: paused ? "paused" : "running",
              willChange: "transform",
            }}
          >
            {items.map((img, idx) => (
              <motion.div
                key={`${img.src}-${idx}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className={[
                  "relative overflow-hidden border border-white/10",
                  tileClass(img.shape),
                ].join(" ")}

              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 320px, 360px"
                  className="object-cover"
                  draggable={false}
                  priority={idx < 2}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-24">
        <div className="h-px w-full bg-white/10" />
      </div>

      <style>{`
        @keyframes hobbyMarquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.3333%, 0, 0); }
        }
      `}</style>
    </section>
  )
}
