"use client"

import { Button } from "@/components/ui/button"
import { FloatingEmoji } from "@/components/floating-emoji"
import { AnimatedSection } from "@/components/animated-section"
import { motion } from "framer-motion"
import { useScrollEffects } from "@/hooks/use-scroll-effects"
import { Zap } from "lucide-react"
import Image from "next/image"

interface HookSectionProps {
  openModal: (title: string, description: string) => void;
}

export function HookSection({ openModal }: HookSectionProps) {
  const { y1, y2, rotate1 } = useScrollEffects()

  return (
    <section id="hook" className="container mx-auto py-20 relative">
      <motion.div style={{ y: y1 }} className="absolute top-10 right-10 text-[#E63946] animate-pulse">
        <Zap size={40} />
      </motion.div>

      <FloatingEmoji emoji="😖" top="5%" left="5%" delay={0} />
      <FloatingEmoji emoji="🍽️" top="15%" right="10%" delay={0.5} />
      <FloatingEmoji emoji="🚌" bottom="20%" left="5%" delay={1} />
      <FloatingEmoji emoji="💻" bottom="10%" right="15%" delay={1.5} />
      <FloatingEmoji emoji="😵‍💫" top="55%" left="40%" delay={2} />

      <AnimatedSection className="max-w-3xl relative z-10">
        <h1 className="text-7xl md:text-8xl font-bold text-[#1D1D1D] leading-tight">
          불편함, <br />
          <span className="text-[#E63946]">누구나</span> 느끼죠.
        </h1>
        <p className="text-xl mt-6 text-[#1D1D1D] max-w-xl">
          혼밥, 버스, 집안일, 공부...
          <br />
          그냥 넘기던 불편함이
          <br />
          여기선 아이디어의 씨앗이 됩니다.
        </p>
        <div className="mt-10">
          <Button
            className="bg-[#1D1D1D] text-white border-2 border-[#E63946] hover:bg-[#E63946] text-lg py-6 px-8"
            onClick={() => openModal("0.1 Club 가입하기", "이름과 이메일을 입력하여 0.1 Club에 가입하세요.")}
          >
            실험 참여하기
          </Button>
        </div>
      </AnimatedSection>

      <motion.div
        style={{ y: y2, rotate: rotate1 }}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block"
      >
        <div className="relative">
          <div className="bg-[#E63946] w-80 h-96 rotate-6"></div>
          <Image
            src="/placeholder.svg?height=400&width=300"
            alt="Collage Image"
            width={300}
            height={400}
            className="absolute top-0 left-0 grayscale mix-blend-multiply"
          />
        </div>
      </motion.div>
    </section>
  )
} 