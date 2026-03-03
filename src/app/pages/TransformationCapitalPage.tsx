import React, { useState } from "react";
import { CAPITAL_IMAGE } from "../assets/images";

// ── Accordion items: each has title, intro paragraph, and bullets ─────────────
type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

const accordionItems: AccordionItem[] = [
  {
    title: "Business Transformation",
    content: (
      <>
        <p className="font-normal text-black/95 mb-3">
          We orchestrate complex business transformations – from vision to value realisation.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-black/90">
          <li>Transformation narratives, ambition, and portfolio design.</li>
          <li>PMO / Transformation Office, funding, and benefits tracking.</li>
          <li>Change leadership, capability build, and adoption at scale.</li>
        </ul>
      </>
    ),
  },
  {
    title: "GTM",
    content: (
      <>
        <p className="font-normal text-black/95 mb-3">
          We build go-to-market systems that connect product, marketing, sales, and service.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-black/90">
          <li>Segment and value-proposition design by industry and buyer persona.</li>
          <li>Commercial models, channel design, and partner ecosystems.</li>
          <li>Revenue operations (RevOps), analytics, and digital selling capabilities.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Transformation Strategy",
    content: (
      <>
        <p className="font-normal text-black/95 mb-3">
          We define the where-to-play and how-to-win choices that anchor your transformation.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-black/90">
          <li>Corporate and business unit strategy with clear, testable hypotheses.</li>
          <li>Portfolio and investment theses for digital, AI, and infrastructure.</li>
          <li>Scenario planning, competitive intelligence, and board-ready strategic cases.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Sustainability",
    content: (
      <>
        <p className="font-normal text-black/95 mb-3">
          We integrate sustainability into strategy, operations, and technology – not as a side programme, but as a performance lens.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-black/90">
          <li>Decarbonisation roadmaps for energy, utilities, manufacturing, and telecom.</li>
          <li>Data, reporting, and regulatory alignment (including ESG and climate disclosures).</li>
          <li>Sustainable design of networks, data centres, and cloud architectures.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Mergers & Acquisitions",
    content: (
      <>
        <p className="font-normal text-black/95 mb-3">
          We align M&A with strategic intent and post-deal value creation.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-black/90">
          <li>M&A strategy, target screening, and commercial / technology due diligence.</li>
          <li>Synergy and value creation planning with clear operational roadmaps.</li>
          <li>Integration designs for technology, people, operations, and culture.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Integration",
    content: (
      <>
        <p className="font-normal text-black/95 mb-3">
          We manage integrations so that value is realised quickly and safely.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-black/90">
          <li>Integration blueprints and Day-1 / Day-100 plans.</li>
          <li>Operating model, systems, and data integration across entities.</li>
          <li>Risk, change, and stakeholder management to protect customers and talent.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Capital Raising",
    content: (
      <>
        <p className="font-normal text-black/95 mb-3">
          We help technology-driven businesses tell a clear story to the capital markets.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-black/90">
          <li>Equity and debt narratives linked to strategy and operating performance.</li>
          <li>Investor materials, data rooms, and diligence support.</li>
          <li>Operational value-up plans that support higher valuations and better terms.</li>
        </ul>
      </>
    ),
  },
];

// ── page ─────────────────────────────────────────────────────────────────────
export function TransformationCapitalPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-white min-h-screen">

      {/* ── 1. First section: title only, background image ── */}
      <section
        className="pt-16 md:pt-20 pb-14 md:pb-20 relative bg-cover bg-center min-h-screen flex flex-col justify-start"
        style={{ backgroundImage: `url(${CAPITAL_IMAGE})` }}
      >
        <div className="relative z-10 pl-6 md:pl-10 lg:pl-14 pr-6 md:pr-12 lg:pr-20">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-[#000000] leading-[1.1] tracking-tight">
            <span className="block">Transformation</span>
            <em className="font-serif italic block">Capital</em>
          </h1>
        </div>
      </section>

      {/* ── 2. Accordion section — cream background, same style as Digital Fusion ── */}
      <section
        className="min-h-screen flex flex-col py-16 md:py-24 px-6 md:px-12 lg:px-20"
        style={{ backgroundColor: "#fdfbe8" }}
      >
        <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-start">
          <div className="md:col-span-1 flex flex-col justify-center -ml-6 md:-ml-12 lg:-ml-20 space-y-4 text-black/90 text-sm md:text-base leading-relaxed font-semibold">
            <p>
              We connect strategic transformation with capital allocation and funding.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-black/90">
              <li>Investment cases for digital platforms, AI, cloud, and GCCs.</li>
              <li>Value modelling, risk assessment, and funding strategies.</li>
              <li>Support for board, investor, and lender communication.</li>
            </ul>
          </div>
          <div className="md:col-span-1 w-full mt-24 md:mt-32 lg:mt-40 xl:mt-48 border-t border-black/30">
            {accordionItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.title} className="border-b border-black/30">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full py-5 md:py-6 flex items-center justify-between gap-4 text-left transition-opacity duration-300 hover:opacity-80"
                  >
                    <span className="text-black font-normal text-base md:text-lg">
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
                        {item.content}
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
