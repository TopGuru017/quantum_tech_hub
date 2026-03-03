import React, { useState, useEffect } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ARTICLE_1, ARTICLE_2, ARTICLE_3, ARTICLE_4 } from "../assets/images";

interface Article {
  img: string;
  category: string;
  title: string;
  excerpt: string;
  content: string[];
}

const insights: Article[] = [
  {
    img: ARTICLE_1,
    category: "Article",
    title: "Thank you to the Made in Saudi 2025 organizers for delivering such a well-executed and forward-looking event.",
    excerpt: "It was a pleasure to take part in a conversation that truly captured the ambition and momentum of Saudi Arabia's industrial transformation.",
    content: [
      "Thank you to the Made in Saudi 2025 organizers for delivering such a well-executed and forward-looking event. It was a pleasure to take part in the panel discussion on “Smart & Advanced Manufacturing – Global Technologies Powering the Factories of the Future.",
      " The quality of dialogue, global perspectives, and focus on innovation truly reflected the ambition shaping the future of manufacturing in the Kingdom and beyond.",
      "Special thanks to Marie Ramond for her excellent moderation—her thoughtful questions and seamless facilitation made for an engaging and insightful discussion.",
      "Grateful for the opportunity and looking forward to continued collaboration.",
    ],
  },
  {
    img: ARTICLE_2,
    category: "Article",
    title: "$64.6 billion. 1.9 million professionals.",
    excerpt: "That is the current size of India's GCC sector, as reported in NASSCOM's latest five-year review of the industry.",
    content: [
        "That is the current size of India’s GCC sector, as reported in NASSCOM’s latest five-year review of the industry.",
        "The growth momentum is accelerating. ",
        "Deloitte’s 2025 Global Business Services (GBS) Survey confirms the shift: ",
        "70% of mature GCCs now own digital transformation outcomes for their enterprises.",
        "More than 40% report directly against P&L targets monitored at board level. ",
        "For C-level leaders, the implications are material: ",
        "Cost & control: Building a 300-person digital or AI pod in India typically reduces total cost of ownership by 30–40 % compared with equivalent hiring in the U.S. or Europe, while retaining IP ownership and governance. ",
        "Speed to capability: Local talent depth allows faster scaling of AI, cloud, and cyber programs without relying on scarce onshore expertise. ",
        "Resilience: Distributed hubs diversify geopolitical and supply-chain risk while creating a sustainable talent pipeline. ",
        "The question for the board is no longer “Should we offshore?” ",
        "It is “Which critical capabilities should we own in India and how quickly can we scale them to influence revenue, margin, and innovation?”"
    ],
  },
  {
    img: ARTICLE_3,
    category: "Article",
    title: "Agentic AI is pushing healthcare R&D from search to action.",
    excerpt: "AI agents now plan multi-step tasks, call tools, and parse large datasets — speeding evidence packs, protocol design, and clinical insight.",
    content: [
        "HealthTech reports that AI agents now plan multi-step tasks, call tools, and parse large datasets—speeding evidence packs, protocol design, and discovery work. Early adopters like Genentech report their gRED Research Agent helps identify targets and design studies faster—translating to shorter time-to-candidate.",
        "What CXOs can do now",
        "Stand up an Agent Ops lane in your GCC; target 30–50% cycle-time cuts on protocol drafts and evidence dossiers.",
        "Treat agents like staff: role-based access, data residency, audit logs, HITL for high-risk steps.",
        "Tie benefits to risk: IBM shows AI misuse adds ~$670K per breach on average; fund controls from avoided loss. ", 
        "Bottom line: build agents inside a governed cloud and measure time-to-insight and throughput per researcher—that’s where value shows up first.",
    ],
  },
  {
    img: ARTICLE_4,
    category: "Article",
    title: "AI at the Helm — How Artificial Intelligence Is Empowering Industries to Reinvent the Future",
    excerpt: "Organisations that treat AI, cloud, and cybersecurity as separate functions are already falling behind. Integration is the new baseline.",
    content: [
       "Artificial intelligence stands as the defining technology of our era, offering industries, businesses, and individuals the opportunity not just to adapt, but to envision and create new possibilities for growth and impact. AI is not merely a tool—it is the catalyst for a new wave of innovation and purpose-driven progress",
      "AI as the Engine of Industry Reinvention",
      "AI is revolutionizing core sectors by transforming what’s possible. Healthcare, for instance, is shifting from reactive care to personalized medicine with AI-driven diagnostics and treatment planning. In manufacturing, generative AI and robotics are leading to intelligent factories—seen in Airbus’s use of generative design and 3D printing to reimagine airplane components, resulting in lighter, more sustainable aircraft. Financial services are deploying AI to analyze contracts in seconds, optimize risk, and proactively detect fraud, such as JP Morgan Chase’s AI tools that have saved millions and elevated trust.",
      "The Human Imperative: Adapting for a Purposeful Future",
      "AI’s true promise lies in how it amplifies human talent and creativity. Individuals equipped with digital fluency and a growth mindset will not just survive disruption; they will shape the future of work. From AI-powered chatbots improving customer engagement at Vodafone to advanced predictive tools enabling engineers to optimize energy use and sustainability, the human-AI partnership is unlocking both social and economic value.",
      "Why Businesses Cannot Ignore AI ",
      "At the enterprise level, AI is no longer just a technology initiative—it is a growth strategy. Businesses that integrate AI into core decision-making reap measurable value in three key dimensions: ",
      "Efficiency: Automating repetitive tasks reduces costs and reallocates human talent to more strategic areas. ",
      "Insight: AI-driven analytics uncover opportunities for new products, services, and markets. ",
      "Resilience: Organizations equipped with AI can adapt quickly to market disruptions and shifting customer behaviors. ",
      "Failing to adapt risks not just falling behind but becoming obsolete. The leaders of tomorrow will be those who understand that AI is not merely a tool, but a foundation for continuously reinventing business models. ",

      "A Visionary Call to Action",

        "To lead in the AI era, industries and professionals must do more than adopt the latest tools—they must reimagine business models, embrace bold experimentation, and commit to continuous learning. The most enduring transformations will come from uniting technological vision with a human purpose: making life better, safer, and more meaningful for all. Those who see AI as both a compass and an engine for positive change will create opportunities and legacies that endure.",
        "Now is the moment to move from adaptation to pioneering, and from disruption to reinvention. Let’s shape a future in which AI empowers every industry, every enterprise, and every individual to reach new heights.",
      "I find the insights very interesting and compelling, especially AI use cases from Google Cloud, Microsoft, and IBM, as well as analyses from Harvard Business Review and Accenture." 
    ],
  },
];

const PAGE_SIZE = 4;

export function ResourcesPage() {
  const [offset, setOffset] = useState(0);
  const [sliding, setSliding] = useState<"left" | "right" | null>(null);
  const [selected, setSelected] = useState<Article | null>(null);
  const maxOffset = Math.max(0, insights.length - PAGE_SIZE);
  const visible = insights.slice(offset, offset + PAGE_SIZE);

  function navigate(dir: "left" | "right") {
    const next = dir === "right"
      ? Math.min(maxOffset, offset + 1)
      : Math.max(0, offset - 1);
    if (next === offset) return;
    setSliding(dir);
    setTimeout(() => {
      setOffset(next);
      setSliding(null);
    }, 300);
  }

  // Close modal on Escape key
  useEffect(() => {
    if (!selected) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selected]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <div className="bg-[#f1ecc5] min-h-screen">

      {/* ── Hero ── */}
      <section className="bg-[#f1ecc5] pt-28 md:pt-36 pb-16 px-6 md:px-16 border-b border-black/10">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal text-black mb-3">Resources</h1>
          <p className="text-black/50 text-sm leading-relaxed max-w-xl mt-4">
          Quantum Tech Hub is a global advisory and technology implementation firm focused on mission-critical industries and high-stakes transformations across markets.
          </p>
          <p className="text-black/50 text-sm leading-relaxed max-w-xl mt-4">
          We blend strategic advisory, deep engineering, and global delivery to help clients design the future and make it operational – securely, reliably, and at scale.
          </p>
        </div>
      </section>

      {/* ── Articles ── */}
      <section className="py-16">
        <div className="relative px-10 md:px-14">

          {/* Grid: 4 equal columns */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 transition-all duration-300 ease-in-out"
            style={{
              opacity: sliding ? 0 : 1,
              transform: sliding === "right" ? "translateX(-24px)" : sliding === "left" ? "translateX(24px)" : "translateX(0)",
            }}
          >
            {visible.map((item, i) => (
              <article
                key={offset + i}
                className="flex flex-col cursor-pointer group"
                onClick={() => setSelected(item)}
              >
                <p className="text-black/40 text-xs mb-2 tracking-wide">{item.category}</p>
                <div className="overflow-hidden w-full aspect-[3/4] mb-4">
                  <ImageWithFallback
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-black text-base md:text-lg font-normal leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-black/55 text-sm leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
              </article>
            ))}
          </div>

          {/* Arrows */}
          {insights.length > PAGE_SIZE && (
            <>
              <button
                onClick={() => navigate("left")}
                disabled={offset === 0 || !!sliding}
                className="absolute left-0 top-[38%] -translate-y-1/2 w-10 h-10 rounded-full border border-black/30 flex items-center justify-center text-black bg-[#f1ecc5] hover:bg-black hover:text-[#f1ecc5] transition-colors duration-300 disabled:opacity-25"
                aria-label="Previous"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={() => navigate("right")}
                disabled={offset === maxOffset || !!sliding}
                className="absolute right-0 top-[38%] -translate-y-1/2 w-10 h-10 rounded-full border border-black/30 flex items-center justify-center text-black bg-[#f1ecc5] hover:bg-black hover:text-[#f1ecc5] transition-colors duration-300 disabled:opacity-25"
                aria-label="Next"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </>
          )}
        </div>
      </section>

      {/* ── Article Detail Modal ── */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm overflow-y-auto"
          onClick={(e) => { if (e.target === e.currentTarget) setSelected(null); }}
        >
          <div className="relative bg-[#fdfbe8] w-full max-w-3xl mx-4 my-16 rounded-sm shadow-2xl animate-[fadeSlideUp_0.3s_ease-out]">

            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full border border-black/20 flex items-center justify-center text-black/60 hover:bg-black hover:text-white transition-colors duration-200 z-10"
              aria-label="Close"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Hero image */}
            <div className="w-full aspect-[16/7] overflow-hidden">
              <ImageWithFallback
                src={selected.img}
                alt={selected.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="px-8 md:px-12 py-10">
              <p className="text-black/40 text-xs tracking-widest uppercase mb-4">{selected.category}</p>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal text-black leading-snug mb-8">
                {selected.title}
              </h2>
              <div className="space-y-5 text-black/80 leading-relaxed">
                {selected.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
