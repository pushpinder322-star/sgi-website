"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Globe, Shield, Clock, Building2 } from "lucide-react"

const stats = [
  { id: "clients", icon: Building2, value: 200, suffix: "+", label: "Enterprise Clients", isText: false },
  { id: "uptime", icon: Shield, value: 99.99, suffix: "%", label: "Uptime SLA", isText: false },
  { id: "coverage", icon: Globe, value: 0, suffix: "", label: "Coverage", isText: true, textValue: "Across Canada" },
  { id: "operations", icon: Clock, value: 24, suffix: "/7", label: "Operations", isText: false },
]

const partners = [
  "Microsoft", "AWS", "Google Cloud", "Cisco", "VMware", 
  "Fortinet", "Palo Alto", "Dell", "HPE", "Oracle"
]

function AnimatedCounter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(current)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  const formattedValue = value % 1 !== 0 
    ? displayValue.toFixed(2) 
    : Math.round(displayValue)

  return (
    <span className="tabular-nums">
      {formattedValue}{suffix}
    </span>
  )
}

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 relative overflow-hidden bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.id}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1">
                  {stat.isText ? (
                    <span>{stat.textValue}</span>
                  ) : (
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
                  )}
                </div>
                {!stat.isText && (
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="border-t border-border pt-12"
        >
          <p className="text-center text-xs text-muted-foreground mb-8 uppercase tracking-widest">
            Technology Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {partners.map((partner) => (
              <span
                key={partner}
                className="text-muted-foreground/50 font-semibold text-lg hover:text-muted-foreground transition-colors"
              >
                {partner}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
