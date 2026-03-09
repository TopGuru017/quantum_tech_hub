import React from "react";
import { TELECOM_BANNER, TELECOM_VIDEO } from "../../assets/images";
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
      "Product Engineering",
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

export function TelecomPage() {
  return (
    <IndustrySubPageTemplate
      pageTitle="Telecommunication & Media"
      heroImage={TELECOM_BANNER}
      accent="teal"
      pageBackgroundColor="#fdfbe8"
      firstSectionBgColor="#7d6325"
      firstSectionVariant="split"
      firstSectionVideo={TELECOM_VIDEO}
      introTitleMain="Telecommunication &"
      introTitleItalic="Media"
      secondSectionVariant="howWeHelp"
      headline="Fixed, mobile, satellite, and broadband communications each offer distinct yet equally significant opportunities and challenges."
      paragraphs={[
        "Shape 5G, fibre and edge enabled business models and rollout strategies, from concept through business case and roadmap.",
        "Design and implement cloud native network and platform architectures with embedded data integrity, observability and automation across key processes.",
        "Enable cybersecurity, data governance and monetisation, and AI powered customer engagement journeys that turn network and usage data into real time, personalised experiences.",
        "Provide end to end advisory and implementation support – from strategy and operating model through solution design, delivery, and continuous optimisation.",
        "Create telecom focused GCCs as strategic hubs for network, platform, and customer experience innovation. Concentrated expertise in network engineering, cloud, data, and automation accelerates new service rollout and continuous optimisation of global operations."
      ]}
      columns={columns}
    />
  );
}
