"use client"

import { motion, AnimatePresence } from "framer-motion"
import React, { useEffect, useMemo, useRef, useState } from "react"
import { experienceData, type ExperienceItem } from "@/data/services.data"

export const Services = () => {
  const items = useMemo(() => {
    return [...experienceData, ...experienceData, ...experienceData]
  }, [])

  const trackRef = useRef<HTMLDivElement | null>(null)
  const [thirdWidth, setThirdWidth] = useState(0)
  const [openId, setOpenId] = useState<string | null>(null)

  const [paused, setPaused] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)

  const drag = useRef({
    active: false,
    startX: 0,
    startOffset: 0,
  })

  useEffect(() => {
    setPaused(openId !== null)
  }, [openId])

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
    <section id="experience" className="w-full bg-[#0a0a0a] scroll-mt-24 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-24"> {/* Reduced top padding */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >


          <h2 className="mt-6 leading-[0.9] font-semibold text-white text-[54px] sm:text-[88px] md:text-[112px]">
            Experience
            <br />
            <span className="text-primary/90">Delivered</span>
          </h2>

          <p className="mt-6 max-w-2xl text-[18px] font-semibold uppercase tracking-[0.18em] text-gray-400 leading-relaxed">
            Specialized roles in AI Engineering and Intelligent System Design.
          </p>

        </motion.div>
      </div>

      <div
        className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden cursor-grab active:cursor-grabbing select-none"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}


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
            className="flex gap-6 w-max px-6 sm:px-10 py-10"
            style={{
              animationName: "expMarqueeNoGap",
              animationDuration: "60s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationPlayState: paused ? "paused" : "running",
              willChange: "transform",
            }}
          >
            {items.map((exp, idx) => (
              <ExperienceCard
                key={`${exp.id}-${idx}`}
                exp={exp}
                isOpen={openId === exp.id}
                onToggle={() => {
                  setOpenId((prev) => (prev === exp.id ? null : exp.id))
                }}
                isDragging={() => drag.current.active}
              />
            ))}

          </div>
        </div>
      </div>

      <style>{`
        @keyframes expMarqueeNoGap {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.3333%, 0, 0); }
        }
      `}</style>
    </section>
  )
}
const ExperienceCard = ({
  exp,
  isOpen,
  onToggle,
  isDragging,
}: {
  exp: ExperienceItem
  isOpen: boolean
  onToggle: () => void
  isDragging: () => boolean
}) => {
  const handleClick = () => {
    if (isDragging()) return
    onToggle()
  }

  return (
    <div
      className="w-[320px] sm:w-[360px] h-[520px] [perspective:1200px] cursor-pointer group"
      onClick={handleClick}
    >
      <motion.div
        animate={{ rotateY: isOpen ? 180 : 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* FRONT SIDE */}
        <div
          className="absolute inset-0 rounded-[28px] overflow-hidden border border-white/10 shadow-2xl bg-[#1a1a1a]"
          style={{ backfaceVisibility: "hidden" }}
        >
          {exp.coverImage ? (
            <img
              src={exp.coverImage}
              alt={`${exp.role} cover`}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              draggable={false}
            />
          ) : (
            <div className="w-full h-full bg-[#1e293b]" />
          )}

          {/* subtle overlay so text reads */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />

          {/* role text only */}
          <div className="absolute left-6 right-6 bottom-6">
            <h3 className="text-2xl font-bold text-white leading-tight">
              {exp.role}
            </h3>
            <p className="text-primary text-sm font-semibold mt-1 uppercase tracking-wider">{exp.company}</p>
          </div>
        </div>

        {/* BACK SIDE */}
        <div
          className="absolute inset-0 rounded-[28px] overflow-hidden border border-primary/20 shadow-2xl bg-[#1a1a1a]"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="h-full p-8 flex flex-col text-white">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary/80">
                {exp.company}
                {exp.location ? ` · ${exp.location}` : ""}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                {exp.role}
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                {exp.duration}
              </p>
            </div>

            {exp.highlights?.length ? (
              <ul className="mt-6 space-y-3">
                {exp.highlights.slice(0, 4).map((h, i) => (
                  <li key={i} className="flex gap-3 text-gray-300 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {exp.details?.length ? (
              <div className="mt-6">
                <p className="text-sm font-bold text-white border-b border-white/10 pb-1 mb-2 inline-block">
                  Key Work
                </p>
                <ul className="mt-2 space-y-2">
                  {exp.details.slice(0, 3).map((d, i) => (
                    <li key={i} className="text-sm text-gray-400 leading-relaxed">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-auto pt-6 border-t border-white/5">
              {exp.tech?.length ? (
                <div className="flex flex-wrap gap-2">
                  {exp.tech.slice(0, 10).map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase font-bold px-2 py-1 rounded bg-white/5 text-primary border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}

              <p className="mt-4 text-xs text-gray-500 text-center">
                Click to flip back
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

