import React from "react";
import { Linkedin } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { DELHI, LEADER_PIYUSH, LEADER_ALOKNATH } from "../../assets/images";

export function IndiaPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-start px-6 md:px-10 lg:px-16 py-24 md:py-28"
      style={{ backgroundColor: "#eae39d" }}
    >
      {/* First div: heading — Industry Authority style */}
      <div className="w-full max-w-6xl mt-12 md:mt-16 mb-16 md:mb-20 px-6 md:px-10 lg:px-16">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-[#1c3249] leading-[1.1] tracking-tight">
          Welcome to <em className="font-serif italic">Delhi</em>
        </h1>
      </div>

      {/* Second + Third: side by side — image left (60%), leader cards right stacked */}
      <div className="w-full flex flex-col md:flex-row items-start gap-0 -ml-0 md:-ml-10 lg:-ml-16">
        {/* Second div: image — left of screen, 60% width */}
        <div className="w-full md:w-[60vw] shrink-0">
          <ImageWithFallback
            src={DELHI}
            alt="Quantum Tech Hub in India"
            className="w-full h-full min-h-[300px] object-cover"
          />
        </div>

        {/* Third div: leader cards — Piyush then Dr. De */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 items-start pl-0 md:pl-10 lg:pl-16 pr-0 pt-8 md:pt-0 pb-8 md:pb-12 min-w-0">
          {/* Piyush card */}
          <div className="flex flex-col gap-6 md:gap-8 items-start w-full max-w-none">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden bg-white/60 shadow-md flex-shrink-0">
                <ImageWithFallback
                  src={LEADER_PIYUSH}
                  alt="Piyush Tandon"
                  className="w-full h-full object-cover"
                />
              </div>
            <div className="space-y-3 text-[#1c3249] text-sm md:text-base leading-relaxed w-full max-w-none">
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-base md:text-lg">Piyush Tandon</p>
                  <a
                    href="https://www.linkedin.com/in/piyush-tandon"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#1c3249]/80 hover:text-[#1c3249]"
                    aria-label="Piyush Tandon on LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-xs md:text-sm text-[#1c3249]/80">+91 89782 66886</p>
                <a
                  href="mailto:piyush.tandon@quantumtech-hub.com"
                  className="text-[9px] md:text-[9px] text-[#1c3249]/80 hover:underline block"
                >
                  piyush.tandon@quantumtech-hub.com
                </a>
              </div>
              <p className="text-xs md:text-sm font-semibold tracking-wide text-[#1c3249]/80">
                Focus Areas – Telecom, Technology, Business Models, Operations, Mergers & Operations
              </p>
              <p>
                Piyush specialises in building and optimising India-based delivery and innovation hubs for global clients.
              </p>
              <p>
                He designs business models and operations that turn GCCs into engines of innovation, not just cost efficiency.
              </p>
            </div>
          </div>

          {/* Dr. Aloknath De card */}
          <div className="flex flex-col gap-6 md:gap-8 items-start w-full max-w-none">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden bg-white/60 shadow-md flex-shrink-0">
              <ImageWithFallback
                src={LEADER_ALOKNATH}
                alt="Dr. Aloknath De"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3 text-[#1c3249] text-sm md:text-base leading-relaxed w-full max-w-none">
              <div>
                <p className="font-semibold text-base md:text-lg">Dr. Aloknath De</p>
              </div>
              <p className="text-xs md:text-sm font-semibold tracking-wide text-[#1c3249]/80">
                Focus Areas – Cyber-Physical Systems, AI, Trusted Tech, IoT, Cobotics, 6G, Product & Platform Engineering
              </p>
              <p>
                Dr. De is a distinguished leader with over 30 years of experience in technology and engineering, driving Cyber-Physical Systems
                (CPS) design that brings together AI, trusted technologies, IoT, cobotics, and 6G.
              </p>
              <p>
                He has been recognised among the Top 50 Global CTOs and has received multiple international and national awards for innovation,
                intrapreneurship, and business transformation across industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
