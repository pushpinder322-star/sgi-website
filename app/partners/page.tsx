"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Shield, 
  Cloud, 
  Server, 
  Lock,
  Award,
  CheckCircle,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { partnerNames } from "@/lib/content"

const partnerTiers = [
  {
    tier: "Strategic Partners",
    description: "Deep integrations and joint solutions for enterprise clients",
    partners: [
      { name: "Microsoft", specialty: "Cloud & Productivity", logo: "M" },
      { name: "Cisco", specialty: "Networking & Security", logo: "C" },
      { name: "AWS", specialty: "Cloud Infrastructure", logo: "A" },
      { name: "Palo Alto Networks", specialty: "Cybersecurity", logo: "P" }
    ]
  },
  {
    tier: "Technology Partners",
    description: "Best-in-class technology integrations",
    partners: [
      { name: "VMware", specialty: "Virtualization", logo: "V" },
      { name: "Fortinet", specialty: "Network Security", logo: "F" },
      { name: "ServiceNow", specialty: "IT Operations", logo: "S" },
      { name: "Splunk", specialty: "Security Analytics", logo: "S" }
    ]
  },
  {
    tier: "Solution Partners",
    description: "Specialized solutions for specific use cases",
    partners: [
      { name: "CrowdStrike", specialty: "Endpoint Security", logo: "C" },
      { name: "Okta", specialty: "Identity Management", logo: "O" },
      { name: "Zscaler", specialty: "Zero Trust", logo: "Z" },
      { name: "Datadog", specialty: "Observability", logo: "D" }
    ]
  }
]

const certifications = [
  "Microsoft Gold Partner",
  "Cisco Premier Partner",
  "AWS Advanced Consulting Partner",
  "Palo Alto Networks Platinum Partner",
  "VMware Principal Partner",
  "CrowdStrike MSSP Partner"
]

const partnerBenefits = [
  {
    icon: Shield,
    title: "Joint Security Solutions",
    description: "Integrated solutions combining SGI expertise with partner technology"
  },
  {
    icon: Cloud,
    title: "Multi-Cloud Excellence",
    description: "Seamless deployments across all major cloud platforms"
  },
  {
    icon: Server,
    title: "Hybrid Infrastructure",
    description: "Bridge on-premises and cloud environments effectively"
  },
  {
    icon: Lock,
    title: "Compliance Assurance",
    description: "Partner-certified solutions meeting regulatory requirements"
  }
]

export default function PartnersPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-medium">Partner Ecosystem</span>
            <h1 className="text-4xl lg:text-6xl font-bold mt-4 mb-6 text-balance">
              Stronger Together
            </h1>
            <p className="text-xl text-muted-foreground">
              We partner with industry-leading technology providers to deliver 
              comprehensive solutions that drive business transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partner Logos Marquee */}
      <section className="py-12 border-y border-border bg-muted/30 overflow-hidden">
        <div className="flex animate-marquee">
          {[...partnerNames, ...partnerNames].map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="flex-shrink-0 mx-8 px-6 py-3 rounded-lg bg-card border border-border"
            >
              <span className="text-lg font-semibold text-muted-foreground">{partner}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Tiers */}
      {partnerTiers.map((tier, tierIndex) => (
        <section key={tier.tier} className="py-16 border-b border-border">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: tierIndex * 0.1 }}
              className="mb-10"
            >
              <h2 className="text-2xl font-bold mb-2">{tier.tier}</h2>
              <p className="text-muted-foreground">{tier.description}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tier.partners.map((partner, partnerIndex) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: partnerIndex * 0.1 }}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all text-center"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{partner.logo}</span>
                  </div>
                  <h3 className="font-semibold mb-1">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground">{partner.specialty}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Certifications */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Award className="h-4 w-4" />
              <span className="text-sm font-medium">Industry Recognized</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Certifications & Accreditations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our partnerships are backed by rigorous certifications and accreditations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium text-sm">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Partnership Benefits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our partner ecosystem delivers integrated solutions with proven results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-transparent to-transparent">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Become a Partner</h2>
            <p className="text-muted-foreground mb-8">
              Join our partner ecosystem and unlock new opportunities for growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                <Link href="/contact">
                  Partner With Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/resources">
                  Partner Resources
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
