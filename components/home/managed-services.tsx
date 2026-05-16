"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowRight, CheckCircle, Clock, Users, Headphones, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { managedServices } from "@/lib/content"

const serviceImages: Record<string, string> = {
  "managed-soc": "/images/cctv-security.jpg",
  "managed-noc": "/images/command-center.jpg",
  "managed-cloud": "/images/cloud-continuity.jpg",
  "managed-network": "/images/network.jpg",

  // fallback for SGI service keys if used from lib/content.ts
  "microsoft-365-support": "/images/managed-operations.jpg",
  "network-support": "/images/network.jpg",
  "monitoring-readiness": "/images/command-center.jpg",
  "site-support": "/images/assessment.jpg",
}

const highlights = [
  { icon: Clock, value: "24/7", label: "Operations" },
  { icon: Users, value: "50+", label: "Engineers" },
  { icon: Headphones, value: "15 min", label: "Response SLA" },
  { icon: Server, value: "99.99%", label: "Uptime" },
]

export function ManagedServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-semibold text-xs uppercase tracking-widest">
            Managed Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Enterprise-Grade Operations
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Global network operations centers providing round-the-clock monitoring
            and proactive management for mission-critical infrastructure.
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {highlights.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="text-center p-5 rounded-xl bg-card border border-border">
                <Icon className="w-7 h-7 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground mb-1">{item.value}</div>
                <div className="text-xs text-muted-foreground">{item.label}</div>
              </div>
            )
          })}
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {managedServices.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              >
                <Link href={`/services/${service.key}`} className="group block h-full">
                  <div className="h-full rounded-xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all">
                    <div className="relative h-48">
                      <Image
                        src={serviceImages[service.key] || serviceImages["managed-soc"]}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
                      </div>
                    </div>

                    <div className="p-5">
                      <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-2 mb-4">
                        {service.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link href="/services">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Explore All Services <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
