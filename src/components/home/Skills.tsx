"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { skillClusters } from "@/data/skills.data"

export const Skills = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleCluster = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  }

  return (
    <section id="skills" className="bg-[#0a0a0a] scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h2 className="mt-6 leading-[0.95] font-semibold text-white text-[42px] sm:text-[72px] md:text-[92px]">
            Technical Proficiencies &
            <br />
            <span className="text-primary">Specialized Domains</span>
          </h2>

          <p className="mt-10 text-[13px] font-semibold uppercase tracking-[0.18em] text-gray-400 leading-relaxed max-w-2xl">
            A comprehensive overview of my expertise across the AI landscape, software engineering, and systems architecture.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-x-8 gap-y-8">
          {skillClusters.map((cluster, clusterIdx) => (
            <motion.div
              key={cluster.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: clusterIdx * 0.1 }}
              className="bg-[#111111] border border-white/5 rounded-[32px] overflow-hidden flex flex-col hover:border-primary/20 transition-colors"
            >
              <button
                onClick={() => toggleCluster(clusterIdx)}
                className="w-full flex items-center justify-between p-8 text-left focus:outline-none group"
              >
                <div className="flex items-center gap-5">
                  <div className="h-14 w-14 rounded-2xl bg-[#1a1a1a] flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-colors">
                    <Image
                      src={cluster.icon}
                      alt={cluster.title}
                      width={32}
                      height={32}
                      className="opacity-80"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight leading-tight">
                      {cluster.title}
                    </h3>
                    <p className="text-primary text-[10px] font-bold uppercase tracking-widest mt-1">
                      {cluster.xp}
                    </p>
                  </div>
                </div>

                <motion.div
                  animate={{ rotate: expandedIndex === clusterIdx ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-primary"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {expandedIndex === clusterIdx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-8 pb-10 space-y-6">
                      <div className="h-px w-full bg-white/5 mb-6" />
                      {cluster.skills.map((skill, skillIdx) => (
                        <div key={skillIdx} className="space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-300 font-medium">{skill.name}</span>
                            <span className="text-primary font-bold">{skill.level}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.1 + skillIdx * 0.05, ease: "easeOut" }}
                              className="h-full bg-primary"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
