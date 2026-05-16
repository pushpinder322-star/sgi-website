import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield, Target, Users, Zap, MapPin, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { companyInfo, stats } from "@/lib/content"

export const metadata: Metadata = {
  title: "About Us | SGI",
  description:
    "Learn about SmartGuard Innovations - a leading provider of enterprise IT security and infrastructure solutions.",
}

const values = [
  { icon: Shield, title: "Security First", description: "Every solution we design prioritizes the protection of your critical assets." },
  { icon: Target, title: "Client Success", description: "Your success is our success. We measure our performance by outcomes." },
  { icon: Users, title: "Expert Team", description: "Our certified professionals bring deep expertise across technologies." },
  { icon: Zap, title: "Innovation", description: "We stay ahead of emerging threats and technologies." },
]

const leadership = [
  { name: "Michael Chen", role: "Chief Executive Officer", image: "/images/commercial-offices.jpg", bio: "20+ years in enterprise IT" },
  { name: "Sarah Rodriguez", role: "Chief Technology Officer", image: "/images/command-center.jpg", bio: "Former VP Engineering" },
  { name: "David Williams", role: "Chief Security Officer", image: "/images/cybersecurity.jpg", bio: "CISSP certified expert" },
  { name: "Jennifer Park", role: "Chief Operations Officer", image: "/images/assessment.jpg", bio: "Global operations leader" },
]

const milestones = [
  { year: "2008", event: "Founded in San Francisco with a focus on cybersecurity consulting" },
  { year: "2012", event: "Expanded into cloud infrastructure and multi-cloud services" },
  { year: "2015", event: "Launched 24/7 Security Operations Center (SOC)" },
  { year: "2018", event: "Achieved FedRAMP High authorization for government clients" },
  { year: "2021", event: "Reached 200+ enterprise clients milestone across 6 industries" },
  { year: "2024", event: "Opened new global operations centers in London and Singapore" },
]

const offices = [
  { city: "San Francisco", type: "Headquarters" },
  { city: "New York", type: "Regional Office" },
  { city: "London", type: "European HQ" },
  { city: "Singapore", type: "APAC HQ" },
]

export default function AboutPage() {
  return (
    <div className="pt-20 bg-background">
      {/* Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-xs uppercase tracking-widest mb-4 block">
                About SGI
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight">
                {companyInfo.tagline}
              </h1>
              <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed mb-8">
                {companyInfo.description} Since 2008, we&apos;ve helped hundreds of
                organizations transform their IT operations with the highest
                standards of security and compliance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  <Link href="/assessment">
                    Work With Us <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>

            <div className="relative hidden lg:block h-[450px]">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image
                  src="/images/commercial-offices.jpg"
                  alt="SGI Office"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-xs uppercase tracking-widest mb-4 block">
                Our Mission
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Empowering Enterprises Through Secure Technology
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We believe that every organization deserves enterprise-grade
                security and infrastructure, regardless of size. Our mission is
                to democratize access to advanced IT solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {offices.map((office) => (
                  <div key={office.city} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border">
                    <MapPin className="w-4 h-4 text-primary" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">{office.city}</div>
                      <div className="text-xs text-muted-foreground">{office.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/assessment.jpg"
                alt="Team Collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-xs uppercase tracking-widest mb-4 block">
              Our Values
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">What Drives Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="p-6 rounded-xl bg-background border border-border text-center hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-xs uppercase tracking-widest mb-4 block">
              Leadership
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader) => (
              <div key={leader.name} className="text-center group">
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-2xl overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{leader.name}</h3>
                <p className="text-primary text-sm font-medium mb-1">{leader.role}</p>
                <p className="text-xs text-muted-foreground">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-xs uppercase tracking-widest mb-4 block">
              Our Journey
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Key Milestones</h2>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="flex gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-primary">{milestone.year}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed pt-2">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-xs uppercase tracking-widest mb-4 block">
              Compliance
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Certifications</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "ISO 27001", desc: "Info Security" },
              { name: "SOC 2 Type II", desc: "Controls" },
              { name: "FedRAMP", desc: "Federal Cloud" },
              { name: "HIPAA", desc: "Healthcare" },
              { name: "PCI-DSS", desc: "Payment" },
              { name: "GDPR", desc: "Privacy" },
            ].map((cert) => (
              <div key={cert.name} className="p-5 rounded-xl bg-card border border-border text-center hover:border-primary/50 transition-colors">
                <Award className="w-7 h-7 text-primary mx-auto mb-3" />
                <span className="font-semibold text-foreground block">{cert.name}</span>
                <span className="text-xs text-muted-foreground">{cert.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Join 200+ organizations that trust SmartGuard Innovations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
              <Link href="/assessment">
                Get Free Assessment <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
