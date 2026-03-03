import React from "react";
import { PAGE_HERO_BACKGROUND, ENERGY_BANNER } from "../../assets/images";
import { MessageCircleQuestion, Users, Settings2, Building2 } from "lucide-react";
import {
  IndustrySubPageTemplate,
  ServiceColumn,
} from "../../components/IndustrySubPageTemplate";

const columns: ServiceColumn[] = [
  {
    number: "01",
    title: "Consulting",
    Icon: MessageCircleQuestion,
    description:
      "We support technology modernization, corporate strategy and transformation, and data risk and security. Our consulting practice helps you leverage Gen-AI, cloud, and cyber security to align technology with business goals.",
    items: [
      "Technology Modernization",
      "Corporate Strategy & Transformation",
      "Data Risk & Security Management",
      "Gen-AI, Cloud, Cyber Security",
    ],
  },
  {
    number: "02",
    title: "Advisory",
    Icon: Users,
    description:
      "From Global Capability Centre set-up to digital maturity assessment, we provide advisory on data integrity, security, and ESG. We help you make informed decisions and build capabilities that scale.",
    items: [
      "Global Capability Centre Set Up Advisory",
      "Digital Maturity Assessment",
      "Data Integrity, Security",
      "ESG",
    ],
  },
  {
    number: "03",
    title: "Implementation",
    Icon: Settings2,
    description:
      "We deliver technology implementation, network design and engineering, and product engineering. Our teams support Gen-AI, cloud, cyber security, and data migration and legacy system modernization so you go from strategy to execution.",
    items: [
      "Technology Implementation",
      "Gen-AI, Cloud, Cyber Security",
      "Network Design & Engineering",
      "Data Migration & Legacy System Modernization",
    ],
  },
  {
    number: "04",
    title: "Infrastructure Set Up",
    Icon: Building2,
    description:
      "We support GCC infrastructure set-up for technology and manufacturing, AI-native and cloud and cyber infrastructure, and Build–Operate–Transfer (B.O.T.) models. We also enable engineering R&D and operational readiness.",
    items: [
      "GCC Infrastructure Set Up- Technology & Manufacturing",
      "AI-native, Cloud & Cyber Infrastructure Set Up",
      "B.O.T ( Build, Operate & Transfer).",
      "Engineering R&D",
    ],
  },
];

export function EnergyPage() {
  return (
    <IndustrySubPageTemplate
      pageTitle="Energy & Utilities"
      heroImage={PAGE_HERO_BACKGROUND}
      accent="orange"
      firstSectionVariant="split"
      firstSectionBgImage={ENERGY_BANNER}
      firstSectionBgColor="#406438"
      firstSectionTitleColor="#134d19"
      introTitleMain="Energy &"
      introTitleItalic="Utilities"
      secondSectionVariant="howWeHelp"
      // headline={`"Powering the Future: Global Utilities Navigate Digital Disruption, Customer Demands, and a Race Toward Sustainable Innovation"`}
      paragraphs={[
        "Transform energy operations and infrastructure to become more efficient, sustainable, and resilient. Harness the power of data, AI, and automation to optimise energy production, distribution, and consumption.",
        "Strengthen OT security and resilience for critical infrastructure so networks, plants, and field assets remain safe and available.",
        "Transform asset management, field workforce execution, and customer experience with data driven processes, automation, and intuitive digital channels.",
        "Deploy digital and analytics at scale to enhance operational efficiency, reduce costs, and improve sustainability.",
        "Build in house digital and analytics capability through playbooks, platforms, and upskilling so performance, decarbonization, and cost outcomes keep improving over time.",
      ]}
      columns={columns}
    />
  );
}
