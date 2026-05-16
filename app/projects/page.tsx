import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Building2, Shield, Globe, Server, Users, CheckCircle, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Projects & Case Studies | SGI",
  description: "Explore SGI's enterprise infrastructure projects. See how we've transformed operations for leading companies across Canada.",
}

const featuredProjects = [
  {
    title: "National Financial Services Network Transformation",
    client: "Major Canadian Bank",
    industry: "Financial Services",
    image: "/images/commercial-offices.jpg",
    description: "Complete network infrastructure modernization across 200+ branches nationwide, implementing zero-trust security architecture.",
    results: [
      "99.99% network uptime achieved",
      "60% reduction in security incidents",
      "40% improvement in transaction speeds",
    ],
    technologies: ["SD-WAN", "Zero Trust", "Cloud Security", "24/7 NOC"],
  },
  {
    title: "Healthcare System Security Overhaul",
    client: "Provincial Healthcare Network",
    industry: "Healthcare",
    image: "/images/case-study-care.jpg",
    description: "PIPEDA and provincial health privacy compliant security infrastructure protecting 2M+ patient records across 50 facilities.",
    results: [
      "Zero data breaches since implementation",
      "Full privacy compliance achieved",
      "85% faster threat detection",
    ],
    technologies: ["SIEM", "Endpoint Security", "Access Control", "Encryption"],
  },
  {
    title: "Smart Manufacturing Infrastructure",
    client: "Canadian Manufacturing Corp",
    industry: "Manufacturing",
    image: "/images/warehousing.jpg",
    description: "Industrial IoT network deployment with real-time monitoring and predictive maintenance capabilities.",
    results: [
      "35% reduction in downtime",
      "50% faster issue resolution",
      "$10M+ annual savings",
    ],
    technologies: ["Industrial IoT", "Edge Computing", "SCADA Security", "Predictive Analytics"],
  },
  {
    title: "Federal Agency Cloud Migration",
    client: "Government of Canada Agency",
    industry: "Government",
    image: "/images/command-center.jpg",
    description: "Government-approved cloud migration for mission-critical applications serving 100K+ users.",
    results: [
      "Protected B authorization",
      "45% infrastructure cost reduction",
      "3x faster deployment cycles",
    ],
    technologies: ["AWS Canada", "Protected B", "Security Automation", "DevSecOps"],
  },
]

const projectStats = [
  { value: "200+", label: "Enterprise Projects", icon: Building2 },
  { value: "99.9%", label: "Success Rate", icon: CheckCircle },
  { value: "Across", label: "Canada", icon: MapPin },
  { value: "10M+", label: "Users Served", icon: Users },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-enterprise.jpg"
            alt="Global network"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              Projects & Case Studies
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Transforming enterprise infrastructure across Canada.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Explore how SGI has delivered mission-critical infrastructure solutions 
              for leading enterprises and government agencies across Canada.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {projectStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover how leading organizations trust SGI to deliver their most critical infrastructure initiatives.
            </p>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <article
                key={project.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        {project.industry}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="text-muted-foreground text-sm mb-2 block">{project.client}</span>
                  <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                      Key Results
                    </h4>
                    <ul className="space-y-2">
                      {project.results.map((result) => (
                        <li key={result} className="flex items-center gap-2 text-foreground">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button variant="outline" className="border-border">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ready to transform your infrastructure?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join the hundreds of enterprises that trust SGI to deliver their most critical infrastructure projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8" asChild>
                <Link href="/assessment">
                  Schedule Infrastructure Assessment
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                <Link href="/contact">
                  Contact Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
