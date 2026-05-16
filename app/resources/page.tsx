"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  FileText, 
  Video, 
  BookOpen, 
  Download,
  ArrowRight,
  Calendar,
  Clock,
  Users
} from "lucide-react"
import { Button } from "@/components/ui/button"

const resources = [
  {
    category: "Whitepapers",
    icon: FileText,
    items: [
      {
        title: "The Future of Zero Trust Security",
        description: "A comprehensive guide to implementing zero trust architecture in enterprise environments.",
        type: "PDF",
        readTime: "15 min read",
        date: "March 2024"
      },
      {
        title: "Cloud Migration Best Practices",
        description: "Learn the strategies that successful enterprises use for seamless cloud transitions.",
        type: "PDF",
        readTime: "20 min read",
        date: "February 2024"
      },
      {
        title: "AI-Driven Threat Detection",
        description: "How machine learning is revolutionizing cybersecurity threat detection and response.",
        type: "PDF",
        readTime: "12 min read",
        date: "January 2024"
      }
    ]
  },
  {
    category: "Case Studies",
    icon: BookOpen,
    items: [
      {
        title: "Financial Services Digital Transformation",
        description: "How a 30+ bank reduced operational costs by 40% with our managed services.",
        type: "Case Study",
        readTime: "8 min read",
        date: "March 2024"
      },
      {
        title: "Healthcare Data Security Overhaul",
        description: "Implementing HIPAA-compliant infrastructure for a regional hospital network.",
        type: "Case Study",
        readTime: "10 min read",
        date: "February 2024"
      },
      {
        title: "Manufacturing IoT Integration",
        description: "Connecting 10,000+ devices securely for a global manufacturing leader.",
        type: "Case Study",
        readTime: "7 min read",
        date: "January 2024"
      }
    ]
  },
  {
    category: "Webinars",
    icon: Video,
    items: [
      {
        title: "Navigating NIS2 Compliance",
        description: "Expert panel discussion on preparing for the new EU cybersecurity directive.",
        type: "Video",
        readTime: "45 min",
        date: "Live: April 15, 2024"
      },
      {
        title: "Ransomware Defense Strategies",
        description: "Practical techniques for preventing and responding to ransomware attacks.",
        type: "Video",
        readTime: "60 min",
        date: "On-Demand"
      },
      {
        title: "Multi-Cloud Architecture Workshop",
        description: "Hands-on session for designing resilient multi-cloud environments.",
        type: "Video",
        readTime: "90 min",
        date: "On-Demand"
      }
    ]
  }
]

const upcomingEvents = [
  {
    title: "SGI Security Summit 2024",
    date: "May 15-17, 2024",
    location: "Brampton, CA",
    attendees: "300+"
  },
  {
    title: "Cloud Transformation Workshop",
    date: "April 22, 2024",
    location: "Virtual Event",
    attendees: "Unlimited"
  },
  {
    title: "CIO Roundtable: AI in Enterprise",
    date: "April 8, 2024",
    location: "Calgary, CA",
    attendees: "50"
  }
]

export default function ResourcesPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-medium">Resource Center</span>
            <h1 className="text-4xl lg:text-6xl font-bold mt-4 mb-6 text-balance">
              Insights & Knowledge Hub
            </h1>
            <p className="text-xl text-muted-foreground">
              Access whitepapers, case studies, webinars, and expert insights to help 
              you navigate the evolving technology landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      {resources.map((category, categoryIndex) => (
        <section key={category.category} className="py-16 border-t border-border">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="p-3 rounded-xl bg-primary/10">
                <category.icon className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">{category.category}</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: itemIndex * 0.1 }}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all"
                >
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {item.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {item.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                    <Button variant="ghost" size="sm" className="gap-1">
                      {item.type === "PDF" ? (
                        <>
                          <Download className="h-4 w-4" />
                          Download
                        </>
                      ) : item.type === "Video" ? (
                        <>
                          Watch Now
                          <ArrowRight className="h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Upcoming Events */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join us at industry events, workshops, and exclusive roundtables.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <div className="flex items-center gap-2 text-primary mb-3">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">{event.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{event.location}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {event.attendees} attendees
                  </span>
                  <Button size="sm" variant="outline">
                    Register
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest insights, research, and industry updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact">
                  Subscribe to Newsletter
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/assessment">
                  Request Custom Brief
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
