import React from "react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { RIYADH, LEADER_VASTA } from "../../assets/images";

export function SaudiArabiaPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-start px-6 md:px-10 lg:px-16 py-24 md:py-28"
      style={{ backgroundColor: "#f7f5e9" }}
    >
      {/* First div: heading — Industry Authority style */}
      <div className="w-full max-w-6xl mt-24 md:mt-28 mb-16 md:mb-20 px-6 md:px-10 lg:px-16">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-[#1c3249] leading-[1.1] tracking-tight">
          Welcome to <em className="font-serif italic">Riyadh</em>
        </h1>
      </div>

      {/* Second + Third: side by side — image left (60%), portrait+content right */}
      <div className="w-full flex flex-col md:flex-row items-start gap-0 -ml-0 md:-ml-10 lg:-ml-16">
        {/* Second div: image — left of screen, 60% width */}
        <div className="w-full md:w-[60vw] shrink-0">
          <ImageWithFallback
            src={RIYADH}
            alt="Quantum Tech Hub in Saudi Arabia"
            className="w-full h-full min-h-[300px] object-cover"
          />
        </div>

        {/* Third div: portrait on top, content below */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 items-start pl-0 md:pl-10 lg:pl-16 pr-0 pt-8 md:pt-0 pb-8 md:pb-12 min-w-0">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden bg-white/60 shadow-md flex-shrink-0">
            <ImageWithFallback
              src={LEADER_VASTA}
              alt="Vatsa Kalyanasundaram"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-3 text-[#1c3249] text-sm md:text-base leading-relaxed w-full max-w-none">
            <div>
              <p className="font-semibold text-base md:text-lg">Vatsa Kalyanasundaram</p>
            </div>
            <p className="text-xs md:text-sm font-semibold tracking-wide text-[#1c3249]/80">
              Focus Areas – Telecom, Technology, Energy
            </p>
            <p>
              Vatsa Kalyanasundaram is a seasoned global leader at the intersection of business and technology, with a track record of scaling high-growth, tech-driven businesses.
            </p>
            <p>
              He brings deep experience in cloud, cybersecurity, and digital infrastructure, particularly for telecom, technology, and financial-services clients.
            </p>
            <p>
              At Quantum Tech Hub, Vatsa focuses on helping boards and executive teams shape growth strategy, go-to-market, and operating models that are secure, scalable, and commercially sharp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
