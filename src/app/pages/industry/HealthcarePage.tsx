import React from "react";
import { PAGE_HERO_BACKGROUND, HEALTHCARE_BANNER } from "../../assets/images";
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
      "From Global Capability Centre set-up to digital maturity assessment, we provide advisory on intelligent healthcare, data integrity, security, and ESG. We help you make informed decisions and build capabilities that scale.",
    items: [
      "Global Capability Centre Set Up Advisory",
      "Digital Maturity Assessment",
      "Intelligent Healthcare",
      "ESG",
    ],
  },
  {
    number: "03",
    title: "Implementation",
    Icon: Settings2,
    description:
      "We deliver technology implementation, AI-led smart health solutions, and product engineering. Our teams support Gen-AI, cloud, cyber security, and data migration and legacy system modernization so you go from strategy to execution.",
    items: [
      "Technology Implementation",
      "Gen-AI, Cloud, Cyber Security",
      "AI led -Smart Health",
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

export function HealthcarePage() {
  return (
    <IndustrySubPageTemplate
      pageTitle="Healthcare"
      heroImage={PAGE_HERO_BACKGROUND}
      accent="green"
      firstSectionVariant="split"
      firstSectionBgImage={HEALTHCARE_BANNER}
      firstSectionTitleColor="#3d819e"
      introTitleMain="Healthcare"
      secondSectionVariant="howWeHelp"
      headline="Reimagining the Future Landscape of Healthcare"
      paragraphs={[
        "Quantum Tech Hub is committed to helping clients deliver more efficient and effective healthcare solutions.",
        "Demographic, technological and fiscal shifts continue to make the effective delivery of health services a challenge for service providers.",
        "Meeting these challenges and improving patient outcomes will result from a wide range of capabilities including strong strategic and commercial skills, performance management, robust reporting frameworks and effective use of technology.",
      ]}
      columns={columns}
    />
  );
}
