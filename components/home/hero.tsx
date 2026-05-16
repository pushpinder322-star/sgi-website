"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Wifi, Settings, TrendingUp, Cpu } from "lucide-react"

const pillars = [
  { 
    key: "protect", 
    name: "Protect", 
    icon: Shield,
    tagline: "Enterprise Security",
    image: "/images/protect.jpg"
  },
  { 
    key: "connect", 
    name: "Connect", 
    icon: Wifi,
    tagline: "Network Infrastructure",
    image: "/images/connect.jpg"
  },
  { 
    key: "operate", 
    name: "Operate", 
    icon: Settings,
    tagline: "Managed Services",
    image: "/images/operate.jpg"
  },
  { 
    key: "scale", 
    name: "Scale", 
    icon: TrendingUp,
    tagline: "Cloud Infrastructure",
    image: "/images/scale.jpg"
  },
  { 
    key: "automate", 
    name: "Automate", 
    icon: Cpu,
    tagline: "Intelligent Operations",
    image: "/images/automate.jpg"
  },
]

export function Hero() {
  const [activePillar, setActivePillar] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePillar((prev) => (prev + 1) % pillars.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Right Side Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 lg:inset-y-0 lg:right-0 lg:left-auto lg:w-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image
                src={pillars[activePillar].image}
                alt={pillars[activePillar].name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60 lg:via-background/80 lg:to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-20 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col justify-center max-w-3xl">
          {/* Pillar Badge */}
          <motion.div
            key={activePillar}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              {pillars[activePillar].tagline}
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-foreground leading-[1.05] mb-8">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              Infrastructure
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              built for{" "}
              <span className="text-gradient-primary">operational</span>
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              resilience.
            </span>
          </h1>

          {/* Description */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            SmartGuard Innovations delivers enterprise IT infrastructure, networking, 
            cybersecurity, surveillance, access control, cloud continuity and managed 
            operational support for modern businesses.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button 
              asChild
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 font-semibold rounded-full"
            >
              <Link href="/assessment">
                Schedule Infrastructure Assessment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="h-12 px-8 font-semibold rounded-full border-border"
            >
              <Link href="/solutions">
                Explore Enterprise Solutions
              </Link>
            </Button>
          </div>
        </div>

        {/* 5 Pillars Navigation */}
        <div className="mt-auto pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <span className="text-muted-foreground text-xs tracking-widest uppercase">
              The Five Pillars
            </span>
            
            <div className="flex flex-wrap items-center gap-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon
                return (
                  <button
                    key={pillar.key}
                    onClick={() => setActivePillar(idx)}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all
                      ${activePillar === idx 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{pillar.name}</span>
                  </button>
                )
              })}
            </div>

            <Link 
              href="/solutions" 
              className="text-muted-foreground text-xs tracking-widest uppercase hover:text-primary transition-colors flex items-center gap-2"
            >
              View All Solutions
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
