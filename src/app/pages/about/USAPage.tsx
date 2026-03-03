import React from "react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { PHOENIX, LEADER_KURT } from "../../assets/images";

export function USAPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-start px-6 md:px-10 lg:px-16 py-24 md:py-28"
      style={{ backgroundColor: "#ecc9c9" }}
    >
      {/* First div: heading — Industry Authority style */}
      <div className="w-full max-w-6xl mt-12 md:mt-16 mb-16 md:mb-20 px-6 md:px-10 lg:px-16">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-[#1c3249] leading-[1.1] tracking-tight">
          Welcome to <em className="font-serif italic">Phoenix</em>
        </h1>
      </div>

      {/* Second + Third: side by side — image left (70%), portrait+content right */}
      <div className="w-full flex flex-row items-start gap-0 -ml-6 md:-ml-10 lg:-ml-16">
        {/* Second div: image — left of screen, 60% width */}
        <div className="w-[60vw] shrink-0">
          <ImageWithFallback
            src={PHOENIX}
            alt="Quantum Tech Hub in USA"
            className="w-full h-full min-h-[300px] object-cover"
          />
        </div>

        {/* Third div: portrait on top, content below */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 items-start pl-6 md:pl-10 lg:pl-16 pr-0 pt-0 pb-8 md:pb-12 min-w-0">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden bg-white/60 shadow-md flex-shrink-0">
            <ImageWithFallback
              src={LEADER_KURT}
              alt="Kurt Simmons"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-3 text-[#1c3249] text-sm md:text-base leading-relaxed w-full max-w-none">
            <div>
              <p className="font-semibold text-base md:text-lg">Kurt Simmons</p>
              <p className="text-xs md:text-sm text-[#1c3249]/80">+1 (480) 544-3613</p>
            </div>
            <p className="text-xs md:text-sm font-medium uppercase tracking-wide text-[#1c3249]/80">
              Focus Areas – Telecom, Technology, Healthcare, Business Models, Operations
            </p>
            <p>
              Kurt advises boards and executives on growth, modernisation, and operating models in
              complex, regulated environments.
            </p>
            <p>
              He works at the intersection of network modernisation, digital health, and platform
              plays, helping clients design resilient business models and high-performance
              operations in North America.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

