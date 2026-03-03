import React from "react";
import { DigitalFusionPageTemplate, FusionSection } from "../../components/DigitalFusionPageTemplate";
import { GEN_AI_BANNER } from "../../assets/images";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="mt-1.5 shrink-0 text-black/50">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const sections: FusionSection[] = [
  {
    title: "Why Gen AI Fails Without the Right Infrastructure",
    content: (
      <div>
        <p>Many organisations invest in AI tools before preparing their environments. Common challenges include:</p>
        <BulletList
          items={[
            "Insufficient compute and storage scalability",
            "Poor data quality and accessibility",
            "Security gaps across AI pipelines",
            "High operational costs",
            "Integration challenges with legacy systems",
          ]}
        />
        <p className="mt-4">Gen AI success begins with infrastructure that supports performance, security, and scale — from day one.</p>
      </div>
    ),
  },
  {
    title: "Cloud Infrastructure Designed for AI-Native Workloads",
    content: (
      <div>
        <p>AI-native infrastructure must be designed differently. We help organisations set up cloud environments that support:</p>
        <BulletList
          items={[
            "High-performance compute workloads",
            "Secure data pipelines",
            "Scalable storage architectures",
            "Optimised cost management",
            "Reliable model deployment and monitoring",
          ]}
        />
        <p className="mt-4">This foundation enables experimentation without instability.</p>
      </div>
    ),
  },
  {
    title: "Aligning AI Infrastructure with Cloud Strategy",
    content: (
      <div>
        <p>Gen AI infrastructure cannot exist separately from your broader cloud vision. We align AI environments with your existing cloud and hybrid cloud strategy, ensuring consistency, governance, and long-term scalability across platforms.</p>
        <p className="mt-3">This prevents fragmented environments and duplicated cost structures.</p>
      </div>
    ),
  },
  {
    title: "Data Foundations That Power Intelligent Systems",
    content: (
      <div>
        <p>Gen AI is only as strong as the data it learns from. We focus on:</p>
        <BulletList
          items={[
            "Data readiness and quality",
            "Secure data ingestion and access",
            "Governance and compliance alignment",
            "Integration across cloud and on-prem systems",
          ]}
        />
        <p className="mt-4">These foundations are often shaped through insights gained during a digital maturity assessment and security review.</p>
      </div>
    ),
  },
  {
    title: "Security Built Into AI Infrastructure",
    content: (
      <div>
        <p>AI introduces new security considerations. We embed:</p>
        <BulletList
          items={[
            "Access controls for AI platforms",
            "Secure model storage and deployment",
            "Data privacy protections",
            "Continuous monitoring and audit mechanisms",
          ]}
        />
        <p className="mt-4">Security is designed as part of the infrastructure — not added later.</p>
      </div>
    ),
  },
  {
    title: "Integrating Gen AI Into Business Operations",
    content: (
      <div>
        <p>AI creates value when it integrates into workflows. We help organisations:</p>
        <BulletList
          items={[
            "Connect AI outputs to operational systems",
            "Enable intelligent automation",
            "Improve decision support",
            "Scale AI adoption responsibly",
          ]}
        />
        <p className="mt-4">This ensures AI investments translate into measurable business outcomes.</p>
      </div>
    ),
  },
  {
    title: "Supporting Transformation and Scale",
    content: (
      <div>
        <p>Gen AI often accelerates transformation programs. Our infrastructure setup supports broader digital transformation consulting and advisory initiatives, ensuring AI capabilities grow in alignment with organisational maturity and readiness.</p>
      </div>
    ),
  },
];

export function GenAIPage() {
  return (
    <DigitalFusionPageTemplate
      titleMain="Gen AI &"
      firstSectionBgColor="#1e3a3a"
      titleItalic="Cloud Infrastructure"
      intro={[
        "Gen AI requires more than algorithms — it demands scalable cloud environments, secure data foundations, and operational readiness.",
        "We help organisations design and set up cloud infrastructure that is purpose-built for Gen AI and AI-native workloads — stable enough for today, flexible enough for what comes next.",
      ]}
      sections={sections}
      secondSectionImage={GEN_AI_BANNER}
      secondSectionImageAlt="Gen AI and Cloud Infrastructure"
    />
  );
}
