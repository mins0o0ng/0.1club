"use client"
import { motion } from "framer-motion"

interface FloatingEmojiProps {
  emoji: string
  size?: string
  top?: string
  left?: string
  right?: string
  bottom?: string
  delay?: number
  duration?: number
  className?: string
}

export function FloatingEmoji({
  emoji,
  size = "text-4xl",
  top,
  left,
  right,
  bottom,
  delay = 0,
  duration = 20,
  className = "",
}: FloatingEmojiProps) {
  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
        ease: "easeInOut",
        delay: delay,
      },
    },
  }

  const rotateVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: [-5, 5, -5],
      transition: {
        duration: duration * 0.8,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
        ease: "easeInOut",
        delay: delay + 0.5,
      },
    },
  }

  return (
    <motion.div
      className={`absolute ${size} ${className}`}
      style={{ top, left, right, bottom }}
      initial="initial"
      animate="animate"
      variants={floatVariants}
    >
      <motion.div variants={rotateVariants}>{emoji}</motion.div>
    </motion.div>
  )
}
