"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio.data"
import { ProjectDetails } from "./ProjectDetails"

export const Portfolio = () => {
  return (
    <section id="projects" className="w-full bg-[#0a0a0a] scroll-mt-24">
      <div className="w-full mx-auto pl-6 pr-12 sm:pl-8 sm:pr-20 py-24">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-1"
          >
            <h2 className="leading-[0.92] font-semibold text-white text-[42px] sm:text-[72px] md:text-[84px]">
              Projects that
              <br />
              Spark a
              <br />
              <span className="text-primary">Conversation</span>
            </h2>

            <p className="mt-10 text-[13px] font-semibold uppercase tracking-[0.18em] text-gray-300 leading-relaxed">
              Open a project to view it on GitHub.
            </p>
          </motion.div>

          {/* All projects in sequence to fill the 3-column grid */}
          {portfolioData.slice(0, 5).map((p) => (
            <ProjectDetails
              key={p.id}
              id={p.id}
              title={p.title}
              image={p.image}
              description={p.description}
              link={p.link}
            />
          ))}

          <div className="lg:col-span-3 mt-6 flex justify-start">
            <Link
              href="https://github.com/Gauti555?tab=repositories"
              target="_blank"
              className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-200 bg-primary rounded-full hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              View All Projects
              <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section >
  )
}
