import React, { useState } from "react";

export interface FusionSection {
  title: string;
  content: React.ReactNode;
}

interface Props {
  titleMain: string;
  titleItalic?: string;
  /** Short intro paragraphs shown on the right side of the first section */
  intro?: string[];
  /** Optional custom right-side content for the first section (overrides intro when set) */
  firstSectionRightContent?: React.ReactNode;
  sections: FusionSection[];
  firstSectionBgColor?: string;
  firstSectionBgImage?: string;
  firstSectionTextColor?: string;
  /** Optional image shown on the right side of the second section */
  secondSectionImage?: string;
  secondSectionImageAlt?: string;
  /** Optional video for the right side of the second section (takes precedence over image) */
  secondSectionVideo?: string;
}

export function DigitalFusionPageTemplate({
  titleMain,
  titleItalic,
  intro,
  firstSectionRightContent,
  sections,
  firstSectionBgColor = "#30373b",
  firstSectionBgImage,
  firstSectionTextColor = "#fdfbe8",
  secondSectionImage,
  secondSectionImageAlt = "",
  secondSectionVideo,
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const bgStyle: React.CSSProperties = firstSectionBgImage
    ? {
        backgroundImage: `url(${firstSectionBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : { backgroundColor: firstSectionBgColor };

  const paraCount = intro?.length ?? 0;
  const introDynamicTop =
    paraCount > 0
      ? `max(0.5rem, calc(72vh - ${(paraCount + 1) * 9}vh))`
      : undefined;
  const firstSectionRightTop = firstSectionRightContent
    ? "max(0.5rem, 28vh)"
    : introDynamicTop;

  return (
    <div className="min-h-screen">
      {/* ── First section: full-screen split title / intro ── */}
      <section
        className="min-h-screen flex flex-col pt-28 md:pt-36 pb-14 md:pb-20 pl-4 md:pl-8 lg:pl-14"
        style={bgStyle}
      >
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 w-full pr-6 md:pr-12 lg:pr-20">
          {/* Left: title */}
          <div className="flex flex-col justify-start">
            <h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[1.1] tracking-tight"
              style={{ color: firstSectionTextColor }}
            >
              {titleMain}
              {titleItalic && (
                <>
                  <br />
                  <em>{titleItalic}</em>
                </>
              )}
            </h1>
          </div>

          {/* Right: intro paragraphs or custom content */}
          {firstSectionRightContent ? (
            <div
              className="flex flex-col space-y-4 text-sm md:text-base leading-relaxed pr-10 md:pr-16 lg:pr-24"
              style={{
                color: firstSectionTextColor,
                marginTop: firstSectionRightTop,
              }}
            >
              {firstSectionRightContent}
            </div>
          ) : intro && intro.length > 0 ? (
            <div
              className="flex flex-col space-y-4 text-sm md:text-base leading-relaxed"
              style={{
                color: firstSectionTextColor,
                marginTop: introDynamicTop,
              }}
            >
              {intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {/* ── Second section: accordion left, image right ── */}
      <section className="bg-[#fdfbe8] py-0 px-4 md:px-8 lg:px-14">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-start">
          {/* Left: accordion */}
          <div className="pt-14 md:pt-20 pb-14 md:pb-20">
            <div className="w-full border-t border-black/30">
              {sections.map((item, i) => (
                <div key={i} className="border-b border-black/30">
                  <button
                    className="w-full flex items-center justify-between py-5 md:py-6 text-left"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    <span className="text-black font-serif text-base md:text-lg lg:text-xl font-normal leading-snug pr-4">
                      {item.title}
                    </span>
                    <span
                      className="text-black text-2xl shrink-0 transition-transform duration-500 ease-in-out"
                      style={{ transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)" }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-500 ease-in-out"
                    style={{ gridTemplateRows: openIndex === i ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <div
                        className="pb-6 md:pb-8 text-black/90 leading-relaxed transition-opacity duration-500 ease-out"
                        style={{ opacity: openIndex === i ? 1 : 0 }}
                      >
                        {item.content}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: media — flush top and right edge */}
          {(secondSectionVideo || secondSectionImage) && (
            <div className="hidden md:block sticky top-0 self-start -mr-4 md:-mr-8 lg:-mr-14">
              {secondSectionVideo ? (
                <video
                  src={secondSectionVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover"
                />
              ) : (
                <img
                  src={secondSectionImage}
                  alt={secondSectionImageAlt}
                  className="w-full h-auto object-cover"
                />
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
