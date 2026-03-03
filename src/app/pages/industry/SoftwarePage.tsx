import { PAGE_HERO_BACKGROUND, SOFTWARE_BANNER } from "../../assets/images";
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
      "From Global Capability Centre set-up to cyber security and digital risk strategy, we provide advisory on digital maturity, digital strategy, and ESG. We help you make informed decisions and build capabilities that scale.",
    items: [
      "Global Capability Centre Set Up Advisory",
      "Cyber Security & Digital Risk Strategy",
      "Digital Maturity",
      "Digital Strategy",
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

export function SoftwarePage() {
  return (
    <IndustrySubPageTemplate
      pageTitle="Software & Technology"
      heroImage={PAGE_HERO_BACKGROUND}
      accent="pink"
      firstSectionVariant="split"
      firstSectionBgImage={SOFTWARE_BANNER}
      firstSectionTitleColor="#874f03"
      introTitleMain="Software &"
      introTitleItalic="Technology"
      secondSectionVariant="howWeHelp"
      headline="Help technology companies scale products, platforms, and global delivery without losing control of quality or cost."
      paragraphs={[
        "Shape product and SaaS strategies that are clear on target segments, value propositions, and pricing, so growth is repeatable rather than opportunistic. Design X as a Service and platform models that drive recurring revenue, ecosystem participation, and deeper customer stickiness.",
        "Design and stand up GCCs as hubs for engineering, product R&D, customer success, and operations, not just overflow capacity. Optimise these centres over time for capability depth, agility, and structural cost advantage, with governance that keeps them tightly integrated with product and business teams.",
        "Build cloud architectures, security controls, and data platforms that can handle rapid user and workload growth without constant re-engineering. Standardise environments, APIs, and observability so teams can ship quickly, stay compliant, and learn from usage data in near real time."
           ]}
      columns={columns}
    />
  );
}
