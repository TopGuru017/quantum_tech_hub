import React from "react";
import { DigitalFusionPageTemplate, FusionSection } from "../../components/DigitalFusionPageTemplate";
import { DIGITAL_ASSESSMENT_BANNER } from "../../assets/images";

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
    title: "Understanding Digital Readiness Before Transformation",
    content: (
      <div>
        <p>Digital initiatives often fail because organizations move forward without understanding where they currently stand. A digital maturity assessment provides a clear view of capabilities across technology, data, security, processes, and people.</p>
        <p className="mt-3">At Quantum Tech Hub, we conduct digital maturity assessments to support decision-making, not reporting. The objective is to identify strengths, uncover risks, and define priorities before further investment.</p>
      </div>
    ),
  },
  {
    title: "What Digital Maturity Really Means",
    content: (
      <div>
        <p>Digital maturity is not measured by the number of tools deployed. It is measured by how effectively technology supports operations, decisions, and growth.</p>
        <p className="mt-3">Our assessment evaluates:</p>
        <BulletList
          items={[
            "Technology architecture and scalability",
            "Data quality and integrity",
            "Cybersecurity posture",
            "Process efficiency and automation",
            "Governance and risk management",
            "Organizational readiness and skills",
          ]}
        />
        <p className="mt-4">The result is a realistic baseline that removes assumptions and highlights where attention is needed most.</p>
      </div>
    ),
  },
  {
    title: "Why Digital Maturity Assessments Matter",
    content: (
      <div>
        <p>As organizations grow, systems often fail to evolve at the same pace. This creates hidden risks and operational bottlenecks.</p>
        <p className="mt-3">Without a maturity assessment:</p>
        <BulletList
          items={[
            "Security gaps remain unseen",
            "Legacy systems limit agility",
            "Data becomes unreliable",
            "Investments fail to deliver value",
          ]}
        />
        <p className="mt-4">A clear maturity view enables informed decisions before transformation accelerates.</p>
      </div>
    ),
  },
  {
    title: "Security as a Core Indicator of Maturity",
    content: (
      <div>
        <p>Security is a fundamental measure of digital maturity. Weak security often signals broader structural issues.</p>
        <p className="mt-3">Our security assessment covers:</p>
        <BulletList
          items={[
            "Identity and access controls",
            "Data protection and encryption",
            "Infrastructure and cloud security",
            "Vulnerability exposure",
            "Compliance readiness",
          ]}
        />
        <p className="mt-4">Security maturity is closely connected to the strength of your cloud transformation foundation.</p>
      </div>
    ),
  },
  {
    title: "From Assessment to Actionable Roadmap",
    content: (
      <div>
        <p>Insights without action have little value. Each assessment concludes with a prioritized roadmap outlining:</p>
        <BulletList
          items={[
            "Immediate risk areas",
            "Medium-term capability improvements",
            "Long-term transformation opportunities",
          ]}
        />
        <p className="mt-4">Recommendations align with business goals, operational capacity, and budget realities.</p>
      </div>
    ),
  },
  {
    title: "Strengthening Data Integrity and Trust",
    content: (
      <div>
        <p>Reliable data is essential for informed decision-making. We evaluate:</p>
        <BulletList
          items={[
            "Data governance frameworks",
            "Integration and data flow gaps",
            "Quality and consistency issues",
            "Security controls protecting sensitive data",
          ]}
        />
        <p className="mt-4">Strong data foundations support analytics, automation, and future AI initiatives.</p>
      </div>
    ),
  },
  {
    title: "Preparing for Advanced Technologies",
    content: (
      <div>
        <p>Advanced capabilities require mature digital foundations. Our assessments evaluate readiness for:</p>
        <BulletList
          items={[
            "AI and Gen-AI adoption",
            "Cloud-native platforms",
            "Secure and scalable data environments",
          ]}
        />
        <p className="mt-4">Organizations invest with confidence when foundations are ready.</p>
      </div>
    ),
  },
];

export function MaturityAssessmentPage() {
  return (
    <DigitalFusionPageTemplate
      titleMain="Digital Maturity"
      firstSectionBgColor="#2d3a4a"
      titleItalic="Assessment"
      intro={[
        "Digital initiatives often fail because organizations move forward without understanding where they currently stand.",
        "We conduct maturity assessments to support decision-making — identifying strengths, uncovering risks, and defining priorities before further investment.",
      ]}
      sections={sections}
      secondSectionImage={DIGITAL_ASSESSMENT_BANNER}
      secondSectionImageAlt="Digital Maturity Assessment"
    />
  );
}
