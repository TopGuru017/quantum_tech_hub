import React from "react";
import { WHAT_WE_DO_IMAGE } from "../assets/images";

export function WhatWeDoPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── 1. First section: title + paragraphs (Digital Fusion style), bg #667f7d ── */}
      <section
        className="pt-20 md:pt-28 pb-14 md:pb-20"
        style={{ backgroundColor: "#f2f5e4" }}
      >
        <div className="pr-3 md:pr-6 lg:pr-10">
          <div className="grid grid-cols-[55%_45%] gap-6 md:gap-10 items-start w-full">
            <div className="pt-10 md:pt-16 pl-6 md:pl-10 lg:pl-14">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-[#000000] leading-[1.1] tracking-tight">
                Helping organisations evolve, accelerate and outperform
              </h1>
            </div>
            <div className="mt-40 md:mt-52 lg:mt-64 xl:mt-80 space-y-4 text-[#000000] text-sm md:text-base leading-relaxed mr-10 md:mr-16 lg:mr-24 xl:mr-32">
              <p>
                Quantum Tech Hub helps organisations build and run high-performance digital businesses – from rethinking strategy to implementing secure, scalable technology and operating models that deliver measurable outcomes.
              </p>
              <p>
                We combine board-level advisory with execution depth across cloud, data, cyber, AI, and global delivery so transformation is not just designed, but delivered and sustained.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Value Streams — background image only, content on right ── */}
      <section
        className="min-h-screen flex flex-col py-16 md:py-24 px-6 md:px-12 lg:px-20 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${WHAT_WE_DO_IMAGE})` }}
      >
        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-start">
          <div className="md:col-span-1" />
          <div className="md:col-span-1 w-full mt-4 md:mt-6 lg:mt-8 ml-16 md:ml-28 lg:ml-40 xl:ml-48">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-black leading-[1.15] tracking-tight mb-36 md:mb-44 lg:mb-52 xl:mb-60">
              Value Streams
            </h2>
            <div className="mt-20 md:mt-24 lg:mt-32 xl:mt-40">
              <p className="text-black/90 text-sm md:text-base leading-relaxed mb-6">
                We organise our work around value streams – end-to-end flows that connect strategy, technology, and operations to outcomes.
              </p>
              <ul className="list-disc pl-5 space-y-3 text-black/90 text-sm md:text-base leading-relaxed">
                <li>
                  <strong className="text-black">Growth value streams:</strong> New digital products, platforms, and services that open revenue and margin opportunities.
                </li>
                <li>
                  <strong className="text-black">Efficiency value streams:</strong> Automation, AI, and process redesign that lower cost-to-serve and improve reliability.
                </li>
                <li>
                  <strong className="text-black">Resilience value streams:</strong> Cybersecurity, data integrity, and cloud foundations that protect and stabilise critical operations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
