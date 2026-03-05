import { useEffect, useRef, useState, type ReactNode } from "react";
import { GLOBAL_VALUE_VIDEO } from "../assets/images";

// ── count-up stat (animates from 0 to target when in view) ─────────────────────
function CountUpStat({
  target,
  suffix = "",
  label,
  decimals = 0,
  duration = 1800,
  start,
}: {
  target: number;
  suffix?: string;
  label: string;
  decimals?: number;
  duration?: number;
  start: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const [done, setDone] = useState(false);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 2;
      const current = target * eased;
      setDisplay(current);
      if (progress >= 1) setDone(true);
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, start]);

  const formatted =
    decimals > 0 ? display.toFixed(decimals) : Math.round(display).toLocaleString();
  const showSuffix = suffix === "+" ? done : true;
  return (
    <div className="flex flex-col gap-1 pb-6 border-b border-gray-300">
      <div className="flex items-baseline gap-2">
        <span className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#30373b]">
          {formatted}
          {showSuffix ? suffix : ""}
        </span>
      </div>
      <p className="text-[#30373b] text-sm md:text-base">{label}</p>
    </div>
  );
}

// ── accordion items for "How We Implement" section ────────────────────────────
type AccordionItem = {
  title: string;
  description: string;
  descriptionNode?: ReactNode;
};
const gccAccordionItems: AccordionItem[] = [
  {
    title: "From strategy to operating model",
    description: "",
    descriptionNode: (
      <>
        <p className="font-semibold text-black/95 mb-3">
          Start by framing why the GCC exists and what it must be great at.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-black/90">
          <li>Clarify strategic intent: innovation hub, delivery engine, analytics and AI centre, or a blend.</li>
          <li>Define scope across product engineering, R&D, platform and cloud, cyber, data, operations and shared services.</li>
          <li>Shape the operating model: location strategy, captive vs BOT, talent mix, governance, and performance expectations.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Build advanced capability hubs",
    description: "",
    descriptionNode: (
      <>
        <p className="font-semibold text-black/95 mb-3">
          Turn strategy into a real, functioning organisation.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-black/90">
          <li>Design the GCC organisation structure, leadership roles, and capability build plan.</li>
          <li>Stand up centres across India and APAC with secure infrastructure, modern engineering toolchains, and compliant data environments.</li>
          <li>Set up cross-functional pods for product development, automation, AI, and 24x7 operations aligned to business outcomes.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Industrialise delivery and operations",
    description: "",
    descriptionNode: (
      <>
        <p className="font-semibold text-black/95 mb-3">
          Create a repeatable engine, not a one-off project.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-black/90">
          <li>Implement standard delivery frameworks, agile at scale, and automation-first processes.</li>
          <li>Embed data integrity, observability, and quality gates into pipelines and operations.</li>
          <li>Establish playbooks for onboarding, handovers, incident and change management so work flows seamlessly between onshore and GCC teams.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Build, Operate & Transfer (BOT)",
    description: "",
    descriptionNode: (
      <>
        <p className="font-semibold text-black/95 mb-3">
          De-risk the journey with an end-to-end BOT model.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-black/90">
          <li><strong>Build:</strong> design, recruit, and set up the GCC with the right culture, controls, and foundational capabilities.</li>
          <li><strong>Operate:</strong> run the centre to target SLAs, stabilise processes, and prove value in real programmes.</li>
          <li><strong>Transfer:</strong> hand over a mature, high-performing organisation – governance, people, IP, and playbooks – into your structure with minimal disruption.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Capability building at scale",
    description: "",
    descriptionNode: (
      <>
        <p className="font-semibold text-black/95 mb-3">
          Ensure the GCC keeps getting better, not just bigger.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-black/90">
          <li>Design competency frameworks for engineering, data, cyber, cloud, and operations.</li>
          <li>Run structured learning paths, coaching, and communities of practice to deepen expertise.</li>
          <li>Grow future leaders within the GCC to reduce reliance on external support over time.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Structural cost advantage with control",
    description: "",
    descriptionNode: (
      <>
        <p className="font-semibold text-black/95 mb-3">
          Combine scale and cost efficiency without compromising control.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-black/90">
          <li>Architect work allocation so high-value design and stakeholder engagement stay close to the business, while repeatable build and run activities leverage GCC scale.</li>
          <li>Use standardisation and automation to drive down unit cost year-on-year, not just wage arbitrage.</li>
          <li>Maintain strong governance, risk management, and security so the GCC operates as an integrated part of the enterprise, not a distant vendor.</li>
        </ul>
      </>
    ),
  },
];

// ── page ──────────────────────────────────────────────────────────────────────
export function GlobalValueEnginePage() {
  const factsRef = useRef<HTMLElement>(null);
  const [factsInView, setFactsInView] = useState(false);
  const [accordionOpenIndex, setAccordionOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const el = factsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setFactsInView(true),
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-white min-h-screen">

      {/* ── 1. First section (Industry Authority style) ── */}
      <section className="min-h-screen flex flex-col py-14 md:py-20 px-6 md:px-12 lg:px-20" style={{ backgroundColor: "#032508" }}>
        <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-start">
          {/* Left: large serif title */}
          <div className="md:col-span-1">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-[#fdfbe8] leading-[1.1] tracking-tight">
              <span className="block">Global Value</span>
              <em className="font-serif italic">Engine</em>
            </h1>
          </div>
          {/* Right: intro paragraphs */}
          <div className="md:col-span-1 max-w-xl md:max-w-none md:pt-40 lg:pt-52 xl:pt-64 space-y-5 text-[#fdfbe8] text-sm md:text-base leading-relaxed">
            <p>
            Design and build Global Capability Centres as true value engines – not just cheaper delivery arms.            </p>
            <p>
            Global Value Engine helps organisations stand up GCCs that concentrate advanced technology talent, industrialised ways of working, and secure infrastructure to drive innovation, operational excellence, scale, and structural cost advantage.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. Facts + Video (cream background) ── */}
      <section
        ref={factsRef}
        className="py-14 md:py-20 px-6 md:px-12 lg:px-20"
        style={{ backgroundColor: "#fdfbe8" }}
      >

        {/* Video section: flush left, 90% viewport width */}
        <div className="mt-16 md:mt-24 -ml-6 md:-ml-12 lg:-ml-20 overflow-hidden">
          <video
            src={GLOBAL_VALUE_VIDEO}
            autoPlay
            loop
            muted
            playsInline
            className="block object-cover object-center w-[90vw]"
          />
        </div>

      </section>

      {/* ── 4. How We Implement (Digital Fusion second section style) ── */}
      <section
        className="min-h-screen flex flex-col py-16 md:py-24 px-6 md:px-12 lg:px-20"
        style={{ backgroundColor: "#fdfbe8" }}
      >
        <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-start">
          <div className="md:col-span-1 flex flex-col justify-center -ml-6 md:-ml-12 lg:-ml-20">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-black leading-[1.15] tracking-tight">
            Outcomes
            </h2>
          </div>
          <div className="md:col-span-1 w-full mt-24 md:mt-32 lg:mt-40 xl:mt-48">
            <p className="text-black/90 text-sm md:text-base leading-relaxed mb-8 md:mb-10">
              Global Value Engine is about creating a long-term asset: GCCs that accelerate product and platform roadmaps, lift operational performance, and unlock meaningful cost advantage. The result is a global delivery model that can absorb more change, launch more ideas, and support more customers – without endlessly adding complexity or spend.
            </p>
            <div className="border-t border-black/30">
            {gccAccordionItems.map((item, index) => {
              const isOpen = accordionOpenIndex === index;
              return (
                <div key={item.title} className="border-b border-black/30">
                  <button
                    type="button"
                    onClick={() => setAccordionOpenIndex(isOpen ? null : index)}
                    className="w-full py-5 md:py-6 flex items-center justify-between gap-4 text-left transition-opacity duration-300 hover:opacity-80"
                  >
                    <span className="text-black font-semibold text-base md:text-lg">
                      {item.title}
                    </span>
                    <span
                      className={`text-black text-xl md:text-2xl font-light shrink-0 w-8 h-8 flex items-center justify-center transition-transform duration-500 ease-in-out ${isOpen ? "rotate-180" : ""}`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-500 ease-in-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden min-h-0">
                      <div
                        className={`pb-5 md:pb-6 pr-10 text-black/90 text-sm md:text-base leading-relaxed transition-opacity duration-500 ease-out ${isOpen ? "opacity-100" : "opacity-0"}`}
                      >
                        {item.descriptionNode !== undefined ? item.descriptionNode : item.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </section>

    </div>
  );
}
