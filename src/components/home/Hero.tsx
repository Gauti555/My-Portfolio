"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

export const Hero = () => {
   return (
      <section id="hero" className="relative min-h-screen w-full bg-[#0a0a0a] text-white pt-32 pb-20 flex items-center">
         {/* Background Grid Pattern (Subtle) */}
         <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

         <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT COLUMN: Photo, Name, Bio */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
               {/* Profile Photo - Larger & Circular */}
               <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: ease }}
                  className="relative h-64 w-64 md:h-80 md:w-80 overflow-hidden rounded-full border-4 border-primary/20 mb-8 shadow-2xl shadow-primary/10"
               >
                  <Image
                     src="/assets/passport photo.png"
                     alt="Gautam Savaliya"
                     fill
                     className="object-cover"
                  />
               </motion.div>

               {/* Greeting */}
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: ease }}
               >
                  <h2 className="text-xl md:text-2xl font-medium text-white/80 mb-2">
                     Hello, I&apos;m <span className="text-white font-bold">Gautam Savaliya</span> 👋
                  </h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                     AI / ML Engineer
                  </h3>
               </motion.div>

               {/* Bio */}
               <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: ease }}
                  className="text-lg text-white/60 leading-relaxed max-w-lg"
               >
                  Specializing in end-to-end Generative AI and production ML systems for 4+ years.
                  Passionate about engineering intelligent solutions that bridge the gap between research and reality.
               </motion.p>
            </div>

            {/* RIGHT COLUMN: Headline, Stats, Actions */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
               {/* Main Headline */}
               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: ease }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-8"
               >
                  Engineering <span className="font-serif italic font-normal text-primary">Intelligent,</span>
                  <br />
                  Generative <span className="font-serif italic font-normal text-primary">Future.</span>
               </motion.h1>

               {/* Social Links Section (Replacing Stats) */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: ease }}
                  className="flex items-center justify-center lg:justify-start gap-6 mb-10"
               >
                  <Link
                     href="https://github.com/Gauti555"
                     target="_blank"
                     className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all group"
                  >
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 group-hover:text-primary transition-colors">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                     </svg>
                  </Link>
                  <Link
                     href="https://www.linkedin.com/in/gautam-s-41a72a17a/"
                     target="_blank"
                     className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all group"
                  >
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 group-hover:text-primary transition-colors">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                     </svg>
                  </Link>
                  <Link
                     href="https://medium.com/@gautamsavaliya_86420"
                     target="_blank"
                     className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all group"
                  >
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 group-hover:text-primary transition-colors">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                     </svg>
                  </Link>
               </motion.div>

               {/* Actions */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7, ease: ease }}
                  className="flex flex-col sm:flex-row items-center gap-6"
               >
                  <Link
                     href="#contact"
                     className="px-8 py-4 bg-primary text-[#0a0a0a] font-bold rounded-2xl text-lg transition-transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-primary/40"
                  >
                     Let&apos;s Talk ↗
                  </Link>
                  <button className="text-white/70 hover:text-white font-medium transition-colors border-b border-transparent hover:border-white">
                     View Resume
                  </button>
               </motion.div>
            </div>

         </div>
      </section>
   );
};
