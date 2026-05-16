"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppShortcut() {
  return (
    <a
      href="https://wa.me/14379221449?text=Hi%2C%20I%E2%80%99m%20interested%20in%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SGI on WhatsApp"
      className="fixed bottom-24 right-6 z-[9998] flex h-14 w-14 items-center justify-center rounded-full border border-green-400/40 bg-green-500 text-white shadow-2xl shadow-green-500/30 transition hover:scale-105 hover:bg-green-400"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}