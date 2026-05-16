// SGI Enterprise Content Data - 5 Pillars Structure
import {
  Shield,
  Cloud,
  Server,
  Lock,
  Network,
  Database,
  Monitor,
  Cpu,
  Globe,
  Building2,
  Factory,
  HeartPulse,
  Landmark,
  ShoppingCart,
  Plane,
  GraduationCap,
  Zap,
  Users,
  Clock,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Radio,
  Cog,
  TrendingUp,
  Bot,
  Workflow,
  Settings,
  Eye,
  RefreshCw,
  type LucideIcon,
} from "lucide-react"

// Types
export interface Pillar {
  key: string
  name: string
  tagline: string
  description: string
  icon: LucideIcon
  color: string
  solutions: string[]
}

export interface Solution {
  key: string
  pillar: string
  title: string
  shortTitle: string
  description: string
  longDescription: string
  icon: LucideIcon
  features: string[]
  benefits: string[]
  useCases: string[]
  image: string
}

export interface Industry {
  key: string
  title: string
  shortTitle: string
  description: string
  longDescription: string
  icon: LucideIcon
  challenges: string[]
  solutions: string[]
  caseStudy?: {
    client: string
    challenge: string
    solution: string
    result: string
  }
  image: string
}

export interface ManagedService {
  key: string
  pillar: string
  title: string
  description: string
  icon: LucideIcon
  features: string[]
  image: string
}

export interface MenuItem {
  title: string
  href: string
  description?: string
  icon?: LucideIcon
}

export interface MenuPanel {
  title: string
  items: MenuItem[]
}

// ============================================
// THE 5 PILLARS - Core Framework
// ============================================
export const pillars: Pillar[] = [
  {
    key: "protect",
    name: "PROTECT",
    tagline: "Secure Your Enterprise",
    description: "Comprehensive cybersecurity and threat protection. We safeguard your critical assets, data, and infrastructure against evolving threats with 24/7 monitoring and rapid response.",
    icon: Shield,
    color: "pillar-protect",
    solutions: ["cybersecurity", "identity-access", "managed-security"],
  },
  {
    key: "connect",
    name: "CONNECT",
    tagline: "Unite Your Network",
    description: "Enterprise-grade networking that connects your people, applications, and data. From SD-WAN to 5G, we deliver the connectivity your business demands.",
    icon: Radio,
    color: "pillar-connect",
    solutions: ["network-services", "sd-wan", "unified-communications"],
  },
  {
    key: "operate",
    name: "OPERATE",
    tagline: "Run with Excellence",
    description: "Managed operations that ensure peak performance. Our NOC and SOC teams monitor and manage your infrastructure around the clock so you can focus on your business.",
    icon: Cog,
    color: "pillar-operate",
    solutions: ["managed-noc", "data-center", "managed-endpoint"],
  },
  {
    key: "scale",
    name: "SCALE",
    tagline: "Grow Without Limits",
    description: "Cloud infrastructure and platforms that grow with you. Elastic, resilient, and cost-optimized solutions that scale from startup to enterprise.",
    icon: TrendingUp,
    color: "pillar-scale",
    solutions: ["cloud-infrastructure", "data-analytics", "hybrid-cloud"],
  },
  {
    key: "automate",
    name: "AUTOMATE",
    tagline: "Accelerate Everything",
    description: "Intelligent automation that transforms operations. AI-powered workflows, infrastructure as code, and DevOps practices that eliminate manual toil.",
    icon: Bot,
    color: "pillar-automate",
    solutions: ["automation", "devops", "ai-operations"],
  },
]

// ============================================
// SOLUTIONS - Organized by Pillar
// ============================================
export const solutions: Solution[] = [
  // PROTECT Pillar
  {
    key: "cybersecurity",
    pillar: "protect",
    title: "Enterprise Cybersecurity",
    shortTitle: "Cybersecurity",
    description: "Multi-layered threat protection and security management for modern enterprises.",
    longDescription: "Our enterprise cybersecurity solutions provide comprehensive protection against evolving threats. From advanced threat detection to incident response, we deliver end-to-end security that protects your critical assets and ensures business continuity.",
    icon: Shield,
    features: [
      "24/7 Security Operations Center (SOC)",
      "Advanced Threat Detection & Response",
      "Vulnerability Management",
      "Security Information & Event Management (SIEM)",
      "Penetration Testing & Red Team Services",
      "Compliance & Risk Assessment",
    ],
    benefits: [
      "Reduce security incidents by up to 85%",
      "Achieve regulatory compliance faster",
      "Minimize breach impact and recovery time",
      "Gain complete visibility into security posture",
    ],
    useCases: [
      "Financial institutions protecting customer data",
      "Healthcare organizations securing patient records",
      "Retailers preventing payment fraud",
      "Government agencies defending critical infrastructure",
    ],
    image: "/images/cybersecurity.jpg",
  },
  {
    key: "identity-access",
    pillar: "protect",
    title: "Identity & Access Management",
    shortTitle: "Identity & Access",
    description: "Zero-trust identity solutions that protect access while enabling productivity.",
    longDescription: "Implement zero-trust security with our comprehensive identity and access management solutions. Verify every user, secure every access point, and maintain complete control over digital identities.",
    icon: Lock,
    features: [
      "Single Sign-On (SSO)",
      "Multi-Factor Authentication (MFA)",
      "Privileged Access Management (PAM)",
      "Identity Governance & Administration",
      "Zero Trust Architecture",
      "Biometric Authentication",
    ],
    benefits: [
      "Eliminate password-related breaches",
      "Improve user experience",
      "Ensure regulatory compliance",
      "Reduce IT support burden",
    ],
    useCases: [
      "Organizations with remote workforce",
      "Companies with strict compliance needs",
      "Enterprises managing partner access",
      "Businesses protecting sensitive data",
    ],
    image: "/images/access-control.jpg",
  },
  {
    key: "managed-security",
    pillar: "protect",
    title: "Managed Security Services",
    shortTitle: "Managed Security",
    description: "24/7 security monitoring, threat hunting, and incident response.",
    longDescription: "Our managed security services provide round-the-clock protection with expert analysts monitoring your environment. We detect, investigate, and respond to threats before they impact your business.",
    icon: Eye,
    features: [
      "24/7 SOC Monitoring",
      "Threat Intelligence & Hunting",
      "Incident Response",
      "Log Management & Analytics",
      "Compliance Reporting",
      "Security Advisory Services",
    ],
    benefits: [
      "Continuous threat monitoring",
      "Rapid incident response",
      "Access to security experts",
      "Reduced security overhead",
    ],
    useCases: [
      "Organizations without in-house SOC",
      "Companies needing 24/7 coverage",
      "Enterprises requiring compliance support",
      "Businesses scaling security operations",
    ],
    image: "/images/cctv-security.jpg",
  },

  // CONNECT Pillar
  {
    key: "network-services",
    pillar: "connect",
    title: "Enterprise Network Services",
    shortTitle: "Network Services",
    description: "High-performance networking solutions for the connected enterprise.",
    longDescription: "Build a network infrastructure that supports your digital transformation. Our enterprise network services deliver the speed, reliability, and security needed to connect your people, applications, and data.",
    icon: Network,
    features: [
      "SD-WAN Implementation",
      "Network Security (NGFW, IPS/IDS)",
      "Wi-Fi 6/6E Deployment",
      "Network Monitoring & Analytics",
      "5G Private Networks",
      "Network Automation",
    ],
    benefits: [
      "Improve application performance by 60%",
      "Reduce network downtime",
      "Enable secure remote access",
      "Lower WAN costs significantly",
    ],
    useCases: [
      "Multi-location enterprises",
      "Organizations with hybrid workforce",
      "Companies requiring real-time connectivity",
      "Businesses deploying IoT solutions",
    ],
    image: "/images/network.jpg",
  },
  {
    key: "sd-wan",
    pillar: "connect",
    title: "SD-WAN Solutions",
    shortTitle: "SD-WAN",
    description: "Software-defined networking for agile, secure, and cost-effective connectivity.",
    longDescription: "Transform your WAN with software-defined intelligence. Our SD-WAN solutions provide application-aware routing, integrated security, and centralized management for optimal performance and cost savings.",
    icon: Globe,
    features: [
      "Application-Aware Routing",
      "Integrated Security (SASE)",
      "Multi-Cloud Connectivity",
      "Centralized Orchestration",
      "Real-Time Analytics",
      "Zero-Touch Provisioning",
    ],
    benefits: [
      "Reduce WAN costs by 40%",
      "Improve application performance",
      "Simplify branch deployments",
      "Enable cloud-first architecture",
    ],
    useCases: [
      "Retail chains with many locations",
      "Enterprises migrating to cloud",
      "Companies with distributed workforce",
      "Organizations needing MPLS replacement",
    ],
    image: "/images/connect.jpg",
  },
  {
    key: "unified-communications",
    pillar: "connect",
    title: "Unified Communications",
    shortTitle: "UC & Collaboration",
    description: "Integrated voice, video, and collaboration for the modern workplace.",
    longDescription: "Unify your communications with enterprise-grade voice, video, and collaboration tools. Enable seamless communication across devices, locations, and platforms.",
    icon: Users,
    features: [
      "Enterprise Voice (UCaaS)",
      "Video Conferencing",
      "Team Collaboration Platforms",
      "Contact Center Solutions",
      "Mobile Integration",
      "SIP Trunking",
    ],
    benefits: [
      "Improve team productivity",
      "Reduce communication costs",
      "Enable remote collaboration",
      "Enhance customer experience",
    ],
    useCases: [
      "Enterprises with remote teams",
      "Contact centers modernizing",
      "Companies consolidating communications",
      "Organizations needing mobile-first UC",
    ],
    image: "/images/command-center.jpg",
  },

  // OPERATE Pillar
  {
    key: "managed-noc",
    pillar: "operate",
    title: "Managed NOC Services",
    shortTitle: "Managed NOC",
    description: "24/7 network operations center monitoring and management.",
    longDescription: "Our Network Operations Center provides continuous monitoring, proactive maintenance, and rapid incident resolution to ensure your infrastructure runs at peak performance.",
    icon: Monitor,
    features: [
      "24/7 Infrastructure Monitoring",
      "Proactive Issue Detection",
      "Incident Management",
      "Change Management",
      "Performance Optimization",
      "Capacity Planning",
    ],
    benefits: [
      "99.99% uptime guarantee",
      "Reduced MTTR",
      "Proactive problem resolution",
      "Freed-up internal IT resources",
    ],
    useCases: [
      "Enterprises without 24/7 IT staff",
      "Companies with critical uptime needs",
      "Organizations scaling operations",
      "Businesses requiring SLA compliance",
    ],
    image: "/images/command-center.jpg",
  },
  {
    key: "data-center",
    pillar: "operate",
    title: "Data Center Solutions",
    shortTitle: "Data Center",
    description: "Modern data center infrastructure for optimal performance and efficiency.",
    longDescription: "Our data center solutions combine cutting-edge hardware with intelligent management systems to deliver infrastructure that meets the demands of modern enterprise workloads.",
    icon: Server,
    features: [
      "Hyperconverged Infrastructure (HCI)",
      "Software-Defined Storage",
      "Network Virtualization",
      "Disaster Recovery & Business Continuity",
      "Data Center Consolidation",
      "Green IT & Energy Efficiency",
    ],
    benefits: [
      "Achieve 99.999% uptime",
      "Reduce data center footprint",
      "Lower energy consumption by 30%",
      "Simplify management complexity",
    ],
    useCases: [
      "Enterprises modernizing legacy infrastructure",
      "Organizations building private clouds",
      "Companies requiring high-performance computing",
      "Businesses planning disaster recovery",
    ],
    image: "/images/operate.jpg",
  },
  {
    key: "managed-endpoint",
    pillar: "operate",
    title: "Managed Endpoint Services",
    shortTitle: "Endpoint Management",
    description: "Comprehensive endpoint protection and management for your workforce.",
    longDescription: "Secure and manage every endpoint in your environment with our comprehensive managed endpoint services. From desktops to mobile devices, we ensure protection and compliance.",
    icon: Cpu,
    features: [
      "Endpoint Detection & Response (EDR)",
      "Patch Management",
      "Device Management (MDM/UEM)",
      "Remote Support",
      "Asset Management",
      "Compliance Enforcement",
    ],
    benefits: [
      "Protect all endpoints",
      "Ensure compliance",
      "Reduce support burden",
      "Enable secure remote work",
    ],
    useCases: [
      "Distributed workforce environments",
      "BYOD organizations",
      "Companies with compliance requirements",
      "Enterprises with diverse device fleet",
    ],
    image: "/images/managed-operations.jpg",
  },

  // SCALE Pillar
  {
    key: "cloud-infrastructure",
    pillar: "scale",
    title: "Cloud Infrastructure Services",
    shortTitle: "Cloud Infrastructure",
    description: "Scalable, secure cloud solutions designed for enterprise performance.",
    longDescription: "Transform your IT infrastructure with our enterprise-grade cloud services. We design, deploy, and manage cloud environments that deliver the scalability, reliability, and security your business demands.",
    icon: Cloud,
    features: [
      "Multi-Cloud Architecture Design",
      "Cloud Migration & Modernization",
      "Infrastructure as Code (IaC)",
      "Container Orchestration (Kubernetes)",
      "Serverless Computing Solutions",
      "Cloud Cost Optimization",
    ],
    benefits: [
      "Reduce infrastructure costs by 40%",
      "Scale resources on demand",
      "Improve application performance",
      "Accelerate time-to-market",
    ],
    useCases: [
      "E-commerce platforms handling peak traffic",
      "SaaS companies scaling globally",
      "Media companies processing large files",
      "Startups building MVPs quickly",
    ],
    image: "/images/cloud-continuity.jpg",
  },
  {
    key: "data-analytics",
    pillar: "scale",
    title: "Data & Analytics Platform",
    shortTitle: "Data Analytics",
    description: "Turn your data into actionable insights with advanced analytics.",
    longDescription: "Unlock the power of your data with our comprehensive analytics platform. From data warehousing to AI-powered insights, we help you make data-driven decisions that drive business growth.",
    icon: Database,
    features: [
      "Enterprise Data Warehouse",
      "Business Intelligence & Visualization",
      "Machine Learning & AI Integration",
      "Real-Time Data Processing",
      "Data Governance & Quality",
      "Predictive Analytics",
    ],
    benefits: [
      "Make faster, data-driven decisions",
      "Identify trends and opportunities",
      "Optimize operational efficiency",
      "Predict customer behavior",
    ],
    useCases: [
      "Retailers optimizing inventory",
      "Financial firms analyzing risk",
      "Healthcare improving patient outcomes",
      "Manufacturers predicting maintenance",
    ],
    image: "/images/scale.jpg",
  },
  {
    key: "hybrid-cloud",
    pillar: "scale",
    title: "Hybrid Cloud Solutions",
    shortTitle: "Hybrid Cloud",
    description: "Seamlessly integrate on-premises and cloud infrastructure.",
    longDescription: "Bridge your data center and cloud environments with our hybrid cloud solutions. Maintain control over sensitive workloads while leveraging the scalability and innovation of public cloud.",
    icon: RefreshCw,
    features: [
      "Hybrid Cloud Architecture",
      "Workload Portability",
      "Unified Management",
      "Data Sovereignty Controls",
      "Burst Capacity",
      "DR & Backup Integration",
    ],
    benefits: [
      "Best of both worlds",
      "Maintain data control",
      "Optimize costs",
      "Enable gradual migration",
    ],
    useCases: [
      "Regulated industries with data residency",
      "Enterprises with legacy applications",
      "Organizations with variable workloads",
      "Companies planning cloud transition",
    ],
    image: "/images/cloud-continuity.jpg",
  },

  // AUTOMATE Pillar
  {
    key: "automation",
    pillar: "automate",
    title: "IT Automation & Orchestration",
    shortTitle: "Automation",
    description: "Intelligent automation that eliminates manual toil and accelerates delivery.",
    longDescription: "Transform your operations with intelligent automation. From infrastructure provisioning to application deployment, we help you automate repetitive tasks and accelerate delivery.",
    icon: Workflow,
    features: [
      "Infrastructure as Code (IaC)",
      "Configuration Management",
      "CI/CD Pipeline Automation",
      "Runbook Automation",
      "Self-Service Portals",
      "Event-Driven Automation",
    ],
    benefits: [
      "Reduce manual effort by 80%",
      "Eliminate human error",
      "Accelerate deployments",
      "Improve consistency",
    ],
    useCases: [
      "DevOps teams scaling operations",
      "IT departments reducing toil",
      "Organizations standardizing processes",
      "Companies accelerating delivery",
    ],
    image: "/images/automation.jpg",
  },
  {
    key: "devops",
    pillar: "automate",
    title: "DevOps & Platform Engineering",
    shortTitle: "DevOps",
    description: "Modern DevOps practices and platform engineering for faster delivery.",
    longDescription: "Accelerate software delivery with DevOps best practices and platform engineering. We help you build internal developer platforms that enable self-service and rapid iteration.",
    icon: Settings,
    features: [
      "CI/CD Pipeline Design",
      "Container & Kubernetes Strategy",
      "GitOps Implementation",
      "Developer Experience (DevEx)",
      "Platform Engineering",
      "Site Reliability Engineering (SRE)",
    ],
    benefits: [
      "Faster time-to-market",
      "Improved developer productivity",
      "Higher deployment frequency",
      "Reduced change failure rate",
    ],
    useCases: [
      "Software companies modernizing",
      "Enterprises adopting cloud-native",
      "Organizations scaling development",
      "Companies improving reliability",
    ],
    image: "/images/automate.jpg",
  },
  {
    key: "ai-operations",
    pillar: "automate",
    title: "AIOps & Intelligent Operations",
    shortTitle: "AIOps",
    description: "AI-powered operations for predictive insights and automated remediation.",
    longDescription: "Harness the power of AI for IT operations. Our AIOps solutions provide predictive insights, anomaly detection, and automated remediation to transform how you manage infrastructure.",
    icon: Bot,
    features: [
      "Anomaly Detection",
      "Predictive Analytics",
      "Automated Remediation",
      "Event Correlation",
      "Root Cause Analysis",
      "Capacity Prediction",
    ],
    benefits: [
      "Predict issues before impact",
      "Reduce alert noise by 90%",
      "Automate incident response",
      "Optimize resource utilization",
    ],
    useCases: [
      "Large-scale IT environments",
      "Organizations overwhelmed by alerts",
      "Companies needing predictive capabilities",
      "Enterprises optimizing operations",
    ],
    image: "/images/command-center.jpg",
  },
]

// ============================================
// INDUSTRIES
// ============================================
export const industries: Industry[] = [
  {
    key: "financial-services",
    title: "Financial Services",
    shortTitle: "Financial",
    description: "Secure, compliant solutions for banks, insurers, and financial institutions.",
    longDescription: "The financial services industry demands the highest levels of security, compliance, and reliability. Our solutions help financial institutions protect sensitive data, meet regulatory requirements, and deliver exceptional customer experiences.",
    icon: Landmark,
    challenges: [
      "Evolving regulatory requirements (PCI-DSS, SOX, GDPR)",
      "Sophisticated cyber threats targeting financial data",
      "Legacy system modernization",
      "Customer demand for digital services",
    ],
    solutions: [
      "Regulatory compliance automation",
      "Advanced fraud detection systems",
      "Secure digital banking platforms",
      "Real-time transaction monitoring",
    ],
    caseStudy: {
      client: "Regional Banking Institution",
      challenge: "Needed to modernize legacy infrastructure while maintaining 24/7 operations",
      solution: "Implemented phased cloud migration with zero-downtime deployment",
      result: "40% reduction in operating costs, 99.99% uptime achieved",
    },
    image: "/images/commercial-offices.jpg",
  },
  {
    key: "healthcare",
    title: "Healthcare & Life Sciences",
    shortTitle: "Healthcare",
    description: "HIPAA-compliant solutions that improve patient care and operational efficiency.",
    longDescription: "Healthcare organizations face unique challenges in protecting patient data while improving care delivery. Our solutions enable secure data sharing, streamline operations, and support innovative care models.",
    icon: HeartPulse,
    challenges: [
      "HIPAA compliance and data privacy",
      "Interoperability between systems",
      "Telehealth and remote care demands",
      "Protecting against ransomware attacks",
    ],
    solutions: [
      "Secure health information exchange",
      "Telehealth infrastructure",
      "Medical device security",
      "Healthcare analytics platforms",
    ],
    caseStudy: {
      client: "Multi-Hospital Health System",
      challenge: "Secure patient data across 12 facilities while enabling collaboration",
      solution: "Deployed unified security platform with identity management",
      result: "Zero breaches in 3 years, 50% faster data access for clinicians",
    },
    image: "/images/healthcare-care.jpg",
  },
  {
    key: "manufacturing",
    title: "Manufacturing & Industrial",
    shortTitle: "Manufacturing",
    description: "Smart manufacturing solutions that drive efficiency and innovation.",
    longDescription: "The manufacturing sector is undergoing digital transformation. Our solutions help manufacturers embrace Industry 4.0 with secure, connected operations that improve efficiency and enable innovation.",
    icon: Factory,
    challenges: [
      "OT/IT convergence security risks",
      "Supply chain visibility",
      "Legacy equipment integration",
      "Skills gap in new technologies",
    ],
    solutions: [
      "Industrial IoT security",
      "Smart factory infrastructure",
      "Supply chain analytics",
      "Predictive maintenance systems",
    ],
    caseStudy: {
      client: "Global Automotive Manufacturer",
      challenge: "Secure 50+ production facilities across 3 continents",
      solution: "Implemented unified OT security platform with real-time monitoring",
      result: "85% reduction in security incidents, 20% improvement in OEE",
    },
    image: "/images/warehousing.jpg",
  },
  {
    key: "retail",
    title: "Retail & E-Commerce",
    shortTitle: "Retail",
    description: "Omnichannel solutions that create seamless customer experiences.",
    longDescription: "Modern retail requires seamless integration between physical and digital channels. Our solutions help retailers protect customer data, optimize operations, and deliver personalized experiences.",
    icon: ShoppingCart,
    challenges: [
      "PCI-DSS compliance for payment data",
      "Omnichannel inventory management",
      "Customer data privacy",
      "Seasonal traffic scaling",
    ],
    solutions: [
      "Secure payment processing",
      "Scalable e-commerce infrastructure",
      "Customer analytics platforms",
      "Unified commerce solutions",
    ],
    caseStudy: {
      client: "National Retail Chain",
      challenge: "Handle 10x traffic during holiday season without downtime",
      solution: "Built auto-scaling cloud infrastructure with edge computing",
      result: "Zero downtime during Black Friday, 35% increase in conversions",
    },
    image: "/images/retail-restaurants.jpg",
  },
  {
    key: "government",
    title: "Government & Public Sector",
    shortTitle: "Government",
    description: "FedRAMP-ready solutions that serve citizens securely.",
    longDescription: "Government agencies must balance citizen service delivery with stringent security requirements. Our solutions meet the highest compliance standards while enabling digital government initiatives.",
    icon: Building2,
    challenges: [
      "FedRAMP, FISMA, and StateRAMP compliance",
      "Protecting critical infrastructure",
      "Legacy system modernization",
      "Citizen service digitization",
    ],
    solutions: [
      "FedRAMP-authorized cloud services",
      "Zero trust security architecture",
      "Citizen identity verification",
      "Secure collaboration platforms",
    ],
    image: "/images/smart-buildings.jpg",
  },
  {
    key: "education",
    title: "Education & Research",
    shortTitle: "Education",
    description: "Secure learning environments that enable innovation and collaboration.",
    longDescription: "Educational institutions need to protect student data while enabling collaboration and innovation. Our solutions secure the modern campus while supporting research and learning initiatives.",
    icon: GraduationCap,
    challenges: [
      "FERPA compliance for student data",
      "Remote learning infrastructure",
      "Research data protection",
      "Campus network security",
    ],
    solutions: [
      "Secure learning management systems",
      "Research computing infrastructure",
      "Campus identity management",
      "Student data protection",
    ],
    image: "/images/commercial-offices.jpg",
  },
]

// ============================================
// MANAGED SERVICES - By Pillar
// ============================================
export const managedServices: ManagedService[] = [
  {
    key: "managed-soc",
    pillar: "protect",
    title: "Managed SOC",
    description: "24/7 security operations center monitoring and threat response.",
    icon: Shield,
    features: ["Threat Monitoring", "Incident Response", "Threat Intelligence", "Compliance Reporting"],
    image: "/images/SOC.jpg",
  },
  {
    key: "managed-network",
    pillar: "connect",
    title: "Managed Network",
    description: "End-to-end network management and optimization.",
    icon: Network,
    features: ["Network Monitoring", "Performance Management", "Configuration Management", "Network Security"],
    image: "/images/network-operations.jpg",
  },
  {
    key: "managed-noc-service",
    pillar: "operate",
    title: "Managed NOC",
    description: "24/7 network operations center for infrastructure management.",
    icon: Monitor,
    features: ["Infrastructure Monitoring", "Incident Management", "Change Management", "Performance Optimization"],
    image: "/images/NOC.jpg",
  },
  {
    key: "managed-cloud-service",
    pillar: "scale",
    title: "Managed Cloud",
    description: "Complete cloud management including optimization and support.",
    icon: Cloud,
    features: ["Cloud Management", "Cost Optimization", "Security & Compliance", "24/7 Support"],
    image: "/images/cloud-continuity.jpg",
  },
  {
    key: "managed-automation",
    pillar: "automate",
    title: "Managed Automation",
    description: "Automation-as-a-service for continuous improvement.",
    icon: Bot,
    features: ["Automation Development", "Pipeline Management", "Continuous Improvement", "Training & Enablement"],
    image: "/images/automation.jpg",
  },
]

// ============================================
// NAVIGATION MENU PANELS
// ============================================
export const menuPanels: Record<string, MenuPanel[]> = {
  solutions: [
    {
      title: "PROTECT",
      items: [
        { title: "Cybersecurity", href: "/solutions/cybersecurity", description: "Enterprise threat protection", icon: Shield },
        { title: "Identity & Access", href: "/solutions/identity-access", description: "Zero-trust security", icon: Lock },
        { title: "Managed Security", href: "/solutions/managed-security", description: "24/7 SOC services", icon: Eye },
      ],
    },
    {
      title: "CONNECT",
      items: [
        { title: "Network Services", href: "/solutions/network-services", description: "Enterprise networking", icon: Network },
        { title: "SD-WAN", href: "/solutions/sd-wan", description: "Software-defined WAN", icon: Globe },
        { title: "Unified Communications", href: "/solutions/unified-communications", description: "Voice & collaboration", icon: Users },
      ],
    },
    {
      title: "OPERATE",
      items: [
        { title: "Managed NOC", href: "/solutions/managed-noc", description: "24/7 operations center", icon: Monitor },
        { title: "Data Center", href: "/solutions/data-center", description: "Modern infrastructure", icon: Server },
        { title: "Endpoint Management", href: "/solutions/managed-endpoint", description: "Device protection", icon: Cpu },
      ],
    },
    {
      title: "SCALE",
      items: [
        { title: "Cloud Infrastructure", href: "/solutions/cloud-infrastructure", description: "Scalable cloud", icon: Cloud },
        { title: "Data Analytics", href: "/solutions/data-analytics", description: "AI-powered insights", icon: Database },
        { title: "Hybrid Cloud", href: "/solutions/hybrid-cloud", description: "Integrated cloud", icon: RefreshCw },
      ],
    },
    {
      title: "AUTOMATE",
      items: [
        { title: "IT Automation", href: "/solutions/automation", description: "Orchestration & IaC", icon: Workflow },
        { title: "DevOps", href: "/solutions/devops", description: "Platform engineering", icon: Settings },
        { title: "AIOps", href: "/solutions/ai-operations", description: "Intelligent operations", icon: Bot },
      ],
    },
  ],
  industries: [
    {
      title: "Regulated Industries",
      items: [
        { title: "Financial Services", href: "/industries/financial-services", description: "Banking & insurance", icon: Landmark },
        { title: "Healthcare", href: "/industries/healthcare", description: "Health & life sciences", icon: HeartPulse },
        { title: "Government", href: "/industries/government", description: "Public sector", icon: Building2 },
      ],
    },
    {
      title: "Commercial Industries",
      items: [
        { title: "Manufacturing", href: "/industries/manufacturing", description: "Industrial & smart factory", icon: Factory },
        { title: "Retail", href: "/industries/retail", description: "Retail & e-commerce", icon: ShoppingCart },
        { title: "Education", href: "/industries/education", description: "Education & research", icon: GraduationCap },
      ],
    },
  ],
  services: [
    {
      title: "Managed Services by Pillar",
      items: [
        { title: "Managed SOC", href: "/services/managed-soc", description: "PROTECT: 24/7 security", icon: Shield },
        { title: "Managed Network", href: "/services/managed-network", description: "CONNECT: Network ops", icon: Network },
        { title: "Managed NOC", href: "/services/managed-noc-service", description: "OPERATE: Infrastructure", icon: Monitor },
        { title: "Managed Cloud", href: "/services/managed-cloud-service", description: "SCALE: Cloud management", icon: Cloud },
        { title: "Managed Automation", href: "/services/managed-automation", description: "AUTOMATE: DevOps & IaC", icon: Bot },
      ],
    },
  ],
}

// ============================================
// PARTNER LOGOS
// ============================================
export const partnerNames = [
  "Microsoft",
  "AWS",
  "Google Cloud",
  "Cisco",
  "Palo Alto Networks",
  "CrowdStrike",
  "Splunk",
  "ServiceNow",
  "Okta",
  "VMware",
  "Dell Technologies",
  "HPE",
  "Fortinet",
  "Zscaler",
]

// ============================================
// STATS
// ============================================
export const stats = [
  { value: "340+", label: "Enterprise Clients", icon: Building2 },
  { value: "99.99%", label: "Uptime SLA", icon: Zap },
  { value: "24/7", label: "Expert Support", icon: Clock },
  { value: "50+", label: "Industry Awards", icon: Award },
]

// ============================================
// COMPANY INFO
// ============================================
export const companyInfo = {
  name: "SmartGuard Innovations",
  shortName: "SGI",
  tagline: "Enterprise Infrastructure & Security",
  description: "SmartGuard Innovations designs, deploys and manages IT, network, security, cloud continuity and managed operational infrastructure across Canada.",
  mission: "Secure. Connected. Managed.",
  contact: {
    phone: "437-922-1449",
    phoneAlt: "289-892-5694",
    email: "info@smartguardinnovations.ca",
    address: "Toronto, Ontario, Canada",
  },
  social: {
    linkedin: "https://linkedin.com/company/smartguard-innovations",
    twitter: "https://twitter.com/smartguardinnov",
  },
}

// ============================================
// FOOTER LINKS
// ============================================
export const footerLinks = {
  pillars: [
    { title: "Protect", href: "/solutions?pillar=protect" },
    { title: "Connect", href: "/solutions?pillar=connect" },
    { title: "Operate", href: "/solutions?pillar=operate" },
    { title: "Scale", href: "/solutions?pillar=scale" },
    { title: "Automate", href: "/solutions?pillar=automate" },
  ],
  industries: [
    { title: "Financial Services", href: "/industries/financial-services" },
    { title: "Healthcare", href: "/industries/healthcare" },
    { title: "Manufacturing", href: "/industries/manufacturing" },
    { title: "Retail", href: "/industries/retail" },
    { title: "Government", href: "/industries/government" },
    { title: "Education", href: "/industries/education" },
  ],
  company: [
    { title: "About SGI", href: "/about" },
    { title: "Partners", href: "/partners" },
    { title: "Resources", href: "/resources" },
    { title: "Contact", href: "/contact" },
  ],
}

// Helper function to get solutions by pillar
export function getSolutionsByPillar(pillarKey: string): Solution[] {
  return solutions.filter(s => s.pillar === pillarKey)
}

// Helper function to get pillar by key
export function getPillarByKey(key: string): Pillar | undefined {
  return pillars.find(p => p.key === key)
}

// Helper function to get solution by key
export function getSolutionByKey(key: string): Solution | undefined {
  return solutions.find(s => s.key === key)
}

// Helper function to get industry by key
export function getIndustryByKey(key: string): Industry | undefined {
  return industries.find(i => i.key === key)
}
