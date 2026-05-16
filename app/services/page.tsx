import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Shield, Clock, Users, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { managedServices } from "@/lib/content"

export const metadata: Metadata = {
  title: "Managed Services | SGI",
  description:
    "24/7 managed IT services including security operations, cloud management, network operations, and endpoint protection.",
}

const serviceImages: Record<string, string> = {
  "managed-soc": "/images/SOC.jpg",
  "managed-noc-service": "/images/command-center.jpg",
  "cloud-services": "/images/cloud-continuity.jpg",
  "network-services": "/images/network.jpg",

  // fallback keys if used from content
  "microsoft-365-support": "/images/managed-operations.jpg",
  "network-support": "/images/network.jpg",
  "monitoring-readiness": "/images/command-center.jpg",
  "site-support": "/images/assessment.jpg",
}

export default function ServicesPage() {
  return (
    <div className="pt-20 bg-background">
      {/* Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-xs uppercase tracking-widest mb-4 block">
                Managed Services
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight">
                24/7 Expert Support for Your{" "}
                <span className="text-gradient-primary">IT Infrastructure</span>
              </h1>
              <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed mb-8">
                Let our certified experts manage your IT operations while you focus
                on growing your business. Proactive monitoring and continuous optimization.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: "24/7", label: "Support" },
                  { value: "15min", label: "SLA Response" },
                  { value: "99.99%", label: "Uptime" },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl bg-card border border-border">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <Link href="/assessment">
                  Get a Custom Quote <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="relative hidden lg:block h-[450px]">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image
                  src="/images/managed-operations.jpg"
                  alt="Managed Services Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-card/80 backdrop-blur-sm border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <div className="text-foreground font-semibold">All Systems Operational</div>
                    <div className="text-xs text-muted-foreground">Last incident: 142 days ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-xs uppercase tracking-widest mb-4 block">
              Our Services
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Comprehensive Managed IT Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              From security operations to cloud management, our managed services 
              cover every aspect of your IT infrastructure.
            </p>
          </div>

          <div className="space-y-6">
            {managedServices.map((service, index) => {
              const Icon = service.icon
              const image = serviceImages[service.key] || serviceImages["managed-soc"]
              const isEven = index % 2 === 1
              
              return (
                <Link key={service.key} href={`/services/${service.key}`} className="group block">
                  <div className="grid lg:grid-cols-2 gap-6 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                    <div className={`flex flex-col justify-center ${isEven ? 'lg:order-2' : ''}`}>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    <div className={`relative h-[250px] lg:h-auto rounded-xl overflow-hidden ${isEven ? 'lg:order-1' : ''}`}>
                      <Image
                        src={image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-xs uppercase tracking-widest mb-4 block">
              Why SGI
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose SGI Managed Services?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "24/7 Support", description: "Round-the-clock monitoring from certified experts" },
              { icon: Shield, title: "99.99% SLA", description: "Industry-leading uptime guarantees" },
              { icon: Users, title: "Dedicated Team", description: "Named account managers who know your environment" },
              { icon: Headphones, title: "Cost Predictability", description: "Fixed monthly costs with no surprise bills" },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-background border border-border text-center hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-xs uppercase tracking-widest mb-4 block">
                Our Process
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                How We Work Together
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                A seamless onboarding process designed to get you up and running quickly.
              </p>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Discovery & Assessment", desc: "We analyze your current infrastructure" },
                  { step: "02", title: "Custom Solution Design", desc: "Tailored service plan for your needs" },
                  { step: "03", title: "Seamless Transition", desc: "Migration with zero downtime" },
                  { step: "04", title: "Ongoing Optimization", desc: "Continuous monitoring and improvement" },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[450px] rounded-2xl overflow-hidden">
              <Image
                src="/images/assessment.jpg"
                alt="Our Team"
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
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to Offload Your IT Operations?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Get a customized managed services proposal tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
              <Link href="/assessment">
                Get a Custom Proposal <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
