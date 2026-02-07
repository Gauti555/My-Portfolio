import { useRef } from "react";
import { cn } from "@/utils";
import { useScroll, useTransform, motion } from "framer-motion";

interface ParallaxProps {
  type: "services" | "portfolio";
}

export const Parallax = ({ type }: ParallaxProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className={cn(
        "w-full h-full relative flex items-center justify-center overflow-hidden",
        {
          "bg-past-work-gradient": type === "services",
          "bg-portfolio-gradient": type === "portfolio",
        }
      )}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="capitalize text-center md:text-start text-5xl md:text-6xl lg:text-7xl font-semibold text-white/80 relative z-40"
      >
        {type === "services" ? "Professional Experience" : "Projects"}
      </motion.h1>

      <motion.div className="bg-mountains-image bg-contain bg-no-repeat md:bg-repeat md:bg-cover bg-bottom w-full h-full absolute z-30" />

      <motion.div
        style={{ y: yBg }}
        className={cn(
          "bg-contain bg-no-repeat md:bg-cover md:bg-repeat bg-bottom w-full h-full absolute z-20",
          {
            "bg-planets-image": type === "services",
            "bg-sun-image": type === "portfolio",
          }
        )}
      />

      <motion.div
        style={{ x: yBg }}
        className="bg-stars-image bg-cover bg-bottom w-full h-full absolute z-10"
      />
    </div>
  );
};
