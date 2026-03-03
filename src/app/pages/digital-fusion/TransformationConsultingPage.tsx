import React from "react";
import { DigitalFusionPageTemplate, FusionSection } from "../../components/DigitalFusionPageTemplate";
import { DIGITAL_CONSULTING_BANNER } from "../../assets/images";

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

const transformationConsultingFirstSectionRightContent = (
  <>
    <p className="font-semibold mb-3">
      We design and execute cloud programmes that balance agility, cost, and control on a secure, scalable foundation.
    </p>
    <ul className="list-disc pl-5 space-y-1.5 opacity-90">
      <li>We define cloud strategy, landing zones, and reference architectures that align with your business goals, security posture, and regulatory environment.</li>
      <li>We plan and deliver migrations and modernisation of applications, data, and infrastructure, enabling resilient hybrid and multi-cloud operating models.</li>
      <li>We establish robust governance, policies, and guardrails so teams can innovate quickly while maintaining performance, security, and cost discipline at scale.</li>
      <li>We build cloud capabilities in your organisation – skills, ways of working, and playbooks – so your teams can continuously evolve and optimise the cloud estate.</li>
    </ul>
  </>
);

const sections: FusionSection[] = [
  {
    title: "What Digital Transformation Really Involves",
    content: (
      <div>
        <p>True digital transformation touches every layer of the organisation. It includes:</p>
        <BulletList
          items={[
            "Business strategy alignment",
            "Technology modernisation",
            "Data-driven decision-making",
            "Process re-engineering",
            "Security and governance",
            "People and operating models",
          ]}
        />
        <p className="mt-4">Transformation succeeds when all these elements move together — not in silos.</p>
      </div>
    ),
  },
  {
    title: "From Vision to Executable Roadmap",
    content: (
      <div>
        <p>Transformation begins with clarity. We work with leadership teams to:</p>
        <BulletList
          items={[
            "Define transformation objectives",
            "Identify operational bottlenecks",
            "Prioritise initiatives with highest impact",
            "Create phased, realistic roadmaps",
          ]}
        />
        <p className="mt-4">Each roadmap balances ambition with feasibility, ensuring progress without overwhelming the organisation.</p>
      </div>
    ),
  },
  {
    title: "Technology as an Enabler, Not the Driver",
    content: (
      <div>
        <p>Technology supports transformation — it should not dictate it. Our advisory ensures technology decisions align with:</p>
        <BulletList
          items={[
            "Business goals",
            "Cost and scalability expectations",
            "Security and compliance requirements",
            "Long-term operational sustainability",
          ]}
        />
        <p className="mt-4">This approach integrates closely with your existing cloud and hybrid cloud strategy, ensuring technology foundations are strong before scaling transformation initiatives.</p>
      </div>
    ),
  },
  {
    title: "Process Modernisation and Operational Efficiency",
    content: (
      <div>
        <p>Outdated processes often limit the value of modern tools. We help organisations:</p>
        <BulletList
          items={[
            "Simplify workflows",
            "Reduce manual dependencies",
            "Introduce intelligent automation",
            "Improve cross-functional collaboration",
          ]}
        />
        <p className="mt-4">Transformation delivers results when processes are redesigned — not just digitised.</p>
      </div>
    ),
  },
  {
    title: "Data-Led Decision Making",
    content: (
      <div>
        <p>Transformation without data clarity leads to guesswork. Our approach strengthens:</p>
        <BulletList
          items={[
            "Data quality and governance",
            "Analytics readiness",
            "Information flow across teams",
            "Trust in insights and reporting",
          ]}
        />
      </div>
    ),
  },
  {
    title: "Managing Change Without Resistance",
    content: (
      <div>
        <p>Transformation impacts people as much as systems. We help organisations manage change through:</p>
        <BulletList
          items={[
            "Clear communication",
            "Role clarity",
            "Skill enablement",
            "Leadership alignment",
          ]}
        />
        <p className="mt-4">When teams understand the "why" behind change, adoption follows naturally.</p>
      </div>
    ),
  },
  {
    title: "Scaling Through the Right Delivery Models",
    content: (
      <div>
        <p>Transformation often requires additional delivery capacity. We align transformation programs with:</p>
        <BulletList
          items={[
            "Strategic outsourcing models",
            "Capability expansion frameworks",
            "Controlled execution environments",
          ]}
        />
        <p className="mt-4">This is where outsourcing and build operate transfer advisory services can play a critical supporting role.</p>
      </div>
    ),
  },
  {
    title: "Security and Risk Embedded into Transformation",
    content: (
      <div>
        <p>Security cannot be retrofitted. We ensure transformation initiatives embed:</p>
        <BulletList
          items={[
            "Secure architecture principles",
            "Data protection controls",
            "Compliance alignment",
            "Risk governance",
          ]}
        />
        <p className="mt-4">This protects transformation investments while enabling speed and innovation.</p>
      </div>
    ),
  },
];

export function TransformationConsultingPage() {
  return (
    <DigitalFusionPageTemplate
      titleMain="Cloud"
      titleItalic="Transformation"
      firstSectionBgColor="#3d4447"
      firstSectionRightContent={transformationConsultingFirstSectionRightContent}
      sections={sections}
      secondSectionImage={DIGITAL_CONSULTING_BANNER}
      secondSectionImageAlt="Digital Transformation Consulting"
    />
  );
}
