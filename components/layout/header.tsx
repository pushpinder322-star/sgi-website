"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ArrowRight, Phone, Shield, Wifi, Settings, TrendingUp, Cpu, Building2, Heart, Factory, ShoppingBag, Landmark, GraduationCap, Headset, Server, Cloud, Users, MapPin, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const pillars = [
  { key: "protect", name: "Protect", icon: Shield, desc: "Enterprise Security", image: "/images/protect.jpg" },
  { key: "connect", name: "Connect", icon: Wifi, desc: "Network Infrastructure", image: "/images/connect.jpg" },
  { key: "operate", name: "Operate", icon: Settings, desc: "Managed Operations", image: "/images/operate.jpg" },
  { key: "scale", name: "Scale", icon: TrendingUp, desc: "Cloud & Growth", image: "/images/scale.jpg" },
  { key: "automate", name: "Automate", icon: Cpu, desc: "Intelligent Automation", image: "/images/automate.jpg" },
]

const industries = [
  { key: "financial-services", name: "Financial Services", icon: Building2, image: "/images/financial.jpg" },
  { key: "healthcare", name: "Healthcare", icon: Heart, image: "/images/healthcare-care.jpg" },
  { key: "manufacturing", name: "Manufacturing", icon: Factory, image: "/images/warehousing.jpg" },
  { key: "retail", name: "Retail & Commerce", icon: ShoppingBag, image: "/images/retail-restaurants.jpg" },
  { key: "government", name: "Government", icon: Landmark, image: "/images/smart-buildings.jpg" },
  { key: "education", name: "Education", icon: GraduationCap, image: "/images/education.jpg" },
]

const services = [
  { key: "managed-soc", name: "Managed SOC", icon: Shield, desc: "24/7 Security Operations", image: "/images/SOC-2.jpg" },
  { key: "managed-noc", name: "Managed NOC", icon: Server, desc: "Network Monitoring", image: "/images/command-center.jpg" },
  { key: "cloud-services", name: "Cloud Services", icon: Cloud, desc: "Infrastructure & Migration", image: "/images/cloud-continuity.jpg" },
  { key: "it-support", name: "IT Support", icon: Headset, desc: "Enterprise Help Desk", image: "/images/managed-operations.jpg" },
]

const aboutItems = [
  { key: "company", name: "Our Company", icon: Building2, desc: "Mission & Vision", href: "/about" },
  { key: "leadership", name: "Leadership", icon: Users, desc: "Executive Team", href: "/about#leadership" },
  { key: "locations", name: "Locations", icon: MapPin, desc: "Offices Across Canada", href: "/about#locations" },
  { key: "certifications", name: "Certifications", icon: Award, desc: "Industry Standards", href: "/about#certifications" },
]

type ActiveMenu = "solutions" | "industries" | "services" | "about" | null

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveMenu(null)
  }, [pathname])

  const handleMenuEnter = (menu: ActiveMenu) => setActiveMenu(menu)
  const handleMenuLeave = () => setActiveMenu(null)

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-lg border-b border-border" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center">
              <span className="text-2xl font-black tracking-tight text-foreground">SGI</span>
              <div className="w-2 h-3 bg-primary transform -skew-x-12 -mt-2 -ml-0.5" />
            </div>
            <div className="hidden sm:block border-l border-border pl-3">
              <span className="text-[10px] text-muted-foreground tracking-widest uppercase block">
                Enterprise Infrastructure
              </span>
              <span className="text-[10px] text-muted-foreground tracking-widest uppercase block">
                & Security
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Solutions */}
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter("solutions")}
              onMouseLeave={handleMenuLeave}
            >
              <Link
                href="/solutions"
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                  pathname.startsWith("/solutions") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                Solutions <ChevronDown className="w-3.5 h-3.5" />
              </Link>
              <AnimatePresence>
                {activeMenu === "solutions" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 pt-2"
                  >
                    <div className="w-[700px] bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">The Five Pillars</h3>
                          <Link href="/solutions" className="text-xs text-primary hover:underline flex items-center gap-1">
                            View all <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                        <div className="grid grid-cols-5 gap-3">
                          {pillars.map((pillar) => (
                            <Link key={pillar.key} href={`/solutions?pillar=${pillar.key}`} className="group">
                              <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-2">
                                <Image src={pillar.image} alt={pillar.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                <div className="absolute bottom-2 left-2">
                                  <pillar.icon className="w-4 h-4 text-white/80" />
                                </div>
                              </div>
                              <h4 className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">{pillar.name}</h4>
                              <p className="text-[10px] text-muted-foreground">{pillar.desc}</p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries */}
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter("industries")}
              onMouseLeave={handleMenuLeave}
            >
              <Link
                href="/industries"
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                  pathname.startsWith("/industries") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                Industries <ChevronDown className="w-3.5 h-3.5" />
              </Link>
              <AnimatePresence>
                {activeMenu === "industries" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 pt-2"
                  >
                    <div className="w-[600px] bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Industries We Serve</h3>
                          <Link href="/industries" className="text-xs text-primary hover:underline flex items-center gap-1">
                            View all <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          {industries.map((industry) => (
                            <Link key={industry.key} href={`/industries/${industry.key}`} className="group">
                              <div className="relative aspect-[3/2] rounded-lg overflow-hidden mb-2">
                                <Image src={industry.image} alt={industry.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                <div className="absolute bottom-2 left-2">
                                  <industry.icon className="w-4 h-4 text-white/80" />
                                </div>
                              </div>
                              <h4 className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">{industry.name}</h4>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services */}
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter("services")}
              onMouseLeave={handleMenuLeave}
            >
              <Link
                href="/services"
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                  pathname.startsWith("/services") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                Services <ChevronDown className="w-3.5 h-3.5" />
              </Link>
              <AnimatePresence>
                {activeMenu === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 pt-2"
                  >
                    <div className="w-[500px] bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Managed Services</h3>
                          <Link href="/services" className="text-xs text-primary hover:underline flex items-center gap-1">
                            View all <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {services.map((service) => (
                            <Link key={service.key} href={`/services/${service.key}`} className="group flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                              <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                <Image src={service.image} alt={service.name} fill className="object-cover" />
                              </div>
                              <div>
                                <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{service.name}</h4>
                                <p className="text-xs text-muted-foreground">{service.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Projects */}
            <Link
              href="/projects"
              className={cn(
                "flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                pathname.startsWith("/projects") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Projects
            </Link>

            {/* About */}
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter("about")}
              onMouseLeave={handleMenuLeave}
            >
              <Link
                href="/about"
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                  pathname.startsWith("/about") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                About <ChevronDown className="w-3.5 h-3.5" />
              </Link>
              <AnimatePresence>
                {activeMenu === "about" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full right-0 pt-2"
                  >
                    <div className="w-[300px] bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
                      <div className="p-4">
                        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">About SGI</h3>
                        <div className="space-y-1">
                          {aboutItems.map((item) => (
                            <Link key={item.key} href={item.href} className="group flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors">
                              <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                              <div>
                                <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{item.name}</h4>
                                <p className="text-[10px] text-muted-foreground">{item.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <a href="tel:437-922-1449 / 289-892-5694" className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span>437-922-1449 / 289-892-5694</span>
            </a>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 h-9 rounded-full">
              <Link href="/assessment">
                Get Started
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="p-4 space-y-1">
              <Link href="/solutions" className="block px-4 py-3 text-foreground hover:bg-muted rounded-lg">Solutions</Link>
              <Link href="/industries" className="block px-4 py-3 text-foreground hover:bg-muted rounded-lg">Industries</Link>
              <Link href="/services" className="block px-4 py-3 text-foreground hover:bg-muted rounded-lg">Services</Link>
              <Link href="/projects" className="block px-4 py-3 text-foreground hover:bg-muted rounded-lg">Projects</Link>
              <Link href="/about" className="block px-4 py-3 text-foreground hover:bg-muted rounded-lg">About</Link>
              <div className="pt-4">
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 rounded-full">
                  <Link href="/assessment">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
