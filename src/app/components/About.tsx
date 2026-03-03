import React from "react";
import { motion } from "motion/react";

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Global Clients" },
  { value: "98%", label: "Client Satisfaction" },
];

const vp = { once: true, margin: "-80px" };

export function About() {
  return (
    <motion.section
      id="about"
      className="py-24 px-6"
      style={{ backgroundColor: "#f8f5e7" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={vp}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* Left — slide in from left with staggered content */}
        <motion.div
          initial={{ opacity: 0, x: -56 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={vp}
          className="space-y-0"
        >
          <motion.p
            className="text-teal-700 text-xs tracking-[0.2em] uppercase mb-3"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={vp}
          >
            Who We Are
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl text-gray-900 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={vp}
          >
            Our Strategic Approach
          </motion.h2>
          <motion.h3
            className="text-gray-800 text-lg mb-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={vp}
          >
            Innovative Solutions for Complex Business Challenges
          </motion.h3>
          <motion.p
            className="text-gray-700 leading-relaxed text-sm"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={vp}
          >
            We champion innovation and professionalism through a collaborative,
            results-focused approach. Our team works closely with yours to
            co-create tailored strategies that address complex challenges and
            unlock sustainable growth. By combining deep analysis with practical
            insights, we turn ideas into action—driving measurable outcomes and
            long-term success.
          </motion.p>
        </motion.div>

        {/* Right — staggered stat cards with scale-in */}
        <motion.div
          className="grid grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={{ visible: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } } }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.92 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="text-center p-6 border border-gray-300 rounded-lg hover:border-teal-500 hover:shadow-md transition-shadow duration-300"
            >
            <div
              className="text-4xl text-teal-600 mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
