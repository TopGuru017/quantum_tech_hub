import React, { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { LEADERSHIP_HERO, LEADER_SANJAY, LEADER_ALOKNATH, LEADER_PIYUSH, LEADER_BIKRAMJIT, LEADER_KURT, LEADER_MIKKO, LEADER_VASTA } from "../assets/images";

const leaders = [
  {
    img: LEADER_SANJAY,
    role: "Managing Partner, Australia",
    name: "Sanjay Krishnaa",
    bio: [
      "Sanjay is a global strategic business & technology leader with over 20 years experience in consulting, advising & successfully building & running scale businesses in diverse industries.",
      "He demonstrated repeated success in leading design, development & implementation of corporate strategy, business transformation, leading inorganic growth, driving market-making impact & sustainable successful business outcome.",
    ],
  },
  {
    img: LEADER_ALOKNATH,
    role: "Senior Partner, India",
    name: "Dr. Aloknath De",
    bio: [
      "Dr. De is a distinguished leader with over 30 years of extensive in technology and engineering space. He has been driving Cyber-Physical Systems (CPS) design that imbibes core tech: AI, Trusted Tech, IoT, Cobotics and 6G (ATIC6).",
      "Dr. De has been recognized in Top 50 Global CTOs. He received Graham Bell Prize (Canada), IETE Memorial Awards, IEEE MGA Innovation Award, IDC Insights Award, Vanguard Intrapreneurship Award, Nasscom AI Game-Changer Award; and also IESA for 'Innovative Product', Zinnov 'Intrapreneur of the Year', Assocham 'Tech Leader of the Year' and TechCircle for 'Business Transformation' among others.",
    ],
  },
  {
    img: LEADER_PIYUSH,
    role: "Senior Partner, India",
    name: "Piyush Tandon",
    bio: [
      "Piyush is an accomplished business leader and a visionary strategist with over 3 decades of global experience in spearheading Strategy, Business Innovation, Product Management and Digital Transformation initiatives of leading Product Engineering and Technology Services companies across APAC, EMEA & North America.",
      "Piyush brings extensive cross industry knowledge & experience of working with customers from 25+ countries across Communications, Utilities, Transportation, Automobile, FMCG & Healthcare industry segments.",
    ],
  },
  {
    img: LEADER_BIKRAMJIT,
    role: "Senior Partner, Europe",
    name: "Bikramjit Paul Chaudhary",
    bio: [
      "Bikram is a global strategic business & technology leader with over 20 years experience in consulting, advising & successfully building & running scale businesses in diverse industries.",
      "He demonstrated repeated success in leading design, development & implementation of corporate strategy, business transformation, leading inorganic growth, driving market-making impact & sustainable successful business outcome.",
    ],
  },
  {
    img: LEADER_KURT,
    role: "Senior Partner, USA & Canada",
    name: "Kurt Simmons",
    bio: [
      "Kurt brings more than two decades of global experience leading enterprise sales, partner ecosystems, and large‑scale technology transformation. He has held senior and executive leadership roles across major global technology and engineering organisations, including Ericsson, Xerox, Cyient, and United Technologies—experience that deeply strengthens our advisory capability.",
      "His ability to drive growth, shape complex programs, and turn digital, AI, cloud, and data strategies into measurable outcomes makes him a powerful addition to our leadership team.",
    ],
  },
  {
    img: LEADER_MIKKO,
    role: "Senior Partner, Europe",
    name: "Mikko Mattheiszen",
    bio: [
      "Mikko is a dynamic and strategic operations and commercial leader with over 25 years of experience driving transformation, pricing strategy, and business performance at a global scale within telecommunications and electrical engineering corporations like Nokia, Siemens, ABB and Alcatel.",
      "He has consistently led complex organizational change initiatives, cross-functional virtual teams, and commercial excellence programs at Nokia. Mikko is known for shaping high-impact strategies, aligning business operations, and driving measurable value in highly competitive technology sectors.",
    ],
  },
  {
    img: LEADER_VASTA,
    role: "Senior Partner, Middle East",
    name: "Vatsa Kalyanasundaram",
    bio: [
      "Vatsa is a strategic leader with over 25 years of experience in telecommunications and digital transformation. He has held senior and executive leadership roles across major global technology and engineering organisations, including Ericsson, Xerox, Cyient, and United Technologies—experience that deeply strengthens our advisory capability.",
      "His ability to drive growth, shape complex programs, and turn digital, AI, cloud, and data strategies into measurable outcomes makes him a powerful addition to our leadership team.",
    ],
  },
];

export function LeadershipPage() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [animating, setAnimating] = useState(false);

  const total = leaders.length;

  function navigate(dir: "left" | "right") {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) =>
        dir === "right" ? (prev + 1) % total : (prev - 1 + total) % total
      );
      setAnimating(false);
    }, 350);
  }

  const leader = leaders[current];
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="bg-black min-h-screen">

      {/* ── First section: hero ── */}
      <section className="relative min-h-screen py-16 pl-4 pr-6 md:pl-6 md:pr-12 lg:pl-8 lg:pr-20 overflow-hidden">
        <ImageWithFallback
          src={LEADERSHIP_HERO}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col justify-center min-h-screen">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 -mt-28 md:-mt-44 lg:-mt-52">
            <div className="md:col-span-1 flex flex-col justify-center max-w-xl">
              <h2 className="text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-16 md:mb-24 lg:mb-28 text-left">
                Our Leadership Team
              </h2>
              <div className="space-y-5 text-gray-200 text-sm md:text-base leading-relaxed text-left">
                <p className="text-white">
                  Our experience operating at the highest levels of global
                  business gives Quantum Tech Hub a rare advantage: the ability to
                  fuse premier consulting discipline with deep, sector-specific
                  insight.
                </p>
              </div>
            </div>
            <div className="md:col-span-1" />
          </div>
        </div>
      </section>

      {/* ── Second section: carousel ── */}
      <section className="bg-[#fdfbe8] min-h-screen flex flex-col">
        <div className="flex-1 grid md:grid-cols-2 min-h-screen">

          {/* Left: photo */}
          <div className="relative overflow-hidden bg-gray-200 min-h-[50vh] md:min-h-screen">
            <div
              className="absolute inset-0 transition-opacity duration-350 ease-in-out"
              style={{ opacity: animating ? 0 : 1 }}
            >
              <ImageWithFallback
                src={leader.img}
                alt={leader.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Right: info + navigation */}
          <div className="flex flex-col justify-between py-14 md:py-20 px-8 md:px-12 lg:px-16">

            {/* Counter */}
            <div className="text-black/40 text-sm font-mono tracking-widest mb-8">
              {pad(current + 1)} / {pad(total)}
            </div>

            {/* Leader info */}
            <div
              className="flex-1 flex flex-col justify-center transition-opacity duration-350 ease-in-out"
              style={{ opacity: animating ? 0 : 1 }}
            >
              <p className="text-black/50 text-sm uppercase tracking-widest mb-3">
                {leader.role}
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-black leading-[1.1] tracking-tight mb-8 md:mb-10">
                {leader.name}
              </h2>
              <div className="space-y-4 text-black/80 leading-relaxed max-w-lg">
                {leader.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Arrow navigation */}
            <div className="flex items-center gap-4 mt-10 md:mt-14">
              <button
                onClick={() => navigate("left")}
                disabled={animating}
                className="w-12 h-12 rounded-full border border-black/30 flex items-center justify-center text-black hover:bg-black hover:text-[#fdfbe8] transition-colors duration-300 disabled:opacity-40"
                aria-label="Previous"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M11 3L5 9L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={() => navigate("right")}
                disabled={animating}
                className="w-12 h-12 rounded-full border border-black/30 flex items-center justify-center text-black hover:bg-black hover:text-[#fdfbe8] transition-colors duration-300 disabled:opacity-40"
                aria-label="Next"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M7 3L13 9L7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Dot indicators */}
              <div className="flex items-center gap-2 ml-4">
                {leaders.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { if (!animating) { setDirection(i > current ? "right" : "left"); setAnimating(true); setTimeout(() => { setCurrent(i); setAnimating(false); }, 350); } }}
                    className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2 bg-black" : "w-2 h-2 bg-black/25 hover:bg-black/50"}`}
                    aria-label={`Go to ${leaders[i].name}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
