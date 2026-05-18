"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Shield, Radio, Cog, TrendingUp, Bot, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const pillarsData = [
  {
    key: "protect",
    name: "PROTECT",
    tagline: "Secure Your Enterprise",
    headline: "Advanced Threat Protection",
    description: "Multi-layered defense systems that safeguard your critical assets with AI-powered threat detection and 24/7 monitoring.",
    icon: Shield,
    color: "#DC2626",
    image: "/images/protect.jpg",
    stats: [
      { value: "99.9%", label: "Threat Detection" },
      { value: "<15min", label: "Response Time" },
      { value: "24/7", label: "SOC Monitoring" },
    ],
   solutions: [
  { name: "Enterprise Cybersecurity", key: "cybersecurity", desc: "SIEM, threat hunting, vulnerability management" },
  { name: "Identity & Access", key: "identity-access", desc: "Zero-trust architecture, SSO, MFA" },
  { name: "Managed Security", key: "managed-security", desc: "24/7 SOC, incident response" },
],
  },
  {
    key: "connect",
    name: "CONNECT",
    tagline: "Unite Your Network",
    headline: "Enterprise Connectivity",
    description: "High-performance networking solutions ensuring your people and data are always connected with optimal performance.",
    icon: Radio,
    color: "#F59E0B",
    image: "/images/connect.jpg",
    stats: [
      { value: "99.99%", label: "Network Uptime" },
      { value: "60%", label: "Latency Reduced" },
      { value: "40%", label: "Cost Savings" },
    ],
    solutions: [
  { name: "Network Services", key: "network-services", desc: "LAN/WAN, Wi-Fi 6E, 5G networks" },
  { name: "SD-WAN Solutions", key: "sd-wan", desc: "Application-aware routing, SASE" },
  { name: "Unified Communications", key: "unified-communications", desc: "UCaaS, video, contact center" },
],
  },
  {
    key: "operate",
    name: "OPERATE",
    tagline: "Run with Excellence",
    headline: "24/7 Managed Operations",
    description: "Continuous monitoring and expert management ensuring peak performance and minimal downtime.",
    icon: Cog,
    color: "#EA580C",
    image: "/images/operate.jpg",
    stats: [
      { value: "50+", label: "Engineers" },
      { value: "15min", label: "SLA Response" },
      { value: "99.999%", label: "Availability" },
    ],
    solutions: [
  { name: "Managed NOC", key: "managed-noc", desc: "Infrastructure monitoring, incidents" },
  { name: "Data Center", key: "data-center", desc: "HCI, storage, disaster recovery" },
  { name: "Endpoint Management", key: "managed-endpoint", desc: "EDR, patch management, MDM" },
],
  },
  {
    key: "scale",
    name: "SCALE",
    tagline: "Grow Without Limits",
    headline: "Cloud Infrastructure",
    description: "Elastic cloud solutions that adapt to your needs while optimizing costs across environments.",
    icon: TrendingUp,
    color: "#CA8A04",
    image: "/images/scale.jpg",
    stats: [
      { value: "40%", label: "Cost Reduction" },
      { value: "3x", label: "Faster Deploy" },
      { value: "100+", label: "Architects" },
    ],
    solutions: [
  { name: "Cloud Infrastructure", key: "cloud-infrastructure", desc: "AWS, Azure, GCP migration" },
  { name: "Data & Analytics", key: "data-analytics", desc: "Data warehouse, BI, ML/AI" },
  { name: "Hybrid Cloud", key: "hybrid-cloud", desc: "Multi-cloud, workload portability" },
],
  },
  {
    key: "automate",
    name: "AUTOMATE",
    tagline: "Accelerate Everything",
    headline: "Intelligent Automation",
    description: "AI and DevOps practices that eliminate manual toil and accelerate delivery.",
    icon: Bot,
    color: "#D97706",
    image: "/images/automate.jpg",
    stats: [
      { value: "80%", label: "Less Manual Work" },
      { value: "10x", label: "Faster Deploy" },
      { value: "90%", label: "Fewer Incidents" },
    ],
   solutions: [
  { name: "IT Automation", key: "automation", desc: "IaC, configuration, runbooks" },
  { name: "DevOps Platform", key: "devops", desc: "CI/CD, GitOps, SRE" },
  { name: "AIOps", key: "ai-operations", desc: "Anomaly detection, predictive" },
],
  },
]

export function FivePillars() {
  const [activePillar, setActivePillar] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const pillar = pillarsData[activePillar]

  return (
    <section ref={ref} className="relative py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-xs font-semibold tracking-widest uppercase mb-4 block">
            Our Framework
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Five Pillars
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive framework for modern enterprise infrastructure excellence.
          </p>
        </motion.div>

        {/* Pillar Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-card border border-border rounded-xl p-1.5 gap-1 flex-wrap justify-center">
            {pillarsData.map((p, idx) => (
              <button
                key={p.key}
                onClick={() => setActivePillar(idx)}
                className={cn(
                  "relative px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                  activePillar === idx 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                <p.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{p.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <motion.div
          key={pillar.key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-border">
              <Image
                src={pillar.image}
                alt={pillar.name}
                width={700}
                height={500}
                className="w-full h-[350px] lg:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              
              {/* Stats Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6">
                <div className="grid grid-cols-3 gap-4">
                  {pillar.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <pillar.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {pillar.tagline}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {pillar.headline}
            </h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {pillar.description}
            </p>

            {/* Solutions List */}
            <div className="space-y-3 mb-8">
              {pillar.solutions.map((sol) => (
                <Link
                  key={sol.name}
                  href={`/solutions/${sol.key}`}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
                >
                  <CheckCircle className="w-5 h-5 mt-0.5 text-primary" />
                  <div>
                    <h4 className="text-foreground font-semibold group-hover:text-primary transition-colors">
                      {sol.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{sol.desc}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href={`/solutions?pillar=${pillar.key}`}>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  Explore {pillar.name} <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/assessment">
                <Button variant="outline">Get Assessment</Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
