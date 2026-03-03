import React from "react";
import { DigitalFusionPageTemplate, FusionSection } from "../../components/DigitalFusionPageTemplate";
import { CYBER_SECURITY_BANNER } from "../../assets/images";

function LabelList({ items }: { items: { label: string; desc: string }[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map(({ label, desc }) => (
        <li key={label} className="flex items-start gap-2">
          <span className="mt-1.5 shrink-0 text-black/50">•</span>
          <span>
            <span className="font-semibold text-black">{label}</span>{" "}
            {desc}
          </span>
        </li>
      ))}
    </ul>
  );
}

function PlainList({ items }: { items: string[] }) {
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

const cyberSecurityFirstSectionRightContent = (
  <>
    <p className="font-semibold mb-3">
      We secure digital transformation across IT, OT, cloud, and AI workloads for critical industries.
    </p>
    <ul className="list-disc pl-5 space-y-1.5 opacity-90">
      <li>Cyber strategy, architecture, and operating model aligned to business risk and regulation.</li>
      <li>Secure-by-design cloud, network, and application transformations.</li>
      <li>Sector-specific security for telecom, utilities, manufacturing, and healthcare, including OT and medical technology environments.</li>
    </ul>
  </>
);

const sections: FusionSection[] = [
  {
    title: "Our Cybersecurity Value Proposition",
    content: (
      <div>
        <p>We offer a full spectrum of services from strategy to operations.</p>
        <LabelList
          items={[
            { label: "Cyber security engineering:", desc: "Secure SDLC, threat modelling, secure code audits, and security tool integration into CI/CD pipelines." },
            { label: "DevSecOps:", desc: "Automated SAST, DAST, software composition analysis, secrets management, and hardening, integrated with modern delivery practices." },
            { label: "VAPT:", desc: "Web, mobile, IoT, OT, embedded, network, endpoint, application, and cloud penetration testing with black, white, and grey-box approaches." },
            { label: "Cloud security services:", desc: "Secure cloud migration, logging, monitoring and alerting, security audits, and compliance management across hybrid and multi-cloud." },
            { label: "Governance, risk & compliance (GRC):", desc: "Risk assessments, regulatory compliance, and readiness for GDPR, ISO 27001, ISA/IEC 62443 and sector-specific frameworks." },
            { label: "Data privacy & AI security:", desc: "Privacy by design, technical GDPR testing, policy and control design, and emerging protections for AI models and data flows." },
            { label: "Cyber due diligence:", desc: "Asset discovery, vulnerability and compliance assessment, integration strategy, and continuous improvement — especially relevant for M&A." },
          ]}
        />
      </div>
    ),
  },
  {
    title: "Telecom & Media",
    content: (
      <div>
        <p>Telcos are prime targets due to critical infrastructure, sensitive customer data, and growing AI-driven network automation.</p>
        <LabelList
          items={[
            { label: "Network & signaling security:", desc: "Protection of core, transport, and RAN networks with anomaly detection for DDoS, signaling abuse, fraud, and privilege escalation." },
            { label: "AI-enhanced SOC:", desc: "Behavioral analytics, UEBA, and automated incident response to reduce dwell time and increase SOC efficiency." },
            { label: "Secure 5G and edge:", desc: "Security architectures for 5G standalone, slicing, and MEC, including isolation, encryption, and zero-trust principles." },
            { label: "Data privacy & lawful intercept:", desc: "Policy, controls, and monitoring to manage identity, consent, and lawful access in line with regional privacy regulations." },
          ]}
        />
      </div>
    ),
  },
  {
    title: "Energy & Utilities",
    content: (
      <div>
        <p>Energy and utility providers face converging IT–OT environments, expanding industrial IoT, and rising nation-state threats.</p>
        <LabelList
          items={[
            { label: "Unified IT & OT security:", desc: "Architectures that give full visibility across corporate IT, OT networks, and IoT, with context-aware monitoring." },
            { label: "OT cybersecurity & ISA/IEC 62443:", desc: "Assessments, segmentation, and hardening aligned to industrial security standards for SCADA and DCS environments." },
            { label: "AI-powered threat detection:", desc: "Behavioral analytics to spot novel attacks, including those on sensors and control systems, with playbooks for safe response." },
            { label: "Critical infrastructure resilience:", desc: "Incident response and recovery planning tailored to safety-critical operations and regulatory reporting duties." },
          ]}
        />
      </div>
    ),
  },
  {
    title: "Manufacturing & Industrial",
    content: (
      <div>
        <p>Connected factories and supply chains expand the attack surface across OT, IIoT, and engineering environments.</p>
        <LabelList
          items={[
            { label: "OT & IIoT security:", desc: "Asset inventory, segmentation, protocol-aware monitoring, and secure remote access for plants and connected equipment." },
            { label: "Secure product & embedded development:", desc: "Secure SDLC and VAPT for embedded systems, IoT devices, and industrial controllers." },
            { label: "Supply-chain & third-party risk:", desc: "Assessment of suppliers, contract manufacturers, and software components to reduce cascading risk." },
            { label: "R&D and IP protection:", desc: "Data loss prevention and identity controls to safeguard sensitive design and test data." },
          ]}
        />
      </div>
    ),
  },
  {
    title: "Healthcare & Medical Technology",
    content: (
      <div>
        <p>Healthcare faces unprecedented cyber challenges as care delivery and medical devices become more connected and AI-enabled.</p>
        <LabelList
          items={[
            { label: "Healthcare security posture:", desc: "Risk assessments, segmentation, and monitoring tailored to hospitals, clinics, and virtual care environments." },
            { label: "Medical device & IoMT security:", desc: "Threat modelling, secure development, and lifecycle management for connected devices and remote monitoring platforms, aligned with healthcare guidance." },
            { label: "AI and data governance:", desc: "Controls for PHI, AI-assisted diagnostics, and clinical decision systems, aligned to NIST AI RMF, HIPAA-like expectations, and emerging AI regulations." },
            { label: "Incident response & resilience:", desc: "Sector-specific playbooks for ransomware, data breaches, and model compromise, including communication and regulatory notification." },
          ]}
        />
      </div>
    ),
  },
  {
    title: "How We Deliver Cybersecurity",
    content: (
      <div>
        <LabelList
          items={[
            { label: "Discovery & maturity assessment:", desc: "Comprehensive view of your cyber posture across people, process, and technology, including AI and OT dimensions." },
            { label: "Strategy & architecture:", desc: "Target-state security architecture, roadmap, and investment plan aligned to business risk appetite and regulatory context." },
            { label: "Secure transformation & implementation:", desc: "Embedding security into cloud migrations, network modernization, GCC buildouts, and AI initiatives from day one." },
            { label: "Governance & culture:", desc: "Policies, training, cultural programs, and leadership engagement to make security a shared responsibility, not just an IT function." },
            { label: "Continuous monitoring & improvement:", desc: "SOC design, managed detection, KPIs, and feedback loops to evolve defenses as threats and business needs change." },
          ]}
        />
      </div>
    ),
  },
  {
    title: "Differentiators",
    content: (
      <div>
        <PlainList
          items={[
            "Integrated view of AI, cloud, OT, and cybersecurity — critical as threats increasingly target interconnected systems.",
            "Experience with global telecom, utilities, industrial, and healthcare clients, leveraging tested patterns rather than isolated point solutions.",
            "Ability to support M&A, GCC setups, and large-scale digital programs, ensuring security keeps pace with transformation.",
          ]}
        />
      </div>
    ),
  },
];

export function CyberSecurityPage() {
  return (
    <DigitalFusionPageTemplate
      titleMain="Cyber"
      firstSectionBgColor="#4f6c53"
      titleItalic="Security"
      firstSectionRightContent={cyberSecurityFirstSectionRightContent}
      sections={sections}
      secondSectionImage={CYBER_SECURITY_BANNER}
      secondSectionImageAlt="Cybersecurity"
    />
  );
}
