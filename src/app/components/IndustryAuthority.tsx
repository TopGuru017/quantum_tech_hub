import { Link } from "react-router";
import { motion } from "motion/react";

const industries = [
  {
    title: "TELECOM & MEDIA",
    to: "/industry/telecom",
    image: "https://images.unsplash.com/photo-1767884162181-68267b807b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlY29tJTIwYW50ZW5uYSUyMHRvd2VyJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzE2MDg4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "ENERGY",
    to: "/industry/energy",
    image: "https://images.unsplash.com/photo-1764185240087-c1922b02fbd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBsaWdodCUyMGJ1bGIlMjBlbGVjdHJpY2l0eSUyMGdsb3dpbmd8ZW58MXx8fHwxNzcxNjA4ODE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "SOFTWARE & TECHNOLOGY",
    to: "/industry/software",
    image: "https://images.unsplash.com/photo-1644158767445-79390e879319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHRlY2hub2xvZ3klMjBjb2RpbmclMjBkaWdpdGFsJTIwY2l0eXxlbnwxfHx8fDE3NzE2MDg4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "SMART MANUFACTURING",
    to: "/industry/manufacturing",
    image: "https://images.unsplash.com/photo-1760842543741-876d7837fa0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjBtYW51ZmFjdHVyaW5nJTIwbWljcm9jaGlwfGVufDF8fHx8MTc3MTYwODgyMHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "HEALTHCARE",
    to: "/industry/healthcare",
    image: "https://images.unsplash.com/photo-1758691462848-ba1e929da259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZG9jdG9yJTIwbWVkaWNhbCUyMHRlY2hub2xvZ3klMjBkaWdpdGFsfGVufDF8fHx8MTc3MTYwODgyMHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const vp = { once: true, margin: "-60px" };

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

function IndustryCard({ title, to, image }: { title: string; to: string; image: string }) {
  return (
    <motion.div variants={cardVariants}>
      <Link to={to} className="relative group overflow-hidden rounded block h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/35 transition-colors duration-400" />
        {/* Teal bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
        <div className="absolute top-4 left-4 right-4">
          <h3 className="text-white text-base md:text-lg leading-tight tracking-wide">
            {title}
          </h3>
        </div>
        <div className="absolute bottom-5 left-4">
          <span className="text-teal-400 text-sm group-hover:text-teal-300 transition-colors flex items-center gap-1">
            Explore
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export function IndustryAuthority() {
  return (
    <section id="industry" className="bg-gray-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={vp}
        >
          <p className="text-teal-400 text-xs tracking-[0.25em] uppercase mb-3">Expertise Areas</p>
          <h2
            className="text-white text-3xl md:text-4xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Industry Authority
          </h2>
        </motion.div>

        {/* Top row: 3 cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {industries.slice(0, 3).map((ind) => (
            <IndustryCard key={ind.title} {...ind} />
          ))}
        </motion.div>

        {/* Bottom row: 2 cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-2/3 md:mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}
        >
          {industries.slice(3, 5).map((ind) => (
            <IndustryCard key={ind.title} {...ind} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
