import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, ArrowLeft, Shield, Zap, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { solutions, pillars, getSolutionsByPillar } from "@/lib/content"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return solutions.map((solution) => ({
    slug: solution.key,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const solution = solutions.find((s) => s.key === slug)
  if (!solution) return {}

  return {
    title: `${solution.title} | SGI`,
    description: solution.description,
  }
}

const solutionImages: Record<string, string> = {
  cybersecurity: "/images/cybersecurity.jpg",
  "identity-access": "/images/access-control.jpg",
  "managed-security": "/images/cctv-security.jpg",

  "network-services": "/images/network.jpg",
  "sd-wan": "/images/connect.jpg",
  "unified-communications": "/images/command-center.jpg",

  "managed-noc": "/images/command-center.jpg",
  "data-center": "/images/operate.jpg",
  "managed-endpoint": "/images/managed-operations.jpg",

  "cloud-infrastructure": "/images/cloud-continuity.jpg",
  "data-analytics": "/images/scale.jpg",
  "hybrid-cloud": "/images/cloud-continuity.jpg",

  automation: "/images/automation.jpg",
  devops: "/images/automate.jpg",
  "ai-operations": "/images/command-center.jpg",

  // fallback for SGI pillar pages if used
  protect: "/images/protect.jpg",
  connect: "/images/connect.jpg",
  operate: "/images/operate.jpg",
  scale: "/images/scale.jpg",
  automate: "/images/automate.jpg",
}

const pillarColors: Record<string, { text: string; bg: string; border: string }> = {
  protect: { text: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/30" },
  connect: { text: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/30" },
  operate: { text: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
  scale: { text: "text-violet-500", bg: "bg-violet-500/10", border: "border-violet-500/30" },
  automate: { text: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/30" },
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params
  const solution = solutions.find((s) => s.key === slug)

  if (!solution) {
    notFound()
  }

  const Icon = solution.icon
  const pillar = pillars.find((p) => p.key === solution.pillar)
  const colors = pillarColors[solution.pillar] || pillarColors.protect
  const relatedSolutions = getSolutionsByPillar(solution.pillar).filter((s) => s.key !== slug).slice(0, 3)
  const heroImage = solutionImages[solution.key] || "/images/hero-enterprise.jpg"

  return (
    <div className="pt-20 bg-[#08080c]">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0052CC]/10 via-transparent to-transparent" />

        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Solutions
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {pillar && (
                <Link 
                  href={`/solutions#${pillar.key}`}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colors.bg} border ${colors.border} text-xs font-bold uppercase tracking-wider mb-6 hover:bg-white/5 transition-colors`}
                >
                  <pillar.icon className={`w-4 h-4 ${colors.text}`} />
                  <span className={colors.text}>{pillar.name} Pillar</span>
                </Link>
              )}
              <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center mb-6`}>
                <Icon className={`w-8 h-8 ${colors.text}`} />
              </div>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
                {solution.title}
              </h1>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                {solution.longDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#0052CC] hover:bg-[#0065FF] text-white font-semibold" asChild>
                  <Link href="/assessment">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={heroImage}
                alt={solution.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 border-y border-white/5 bg-zinc-900/30">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, value: "99.9%", label: "Uptime Guarantee", desc: "Enterprise-grade reliability" },
              { icon: Zap, value: "< 15min", label: "Response Time", desc: "24/7 expert support" },
              { icon: Users, value: "200+", label: "Deployments", desc: "Trusted by enterprises" },
              { icon: Award, value: "10+", label: "Years Experience", desc: "Industry expertise" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-xs text-zinc-500">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[#0052CC] font-semibold text-xs uppercase tracking-[0.3em] mb-4 block">
              Capabilities
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-zinc-400 text-lg">
              Comprehensive capabilities designed to meet enterprise demands
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {solution.features.map((feature, i) => (
              <div
                key={feature}
                className={`p-6 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-${colors.border} transition-all group`}
              >
                <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                  <span className={`font-bold ${colors.text}`}>{i + 1}</span>
                </div>
                <h3 className="font-semibold text-white mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Use Cases */}
      <section className="py-24 bg-zinc-900/30 border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[#0052CC] font-semibold text-xs uppercase tracking-[0.3em] mb-4 block">
                Benefits
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Why Choose Our {solution.shortTitle} Solution?
              </h2>
              <ul className="space-y-4">
                {solution.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0052CC] mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-[#0052CC] font-semibold text-xs uppercase tracking-[0.3em] mb-4 block">
                Use Cases
              </span>
              <h3 className="text-2xl font-bold text-white mb-6">Common Scenarios</h3>
              <div className="space-y-4">
                {solution.useCases.map((useCase) => (
                  <div
                    key={useCase}
                    className="p-5 rounded-xl bg-[#08080c] border border-white/5"
                  >
                    <p className="text-zinc-300">{useCase}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      {relatedSolutions.length > 0 && (
        <section className="py-24 border-b border-white/5">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-[#0052CC] font-semibold text-xs uppercase tracking-[0.3em] mb-2 block">
                  Related Solutions
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-white">
                  More {pillar?.name} Solutions
                </h2>
              </div>
              <Link href={`/solutions#${pillar?.key}`} className="hidden md:inline-flex items-center gap-2 text-[#0052CC] font-medium hover:underline">
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedSolutions.map((related) => {
                const RelatedIcon = related.icon
                return (
                  <Link
                    key={related.key}
                    href={`/solutions/${related.key}`}
                    className="group block p-6 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-[#0052CC]/30 transition-all"
                  >
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                      <RelatedIcon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <h3 className="font-semibold text-white mb-2 group-hover:text-[#0052CC] transition-colors">
                      {related.shortTitle}
                    </h3>
                    <p className="text-sm text-zinc-500">
                      {related.description}
                    </p>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#0052CC]/10 to-transparent">
        <div className="container mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto text-lg">
            Let our experts help you implement the right {solution.shortTitle}{" "}
            solution for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#0052CC] hover:bg-[#0065FF] text-white font-semibold px-8" asChild>
              <Link href="/assessment">
                Schedule Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5" asChild>
              <Link href="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
