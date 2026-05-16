"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { industries } from "@/lib/content"
import { cn } from "@/lib/utils"

const industryImages: Record<string, string> = {
  financial: "/images/financial.jpg",
  healthcare: "/images/healthcare-care.jpg",
  manufacturing: "/images/warehousing.jpg",
  government: "/images/smart-buildings.jpg",
  retail: "/images/retail-restaurants.jpg",
  telecom: "/images/command-center.jpg",
  energy: "/images/transportation-logistics.jpg",
  education: "/images/education.jpg",
}

export function IndustriesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndustry, setActiveIndustry] = useState(industries[0])

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="max-w-3xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-semibold text-xs uppercase tracking-widest">
            Industry Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Powering Critical Industries
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Deep domain expertise across the world&apos;s most demanding sectors.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-[1fr_450px] gap-8">
          {/* Industry Tabs */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {industries.map((industry) => {
              const Icon = industry.icon
              const isActive = activeIndustry.key === industry.key
              return (
                <button
                  key={industry.key}
                  onClick={() => setActiveIndustry(industry)}
                  className={cn(
                    "relative flex flex-col items-start justify-end p-5 rounded-xl text-left transition-all h-40 overflow-hidden group",
                    isActive ? "ring-2 ring-primary" : "ring-1 ring-border hover:ring-primary/50"
                  )}
                >
                  <div className="absolute inset-0">
                    <Image
                      src={industryImages[industry.key] || industryImages.financial}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={cn(
                      "absolute inset-0 transition-opacity",
                      isActive 
                        ? "bg-gradient-to-t from-primary/80 via-background/70 to-background/50" 
                        : "bg-gradient-to-t from-background/90 via-background/70 to-background/40"
                    )} />
                  </div>
                  <div className="relative z-10">
                    <Icon className={cn(
                      "w-7 h-7 mb-2 transition-colors",
                      isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground"
                    )} />
                    <span className="font-semibold text-foreground">
                      {industry.shortTitle}
                    </span>
                  </div>
                </button>
              )
            })}
          </motion.div>

          {/* Active Industry Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-background rounded-xl overflow-hidden border border-border h-full"
              >
                {/* Image */}
                <div className="relative h-56">
                  <Image
                    src={industryImages[activeIndustry.key] || industryImages.financial}
                    alt={activeIndustry.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                      <activeIndustry.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{activeIndustry.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-muted-foreground text-sm mb-4">{activeIndustry.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-xs uppercase tracking-wider text-muted-foreground">
                      Key Solutions
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {activeIndustry.solutions.slice(0, 4).map((solution) => (
                        <li key={solution} className="flex items-center gap-2 text-xs text-foreground">
                          <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {activeIndustry.caseStudy && (
                    <div className="bg-muted rounded-lg p-3 mb-4">
                      <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">
                        Success Story
                      </p>
                      <p className="text-sm font-medium text-foreground">{activeIndustry.caseStudy.result}</p>
                    </div>
                  )}

                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href={`/industries/${activeIndustry.key}`}>
                      Explore Solutions <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
