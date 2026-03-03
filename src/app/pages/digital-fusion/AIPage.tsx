import React from "react";
import { DigitalFusionPageTemplate, FusionSection } from "../../components/DigitalFusionPageTemplate";
import { AI_BANNER } from "../../assets/images";

function BulletList({ items }: { items: { label: string; desc: string }[] | string[] }) {
  const isLabeled = items.length > 0 && typeof items[0] === "object";
  return (
    <ul className="mt-3 space-y-2">
      {isLabeled
        ? (items as { label: string; desc: string }[]).map(({ label, desc }) => (
            <li key={label} className="flex items-start gap-2">
              <span className="mt-1.5 shrink-0 text-black/50">•</span>
              <span>
                <span className="font-semibold text-black">{label}</span>{" "}
                {desc}
              </span>
            </li>
          ))
        : (items as string[]).map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 shrink-0 text-black/50">•</span>
              <span>{item}</span>
            </li>
          ))}
    </ul>
  );
}

const aiFirstSectionRightContent = (
  <>
    <p className="font-semibold mb-3">
      We make AI – including GenAI – practical, governable, and embedded in day-to-day operations, not just standalone experiments.
    </p>
    <ul className="list-disc pl-5 space-y-1.5 opacity-90">
      <li>We define an AI and GenAI strategy that is tightly linked to specific value pools, productivity targets, customer outcomes, and your risk appetite, so investments are focused and defensible.</li>
      <li>We run structured use-case discovery and prioritisation, followed by rapid prototyping and industrialised deployment of GenAI, ML, and advanced analytics into real workflows, channels, and products.</li>
      <li>We design and implement GenAI, ML, and analytics platforms integrated with your security, identity, data governance, and cloud foundations, so models are scalable, monitored, and compliant by design.</li>
      <li>We establish AI governance, policies, and operating rhythms – covering data usage, model risk, explainability, and human-in-the-loop controls – so your teams can safely build, adapt, and extend AI solutions over time.</li>
    </ul>
  </>
);

const sections: FusionSection[] = [
  {
    title: "Intelligent Systems That Work the Way Modern Organisations Do",
    content: (
      <div>
        <p>We provide end-to-end AI services across the full lifecycle — from strategy to model operations.</p>
        <BulletList
          items={[
            { label: "AI advisory & consulting:", desc: "Define where AI really matters for your business model, P&L, and operating model, not just your technology stack." },
            { label: "Generative AI:", desc: "Use domain-tuned GenAI for knowledge retrieval, code generation, customer engagement, and expert assistance, with guardrails for safety and compliance." },
            { label: "Advanced AI & machine learning:", desc: "Build predictive and prescriptive models for demand, risk, failures, and churn that directly tie into decision-making workflows." },
            { label: "Enterprise AI platforms:", desc: "Design AI-native architectures, MLOps pipelines, and governance frameworks that scale across regions, business units, and regulations." },
            { label: "Data visualization:", desc: "Turn complex data into intuitive, role-based dashboards that empower operators, clinicians, and executives with real-time situational awareness." },
            { label: "Prescription modelling:", desc: "Move beyond analytics to recommended actions — optimizing network routing, asset dispatch, maintenance schedules, and clinical workflows." },
          ]}
        />
      </div>
    ),
  },
  {
    title: "Telecom & Media",
    content: (
      <div>
        <p>AI in telecom is already improving network planning, reducing IT costs, and enabling self-optimizing networks. Quantum Tech Hub focuses on AI that directly impacts customer experience, network reliability, and margin.</p>
        <BulletList
          items={[
            { label: "Network planning & optimization:", desc: "Cognitive planning, traffic forecasting, and dynamic resource allocation to increase capacity utilization and reduce outages." },
            { label: "AI-driven network operations:", desc: "Anomaly detection and automated remediation for RAN, core, and transport networks to cut incident volumes and improve MTTR." },
            { label: "GenAI for customer & field operations:", desc: "AI copilots for care agents and field engineers, knowledge assistants for complex product portfolios, and personalized recommendations." },
            { label: "Revenue & churn analytics:", desc: "Propensity models for upsell, cross-sell, and churn mitigation, tightly integrated into CRM and campaign platforms." },
          ]}
        />
      </div>
    ),
  },
  {
    title: "Energy & Utilities",
    content: (
      <div>
        <p>Utilities are using AI to prioritize OT vulnerabilities, stabilize grids, and optimize maintenance. We build AI solutions that respect safety, reliability, and regulatory obligations.</p>
        <BulletList
          items={[
            { label: "Grid & demand forecasting:", desc: "AI models for load forecasting, renewable output prediction, and pricing scenarios to support more resilient grid operations." },
            { label: "OT operations & asset health:", desc: "Predictive maintenance for turbines, transformers, and field assets, combining SCADA, sensor, and work-order data." },
            { label: "OT cybersecurity analytics:", desc: "AI that prioritizes high-risk cyber threats across OT systems and tunes behavioral alerts to reduce false positives." },
            { label: "ESG & sustainability analytics:", desc: "AI-powered insight into emissions, losses, and energy efficiency initiatives aligned to ESG reporting needs." },
          ]}
        />
      </div>
    ),
  },
  {
    title: "Manufacturing & Industrial",
    content: (
      <div>
        <p>Industry leaders are using AI to digitize plants, reduce downtime, and improve yield.</p>
        <BulletList
          items={[
            { label: "Smart factories:", desc: "Computer vision and time-series models for quality inspection, anomaly detection, and throughput optimization on production lines." },
            { label: "Predictive maintenance:", desc: "Failure prediction for critical equipment using vibration, temperature, and operational data to minimize unplanned downtime." },
            { label: "Supply chain & inventory optimization:", desc: "Demand sensing, inventory right-sizing, and logistics route optimization using multi-source data." },
            { label: "Engineering & R&D acceleration:", desc: "AI-assisted design, simulation acceleration, and code generation across embedded, IoT, and industrial control software." },
          ]}
        />
      </div>
    ),
  },
  {
    title: "Healthcare & Medical Technology",
    content: (
      <div>
        <p>Healthcare is under pressure from rising cybersecurity risk and complex regulatory frameworks for AI. We help you deploy responsible AI that is secure, explainable, and aligned with clinical outcomes.</p>
        <BulletList
          items={[
            { label: "Clinical decision support:", desc: "Predictive models for risk scoring, triage prioritization, and care pathways, designed to complement — not replace — clinical judgment." },
            { label: "Operational AI:", desc: "Capacity forecasting, bed and theater scheduling, and staffing optimization to reduce waiting times and bottlenecks." },
            { label: "Medical device & diagnostics AI:", desc: "Support for AI in imaging, monitoring, and devices with governance aligned to NIST AI RMF, FDA, and relevant healthcare guidance." },
            { label: "Responsible & compliant AI:", desc: "Frameworks for AI governance, model monitoring, and third-party AI risk across the healthcare supply chain." },
          ]}
        />
      </div>
    ),
  },
  {
    title: "How We Deliver AI — From Strategy to Scale",
    content: (
      <div>
        <BulletList
          items={[
            { label: "Discovery & vision mapping:", desc: "Assess AI readiness, identify high-impact use cases, and build an investment roadmap tied to growth, efficiency, and ESG outcomes." },
            { label: "Architecture & platform design:", desc: "Define cloud, data, and MLOps architectures that integrate with your security, compliance, and governance standards." },
            { label: "Rapid prototyping & pilots:", desc: "Run time-boxed experiments in digital labs to validate value hypotheses before enterprise rollout." },
            { label: "Industrialization & change:", desc: "Scale AI across business units with training, process redesign, and KPI frameworks that embed AI into daily ways of working." },
            { label: "Continuous value realization:", desc: "Monitor adoption, model performance, and business impact via adaptive dashboards and feedback loops." },
          ]}
        />
      </div>
    ),
  },
  {
    title: "Why Quantum Tech Hub for AI",
    content: (
      <div>
        <ul className="space-y-3">
          {[
            "Deep industry context in telecom, utilities, manufacturing, and healthcare, combined with cross-domain AI engineering expertise.",
            "Proven frameworks for digital transformation, change management, and technology-culture integration, ensuring AI is adopted — not just deployed.",
            "Strong focus on security, privacy, and regulatory alignment across IT, OT, and clinical environments.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 shrink-0 text-black/50">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
];

export function AIPage() {
  return (
    <DigitalFusionPageTemplate
      titleMain="Artificial"
      firstSectionBgColor="#0d1023"
      titleItalic="Intelligence"
      firstSectionRightContent={aiFirstSectionRightContent}
      sections={sections}
      secondSectionImage={AI_BANNER}
      secondSectionImageAlt="Artificial Intelligence"
    />
  );
}
