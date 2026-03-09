import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import { PAGE_HERO_VIDEO } from "../assets/images";

const topics = [
  "Organization Transformation",
  "Operating Models",
  "Transformation Capital",
  "Gen AI",
  "Cloud",
  "Cyber Security",
  "Data Integrity",
];

export function Hero() {
  const [hoveredCta, setHoveredCta] = useState<"transform" | "resources" | null>(null);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col overflow-hidden bg-stone-800"
    >
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={PAGE_HERO_VIDEO}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-white/5" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/10" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-48 pb-0 -translate-y-20">

        {/* "Hello, we're" */}
        <motion.p
          className="text-white/80 text-4xl md:text-5xl mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.25 }}
        >
          Hello, we're
        </motion.p>

        {/* Main heading */}
        <div className="overflow-hidden mb-6 pb-2">
          <motion.h1
            className="text-white text-[2.5rem] md:text-[3.75rem] lg:text-[5.25rem] leading-none pt-1"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            Quantum Tech Hub
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-white/70 text-sm md:text-base max-w-md mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.65 }}
        >
          We enable enterprises to accelerate transformation by uniting digital innovation, global talent, and scalable operations.
        </motion.p>

        {/* Topic pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.85 }}
        >
          <p
            className="text-white/50 text-xs mb-3 italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            This is what we are astute about:
          </p>
          <motion.div
            className="flex flex-wrap gap-2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.95 } } }}
          >
            {topics.map((t) => (
              <motion.span
                key={t}
                variants={{
                  hidden: { opacity: 0, scale: 0.85 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
                }}
                className="border border-white/40 text-white/80 text-xs px-3 py-1 rounded-sm hover:border-teal-400 hover:text-teal-300 transition-colors duration-200 cursor-default"
              >
                {t}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom dual CTA bars */}
      <motion.div
        className="relative z-10 mt-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 1.2 }}
      >
        {/* ── Desktop: two independently absolute bars ── */}
        {/* Container reserves just the collapsed bar height; bars grow upward from bottom:0 */}
        <div className="relative hidden md:block" style={{ height: "88px" }}>

          {/* Left — anchored bottom-left, grows upward */}
          <Link
            to="/transformation-capital"
            className="absolute bottom-0 left-0 w-1/2 flex flex-col-reverse backdrop-blur-sm transition-colors duration-400 cursor-pointer no-underline"
            style={{
              background: hoveredCta === "transform" ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0.35)",
              borderTop: "1px solid rgba(255,255,255,0.15)",
              borderRight: "1px solid rgba(255,255,255,0.08)",
            }}
            onMouseEnter={() => setHoveredCta("transform")}
            onMouseLeave={() => setHoveredCta(null)}
          >
            {/* Title row — first in DOM = sits at BOTTOM in flex-col-reverse */}
            <span
              className="flex items-center gap-3 px-14 py-7 w-full cursor-pointer"
            >
              <div
                className="flex items-center gap-3"
                style={{
                  transform: hoveredCta === "transform" ? "translateY(-5px)" : "translateY(0)",
                  transition: "transform 0.45s ease",
                }}
              >
                <ArrowRight
                  className="w-5 h-5"
                  style={{
                    color: hoveredCta === "transform" ? "#fff" : "rgba(255,255,255,0.55)",
                    transform: hoveredCta === "transform" ? "translateX(3px)" : "translateX(0)",
                    transition: "color 0.3s, transform 0.3s",
                  }}
                />
                <span className="text-white text-3xl tracking-wide">
                Looking for Transformation
                </span>
              </div>
            </span>

            {/* Description — second in DOM = appears ABOVE title in flex-col-reverse */}
            <div
              className="overflow-hidden"
              style={{
                maxHeight: hoveredCta === "transform" ? "180px" : "0px",
                opacity: hoveredCta === "transform" ? 1 : 0,
                transition: "max-height 0.52s ease, opacity 0.38s ease",
              }}
            >
              <div className="px-14 pt-8 pb-5">
                <p className="text-white/75 text-lg leading-relaxed max-w-xs">
                  Empowering Global Enterprises to Build Strategic Hubs in India
                </p>
                <span className="inline-flex items-center gap-1.5 mt-5 text-white/55 text-xs tracking-widest uppercase">
                  Discover more <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </Link>

          {/* Right — anchored bottom-right, grows upward */}
          <Link
            to="/resources"
            className="absolute bottom-0 right-0 w-1/2 flex flex-col-reverse backdrop-blur-sm transition-colors duration-400 cursor-pointer no-underline"
            style={{
              background: hoveredCta === "resources" ? "rgba(0,0,0,0.40)" : "rgba(0,0,0,0.28)",
              borderTop: "1px solid rgba(255,255,255,0.15)",
            }}
            onMouseEnter={() => setHoveredCta("resources")}
            onMouseLeave={() => setHoveredCta(null)}
          >
            {/* Title row */}
            <span
              className="flex items-center gap-3 px-14 py-7 w-full cursor-pointer"
            >
              <div
                className="flex items-center gap-3"
                style={{
                  transform: hoveredCta === "resources" ? "translateY(-5px)" : "translateY(0)",
                  transition: "transform 0.45s ease",
                }}
              >
                <ArrowUpRight
                  className="w-5 h-5"
                  style={{
                    color: hoveredCta === "resources" ? "#fff" : "rgba(255,255,255,0.55)",
                    transform: hoveredCta === "resources" ? "translate(2px,-2px)" : "translate(0,0)",
                    transition: "color 0.3s, transform 0.3s",
                  }}
                />
                <span className="text-white text-3xl tracking-wide">
                Who We Are
                </span>
              </div>
            </span>

            {/* Description */}
            <div
              className="overflow-hidden"
              style={{
                maxHeight: hoveredCta === "resources" ? "180px" : "0px",
                opacity: hoveredCta === "resources" ? 1 : 0,
                transition: "max-height 0.52s ease, opacity 0.38s ease",
              }}
            >
              <div className="px-14 pt-8 pb-5">
                <p className="text-white/75 text-lg leading-relaxed max-w-xs">
                  Insights, frameworks and thought leadership to sharpen your edge — curated to inform your next digital move and accelerate your journey.
                </p>
                <span className="inline-flex items-center gap-1.5 mt-5 text-white/55 text-xs tracking-widest uppercase">
                  Browse resources <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* ── Mobile: stacked normally (independent rows, no interference) ── */}
        <div className="md:hidden flex flex-col">
          <Link
            to="/transformation-capital"
            className="flex items-center gap-3 px-8 py-6 border-t border-white/20 backdrop-blur-sm cursor-pointer no-underline text-white transition-colors"
            style={{ background: "rgba(0,0,0,0.35)" }}
          >
            <ArrowRight className="w-5 h-5 text-white/60" />
            <span className="text-white text-lg">Looking for Transformation?</span>
          </Link>
          <Link
            to="/resources"
            className="flex items-center gap-3 px-8 py-6 border-t border-white/20 backdrop-blur-sm cursor-pointer no-underline text-white transition-colors"
            style={{ background: "rgba(0,0,0,0.28)" }}
          >
            <ArrowUpRight className="w-5 h-5 text-white/60" />
            <span className="text-white text-lg">Explore Our Resources</span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}