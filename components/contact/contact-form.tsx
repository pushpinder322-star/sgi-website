"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
          <Input placeholder="John" />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
          <Input placeholder="Doe" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Work Email *</label>
        <Input type="email" placeholder="john@company.com" />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Company *</label>
        <Input placeholder="Company Inc." />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">How can we help? *</label>
        <textarea
          rows={4}
          placeholder="Tell us about your project or questions..."
          className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
        />
      </div>
      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
        Send Message <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </form>
  )
}
