import { Link } from "react-router";
import { PAGE_HERO_BACKGROUND } from "../../assets/images";

// ── Hexagon watermark SVG ─────────────────────────────────────────────────────
function HexWatermark({ side = "right" }: { side?: "right" | "left" }) {
  return (
    <div
      className={`absolute ${side === "right" ? "right-0" : "left-0"} top-0 bottom-0 w-72 opacity-[0.04] pointer-events-none select-none`}
    >
      <svg viewBox="0 0 200 600" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((row) =>
          [0, 1].map((col) => {
            const cx = col * 100 + (row % 2 === 0 ? 0 : 50);
            const cy = row * 86;
            const pts = Array.from({ length: 6 }, (_, i) => {
              const a = (Math.PI / 180) * (60 * i - 30);
              return `${cx + 40 * Math.cos(a)},${cy + 40 * Math.sin(a)}`;
            }).join(" ");
            return <polygon key={`${row}-${col}`} points={pts} />;
          })
        )}
      </svg>
    </div>
  );
}

// ── Reusable white content block ──────────────────────────────────────────────
function ContentBlock({
  title,
  intro,
  listLabel,
  items,
  closing,
  closingAccent = false,
}: {
  title: string;
  intro: string | string[];
  listLabel?: string;
  items?: string[];
  closing?: string;
  closingAccent?: boolean;
}) {
  const introLines = Array.isArray(intro) ? intro : [intro];
  return (
    <div className="mb-14">
      <h2 className="text-gray-900 font-bold text-lg md:text-xl mb-2">{title}</h2>
      {introLines.map((line, i) => (
        <p key={i} className="text-gray-700 text-sm mb-1 leading-relaxed">
          {line}
        </p>
      ))}
      {listLabel && (
        <p className="text-gray-700 text-sm mt-3 mb-1">{listLabel}</p>
      )}
      {items && (
        <ul className="mt-2 space-y-1">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}
      {closing && (
        <p
          className={`mt-4 text-sm leading-relaxed ${
            closingAccent ? "text-teal-600" : "text-gray-700"
          }`}
        >
          {closing}
        </p>
      )}
    </div>
  );
}

// ── Reusable dark content block ───────────────────────────────────────────────
function DarkBlock({
  title,
  intro,
  listLabel,
  items,
  closing,
}: {
  title: string;
  intro: string | string[];
  listLabel?: string;
  items: string[];
  closing?: string;
}) {
  const introLines = Array.isArray(intro) ? intro : [intro];
  return (
    <div className="mb-14">
      <h2 className="text-white font-bold text-lg md:text-xl mb-2">{title}</h2>
      {introLines.map((line, i) => (
        <p key={i} className="text-teal-400 text-sm mb-1 leading-relaxed">
          {line}
        </p>
      ))}
      {listLabel && (
        <p className="text-gray-300 text-sm mt-3 mb-1">{listLabel}</p>
      )}
      <ul className="mt-2 space-y-1">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      {closing && (
        <p className="mt-4 text-gray-300 text-sm leading-relaxed">{closing}</p>
      )}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export function OutsourcingPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── 1. Hero ── */}
      <section className="relative h-52 md:h-64 overflow-hidden">
        <img
          src={PAGE_HERO_BACKGROUND}
          alt="Outsourcing and Build Operate hero"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center px-10 md:px-20">
          <h1 className="text-white font-bold text-2xl md:text-4xl leading-tight max-w-2xl drop-shadow-lg uppercase">
            Outsourcing and Build<br />Operate &amp; Transfer<br />Advisory Services
          </h1>
        </div>
      </section>

      {/* ── 2. White — Strategic Growth Lever ── */}
      <section className="bg-white py-14 px-6 relative overflow-hidden">
        <HexWatermark side="right" />
        <div className="max-w-3xl mx-auto relative">
          <ContentBlock
            title="Outsourcing as a Strategic Growth Lever"
            intro={[
              "Outsourcing today is no longer about cost reduction alone. For modern organizations, it supports scale, speed, access to specialized skills, and long-term resilience. When poorly designed, outsourcing creates dependency and risk. When structured correctly, it becomes a growth enabler.",
              "At Quantum Tech Hub, we design outsourcing models that protect ownership, ensure governance, and support long-term objectives.",
            ]}
          />
        </div>
      </section>

      {/* ── 3. Dark — BOT Model + When Makes Sense + Governance ── */}
      <section className="bg-black py-14 px-6">
        <div className="max-w-3xl mx-auto">

          <DarkBlock
            title="Understanding the Build Operate Transfer Model"
            intro="Build Operate Transfer is a phased approach to capability creation."
            listLabel="In a Build Operate Transfer model:"
            items={[
              "Capabilities are built with clear objectives and governance",
              "Operations are stabilized through defined processes and controls",
              "Ownership is transferred in a structured, predictable manner",
            ]}
            closing="The focus is sustainability, not short-term speed."
          />

          <DarkBlock
            title="When Build Operate Transfer Makes Sense"
            intro="This model is effective when organizations:"
            items={[
              "Need rapid access to specialized skills",
              "Want to scale without internal bandwidth constraints",
              "Are entering new delivery models or regions",
              "Require proof of operational viability before ownership",
            ]}
          />

          <DarkBlock
            title="Governance-First Outsourcing Frameworks"
            intro="Outsourcing fails when governance is weak. We design frameworks with:"
            items={[
              "Clear roles and decision authority",
              "Performance metrics tied to outcomes",
              "Security and compliance controls",
              "Defined transition milestones and exit criteria",
            ]}
            closing="Control remains with the organization at every stage."
          />
        </div>
      </section>

      {/* ── 4. White — Cloud Alignment + Readiness + Enabler + Security ── */}
      <section className="bg-white py-14 px-6 relative overflow-hidden">
        <HexWatermark side="left" />
        <div className="max-w-3xl mx-auto relative">

          <ContentBlock
            title="Alignment with Cloud and Digital Foundations"
            intro={[
              "Outsourcing must align with the organization's technology landscape.",
              "We ensure alignment with:",
            ]}
            items={[
              "Cloud transformation initiatives",
              "Secure infrastructure access",
              "Data protection and compliance standards",
              "Scalable operating models",
            ]}
            closing="This prevents fragmentation and long-term inefficiency."
            closingAccent
          />

          <ContentBlock
            title="Operational Readiness and Capability Transfer"
            intro="The transfer phase defines success. We focus on:"
            items={[
              "Knowledge transfer and documentation maturity",
              "Process stability and repeatability",
              "Leadership and skill readiness",
              "Operational continuity",
            ]}
            closing="Ownership transfers smoothly and confidently."
            closingAccent
          />

          <ContentBlock
            title="Outsourcing as an Enabler of Digital Transformation"
            intro="Outsourcing and Build Operate Transfer often support broader transformation programs by expanding execution capacity without losing control."
          />

          <ContentBlock
            title="Security and Risk Management"
            intro="We embed:"
            items={[
              "Identity and access controls",
              "Data handling and privacy standards",
              "Compliance alignment",
              "Continuous monitoring",
            ]}
            closing="Security is foundational, not contractual."
          />
        </div>
      </section>

      {/* ── 5. Why QTH (dark navy) ── */}
      <section className="bg-[#0d1023] py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-white font-bold text-2xl md:text-3xl mb-6">
            Why Quantum Tech Hub
          </h2>

          <p className="text-teal-400 text-sm md:text-base mb-1">
            We are not a staffing vendor
          </p>
          <p className="text-teal-400 text-sm md:text-base mb-1">
            We are not a body-shopping firm
          </p>
          <p className="text-teal-400 text-sm md:text-base mb-8">
            We act as strategic advisors
          </p>

          <p className="text-gray-300 text-sm mb-10 leading-relaxed max-w-xl mx-auto">
            Our advisory services are designed to{" "}
            <span className="text-teal-400">reduce risk, protect ownership, and enable confident scale.</span>
          </p>

          <Link
            to="/contact"
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white text-sm px-8 py-3 rounded-full transition-colors duration-300"
          >
            Connect With Us
          </Link>
        </div>
      </section>
    </div>
  );
}
