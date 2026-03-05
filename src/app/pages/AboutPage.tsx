import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ABOUT_US_HERO, VALUE_HERO } from "../assets/images";

const values = [
  {
    title: "Integrity",
    desc: "We believe in being honest, transparent and ethical in all actions",
  },
  {
    title: "Respect",
    desc: "We value diversity, treating everyone with dignity, and fostering an inclusive environment",
  },
  {
    title: "Innovation",
    desc: "We encourage creativity, embrace change and transform",
  },
  {
    title: "Accountability",
    desc: "We take responsibility for every actions and outcomes.",
  },
  {
    title: "Customer Focus",
    desc: "We prioriatize client needs and ensure it meets every expectations",
  },
  {
    title: "Sustainability",
    desc: "We are committed to environment and socially responsible practices",
  },
];

export function AboutPage() {
  return (
    <div className="bg-black min-h-screen font-sans antialiased">
      {/* ── Hero: Purpose Driven (full screen, text left / image right) ── */}
      <section className="flex flex-col md:flex-row min-h-screen">
        {/* Left: text */}
        <div
          className="md:w-1/2 flex items-center px-8 md:px-12 lg:px-16 py-12 md:py-16 order-2 md:order-1"
          style={{ backgroundColor: "#223c59" }}
        >
          <div className="max-w-2xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-snug">
              Who We Are
            </h1>
          </div>
        </div>

        {/* Right: image */}
        <div className="md:w-1/2 relative overflow-hidden min-h-[280px] md:min-h-full order-1 md:order-2">
          <ImageWithFallback
            src={ABOUT_US_HERO}
            alt="We are purpose driven"
            className="w-full h-full min-h-[280px] md:min-h-full object-cover"
          />
          {/* slight dark overlay on left edge for blending */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent hidden md:block" />
        </div>
      </section>

      {/* ── Our Values (full screen, 2 per row × 3 rows) ── */}
      <section className="min-h-screen bg-slate-50 flex flex-col">
        <div className="flex-1 flex flex-col justify-center py-12 md:py-16 px-6 md:px-12 lg:px-20">
          <h2 className="text-[#1c3249] text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center tracking-tight">
            Our Values
          </h2>
          <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {values.map((v, i) => (
              <div
                key={i}
                className="group p-6 md:p-8 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
              >
                <h3 className="text-[#1c3249] font-bold text-lg md:text-xl mb-2 tracking-tight">
                  {v.title}
                </h3>
                <p className="text-[#1c3249] text-sm md:text-base leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Value Promise ── */}
      <section className="flex flex-col md:flex-row min-h-screen" style={{ backgroundColor: "#cfdbe8" }}>
        {/* Left: full-size image (same as Purpose Driven) */}
        <div className="md:w-1/2 relative overflow-hidden min-h-[280px] md:min-h-full order-1 md:order-1">
          <ImageWithFallback
            src={VALUE_HERO}
            alt="Our Value Promise"
            className="w-full h-full min-h-[280px] md:min-h-full object-cover object-top"
          />
        </div>
        {/* Right: title + paragraphs with padding */}
        <div className="md:w-1/2 flex flex-col justify-center py-14 md:py-20 px-6 md:px-12 lg:px-16 order-2 md:order-2">
          <h2 className="text-[#1c3249] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-snug tracking-tight">
            <span className="block">Our <em className="italic">Value</em> Promise</span>
          </h2>
          <div className="mt-20 md:mt-32 lg:mt-40 xl:mt-48 space-y-5 text-[#1c3249] text-sm md:text-base leading-relaxed max-w-xl">
            <p>
              Quantum Tech Hub empowers global enterprises to unlock strategic
              growth through tailored advisory and execution. From high-impact
              planning to scalable delivery, we drive transformation, boost
              performance, and guide organizations through fundraising, M&A,
              and IPO readiness.
            </p>
            <p>
              With deep cross-industry experience and partnerships with leaders
              like Vodafone, McKinsey, Nokia, Samsung, ABB, and Telstra, our
              team delivers bespoke solutions that address complex challenges
              and create measurable, sustainable outcomes.
            </p>
            <p>
              Rooted in innovation, inclusion, and future readiness, we fuse
              cutting-edge technologies with strategic insight to help businesses
              thrive in dynamic markets.
            </p>
            <p>
              Whether you're navigating disruption, optimizing operations, or
              launching bold initiatives — Quantum Tech Hub is your partner in
              progress.
            </p>
          </div>
        </div>
      </section>


      {/* ── How We Collaborate ── */}
      <section className="min-h-screen flex flex-col py-14 md:py-20 px-6 md:px-12 lg:px-20" style={{ backgroundColor: "#f7f7f7" }}>
        <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-start">
          {/* Left: half width — title (same style as Who We Are) */}
          <div className="md:col-span-1">
            <h2 className="text-[#1c3249] text-4xl md:text-5xl lg:text-6xl font-bold leading-snug tracking-tight">
              <span className="block">How <em className="italic">we</em> collaborate?</span>
            </h2>
          </div>
          {/* Right: half width — body paragraphs */}
          <div className="md:col-span-1 max-w-xl md:max-w-none md:pt-40 lg:pt-52 xl:pt-64 space-y-5 text-[#1c3249] text-sm md:text-base leading-relaxed">
            <p>
              <span className="font-semibold text-[#1c3249]">Quantum Tech Hub</span>{" "}
              is a global collective of industry leaders, technologists, and
              commercial strategists, mobilizing tailored expertise at the scale
              and speed your business demands. Our model is built on rigorous
              governance and ethical practice—ensuring trust, accountability, and
              long-term value.
            </p>
            <p>
              We embed ESG principles into every strategy, driving responsible
              growth, operational resilience, and stakeholder impact. Beyond
              execution, we strengthen internal capabilities to ensure success
              is sustained.
            </p>
            <p>
              Across industries and growth-stage enterprises, we accelerate
              transformation—from ecosystem expansion and global scalability to
              technology adoption and performance uplift.
            </p>
            <p>
              Our consulting-led investment model redefines private equity.
              Partnering with leadership teams, we deliver contrarian strategies
              that challenge convention and unlock enduring growth. Capital
              deployment ranges from $10M to $500M.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}