import { motion } from "motion/react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Strategic partner with global CSP to improve customer experience, product roll out and better ROI. Improved customer experience by 40%. Reduced the NPD & Launch timelines by ~50%. 5 new customer logos acquired.",
    client: "A Global Telecom Giant",
  },
  {
    quote:
      "Business Restructuring & Turnaround. Key Customers acquisition in APAC region. Strategic framework for organizational restructuring for 7 industries, strategy for business transformation & growth and strategic account planning and execution.",
    client: "5 Bn Tech-Engineering Co",
  },
  {
    quote:
      "Strategic collaboration to reduce OPEX & CAPEX, expand outsourcing/offshoring footprint, drive higher productivity, data quality & manage cost. Defined operational framework to achieve client's 2030 objective. Achieved 95% data quality, 30% cost reduction and 40% productivity improvement.",
    client: "A Telecom Giant In Australia",
  },
  {
    quote:
      "Developed a global cloud-based data platform for a leading smart home IoT ecosystem, connecting over 100 million devices across home appliances, mobile devices, and wearables. The platform supports seamless connectivity through home hubs and cloud-to-cloud integrations, enabling a unified data pipeline that delivers end-to-end capabilities in data warehousing, streaming, governance, analytics, and actionable insights.",
    client: "A Global Technology Leader from South Korea",
  },
];

const vp = { once: true, margin: "-80px" };

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const visible = 3;

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  return (
    <motion.section
      id="transformation"
      className="py-24 px-6 bg-stone-200"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={vp}
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading — slide up */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={vp}
        >
          <motion.p
            className="text-teal-600 text-xs tracking-[0.25em] uppercase mb-4"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={vp}
          >
            Client Impact
          </motion.p>
          <h2
            className="text-gray-900 text-2xl md:text-3xl mb-1"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Empowering Clients to Tackle Their Toughest
          </h2>
          <h3
            className="text-gray-900 text-2xl md:text-3xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Business &amp; Operational Problems
          </h3>
        </motion.div>

        {/* Cards — 3-at-once carousel with smooth slide */}
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Array.from({ length: visible }).map((_, offset) => {
                const t = testimonials[(index + offset) % total];
                const key = `${(index + offset) % total}-${offset}`;
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="bg-white/60 border border-gray-300 rounded-lg p-7 hover:border-teal-500 hover:bg-white/80 transition-colors duration-300 flex flex-col h-full"
                  >
                    {/* Quote mark */}
                    <div
                      className="text-teal-600 text-5xl leading-none mb-4 select-none"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      "
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-1">{t.quote}</p>
                    <div className="border-t border-gray-300 pt-4">
                      <p className="text-gray-900 text-sm font-medium">{t.client}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Arrow controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-gray-800 hover:text-white transition-colors duration-300"
              aria-label="Previous client impact"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-gray-800 hover:text-white transition-colors duration-300"
              aria-label="Next client impact"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
