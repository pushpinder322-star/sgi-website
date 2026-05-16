"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Phone, Calendar, Globe, Shield, Award, Building2, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { companyInfo } from "@/lib/content"

const globalStats = [
  { icon: Globe, value: "Across", label: "Canada" },
  { icon: Building2, value: "340+", label: "Clients" },
  { icon: Award, value: "10+", label: "Years" },
]

const offices = [
  { city: "Ontario", country: "Core Operations" },
  { city: "Alberta", country: "Service Coverage" },
  { city: "British Columbia", country: "Service Coverage" },
  { city: "Canada-Wide", country: "Remote & On-Site Support" },
]

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/assessment.jpg"
          alt="Enterprise headquarters"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold text-xs uppercase tracking-widest mb-4">
              Ready to Transform?
            </span>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6 leading-tight">
              Partner with a{" "}
              <span className="text-gradient-primary">Trusted Partner</span>{" "}
              in Enterprise Infrastructure
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Join hundreds of Fortune 200 companies who trust SGI to protect, 
              connect, and scale their mission-critical infrastructure.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/assessment">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Executive Briefing
                </Button>
              </Link>
              <a href={`tel:${companyInfo.contact.phone}`}>
                <Button size="lg" variant="outline" className="h-12 px-6">
                  <Phone className="w-4 h-4 mr-2" />
                  {companyInfo.contact.phone}
                </Button>
              </a>
            </div>

            {/* Offices */}
            <div className="flex flex-wrap gap-4">
              {offices.map((office) => (
                <div key={office.city} className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{office.city}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4"
          >
            {/* Stats Card */}
            <div className="bg-card/80 backdrop-blur-xl rounded-xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Canada-Wide Coverage</h3>
              <div className="grid grid-cols-3 gap-4">
                {globalStats.map((stat) => {
                  const Icon = stat.icon
                  return (
                    <div key={stat.label} className="text-center">
                      <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-card/80 backdrop-blur-xl rounded-xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {["ISO 27001", "SOC 2 Type II", "FedRAMP", "HIPAA", "PCI-DSS", "GDPR"].map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-sm font-medium text-primary"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Support */}
            <div className="bg-primary/10 backdrop-blur-xl rounded-xl p-5 border border-primary/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-0.5">Enterprise Support</p>
                  <p className="text-base font-semibold text-foreground">
                    24/7 Support &bull; 15-min Response SLA
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
