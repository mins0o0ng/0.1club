"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

interface FlowCardProps {
  emoji: string
  title: string
  coreSentence: string
  onClick: () => void
  delay: number
  cardColor: string
}

const MotionCard = motion(Card)

export function FlowCard({
  emoji,
  title,
  coreSentence,
  onClick,
  delay,
  cardColor,
}: FlowCardProps) {
  return (
    <MotionCard
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className={`${cardColor} p-8 h-[300px] flex flex-col items-center justify-center text-center rounded-2xl shadow-md cursor-pointer`}
      whileHover={{ scale: 1.02, boxShadow: "0 12px 24px rgba(0,0,0,0.12)" }}
    >
      <div className="text-6xl mb-4">{emoji}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-lg text-gray-700">{coreSentence}</p>
    </MotionCard>
  )
}
