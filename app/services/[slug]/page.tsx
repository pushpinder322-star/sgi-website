import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, CheckCircle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { managedServices } from "@/lib/content"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return managedServices.map((service) => ({
    slug: service.key,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = managedServices.find((s) => s.key === slug)
  if (!service) return {}

  return {
    title: service.title,
    description: service.description,
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = managedServices.find((s) => s.key === slug)

  if (!service) {
    notFound()
  }

  const Icon = service.icon
  const relatedServices = managedServices.filter((s) => s.key !== slug)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 sgi-gradient" />
        <div className="absolute inset-0 sgi-gradient-radial" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Managed Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {service.description} Our team of certified experts provides
                proactive monitoring, rapid incident response, and continuous
                optimization to keep your operations running smoothly.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="sgi-glow" asChild>
                  <Link href="/assessment">
                    Get a Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
            <div className="aspect-video rounded-2xl bg-card border border-border flex items-center justify-center">
              <Icon className="w-32 h-32 text-primary/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              What&apos;s Included
            </h2>
            <p className="text-muted-foreground">
              Comprehensive service coverage for your peace of mind
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.features.map((feature, i) => (
              <div
                key={feature}
                className="flex items-start gap-4 p-6 rounded-xl bg-background border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{feature}</h3>
                  <p className="text-sm text-muted-foreground">
                    Expert management and proactive optimization included.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLA Guarantees */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Our SLA Guarantees
            </h2>
            <p className="text-muted-foreground">
              Industry-leading commitments backed by financial guarantees
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { metric: "99.99%", label: "Uptime Guarantee" },
              { metric: "< 15 min", label: "Response Time" },
              { metric: "24/7/365", label: "Support Coverage" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-8 rounded-xl bg-card border border-border text-center"
              >
                <div className="text-4xl font-bold sgi-text-gradient mb-2">
                  {item.metric}
                </div>
                <div className="text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 lg:py-28 bg-card border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">
            Other Managed Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((related) => {
              const RelatedIcon = related.icon
              return (
                <Link
                  key={related.key}
                  href={`/services/${related.key}`}
                  className="group block p-6 rounded-xl bg-background border border-border sgi-card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <RelatedIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {related.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 sgi-gradient" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our experts design a managed service plan that fits your needs
            and budget.
          </p>
          <Button size="lg" className="sgi-glow" asChild>
            <Link href="/assessment">
              Request a Proposal
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
