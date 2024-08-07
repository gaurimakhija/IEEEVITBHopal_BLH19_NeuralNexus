"use client"

import { SmartLearnSVG } from "@/components/icons/smart-learn-svg"
import { IconArrowRight } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import Link from "next/link"

export default function HomePage() {
  const { theme } = useTheme()

  return (
    <div className="flex size-full flex-col items-center justify-center">
      <div>
        <SmartLearnSVG
          theme={theme === "dark" ? "dark" : "light"}
          scale={0.3}
        />
      </div>

      <div className="mt-2 text-4xl font-bold">SmartLearn</div>

      <Link
        className="bg-primary text-primary-foreground mt-4 flex w-[200px] items-center justify-center rounded-md p-2 font-semibold"
        href="/login"
      >
        Start Chatting
        <IconArrowRight className="ml-1" size={20} />
      </Link>
    </div>
  )
}
