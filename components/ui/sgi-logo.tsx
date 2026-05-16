"use client"

import { cn } from "@/lib/utils"

interface SGILogoProps {
  className?: string
  showTagline?: boolean
}

export function SGILogo({ className, showTagline = false }: SGILogoProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <svg
        viewBox="0 0 200 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-auto"
      >
        {/* S */}
        <path
          d="M10 45C10 45 15 50 30 50C45 50 50 42 50 35C50 28 45 24 30 22C15 20 10 16 10 10C10 4 20 0 35 0C50 0 55 5 55 5"
          stroke="url(#sgi-gradient)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* G */}
        <path
          d="M95 25H75C75 25 65 25 65 35C65 45 75 50 85 50C95 50 100 45 100 40V30H85"
          stroke="url(#sgi-gradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* i - main stem */}
        <path
          d="M120 15V50"
          stroke="url(#sgi-gradient)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* i - dot as the signature blue parallelogram */}
        <path
          d="M115 0L130 0L125 8L110 8Z"
          fill="#0066FF"
        />
        
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="sgi-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C0C0C0" />
            <stop offset="50%" stopColor="#E8E8E8" />
            <stop offset="100%" stopColor="#A0A0A0" />
          </linearGradient>
        </defs>
      </svg>
      
      {showTagline && (
        <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase mt-1">
          Enterprise Infrastructure & Security
        </span>
      )}
    </div>
  )
}

// Alternative: Text-based logo for simpler rendering
export function SGILogoText({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <span className="text-3xl font-black tracking-tight bg-gradient-to-b from-zinc-300 via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
        SG
      </span>
      <span className="text-3xl font-black tracking-tight bg-gradient-to-b from-zinc-300 via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
        i
      </span>
      <div className="w-3 h-4 bg-[#0066FF] transform -skew-x-12 -mt-4 -ml-2" />
    </div>
  )
}
