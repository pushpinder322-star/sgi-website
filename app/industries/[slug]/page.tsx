import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, CheckCircle, ArrowLeft, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { industries, solutions } from "@/lib/content"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.key,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const industry = industries.find((i) => i.key === slug)
  if (!industry) return {}

  return {
    title: `${industry.title} Solutions`,
    description: industry.description,
  }
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params
  const industry = industries.find((i) => i.key === slug)

  if (!industry) {
    notFound()
  }

  const Icon = industry.icon
  const relatedIndustries = industries.filter((i) => i.key !== slug).slice(0, 3)
  const recommendedSolutions = solutions.slice(0, 4)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 sgi-gradient" />
        <div className="absolute inset-0 sgi-gradient-radial" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Industries
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
                {industry.title}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {industry.longDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="sgi-glow" asChild>
                  <Link href="/assessment">
                    Get Industry Assessment
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Speak to an Expert</Link>
                </Button>
              </div>
            </div>
            <div className="aspect-video rounded-2xl bg-card border border-border flex items-center justify-center">
              <Icon className="w-32 h-32 text-primary/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Challenges */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                Industry Challenges
              </h2>
              <div className="space-y-4">
                {industry.challenges.map((challenge) => (
                  <div
                    key={challenge}
                    className="p-4 rounded-lg bg-destructive/5 border border-destructive/20"
                  >
                    <p className="text-sm">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                Our Solutions
              </h2>
              <div className="space-y-4">
                {industry.solutions.map((solution) => (
                  <div
                    key={solution}
                    className="p-4 rounded-lg bg-primary/5 border border-primary/20"
                  >
                    <p className="text-sm">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      {industry.caseStudy && (
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Case Study
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold mt-3 mb-8">
                {industry.caseStudy.client}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-semibold text-destructive mb-3">
                    Challenge
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {industry.caseStudy.challenge}
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-semibold text-primary mb-3">Solution</h3>
                  <p className="text-sm text-muted-foreground">
                    {industry.caseStudy.solution}
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-semibold text-green-500 mb-3">Result</h3>
                  <p className="text-sm text-muted-foreground">
                    {industry.caseStudy.result}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recommended Solutions */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">
            Recommended Solutions for {industry.shortTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedSolutions.map((solution) => {
              const SolutionIcon = solution.icon
              return (
                <Link
                  key={solution.key}
                  href={`/solutions/${solution.key}`}
                  className="group block p-6 rounded-xl bg-background border border-border sgi-card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <SolutionIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {solution.shortTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {solution.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Related Industries */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">
            Related Industries
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedIndustries.map((related) => {
              const RelatedIcon = related.icon
              return (
                <Link
                  key={related.key}
                  href={`/industries/${related.key}`}
                  className="group block p-6 rounded-xl bg-card border border-border sgi-card-hover"
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
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Transform Your {industry.shortTitle} Operations?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our industry experts help you navigate the unique challenges of
            the {industry.shortTitle.toLowerCase()} sector.
          </p>
          <Button size="lg" className="sgi-glow" asChild>
            <Link href="/assessment">
              Schedule Industry Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
