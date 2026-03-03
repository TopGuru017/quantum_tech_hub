import { useState } from "react";
import { Link } from "react-router";
import {
  INDUSTRY_TELECOM,
  INDUSTRY_ENERGY,
  INDUSTRY_SOFTWARE,
  INDUSTRY_SMART_MANUFACTURING,
  INDUSTRY_HEALTHCARE,
} from "../assets/images";

const industries = [
  {
    title: "Telecom & Media",
    to: "/industry/telecom",
    image: INDUSTRY_TELECOM,
    summary:
      "Support telecom and media operators in building future ready networks, platforms, and customer experiences on a secure, automated and data driven foundation.",
  },
  {
    title: "Energy & Utilities",
    to: "/industry/energy",
    image: INDUSTRY_ENERGY,
    summary:
      "The shift to clean energy and resilient grids demands new operating models, smarter assets, and strong ESG alignment. Quantum Tech Hub works with utilities and energy companies to accelerate the transition, optimize portfolios, and deploy digital and analytics at scale. From grid modernization to decarbonization roadmaps, we help you balance reliability, affordability, and sustainability while creating long-term value.",
  },
  {
    title: "Software & Technology",
    to: "/industry/software",
    image: INDUSTRY_SOFTWARE,
    summary:
      "Software and technology firms must turn products and platforms into durable growth engines across global markets. Quantum Tech Hub supports strategy, go-to-market design, and operational scaling so you can capture opportunity and defend position. We bring cross-industry insight and execution discipline to help you innovate faster, enter new segments, and drive measurable impact.",
  },
  {
    title: "Smart Manufacturing",
    to: "/industry/manufacturing",
    image: INDUSTRY_SMART_MANUFACTURING,
    summary:
      "Industry 4.0 is reshaping manufacturing through connected factories, intelligent supply chains, and human-centered automation. Quantum Tech Hub helps industrial leaders unlock value from data, IoT, and AI while keeping people and safety at the center. We support end-to-end transformation—from shop floor to supply network—so you gain flexibility, quality, and resilience.",
  },
  {
    title: "Healthcare",
    to: "/industry/healthcare",
    image: INDUSTRY_HEALTHCARE,
    summary:
      "Healthcare systems and life sciences companies must reimagine care delivery, digital health, and operations to improve outcomes and efficiency. Quantum Tech Hub partners with payers, providers, and innovators to design strategies that balance clinical quality, access, and sustainability. We help you adopt technology, streamline processes, and scale what works so patients and organizations thrive.",
  },
];

export function IndustryAuthorityPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + industries.length) % industries.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % industries.length);
  };

  return (
    <div className="bg-black min-h-screen">

      {/* ── Intro (same style as How we collaborate) ── */}
      <section className="min-h-screen flex flex-col py-14 md:py-20 px-6 md:px-12 lg:px-20" style={{ backgroundColor: "#30373b" }}>
        <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-start">
          {/* Left: half width — large serif title */}
          <div className="md:col-span-1">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-[#fdfbe8] leading-[1.1] tracking-tight">
              <span className="block">Industry <em className="font-serif italic">Authority</em></span>
            </h2>
          </div>
          {/* Right: half width — body paragraphs */}
          <div className="md:col-span-1 max-w-xl md:max-w-none md:pt-40 lg:pt-52 xl:pt-64 space-y-5 text-[#fdfbe8] text-sm md:text-base leading-relaxed">

            <p>
            Industry Authority at Quantum Tech Hub means combining sector deep practitioners with patterns that have already worked in telecom, utilities, healthcare, manufacturing, and technology. 
            </p>
            <p>
            Our teams bring benchmark data, regulatory context, and hands on delivery experience to each engagement, so recommendations are grounded in how your industry really competes, operates, and transforms.
            </p>
            <p>
            This lets us move quickly from insight to design to implementation, de-risking decisions while still pushing for differentiated, future-ready positions in your market.
            </p>
          </div>
        </div>
      </section>

      {/* ── Industry case carousel (2 cards: left + right, move one by one) ── */}
      <section className="relative min-h-screen flex flex-col justify-center py-16 px-4 md:px-6" style={{ backgroundColor: "#fdfbe8" }}>
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 min-h-[80vh] items-center">
            {/* Left card */}
            {(() => {
              const left = industries[activeIndex];
              return (
                <div key={`left-${activeIndex}`} className="flex flex-col md:flex-row gap-4 md:gap-6 overflow-hidden items-stretch">
                  <div className="md:w-1/2 flex flex-col h-[80vh] min-h-[200px]">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#1c3249]/70 font-serif mb-8 shrink-0">
                      Case
                    </p>
                    <h3 className="text-xl md:text-2xl font-semibold text-[#1c3249] font-serif mb-16 shrink-0">
                      {left.title}
                    </h3>
                    <div className="flex-1 min-h-0 flex flex-col justify-end">
                      <p className="text-sm text-[#1c3249] leading-relaxed">
                        {left.summary}
                      </p>
                      <Link
                        to={left.to}
                        className="inline-flex items-center gap-2 text-sm font-semibold mt-6 text-[#1c3249] hover:underline"
                      >
                        Explore
                        <span aria-hidden>→</span>
                      </Link>
                    </div>
                  </div>
                  <div className="md:w-1/2 h-[80vh] min-h-[200px] rounded overflow-hidden bg-gray-200 flex-shrink-0">
                    <img
                      src={left.image}
                      alt={left.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              );
            })()}

            {/* Right card */}
            {(() => {
              const rightIndex = (activeIndex + 1) % industries.length;
              const right = industries[rightIndex];
              return (
                <div key={`right-${rightIndex}`} className="flex flex-col md:flex-row gap-4 md:gap-6 rounded-lg overflow-hidden items-stretch">
                  <div className="md:w-1/2 flex flex-col h-[80vh] min-h-[200px]">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#1c3249]/70 font-serif mb-8 shrink-0">
                      Case
                    </p>
                    <h3 className="text-xl md:text-2xl font-semibold text-[#1c3249] font-serif mb-16 shrink-0">
                      {right.title}
                    </h3>
                    <div className="flex-1 min-h-0 flex flex-col justify-end">
                      <p className="text-sm text-[#1c3249] leading-relaxed">
                        {right.summary}
                      </p>
                      <Link
                        to={right.to}
                        className="inline-flex items-center gap-2 text-sm font-semibold mt-6 text-[#1c3249] hover:underline"
                      >
                        Explore
                        <span aria-hidden>→</span>
                      </Link>
                    </div>
                  </div>
                  <div className="md:w-1/2 h-[80vh] min-h-[200px] rounded overflow-hidden bg-gray-200 flex-shrink-0">
                    <img
                      src={right.image}
                      alt={right.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Arrows: middle of content (vertically centered, left and right) */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 inline-flex h-12 w-12 items-center justify-center bg-[#1c3249] text-[#fdfbe8] hover:bg-[#2a4563] transition-colors shadow-md text-2xl md:text-3xl"
            aria-label="Previous"
          >
            ←
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-10 inline-flex h-12 w-12 items-center justify-center bg-[#1c3249] text-[#fdfbe8] hover:bg-[#2a4563] transition-colors shadow-md text-2xl md:text-3xl"
            aria-label="Next"
          >
            →
          </button>
        </div>
      </section>
    </div>
  );
}
