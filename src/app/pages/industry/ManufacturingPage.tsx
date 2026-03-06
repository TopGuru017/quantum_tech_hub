import React from "react";
import { PAGE_HERO_BACKGROUND, MANUFACTURING_VIDEO } from "../../assets/images";
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
      "We support technology modernization, corporate strategy and transformation, data risk and security, and enterprise risk management. Our consulting practice helps you leverage Gen-AI, cloud, and cyber security to align technology with business goals.",
    items: [
      "Technology Modernization",
      "Corporate Strategy & Transformation",
      "Data Risk & Security Management",
      "Gen-AI, Cloud, Cyber Security",
      "Enterprise Risk Management",
    ],
  },
  {
    number: "02",
    title: "Advisory",
    Icon: Users,
    description:
      "From Global Capability Centre set-up to cyber security and digital risk strategy, we provide advisory on smart factory, digital strategy, and ESG. We help you make informed decisions and build capabilities that scale.",
    items: [
      "Global Capability Centre Set Up Advisory",
      "Cyber Security & Digital Risk Strategy",
      "Smart Factory",
      "ESG",
      "Digital Strategy",
    ],
  },
  {
    number: "03",
    title: "Implementation",
    Icon: Settings2,
    description:
      "We deliver technology implementation, data analytics and predictive maintenance, and product engineering. Our teams support Gen-AI, cloud, and cyber security so you go from strategy to execution.",
    items: [
      "Technology Implementation",
      "Gen-AI, Cloud, Cyber Security",
      "Data Analytics, Predictive Maintenance",
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

export function ManufacturingPage() {
  return (
    <IndustrySubPageTemplate
      pageTitle="Smart Manufacturing"
      heroImage={PAGE_HERO_BACKGROUND}
      accent="teal"
      pageBackgroundColor="#fdfbe8"
      firstSectionVariant="split"
      firstSectionVideo={MANUFACTURING_VIDEO}
      introTitleMain="Smart"
      introTitleItalic="Manufacturing"
      secondSectionVariant="howWeHelp"
      headline="Support manufacturers in building connected, intelligent factories where data, automation, and people work as one system."
      paragraphs={[
        "Shape Industry 4.0 roadmaps that clearly link investments in IIoT and automation to throughput, quality, and cost outcomes. Deploy sensors and connected devices on critical assets to enable real time insight and targeted automation, rather than technology for its own sake.",
        "Connect demand, production, and supply planning so teams work from one version of the truth. Improve visibility across the supply chain and embed digital quality controls to cut disruption, rework, and waste.", 
        "Protect plants with OT aware cybersecurity and reliability practices designed for 24x7 operations. Use data, analytics, and digital twins to move towards predictive maintenance and to test changes virtually before touching the shop floor.",
      ]}
      columns={columns}
    />
  );
}
