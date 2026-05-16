"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ArrowRight, Shield, Radio, Cog, TrendingUp, Bot, ChevronLeft, ChevronRight } from "lucide-react"
import { pillars, getSolutionsByPillar } from "@/lib/content"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// Premium enterprise pillar photos
const pillarImages: Record<string, string> = {
  protect: "/images/protect.jpg",
  connect: "/images/connect.jpg",
  operate: "/images/operate.jpg",
  scale: "/images/scale.jpg",
  automate: "/images/automate.jpg",
}

const pillarIconMap: Record<string, typeof Shield> = {
  protect: Shield,
  connect: Radio,
  operate: Cog,
  scale: TrendingUp,
  automate: Bot,
}

export function PillarsCarousel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activePillar, setActivePillar] = useState(pillars[0])
  const pillarSolutions = getSolutionsByPillar(activePillar.key)
  const Icon = pillarIconMap[activePillar.key]

  const currentIndex = pillars.findIndex(p => p.key === activePillar.key)

  const goToPrev = () => {
    const prevIndex = currentIndex === 0 ? pillars.length - 1 : currentIndex - 1
    setActivePillar(pillars[prevIndex])
  }

  const goToNext = () => {
    const nextIndex = currentIndex === pillars.length - 1 ? 0 : currentIndex + 1
    setActivePillar(pillars[nextIndex])
  }

  return (
    <section ref={ref} className="py-24 lg:py-32 relative overflow-hidden bg-zinc-950">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0066FF]/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#0066FF] text-sm font-semibold tracking-wider uppercase">
            The SGI Platform
          </span>
          <h2 className="text-3xl lg:text-5xl font-serif font-normal text-white mt-4 tracking-tight">
            5 Pillars of Enterprise Excellence
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-3xl mx-auto">
            Our comprehensive framework delivers end-to-end solutions that protect, connect, 
            operate, scale, and automate your enterprise infrastructure.
          </p>
        </motion.div>

        {/* Pillar Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {pillars.map((pillar) => {
            const PillarIcon = pillarIconMap[pillar.key]
            return (
              <button
                key={pillar.key}
                onClick={() => setActivePillar(pillar)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300",
                  activePillar.key === pillar.key
                    ? "bg-[#0066FF] text-white"
                    : "bg-zinc-900/50 ring-1 ring-zinc-800 text-zinc-400 hover:ring-[#0066FF]/50 hover:text-white"
                )}
              >
                <PillarIcon className="w-5 h-5" />
                <span className="hidden sm:inline">{pillar.name}</span>
              </button>
            )
          })}
        </motion.div>

        {/* Active Pillar Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] lg:aspect-[3/2] rounded-2xl overflow-hidden ring-1 ring-zinc-800">
              <Image
                src={pillarImages[activePillar.key]}
                alt={activePillar.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              
              {/* Pillar Badge */}
              <div className="absolute top-6 left-6 flex items-center gap-3 bg-zinc-900/90 backdrop-blur-sm rounded-lg px-4 py-2 ring-1 ring-zinc-700">
                <Icon className="w-5 h-5 text-[#0066FF]" />
                <span className="text-sm font-semibold text-white uppercase tracking-wider">
                  {activePillar.name}
                </span>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute bottom-6 right-6 flex gap-2">
                <button
                  onClick={goToPrev}
                  className="w-12 h-12 rounded-lg bg-zinc-900/90 backdrop-blur-sm ring-1 ring-zinc-700 flex items-center justify-center text-white hover:bg-zinc-800 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="w-12 h-12 rounded-lg bg-zinc-900/90 backdrop-blur-sm ring-1 ring-zinc-700 flex items-center justify-center text-white hover:bg-zinc-800 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-6 left-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#0066FF]/20 backdrop-blur-sm ring-1 ring-[#0066FF]/30 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-[#0066FF]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#0066FF] font-semibold uppercase tracking-wider">
                      Pillar {currentIndex + 1} of {pillars.length}
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {activePillar.name}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {activePillar.tagline}
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                {activePillar.description}
              </p>

              {/* Solutions */}
              <div className="space-y-4 mb-8">
                <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">
                  Solutions in {activePillar.name}
                </h4>
                <div className="grid gap-3">
                  {pillarSolutions.slice(0, 3).map((solution) => {
                    const SolutionIcon = solution.icon
                    return (
                      <Link
                        key={solution.key}
                        href={`/solutions/${solution.key}`}
                        className="flex items-center gap-4 p-4 rounded-xl ring-1 ring-zinc-800 bg-zinc-900/50 hover:ring-[#0066FF]/50 hover:bg-zinc-900 transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-[#0066FF]/10 ring-1 ring-[#0066FF]/20 flex items-center justify-center">
                          <SolutionIcon className="w-6 h-6 text-[#0066FF]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-white group-hover:text-[#0066FF] transition-colors">
                            {solution.title}
                          </div>
                          <div className="text-sm text-zinc-500 truncate">
                            {solution.description}
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-[#0066FF] group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* CTA */}
              <Button size="lg" asChild className="bg-[#0066FF] hover:bg-[#0052CC]">
                <Link href={`/solutions?pillar=${activePillar.key}`}>
                  Explore All {activePillar.name} Solutions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
