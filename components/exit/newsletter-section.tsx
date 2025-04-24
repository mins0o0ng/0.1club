"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FloatingEmoji } from "@/components/floating-emoji"
import { AnimatedSection } from "@/components/animated-section"

interface NewsletterSectionProps {
  openModal: (title: string, description: string) => void;
}

export function NewsletterSection({ openModal }: NewsletterSectionProps) {
  return (
    <section className="bg-[#1D1D1D] py-16 relative">
      <FloatingEmoji emoji="📧" top="10%" right="5%" delay={0.4} className="text-4xl" />
      <FloatingEmoji emoji="📱" bottom="10%" left="8%" delay={0.9} className="text-4xl" />

      <div className="container mx-auto">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            0.1 Club <span className="text-[#E63946]">뉴스레터</span> 구독하기
          </h2>
          <p className="text-white mb-8">최신 실험 소식과 커뮤니티 업데이트를 받아보세요.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="이메일 주소를 입력하세요"
              className="bg-white border-2 border-[#E63946] py-6"
            />
            <Button
              className="bg-[#E63946] text-white border-2 border-white hover:bg-white hover:text-[#E63946] py-6 px-8"
              onClick={() =>
                openModal("뉴스레터 구독하기", "앞으론 해당 이메일로 0.1 Club의 소식을 매주 전달해드릴게요!")
              }
            >
              구독하기
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
} 