import React, { useState } from "react";
import { FUSION_BANNER } from "../assets/images";

// ── service card data ────────────────────────────────────────────────────────
const services = [
  {
    title: "Strategic Advisory",
    description:
      "We assess your digital maturity, define a technology roadmap aligned with your business goals, and guide vendor and platform selection. Our advisory practice helps you make the right strategic choices before committing to transformation.",
    items: [
      "Digital Maturity Assessment",
      "Technology Roadmap aligned with business goals",
      "Vendor & Platform selection",
    ],
  },
  {
    title: "Cloud & Infrastructure Modernization",
    description:
      "We design cloud-native architectures and execute migration strategies that are secure and interoperable. From DevOps integration to data security, we modernize your infrastructure to be resilient, scalable, and future-ready.",
    items: [
      "Cloud-native architecture design",
      "Migration Strategy & Execution",
      "Secure Data & Interoperability",
      "DevOps & Security Integration",
    ],
  },
  {
    title: "AI & Generative AI Enablement",
    description:
      "We identify high-value AI use cases, model ROI, and integrate large language models with responsible AI frameworks. Our teams help you move from experimentation to enterprise-grade AI deployment with speed and confidence.",
    items: [
      "Use Case Identification & ROI Modelling",
      "LLM Integration & Prompt Engineering",
      "Responsible AI Framework",
    ],
  },
  {
    title: "Cyber Security Services",
    description:
      "We provide end-to-end cyber security engineering, vulnerability assessment, and penetration testing. From secure cloud migration to compliance management, data privacy, and security audits, we protect your enterprise at every layer.",
    items: [
      "Cyber Security Engineering",
      "Vulnerability Assessment & Penetration Testing (VAPT)",
      "Secure Cloud Migration",
      "Compliance Management",
      "Security Audits & Assessment",
      "Data Privacy & Assessment",
    ],
  },
];

// ── page ─────────────────────────────────────────────────────────────────────
export function DigitalFusionPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="bg-white min-h-screen">

      {/* ── 1. First section: title + paragraph + image, bg #667f7d, no left padding ── */}
      <section
        className="pt-20 md:pt-28 pb-0"
        style={{ backgroundColor: "#667f7d" }}
      >
        {/* Left/right columns — no left padding, same as image */}
        <div className="pr-3 md:pr-6 lg:pr-10 pb-10 md:pb-14">
          <div className="grid grid-cols-[55%_45%] gap-6 md:gap-10 items-start w-full">
            <div className="pt-10 md:pt-16 pl-6 md:pl-10 lg:pl-14">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-[#fdfbe8] leading-[1.1] tracking-tight whitespace-nowrap">
                <span className="block">Boosting Innovation,</span>
                <span className="block">Enabling Scale</span>
              </h1>
            </div>
            <div className="mt-40 md:mt-52 lg:mt-64 xl:mt-80 space-y-4 text-[#fdfbe8] text-sm md:text-base leading-relaxed mr-10 md:mr-16 lg:mr-24 xl:mr-32">

              <p>
              Phygital Convergence is how physical and digital worlds are brought together into one coherent change journey – strategy, design, data, and technology moving as a single system.
              </p>
              <ol className="list-decimal list-outside pl-6 md:pl-7 space-y-3 text-[#fdfbe8] marker:font-semibold marker:text-[#fdfbe8]">
                <li className="pl-1">Design experiences, processes, and platforms as a single phygital stack, so inperson, field, and on-screen interactions feel seamless to customers and employees.</li>
                <li className="pl-1">Stand up cross-functional teams that bring business, technology, and operations together to re-engineer end-to-end journeys, not just individual channels.</li>
                <li className="pl-1">Build roadmaps that align phygital initiatives with funding, governance, and capability building, so bold pilots scale into durable, enterprise wide ways of working.</li>
              </ol>
            </div>
          </div>
        </div>
        {/* Image: starts from absolute screen left, 85% width, no padding */}
        <div className="w-[85%]">
          <img
            src={FUSION_BANNER}
            alt="Digital Fusion"
            className="w-full h-auto object-cover object-center"
          />
        </div>
      </section>

      {/* ── 2. How We Implement — same style as industry "How we help" ── */}
      <section className="min-h-screen flex flex-col py-16 md:py-24 px-6 md:px-12 lg:px-20" style={{ backgroundColor: "#fdfbe8" }}>
        <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-start">
          <div className="md:col-span-1 flex flex-col justify-center -ml-6 md:-ml-12 lg:-ml-20">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-black leading-[1.15] tracking-tight">
              How We Implement
            </h2>
          </div>
          <div className="md:col-span-1 w-full mt-24 md:mt-32 lg:mt-40 xl:mt-48 border-t border-black/30">
            {services.map((svc, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={svc.title} className="border-b border-black/30">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full py-5 md:py-6 flex items-center justify-between gap-4 text-left transition-opacity duration-300 hover:opacity-80"
                  >
                    <span className="text-black font-semibold text-base md:text-lg">
                      {svc.title}
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
                        {svc.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
