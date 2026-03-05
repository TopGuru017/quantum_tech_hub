import { motion } from "motion/react";

const partners = [
  "SAMSUNG", "NOKIA", "Vodafone", "ERICSSON",
  "PIF", "McKinsey & Company", "ABB", "Endeavour Energy",
  "Singapore Power", "Southern California Eddison", "SIEMENS", "Sempra",
];

const vp = { once: true, margin: "-80px" };

export function Partners() {
  return (
    <motion.section
      className="py-24 px-6"
      style={{ backgroundColor: "#f8f5e7" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={vp}
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading — fade and slide up */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={vp}
        >
          <motion.p
          className="text-teal-400 text-xs tracking-[0.2em] uppercase mb-3"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={vp}
        >
          Our Network
        </motion.p>
          <h2
            className="text-black text-2xl md:text-3xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Industry Experts have contributed to high-impact initiatives
            across global corporations.
          </h2>
        </motion.div>

        {/* Partner grid — staggered scale and fade */}
        <motion.div
          className="grid grid-cols-3 md:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } } }}
        >
          {partners.map((partner) => (
            <motion.div
              key={partner}
              variants={{
                hidden: { opacity: 0, y: 28, scale: 0.94 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
              }}
              whileHover={{ y: -5, scale: 1.02, boxShadow: "0 10px 28px rgba(0,0,0,0.1)" }}
              className="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:border-teal-500 transition-colors duration-200 h-16 cursor-default"
            >
              <span className="text-gray-700 text-sm tracking-wide text-center">
                {partner}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
