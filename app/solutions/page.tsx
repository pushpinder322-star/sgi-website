import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { solutions, pillars, getSolutionsByPillar } from "@/lib/content"

export const metadata: Metadata = {
  title: "Enterprise Solutions | SGI",
  description:
    "Comprehensive enterprise IT solutions organized across 5 pillars: Protect, Connect, Operate, Scale, and Automate.",
}

const pillarImages: Record<string, string> = {
  protect: "/images/protect.jpg",
  connect: "/images/connect.jpg",
  operate: "/images/operate.jpg",
  scale: "/images/scale.jpg",
  automate: "/images/automate.jpg",
}

const pillarStats: Record<string, Array<{ value: string; label: string }>> = {
  protect: [
    { value: "99.9%", label: "Threat Detection" },
    { value: "<15min", label: "Response Time" },
    { value: "24/7", label: "SOC Coverage" },
  ],
  connect: [
    { value: "99.99%", label: "Network Uptime" },
    { value: "60%", label: "Latency Reduction" },
    { value: "40%", label: "Cost Savings" },
  ],
  operate: [
    { value: "50+", label: "Engineers" },
    { value: "15min", label: "SLA Response" },
    { value: "99.999%", label: "Availability" },
  ],
  scale: [
    { value: "40%", label: "Cost Reduction" },
    { value: "3x", label: "Faster Deploy" },
    { value: "100+", label: "Cloud Architects" },
  ],
  automate: [
    { value: "80%", label: "Less Manual Work" },
    { value: "10x", label: "Faster Deploys" },
    { value: "90%", label: "Fewer Incidents" },
  ],
}

export default function SolutionsPage() {
  return (
    <div className="pt-20 bg-background">
      {/* Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-xs uppercase tracking-widest mb-4 block">
                The 5 Pillars
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight">
                Enterprise Solutions{" "}
                <span className="text-gradient-amber">Across Every Pillar</span>
              </h1>
              <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed mb-8">
                Our comprehensive framework delivers end-to-end solutions across five 
                critical pillars of enterprise IT infrastructure.
              </p>

              {/* Pillar Quick Nav */}
              <div className="flex flex-wrap gap-2">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon
                  return (
                    <a
                      key={pillar.key}
                      href={`#${pillar.key}`}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card hover:bg-muted hover:border-primary/50 transition-all text-sm font-medium group"
                    >
                      <Icon className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {pillar.name}
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative h-[400px] w-full">
                <Image
                  src="/images/hero-enterprise.jpg"
                  alt="Enterprise Solutions"
                  fill
                  className="object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { value: "200+", label: "Enterprise Clients" },
                      { value: "10+", label: "Years Experience" },
                      { value: "99.9%", label: "Uptime SLA" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center p-3 rounded-xl bg-card/80 backdrop-blur-sm border border-border">
                        <div className="text-xl font-bold text-primary">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions by Pillar */}
      {pillars.map((pillar, index) => {
        const pillarSolutions = getSolutionsByPillar(pillar.key)
        const Icon = pillar.icon
        const stats = pillarStats[pillar.key]
        const image = pillarImages[pillar.key]
        
        return (
          <section 
            key={pillar.key} 
            id={pillar.key}
            className={`py-20 border-t border-border scroll-mt-20 ${index % 2 === 1 ? 'bg-card' : ''}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Pillar Header */}
              <div className="grid lg:grid-cols-2 gap-12 mb-12">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-bold tracking-wider uppercase text-primary">
                      {pillar.name} Pillar
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    {pillar.tagline}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {pillar.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {stats.map((stat) => (
                      <div key={stat.label} className="p-4 rounded-xl border border-primary/20 bg-primary/5">
                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative h-[300px] rounded-2xl overflow-hidden">
                    <Image src={image} alt={pillar.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

              {/* Solutions Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pillarSolutions.map((solution) => {
                  const SolutionIcon = solution.icon
                  return (
                    <Link
                      key={solution.key}
                      href={`/solutions/${solution.key}`}
                      className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                        <SolutionIcon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {solution.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {solution.features.slice(0, 3).map((feature) => (
                          <span key={feature} className="text-xs px-2 py-1 rounded-lg bg-muted text-muted-foreground">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                        Learn more
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        )
      })}

      {/* Why Choose SGI */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-xs uppercase tracking-widest mb-4 block">
                Why SGI
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                A Partner You Can Trust
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With over 10 years of experience serving 200 companies, SGI 
                delivers solutions that are built to scale and secure by design.
              </p>
              <ul className="space-y-4">
                {[
                  "Proven track record with 200+ enterprise deployments",
                  "24/7 global support with 15-minute SLA response",
                  "Vendor-agnostic approach for best-fit solutions",
                  "Compliance expertise (SOC 2, HIPAA, PCI-DSS, FedRAMP)",
                  "Dedicated success managers and technical architects",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/assessment.jpg"
                alt="SGI Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-semibold text-xs uppercase tracking-widest mb-4 block">
            Get Started
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Not Sure Which Solution You Need?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Take our free assessment to get personalized recommendations across all 5 pillars.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                Schedule Free Assessment <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">Talk to an Expert</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
