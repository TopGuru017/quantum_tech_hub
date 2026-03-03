import { motion } from "motion/react";

const vp = { once: true, margin: "-50px" };

export function CTA() {
  return (
    <section className="relative py-28 px-6 bg-teal-50 overflow-hidden">
      {/* Soft circle accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-70 pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-50 pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.p
          className="text-teal-600 text-xs tracking-[0.25em] uppercase mb-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={vp}
        >
          Get In Touch
        </motion.p>

        <motion.h2
          className="text-gray-900 text-4xl md:text-5xl mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          viewport={vp}
        >
          Ready to Build the Future?
        </motion.h2>

        <motion.p
          className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          viewport={vp}
        >
          Partner with Quantum Tech Hub to unlock your organisation's full
          potential. Our experts are ready to co-create your success story.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35 }}
          viewport={vp}
        >
          <span className="inline-block px-10 py-4 bg-teal-600 text-white text-sm tracking-wide cursor-default">
            Contact Us
          </span>
          <span className="inline-block px-10 py-4 border border-gray-300 text-gray-600 text-sm tracking-wide cursor-default">
            Learn More
          </span>
        </motion.div>
      </div>
    </section>
  );
}
