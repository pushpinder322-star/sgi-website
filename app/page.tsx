import { Hero } from "@/components/home/hero"
import { Stats } from "@/components/home/stats"
import { FivePillars } from "@/components/home/five-pillars"
import { IndustriesSection } from "@/components/home/industries-section"
import { ManagedServices } from "@/components/home/managed-services"
import { CTASection } from "@/components/home/cta-section"
import AiSalesAssistant from "@/components/ai-sales-assistant"
import WhatsAppShortcut from "@/components/whatsapp-shortcut"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FivePillars />
      <IndustriesSection />
      <ManagedServices />
      <CTASection />

      <WhatsAppShortcut />
      <AiSalesAssistant />
    </>
  )
}
