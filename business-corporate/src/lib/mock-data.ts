import {
  Activity,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Gauge,
  Gem,
  Globe2,
  Layers3,
  MessageSquareText,
  PencilRuler,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

export type ServiceItem = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type PricingPlan = {
  tier: string;
  price: string;
  summary: string;
  features: string[];
  featured?: boolean;
};

export type LeadStatus = "New" | "Contacted" | "Closed";

export type Enquiry = {
  id: string;
  name: string;
  company: string;
  service: string;
  status: LeadStatus;
  email: string;
  budget: string;
  date: string;
  notes: string;
};

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Admin", href: "/admin" },
] as const;

export const services: ServiceItem[] = [
  {
    title: "Brand Positioning",
    description:
      "Sharper category narratives, authority messaging, and executive-level thought leadership.",
    icon: Gem,
  },
  {
    title: "Corporate Websites",
    description:
      "Investor-ready digital experiences built to communicate trust, scale, and commercial clarity.",
    icon: Building2,
  },
  {
    title: "Demand Generation",
    description:
      "Performance campaigns, lead funnels, and conversion systems aligned to high-value sales cycles.",
    icon: TrendingUp,
  },
  {
    title: "Content Systems",
    description:
      "Editorial frameworks, conversion copy, and governance that keep teams publishing with consistency.",
    icon: Layers3,
  },
  {
    title: "Analytics & Insight",
    description:
      "Executive dashboards and attribution models that expose what is actually moving revenue.",
    icon: BarChart3,
  },
  {
    title: "Market Expansion",
    description:
      "Launch architecture for new geographies, verticals, and flagship service lines.",
    icon: Globe2,
  },
];

export const processTimeline = [
  {
    phase: "01",
    title: "Discovery & Boardroom Alignment",
    description:
      "We audit brand perception, sales friction, analytics maturity, and stakeholder priorities.",
  },
  {
    phase: "02",
    title: "Strategy & Editorial Direction",
    description:
      "Narrative architecture, page strategy, conversion pathways, and visual references are defined.",
  },
  {
    phase: "03",
    title: "Design & Experience Production",
    description:
      "We design cinematic interfaces with premium motion, content hierarchy, and mobile precision.",
  },
  {
    phase: "04",
    title: "Launch & Optimization",
    description:
      "Post-launch reporting, content governance, and continuous CRO keep the system commercially useful.",
  },
] as const;

export const pricingPlans: PricingPlan[] = [
  {
    tier: "Signature Launch",
    price: "$8,500",
    summary: "For emerging firms needing a premium digital foundation.",
    features: ["5 core pages", "Messaging workshop", "Launch analytics", "2 rounds of refinement"],
  },
  {
    tier: "Growth Platform",
    price: "$16,000",
    summary: "For established teams building a scalable lead-generation engine.",
    features: ["10+ page ecosystem", "CRM-ready lead flows", "Dashboard setup", "Content governance"],
    featured: true,
  },
  {
    tier: "Executive Partner",
    price: "Custom",
    summary: "For multi-service organizations with ongoing strategic and creative support.",
    features: ["Quarterly strategy sprints", "Ongoing design retainers", "Campaign support", "Dedicated advisory"],
  },
];

export const team = [
  {
    name: "Ari Mercer",
    role: "Managing Director",
    bio: "Shapes positioning, executive narratives, and commercial roadmap alignment.",
  },
  {
    name: "Clara Wynn",
    role: "Creative Lead",
    bio: "Directs visual systems, interaction style, and editorial polish across launch programs.",
  },
  {
    name: "Jordan Vale",
    role: "Growth Strategist",
    bio: "Owns conversion architecture, funnel reporting, and campaign integration.",
  },
  {
    name: "Nina Hart",
    role: "Client Partner",
    bio: "Keeps stakeholder feedback loops crisp and delivery moving at boardroom pace.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "K2 gave our firm the kind of digital presence clients expect before they ever take the first meeting.",
    author: "Elena Park",
    title: "Chief Strategy Officer, Northline Advisory",
  },
  {
    quote:
      "The site stopped feeling like marketing collateral and started performing like a revenue asset.",
    author: "Marcus Reid",
    title: "VP Growth, Ashton Capital Partners",
  },
  {
    quote:
      "Their team translated complex B2B services into something prestigious, clear, and conversion-ready.",
    author: "Sofia Bennett",
    title: "Managing Partner, Bennett & Rowe",
  },
] as const;

export const kpis = [
  {
    label: "Total Leads",
    value: "1,284",
    change: "+18.2%",
    icon: Users,
  },
  {
    label: "Messages",
    value: "342",
    change: "+9.4%",
    icon: MessageSquareText,
  },
  {
    label: "Page Views",
    value: "48.6K",
    change: "+27.8%",
    icon: Activity,
  },
] as const;

export const enquiries: Enquiry[] = [
  {
    id: "LD-1024",
    name: "Avery Cole",
    company: "Summit Ridge Group",
    service: "Corporate Website",
    status: "New",
    email: "avery@summitridge.com",
    budget: "$15k - $25k",
    date: "2026-03-18",
    notes: "Needs a fast relaunch before private equity roadshow in Q2.",
  },
  {
    id: "LD-1025",
    name: "Priya Nair",
    company: "Nair Biologics",
    service: "Brand Positioning",
    status: "Contacted",
    email: "priya@nairbio.com",
    budget: "$25k+",
    date: "2026-03-17",
    notes: "Founder-led brand refresh with investor credibility concerns.",
  },
  {
    id: "LD-1026",
    name: "Daniel Foster",
    company: "Foster Infrastructure",
    service: "Demand Generation",
    status: "Closed",
    email: "dfoster@fosterinfra.com",
    budget: "$8k - $15k",
    date: "2026-03-15",
    notes: "Closed after procurement moved project to internal marketing ops.",
  },
  {
    id: "LD-1027",
    name: "Lena Brooks",
    company: "Peregrine Legal",
    service: "Content Systems",
    status: "New",
    email: "lena@peregrinelegal.com",
    budget: "$10k - $20k",
    date: "2026-03-14",
    notes: "Requires multilingual content publishing and practice-area templates.",
  },
];

export const dashboardHighlights = [
  {
    title: "Avg. Response Time",
    value: "46 min",
    icon: Gauge,
  },
  {
    title: "Close Rate",
    value: "34%",
    icon: ShieldCheck,
  },
  {
    title: "Pipeline Value",
    value: "$214K",
    icon: BriefcaseBusiness,
  },
] as const;

export const contentEditorSeed = {
  heroHeadline: "Prestige-led digital experiences for modern firms with serious ambitions.",
  services: services.map((service) => service.title),
  teamMembers: team.map((member) => `${member.name} - ${member.role}`),
};

export const adminQuickLinks = [
  {
    title: "Lead pipeline",
    description: "Review recent enquiries and update disposition without leaving the dashboard.",
    href: "/admin/leads",
    icon: ArrowUpRight,
  },
  {
    title: "Content control",
    description: "Adjust hero messaging, service labels, and team roster from one panel.",
    href: "/admin/content",
    icon: PencilRuler,
  },
  {
    title: "Campaign pulse",
    description: "Monitor visibility, engagement, and conversion signals across priority pages.",
    href: "/admin",
    icon: Sparkles,
  },
] as const;
