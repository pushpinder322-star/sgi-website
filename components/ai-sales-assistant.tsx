"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Bot,
  X,
  Send,
  Shield,
  Wifi,
  Settings,
  Cloud,
  Cpu,
  Phone,
  Mail,
  Building2,
} from "lucide-react"

type Message = {
  role: "assistant" | "user"
  text: string
}

const quickOptions = [
  "I need IT support",
  "I need networking",
  "I need cameras / access control",
  "I need cybersecurity",
  "I need managed services",
  "I need help choosing",
]

function getAssistantReply(input: string) {
  const text = input.toLowerCase()

  if (text.includes("it") || text.includes("computer") || text.includes("email") || text.includes("microsoft")) {
    return {
      title: "Managed IT Support",
      body:
        "For IT support, SGI can help with Microsoft 365 administration, user onboarding, device support, office IT setup, troubleshooting, and ongoing managed support.",
      solution: "Operate",
      icon: Settings,
    }
  }

  if (text.includes("network") || text.includes("wifi") || text.includes("switch") || text.includes("vlan") || text.includes("internet")) {
    return {
      title: "Network Infrastructure",
      body:
        "For networking, SGI can support business Wi-Fi, switches, VLAN design, firewalls, multi-site connectivity, structured cabling coordination, and network troubleshooting.",
      solution: "Connect",
      icon: Wifi,
    }
  }

  if (text.includes("camera") || text.includes("cctv") || text.includes("access") || text.includes("door") || text.includes("security")) {
    return {
      title: "Physical Security Systems",
      body:
        "For cameras, access control, intercom, and site security, SGI can help design, install, integrate, and support business-grade physical security infrastructure.",
      solution: "Protect",
      icon: Shield,
    }
  }

  if (text.includes("cyber") || text.includes("firewall") || text.includes("threat") || text.includes("monitoring")) {
    return {
      title: "Cybersecurity & Monitoring",
      body:
        "For cybersecurity, SGI can help with firewall coordination, endpoint protection planning, monitoring workflows, risk reduction, and response-focused infrastructure support.",
      solution: "Protect",
      icon: Shield,
    }
  }

  if (text.includes("cloud") || text.includes("backup") || text.includes("continuity") || text.includes("server")) {
    return {
      title: "Cloud & Continuity",
      body:
        "For cloud and continuity, SGI can help with backup planning, cloud readiness, business continuity, Microsoft 365 environments, and infrastructure modernization.",
      solution: "Scale",
      icon: Cloud,
    }
  }

  if (text.includes("automate") || text.includes("automation") || text.includes("smart")) {
    return {
      title: "Automation & Intelligent Operations",
      body:
        "For automation, SGI can help connect systems, simplify operations, improve visibility, and support smarter technology workflows for modern facilities.",
      solution: "Automate",
      icon: Cpu,
    }
  }

  return {
    title: "Infrastructure Assessment Recommended",
    body:
      "Based on what you shared, SGI should first assess your site, systems, network, security needs, and operational requirements before recommending the right solution path.",
    solution: "Assessment",
    icon: Building2,
  }
}

export default function AiSalesAssistant() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text:
        "Hi, I’m SGI’s digital assistant. I can help you choose the right path for IT support, networking, cybersecurity, cameras, access control, cloud continuity, or managed operations. What are you looking for?",
    },
  ])

  const sendMessage = (value?: string) => {
    const finalInput = value || input
    if (!finalInput.trim()) return

    const reply = getAssistantReply(finalInput)
    const Icon = reply.icon

    setMessages((prev) => [
      ...prev,
      { role: "user", text: finalInput },
      {
        role: "assistant",
        text: `${reply.title}\n\n${reply.body}\n\nRecommended SGI path: ${reply.solution}\n\nNext step: schedule an infrastructure assessment or contact SGI directly.`,
      },
    ])

    setInput("")
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 rounded-full border border-cyan-400/30 bg-black/80 px-5 py-4 text-sm font-semibold text-white shadow-2xl shadow-cyan-500/20 backdrop-blur-xl transition hover:border-cyan-300/60 hover:bg-black"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400 text-black">
          <Bot className="h-5 w-5" />
        </span>
        <span className="hidden sm:inline">Ask SGI Assistant</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 right-6 z-[10000] w-[calc(100vw-32px)] max-w-[420px] overflow-hidden rounded-3xl border border-white/10 bg-[#05070b]/95 text-white shadow-2xl shadow-cyan-500/20 backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 text-black">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold">SGI Infrastructure Assistant</h3>
                  <p className="text-xs text-white/50">Sales guidance · IT · Network · Security</p>
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-2 text-white/60 transition hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[430px] space-y-4 overflow-y-auto px-5 py-5">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      message.role === "user"
                        ? "bg-cyan-400 text-black"
                        : "border border-white/10 bg-white/[0.06] text-white/80"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 px-5 py-4">
              <div className="mb-3 flex flex-wrap gap-2">
                {quickOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => sendMessage(option)}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/70 transition hover:border-cyan-400/50 hover:text-white"
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 p-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") sendMessage()
                  }}
                  placeholder="Tell us what you need..."
                  className="flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-white/35"
                />

                <button
                  onClick={() => sendMessage()}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-black transition hover:bg-cyan-300"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <a
                  href="tel:4379221449"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-xs font-semibold text-white/75 transition hover:border-cyan-400/40 hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  Call SGI
                </a>

                <a
                  href="mailto:info@smartguardinnovations.ca"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-xs font-semibold text-white/75 transition hover:border-cyan-400/40 hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  Email SGI
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}