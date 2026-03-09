import React, { useState } from "react";

// ── colour palette per vertical ────────────────────────────────────────────
export type AccentColor = "teal" | "orange" | "pink" | "green";

const palette: Record<
  AccentColor,
  { badge: string; line: string; iconCircle: string; text: string }
> = {
  teal: {
    badge: "bg-teal-500",
    line: "bg-teal-500",
    iconCircle: "bg-teal-500",
    text: "text-teal-400",
  },
  orange: {
    badge: "bg-orange-500",
    line: "bg-orange-500",
    iconCircle: "bg-orange-500",
    text: "text-orange-400",
  },
  pink: {
    badge: "bg-pink-500",
    line: "bg-pink-500",
    iconCircle: "bg-pink-500",
    text: "text-pink-400",
  },
  green: {
    badge: "bg-lime-500",
    line: "bg-lime-500",
    iconCircle: "bg-lime-500",
    text: "text-lime-400",
  },
};

// ── types ───────────────────────────────────────────────────────────────────
export interface ServiceColumn {
  number: string; // "01" – "04"
  title: string;
  items: string[];
  Icon: React.FC<{ className?: string }>;
  /** Optional description for "How we help" second section variant */
  description?: string;
}

interface Props {
  pageTitle: string;
  heroImage: string;
  accent: AccentColor;
  headline: string;
  paragraphs: string[];
  columns: ServiceColumn[];
  /** "split" = full-screen two-column layout like Industry Authority intro */
  firstSectionVariant?: "banner" | "split";
  /** For split variant: left column title = introTitleMain + italic introTitleItalic. If unset, uses pageTitle. */
  introTitleMain?: string;
  introTitleItalic?: string;
  /** Optional custom background color for split first section; defaults to deep burgundy */
  firstSectionBgColor?: string;
  /** Optional background image for split first section (overrides solid color) */
  firstSectionBgImage?: string;
  /** Optional text color for split first section title and body; defaults to #fdfbe8 */
  firstSectionTextColor?: string;
  /** Optional separate text color for the title only; falls back to firstSectionTextColor */
  firstSectionTitleColor?: string;
  /** Optional overall page background color; defaults to black */
  pageBackgroundColor?: string;
  /** When set with split variant: About-page style first section (left title, right video, no bg image) */
  firstSectionVideo?: string;
  /** "howWeHelp" = second section split: left "How we help", right accordion of columns with descriptions */
  secondSectionVariant?: "default" | "howWeHelp";
}

// ── component ───────────────────────────────────────────────────────────────
export function IndustrySubPageTemplate({
  pageTitle,
  heroImage,
  accent,
  headline,
  paragraphs,
  columns,
  firstSectionVariant = "banner",
  introTitleMain,
  introTitleItalic,
  firstSectionBgColor,
  firstSectionBgImage,
  firstSectionTextColor,
  firstSectionTitleColor,
  pageBackgroundColor = "#000000",
  firstSectionVideo,
  secondSectionVariant = "default",
}: Props) {
  const c = palette[accent];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const isSplitFirstSection = firstSectionVariant === "split";
  const isHowWeHelpSecond = secondSectionVariant === "howWeHelp";
  const splitTitleMain = introTitleMain ?? pageTitle;
  const splitTitleItalic = introTitleItalic;
  const splitFirstSectionBg = firstSectionBgColor ?? "#612525";
  const splitTextColor = firstSectionTextColor ?? "#fdfbe8";
  const splitTitleColor = firstSectionTitleColor ?? splitTextColor;

  const splitFirstSectionStyle = firstSectionBgImage
    ? {
        backgroundImage: `url(${firstSectionBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : { backgroundColor: splitFirstSectionBg };

  return (
    <div className="min-h-screen" style={{ backgroundColor: pageBackgroundColor }}>
      {isSplitFirstSection && firstSectionVideo ? (
        /* ── First section: About-page hero style (left text, right media) ── */
        <section className="flex flex-col md:flex-row min-h-screen">
          {/* Left: text */}
          <div
            className="md:w-1/2 flex items-center px-8 md:px-12 lg:px-16 py-12 md:py-16 order-2 md:order-1"
            style={{ backgroundColor: firstSectionBgColor ?? "#223c59" }}
          >
            <div className="max-w-2xl">
              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-snug">
                {splitTitleMain}
                {splitTitleItalic != null && (
                  <> <em className="italic">{splitTitleItalic}</em></>
                )}
              </h1>
            </div>
          </div>

          {/* Right: video (mirrors About image block) */}
          <div className="md:w-1/2 relative overflow-hidden min-h-[280px] md:min-h-full order-1 md:order-2">
            <video
              src={firstSectionVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full min-h-[280px] md:min-h-full object-cover"
            />
            {/* slight dark overlay on left edge for blending */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent hidden md:block" />
          </div>
        </section>
      ) : isSplitFirstSection ? (
        /* ── First section: Industry Authority style (full-screen, two columns) ── */
        <section
          className="min-h-screen flex flex-col pt-28 md:pt-36 pb-14 md:pb-20 pl-4 md:pl-8 lg:pl-14 pr-6 md:pr-12 lg:pr-20"
          style={splitFirstSectionStyle}
        >
          <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-start">
            <div className="md:col-span-1 -ml-4 md:-ml-8 lg:-ml-14">
              <h1
                className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[1.1] tracking-tight"
                style={{ color: splitTitleColor }}
              >
                <span className="block">
                  {splitTitleMain}
                  {splitTitleItalic != null && (
                    <> <em className="font-serif italic">{splitTitleItalic}</em></>
                  )}
                </span>
              </h1>
            </div>
          </div>
        </section>
      ) : (
        <>
      {/* ── Hero ── */}
      <section className="relative h-56 md:h-72 overflow-hidden">
        <img
          src={heroImage}
          alt={pageTitle}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide drop-shadow-lg text-center px-4">
            {pageTitle}
          </h1>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="bg-[#07090f] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white text-xl md:text-2xl font-bold mb-8 leading-snug">
            {headline}
          </h2>
          <div className="space-y-5 text-gray-300 text-sm md:text-base leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>
        </>
      )}

      {/* ── Second section: default (service columns) or How we help (split + accordion) ── */}
      {isHowWeHelpSecond ? (
        <section className="min-h-screen flex flex-col py-16 md:py-24" style={{ backgroundColor: "#fdfbe8" }}>
          <div className="flex-1 flex items-start">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 lg:gap-36 xl:gap-48 items-start">
            {/* Left: headline + paragraphs */}
            <div className="md:col-span-1 flex flex-col justify-start pt-8 md:pt-16 pl-4 md:pl-6 lg:pl-8 space-y-5 text-black/90 text-sm md:text-base leading-relaxed">
              <p className="font-semibold text-black text-base md:text-lg">{headline}</p>
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {/* Right: "How we help" title + accordion */}
            <div className="md:col-span-1 flex flex-col pt-8 md:pt-16 pr-4 md:pr-6 lg:pr-8">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-black leading-[1.15] tracking-tight mb-10 md:mb-14">
                How we help
              </h2>
              <div className="w-full border-t border-black/30">
              {columns.map((col, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={col.number} className="border-b border-black/30">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full py-5 md:py-6 flex items-center justify-between gap-4 text-left transition-opacity duration-300 hover:opacity-80"
                    >
                      <span className="text-black font-semibold text-base md:text-lg">
                        {col.title}
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
                          {col.description ?? (
                            <ul className="space-y-2">
                              {col.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              </div>
            </div>
            </div>
          </div>
        </section>
      ) : (
      <section className="bg-[#07090f] pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* horizontal divider */}
          <div className="border-t border-gray-700 mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.number} className="flex flex-col">
                {/* title + badge row */}
                <div className="flex items-start justify-between mb-4 gap-2">
                  <h3 className="text-white font-bold text-base leading-tight">
                    {col.title}
                  </h3>
                  <span
                    className={`${c.badge} text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0`}
                  >
                    {col.number}
                  </span>
                </div>

                {/* bullet list */}
                <ul className="space-y-2 flex-1">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* vertical line + icon circle */}
                <div className="flex flex-col items-center mt-8">
                  <div className={`w-0.5 h-14 ${c.line}`} />
                  <div
                    className={`${c.iconCircle} w-16 h-16 rounded-full flex items-center justify-center`}
                  >
                    <col.Icon className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}
    </div>
  );
}
