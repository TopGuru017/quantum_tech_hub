import React from "react";
import { createBrowserRouter, Navigate } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { LeadershipPage } from "./pages/LeadershipPage";
import { IndustryAuthorityPage } from "./pages/IndustryAuthorityPage";
import { TelecomPage } from "./pages/industry/TelecomPage";
import { EnergyPage } from "./pages/industry/EnergyPage";
import { SoftwarePage } from "./pages/industry/SoftwarePage";
import { ManufacturingPage } from "./pages/industry/ManufacturingPage";
import { HealthcarePage } from "./pages/industry/HealthcarePage";
import { DigitalFusionPage } from "./pages/DigitalFusionPage";
import { WhatWeDoPage } from "./pages/WhatWeDoPage";
import { TransformationConsultingPage } from "./pages/digital-fusion/TransformationConsultingPage";
import { CloudStrategyPage } from "./pages/digital-fusion/CloudStrategyPage";
import { MaturityAssessmentPage } from "./pages/digital-fusion/MaturityAssessmentPage";
import { GenAIPage } from "./pages/digital-fusion/GenAIPage";
import { AIPage } from "./pages/digital-fusion/AIPage";
import { CyberSecurityPage } from "./pages/digital-fusion/CyberSecurityPage";
import { GlobalValueEnginePage } from "./pages/GlobalValueEnginePage";
import { TransformationCapitalPage } from "./pages/TransformationCapitalPage";
import { OutsourcingPage } from "./pages/global-value-engine/OutsourcingPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { ContactPage } from "./pages/ContactPage";
import { PlaceholderPage } from "./pages/PlaceholderPage";
import { USAPage } from "./pages/about/USAPage";
import { GermanyPage } from "./pages/about/GermanyPage";
import { FinlandPage } from "./pages/about/FinlandPage";
import { SaudiArabiaPage } from "./pages/about/SaudiArabiaPage";
import { AustraliaPage } from "./pages/about/AustraliaPage";
import { IndiaPage } from "./pages/about/IndiaPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "about/usa", Component: USAPage },
      { path: "about/germany", Component: GermanyPage },
      { path: "about/finland", Component: FinlandPage },
      { path: "about/saudi-arabia", Component: SaudiArabiaPage },
      { path: "about/australia", Component: AustraliaPage },
      { path: "about/india", Component: IndiaPage },
      { path: "about/leadership", Component: LeadershipPage },
      { path: "industry", Component: IndustryAuthorityPage },
      { path: "industry/telecom", Component: TelecomPage },
      { path: "industry/energy", Component: EnergyPage },
      { path: "industry/software", Component: SoftwarePage },
      { path: "industry/manufacturing", Component: ManufacturingPage },
      { path: "industry/healthcare", Component: HealthcarePage },
      { path: "digital-fusion", Component: DigitalFusionPage },
      { path: "what-we-do", Component: WhatWeDoPage },
      { path: "digital-fusion/transformation-consulting", Component: TransformationConsultingPage },
      { path: "digital-fusion/cloud-strategy", Component: CloudStrategyPage },
      { path: "digital-fusion/maturity-assessment", Component: MaturityAssessmentPage },
      { path: "digital-fusion/gen-ai", Component: GenAIPage },
      { path: "digital-fusion/ai", Component: AIPage },
      { path: "digital-fusion/cyber-security", Component: CyberSecurityPage },
      { path: "global-value-engine", Component: GlobalValueEnginePage },
      { path: "transformation-capital", Component: TransformationCapitalPage },
      { path: "global-value-engine/outsourcing", Component: OutsourcingPage },
      { path: "resources", Component: ResourcesPage },
      { path: "contact", Component: ContactPage },
      { path: "privacy", element: <PlaceholderPage title="Privacy Policy" /> },
      { path: "terms", element: <PlaceholderPage title="Terms of Service" /> },
      { path: "cookies", element: <PlaceholderPage title="Cookie Policy" /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);
