import React from "react";
import { Linkedin } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { FRANKFURT, LEADER_BIKRAMJIT } from "../../assets/images";

export function GermanyPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-start px-6 md:px-10 lg:px-16 py-24 md:py-28"
      style={{ backgroundColor: "#6c7f7d" }}
    >
      {/* First div: heading — Industry Authority style */}
      <div className="w-full max-w-6xl mt-24 md:mt-28 mb-16 md:mb-20 px-6 md:px-10 lg:px-16">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-[#ffffff] leading-[1.1] tracking-tight">
          Welcome to <em className="font-serif italic">Frankfurt</em>
        </h1>
      </div>

      {/* Second + Third: side by side — image left (60%), portrait+content right */}
      <div className="w-full flex flex-col md:flex-row items-start gap-0 -ml-0 md:-ml-10 lg:-ml-16">
        {/* Second div: image — left of screen, 60% width */}
        <div className="w-full md:w-[60vw] shrink-0">
          <ImageWithFallback
            src={FRANKFURT}
            alt="Quantum Tech Hub in Germany"
            className="w-full h-full min-h-[300px] object-cover"
          />
        </div>

        {/* Third div: portrait on top, content below */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 items-start pl-0 md:pl-10 lg:pl-16 pr-0 pt-8 md:pt-0 pb-8 md:pb-12 min-w-0">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden bg-white/60 shadow-md flex-shrink-0">
            <ImageWithFallback
              src={LEADER_BIKRAMJIT}
              alt="Bikramjit Paul Choudhury"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-3 text-[#ffffff] text-sm md:text-base leading-relaxed w-full max-w-none">
            <div>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-base md:text-lg">Bikramjit Paul Choudhury</p>
                <a
                  href="https://www.linkedin.com/in/bikramjit-paul-choudhury-2bab532"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#ffffff]/80 hover:text-[#ffffff]"
                  aria-label="Bikramjit Paul Choudhury on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs md:text-sm text-[#ffffff]/80">+49 173 5239318</p>
              <a
                href="mailto:bikramjitpaul.choudhury@quantumtech-hub.com"
                className="text-sm md:text-base text-[#ffffff]/80 hover:underline block"
              >
                bikramjitpaul.choudhury@quantumtech-hub.com
              </a>
            </div>
            <p className="text-xs md:text-sm font-semibold tracking-wide text-[#ffffff]/80">
              Focus Areas – Technology, Healthcare, Business Transformation, Mergers & Acquisitions, Operations
            </p>
            <p>
              Bikram leads large-scale technology and business transformations, often in highly regulated sectors.
            </p>
            <p>
              He combines strategy, M&A, and operational excellence to turn integration and change programmes into tangible performance gains.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

