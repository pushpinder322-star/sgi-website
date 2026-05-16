"use client"

import Link from "next/link"
import { Phone, Mail, Linkedin, Twitter, ArrowRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { companyInfo, footerLinks, partnerNames, pillars } from "@/lib/content"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Partners Marquee */}
      <div className="border-b border-border py-8 overflow-hidden">
        <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-6">
          Trusted Technology Partners
        </p>
        <div className="relative">
          <div className="flex animate-marquee">
            {[...partnerNames, ...partnerNames].map((partner, i) => (
              <span
                key={`${partner}-${i}`}
                className="mx-8 text-muted-foreground/50 font-semibold text-lg whitespace-nowrap"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-b border-border py-20 bg-gradient-to-b from-background to-card">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs text-primary uppercase tracking-widest font-semibold">
            Enterprise Consultation
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Ready to transform your infrastructure?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with our enterprise architects to design a solution tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/assessment">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 rounded-full">
                Schedule Assessment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="font-semibold px-8 h-12 rounded-full">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-foreground">SGI</span>
              <div className="w-2 h-3 bg-primary transform -skew-x-12 -mt-2 -ml-0.5" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Enterprise IT infrastructure, networking, cybersecurity, and managed operational support for modern businesses.
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${companyInfo.contact.email}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                {companyInfo.contact.email}
              </a>
              <a
                href={`tel:${companyInfo.contact.phone}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                {companyInfo.contact.phone} / {companyInfo.contact.phoneAlt}
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                {companyInfo.contact.address}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={companyInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 5 Pillars */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Solutions</h3>
            <ul className="space-y-3">
              {pillars.map((pillar) => (
                <li key={pillar.key}>
                  <Link
                    href={`/solutions?pillar=${pillar.key}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {pillar.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Industries</h3>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get enterprise IT insights delivered weekly.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Email address"
                className="bg-background border-border"
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
