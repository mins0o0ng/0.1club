"use client"

import { FloatingEmoji } from "@/components/floating-emoji"
import { AnimatedSection } from "@/components/animated-section"
import { motion } from "framer-motion"

export function FlowSection() {
  return (
    <section id="flow" className="py-20 bg-[#1D1D1D] text-white relative">
      <FloatingEmoji emoji="💬" top="5%" right="5%" delay={0.2} className="text-5xl" />
      <FloatingEmoji emoji="🧪" bottom="10%" left="3%" delay={0.7} className="text-5xl" />
      <FloatingEmoji emoji="🔄" top="20%" left="8%" delay={1.2} className="text-5xl" />

      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-5xl font-bold mb-16 text-center">
            어떻게 흘러가냐고요? <span className="text-[#E63946]">이렇게요</span>
          </h2>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-20">
          {/* Step 1 */}
          <AnimatedSection delay={0.2}>
            <div className="text-center">
              <span className="text-7xl mb-6 block">💬</span>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold flex items-center justify-center gap-4">
                  <span className="text-[#E63946]">1</span>
                  수다 → 발견
                </h3>
                <p className="text-xl opacity-90">친구랑 수다 떨다 보면 "야, 이거 너무 불편하지 않아?"가 나와요</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Step 2 */}
          <AnimatedSection delay={0.4}>
            <div className="text-center">
              <span className="text-7xl mb-6 block">🧪</span>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold flex items-center justify-center gap-4">
                  <span className="text-[#E63946]">2</span>
                  발견 → 실험
                </h3>
                <p className="text-xl opacity-90">공감하는 사람들끼리 작은 셀을 만들어 실험을 시작해요</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Step 3 */}
          <AnimatedSection delay={0.6}>
            <div className="text-center">
              <span className="text-7xl mb-6 block">📊</span>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold flex items-center justify-center gap-4">
                  <span className="text-[#E63946]">3</span>
                  실험 → 공유
                </h3>
                <p className="text-xl opacity-90">실험 결과를 정리하고, 다른 사람도 이어서 시도할 수 있도록 나눠요</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
} 