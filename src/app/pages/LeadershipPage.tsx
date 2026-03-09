import React, { useState, useRef, useEffect } from "react";
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
    name: "Bikramjit Paul Choudhury",
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

const GAP = 24;

export function LeadershipPage() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [cardWidth, setCardWidth] = useState(320);
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = leaders.length;
  const maxCurrent = Math.max(0, total - visibleCount);

  useEffect(() => {
    const updateLayout = () => {
      const w = containerRef.current?.offsetWidth ?? 900;
      if (w < 640) {
        setVisibleCount(1);
        setCardWidth(w);
      } else if (w < 960) {
        setVisibleCount(2);
        setCardWidth((w - GAP) / 2);
      } else {
        setVisibleCount(3);
        setCardWidth((w - 2 * GAP) / 3);
      }
    };
    updateLayout();
    const ro = new ResizeObserver(updateLayout);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const idx = Math.min(current, maxCurrent);
    const offset = idx * (cardWidth + GAP);
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${offset}px)`;
    }
  }, [current, maxCurrent, cardWidth]);

  const goPrev = () => setCurrent((p) => Math.max(0, p - 1));
  const goNext = () => setCurrent((p) => Math.min(maxCurrent, p + 1));

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

      {/* ── Second section: sliding carousel (3 per row, responsive full width) ── */}
      <section className="bg-[#fdfbe8] py-16 md:py-24 px-4 md:px-6 lg:px-8 flex flex-col items-center">
        <div ref={containerRef} className="w-full max-w-7xl flex flex-col items-center">
          <div className="overflow-hidden w-full">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-out"
              style={{
                width: total * cardWidth + (total - 1) * GAP,
                gap: GAP,
              }}
            >
              {leaders.map((leader, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-black/5"
                  style={{ width: cardWidth }}
                >
                <div className="aspect-square w-full overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={leader.img}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6 md:p-8">
                  <p className="text-black/50 text-xs uppercase tracking-widest mb-1">
                    {leader.role}
                  </p>
                  <h3 className="font-serif text-xl md:text-2xl font-normal text-black leading-tight mb-2">
                    {leader.name}
                  </h3>
                  {(() => {
                    const l = leader as { phone?: string; email?: string };
                    if (!l.phone && !l.email) return null;
                    return (
                      <div className="space-y-0.5 mb-3 text-[10px] md:text-xs text-black/70">
                        {l.phone && <p>{l.phone}</p>}
                        {l.email && (
                          <a href={`mailto:${l.email}`} className="text-black/70 hover:text-black hover:underline break-all">
                            {l.email}
                          </a>
                        )}
                      </div>
                    );
                  })()}
                  <div className="space-y-2 text-black/80 text-[10px] md:text-xs leading-relaxed max-w-none">
                    {leader.bio.map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>

          {/* Arrow navigation */}
          <div className="flex items-center gap-4 mt-10 md:mt-14">
            <button
              onClick={goPrev}
              disabled={current === 0}
              className="w-12 h-12 rounded-full border border-black/30 flex items-center justify-center text-black hover:bg-black hover:text-[#fdfbe8] transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Previous"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M11 3L5 9L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={goNext}
              disabled={current >= maxCurrent}
              className="w-12 h-12 rounded-full border border-black/30 flex items-center justify-center text-black hover:bg-black hover:text-[#fdfbe8] transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Next"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7 3L13 9L7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <span className="text-black/40 text-sm font-mono ml-2">
              {current + 1}–{Math.min(current + visibleCount, total)} of {total}
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
