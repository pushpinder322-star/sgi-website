import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { industries } from "@/lib/content"

export const metadata: Metadata = {
  title: "Industries We Serve | SGI",
  description:
    "Specialized IT solutions for financial services, healthcare, manufacturing, retail, government, and education sectors.",
}

const industryImages: Record<string, string> = {
  financial: "/images/commercial-offices.jpg",
  healthcare: "/images/healthcare-care.jpg",
  manufacturing: "/images/warehousing.jpg",
  retail: "/images/retail-restaurants.jpg",
  government: "/images/smart-buildings.jpg",
  education: "/images/commercial-offices.jpg",
  telecom: "/images/command-center.jpg",
  energy: "/images/transportation-logistics.jpg",
}

const industryStats: Record<string, Array<{ value: string; label: string }>> = {
  financial: [
    { value: "100+", label: "Banking Clients" },
    { value: "99.999%", label: "Uptime SLA" },
    { value: "PCI-DSS", label: "Certified" },
  ],
  healthcare: [
    { value: "HIPAA", label: "Compliant" },
    { value: "100+", label: "Hospitals" },
    { value: "24/7", label: "Support" },
  ],
  manufacturing: [
    { value: "40%", label: "Efficiency Gain" },
    { value: "200+", label: "Facilities" },
    { value: "IoT", label: "Integration" },
  ],
  retail: [
    { value: "99.9%", label: "POS Uptime" },
    { value: "100+", label: "Stores" },
    { value: "Omni", label: "Channel" },
  ],
  government: [
    { value: "FedRAMP", label: "Authorized" },
    { value: "100+", label: "Agencies" },
    { value: "IL5", label: "Certified" },
  ],
  education: [
    { value: "300+", label: "Institutions" },
    { value: "5M+", label: "Students" },
    { value: "FERPA", label: "Compliant" },
  ],
}

export default function IndustriesPage() {
  return (
    <div className="pt-20 bg-background">
      {/* Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-xs uppercase tracking-widest mb-4 block">
                Industries
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight">
                Tailored Solutions for{" "}
                <span className="text-gradient-primary">Your Industry</span>
              </h1>
              <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed mb-8">
                Deep expertise across regulated and commercial sectors, delivering
                solutions that address your unique challenges and compliance requirements.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <Link href="/assessment">
                  Get Industry Assessment <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="relative hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(industryImages).slice(0, 4).map(([key, image], i) => (
                  <div key={key} className={`relative h-44 rounded-xl overflow-hidden ${i === 0 ? 'col-span-2' : ''}`}>
                    <Image src={image} alt={key} fill className="object-cover" />
                    <div className="absolute inset-0 bg-background/40" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              const image = industryImages[industry.key] || industryImages.financial
              const stats = industryStats[industry.key] || []
              const isEven = index % 2 === 1
              
              return (
                <div key={industry.key} className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={isEven ? "lg:order-2" : ""}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold text-primary">{industry.title}</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                      {industry.title} Solutions
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {industry.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                        Key Challenges We Solve
                      </h3>
                      <ul className="space-y-3">
                        {industry.challenges.map((challenge) => (
                          <li key={challenge} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {stats.length > 0 && (
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {stats.map((stat) => (
                          <div key={stat.label} className="p-4 rounded-xl bg-card border border-border">
                            <div className="text-xl font-bold text-primary">{stat.value}</div>
                            <div className="text-xs text-muted-foreground">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                      <Link href={`/industries/${industry.key}`}>
                        Explore Solutions <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>

                  <div className={isEven ? "lg:order-1" : ""}>
                    <div className="relative h-[350px] lg:h-[450px] rounded-2xl overflow-hidden">
                      <Image src={image} alt={industry.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-xs uppercase tracking-widest mb-4 block">
              Compliance & Certifications
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Meeting the Strictest Standards
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Our solutions are built to meet the most demanding regulatory requirements.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "SOC 2 Type II", desc: "Security Controls" },
              { name: "HIPAA", desc: "Healthcare" },
              { name: "PCI-DSS", desc: "Payment Card" },
              { name: "FedRAMP", desc: "Federal Cloud" },
              { name: "GDPR", desc: "Data Privacy" },
              { name: "ISO 27001", desc: "Info Security" },
            ].map((cert) => (
              <div key={cert.name} className="p-5 rounded-xl bg-background border border-border text-center hover:border-primary/50 transition-colors">
                <div className="text-lg font-bold text-foreground mb-1">{cert.name}</div>
                <div className="text-xs text-muted-foreground">{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Don&apos;t See Your Industry?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Our solutions are adaptable to any industry. Contact us to discuss your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
              <Link href="/contact">
                Contact Our Team <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/assessment">Take Assessment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
