import { motion } from "motion/react";

const highlights = [
  { label: "Industries Served", value: "5+" },
  { label: "Countries Reached", value: "20+" },
  { label: "Enterprise Clients", value: "80+" },
  { label: "Team Experts", value: "150+" },
];

const vp = { once: true, margin: "-80px" };

export function ProblemSolving() {
  return (
    <motion.section
      id="global"
      className="relative py-28 px-6 overflow-hidden"
      style={{ backgroundColor: "#e1c2b7" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={vp}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left — slide from left with scale */}
        <motion.div
          initial={{ opacity: 0, x: -64, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={vp}
        >
          <motion.p
            className="text-teal-700 text-xs tracking-[0.2em] uppercase mb-4"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={vp}
          >
            Our Philosophy
          </motion.p>
          <h2
            className="text-gray-900 text-3xl md:text-4xl mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Problem Solving Is in Our DNA
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Quantum Tech Hub, we don't just solve problems—we're engineered
            to seek them out, dissect them, and transform them into
            opportunities. From quantum computing breakthroughs to AI-driven
            innovations, our team thrives on complexity.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm">
            Every challenge is a catalyst, every obstacle a launchpad.
            Problem-solving isn't a department—it's our culture, our mindset,
            our core. We build solutions that don't just work—they redefine
            what's possible.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={vp}
            className="mt-8"
          >
            <span className="inline-block px-8 py-3 bg-teal-500 text-black cursor-default">
              Explore Solutions
            </span>
          </motion.div>
        </motion.div>

        {/* Right — staggered stat cards, slide from right with pop */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } }}
        >
          {highlights.map((item) => (
            <motion.div
              key={item.label}
              variants={{
                hidden: { opacity: 0, x: 48, scale: 0.9 },
                visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
              }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-white/70 border border-gray-300 rounded-lg p-6 text-center hover:bg-white/90 hover:border-teal-500 transition-colors duration-300"
            >
              <div
                className="text-teal-600 text-4xl mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.value}
              </div>
              <div className="text-gray-600 text-sm">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
