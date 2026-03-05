import React from "react";
import { DigitalFusionPageTemplate, FusionSection } from "../../components/DigitalFusionPageTemplate";
import { CLOUD_STRATEGY_VIDEO } from "../../assets/images";

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

const cloudStrategyFirstSectionRightContent = (
  <>
    <p className="font-semibold mb-3">
      We help you trust the data you use to run, secure, and grow the business.
    </p>
    <ul className="list-disc pl-5 space-y-1.5 opacity-90">
      <li>Data strategy and architecture aligned with regulatory and industry needs.</li>
      <li>Data quality, lineage, and governance frameworks.</li>
      <li>Controls for sensitive, regulated, and safety-critical data across cloud and on-prem.</li>
    </ul>
  </>
);

const sections: FusionSection[] = [
  {
    title: "Cloud Transformation Is About Direction, Not Just Technology",
    content: (
      <div>
        <p>Cloud initiatives fail not because of platforms, but because of unclear direction. Many organizations move to the cloud expecting speed, flexibility, and efficiency, only to face rising costs, fragmented systems, and security challenges. True cloud transformation begins with clarity — understanding why change is needed and how it supports business outcomes.</p>
        <p className="mt-3">At Quantum Tech Hub, we support organizations through end-to-end cloud transformation by combining strategic direction with hands-on implementation. Our focus is on building cloud environments that are practical, scalable, and aligned with real operational needs.</p>
      </div>
    ),
  },
  {
    title: "Choosing the Right Cloud Model",
    content: (
      <div>
        <p>Not every workload belongs in a public cloud. Not every system should remain on-premise. A well-designed cloud environment balances flexibility, control, and performance.</p>
        <p className="mt-3">We help organizations evaluate:</p>
        <BulletList
          items={[
            "Which applications should move to the cloud",
            "Which systems should remain on-premise",
            "Which workloads require re-architecture",
            "Which legacy platforms should be retired",
          ]}
        />
        <p className="mt-4">This structured decision-making ensures cloud adoption supports business priorities rather than introducing unnecessary complexity.</p>
      </div>
    ),
  },
  {
    title: "Cloud Transformation Built Around Business Outcomes",
    content: (
      <div>
        <p>Before recommending architecture or platforms, we focus on understanding the organization itself. Our approach begins with:</p>
        <BulletList
          items={[
            "Assessment of existing infrastructure and dependencies",
            "Application performance and usage analysis",
            "Security, compliance, and governance requirements",
            "Cost structures and operational inefficiencies",
            "Growth plans and future demand",
          ]}
        />
        <p className="mt-4">From this foundation, we design cloud roadmaps that enable:</p>
        <BulletList
          items={[
            "Faster product and service delivery",
            "Improved system resilience and availability",
            "Optimized infrastructure and operational costs",
            "Better access to data and insights",
            "Stronger security posture",
          ]}
        />
        <p className="mt-4">Technology becomes an enabler, not a distraction.</p>
      </div>
    ),
  },
  {
    title: "Cloud Architecture Designed for Scale and Stability",
    content: (
      <div>
        <p>A successful cloud transformation must scale without introducing instability. We design cloud environments that prioritize simplicity, security, and long-term sustainability.</p>
        <p className="mt-3">Our cloud architectures focus on:</p>
        <BulletList
          items={[
            "Clean, modular design",
            "Secure integration between environments",
            "High availability and disaster recovery",
            "Built-in cost visibility and control",
            "Operational clarity from day one",
          ]}
        />
        <p className="mt-4">This approach helps organizations avoid vendor lock-in, uncontrolled cloud spend, and security gaps.</p>
      </div>
    ),
  },
  {
    title: "Cloud Implementation That Delivers Real Value",
    content: (
      <div>
        <p>Strategy alone does not deliver results. Execution matters. We support full cloud implementation, including:</p>
        <BulletList
          items={[
            "Platform selection and environment setup",
            "Migration planning and execution",
            "Application modernization",
            "Infrastructure deployment and configuration",
            "Testing, stabilization, and operational handover",
          ]}
        />
        <p className="mt-4">Our implementation approach minimizes disruption while ensuring environments are production-ready, secure, and aligned with business operations.</p>
      </div>
    ),
  },
  {
    title: "Security Embedded Into Cloud Transformation",
    content: (
      <div>
        <p>Security is not an add-on. It is a core component of cloud transformation. We embed security through:</p>
        <BulletList
          items={[
            "Identity and access management",
            "Data encryption standards",
            "Network segmentation",
            "Compliance alignment",
            "Continuous monitoring and governance",
          ]}
        />
        <p className="mt-4">Security is designed into the foundation, not applied later.</p>
      </div>
    ),
  },
  {
    title: "Supporting Broader Digital Transformation",
    content: (
      <div>
        <p>Cloud transformation often sits at the core of wider digital initiatives. We ensure cloud environments support modernization, automation, and innovation at the right pace. This includes:</p>
        <BulletList
          items={[
            "Integration with legacy systems",
            "Support for modern application platforms",
            "Operational readiness and skill alignment",
          ]}
        />
        <p className="mt-4">Cloud transformation becomes a foundation for long-term growth rather than a one-time project.</p>
      </div>
    ),
  },
];

export function CloudStrategyPage() {
  return (
    <DigitalFusionPageTemplate
      titleMain="Data"
      firstSectionBgColor="#1f2a3a"
      titleItalic="Integrity"
      firstSectionRightContent={cloudStrategyFirstSectionRightContent}
      sections={sections}
      secondSectionVideo={CLOUD_STRATEGY_VIDEO}
      secondSectionImageAlt="Cloud Strategy"
    />
  );
}
