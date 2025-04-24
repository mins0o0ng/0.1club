"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FloatingEmoji } from "@/components/floating-emoji"
import { AnimatedSection } from "@/components/animated-section"
import { motion } from "framer-motion"
import { useModal } from "@/hooks/use-modal"
import { useScrollEffects } from "@/hooks/use-scroll-effects"
import { MessageSquare, TestTube, Share2, Lightbulb, Zap } from "lucide-react"
import Image from "next/image"

interface CTASectionProps {
  openModal: (title: string, description: string) => void;
}

export function CTASection({ openModal }: CTASectionProps) {
  const { y3, rotate1, rotate2 } = useScrollEffects()

  return (
    <section id="cta" className="container mx-auto py-20 relative">
      <FloatingEmoji emoji="🎯" top="3%" right="8%" delay={0.3} className="text-5xl" />
      <FloatingEmoji emoji="💡" bottom="15%" left="5%" delay={0.8} className="text-5xl" />
      <FloatingEmoji emoji="🚀" top="25%" right="3%" delay={1.3} className="text-5xl" />

      <motion.div style={{ y: y3, rotate: rotate2 }} className="absolute -left-20 top-40">
        <div className="bg-[#E63946] w-40 h-40 rounded-full opacity-20"></div>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-5xl font-bold text-[#1D1D1D] mb-16 text-center">
            다음 실험의 주인공은, <span className="text-[#E63946]">당신</span>일 수 있어요
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <AnimatedSection delay={0.2}>
            <Card className="bg-white border-2 border-[#1D1D1D] overflow-hidden transform hover:scale-105 transition-transform h-full">
              <CardContent className="p-6 flex flex-col items-center h-full">
                <div className="bg-[#E63946] rounded-full p-4 mb-4">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">매주 열리는 불편함 수다회</h3>
                <p className="text-center">함께 모여 일상 속 불편함에 대해 이야기하고 아이디어를 나눠요</p>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <Card className="bg-white border-2 border-[#1D1D1D] overflow-hidden transform hover:scale-105 transition-transform h-full">
              <CardContent className="p-6 flex flex-col items-center h-full">
                <div className="bg-[#E63946] rounded-full p-4 mb-4">
                  <TestTube className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">누구나 신청 가능한 MVP 셀 구성</h3>
                <p className="text-center">아이디어를 실험으로 옮기는 소규모 팀을 직접 만들고 참여해보세요</p>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <Card className="bg-white border-2 border-[#1D1D1D] overflow-hidden transform hover:scale-105 transition-transform h-full">
              <CardContent className="p-6 flex flex-col items-center h-full">
                <div className="bg-[#E63946] rounded-full p-4 mb-4">
                  <Share2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">전용 뱃지, 콘텐츠, 할인 혜택</h3>
                <p className="text-center">프리미엄 멤버십으로 더 많은 혜택과 특별한 경험을 누려보세요</p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Testimonials */}
        <AnimatedSection delay={0.4} className="mb-16">
          <h3 className="text-3xl font-bold text-[#1D1D1D] mb-8 text-center">실제 참여 후기</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.6}>
              <div className="bg-white p-6 rounded-lg border-2 border-[#1D1D1D] relative h-full">
                <div className="absolute -top-3 -left-3 bg-[#E63946] text-white px-3 py-1 text-sm font-bold">
                  인스타그램 후기
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="User"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold mb-2">@user_name</p>
                    <p className="text-[#1D1D1D]">
                      "처음엔 그냥 수다 떨러 갔는데, 내 아이디어가 실제 실험으로 이어질 줄은 몰랐어요! 같은 불편함을
                      느끼는 사람들과 함께하니 해결책도 더 쉽게 나오더라고요."
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.8}>
              <div className="bg-white p-6 rounded-lg border-2 border-[#1D1D1D] relative h-full">
                <div className="absolute -top-3 -left-3 bg-[#E63946] text-white px-3 py-1 text-sm font-bold">
                  실험 과정 공유
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="User"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold mb-2">@another_user</p>
                    <p className="text-[#1D1D1D]">
                      "우리 셀에서 만든 '1인 가구 식재료 교환 앱' 프로토타입이 실제 동네 주민들에게 테스트되는 걸 보고
                      정말 뿌듯했어요. 아이디어가 현실이 되는 과정이 짜릿합니다!"
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        {/* CTA Buttons */}
        <AnimatedSection delay={0.6}>
          <div className="bg-[#F2E9DC] border-4 border-[#1D1D1D] p-10 relative overflow-hidden">
            <motion.div style={{ rotate: rotate1 }} className="absolute -right-10 -top-10 text-[#E63946]">
              <Zap size={80} />
            </motion.div>
            <motion.div style={{ rotate: rotate2 }} className="absolute -left-10 -bottom-10 text-[#E63946]">
              <Lightbulb size={80} />
            </motion.div>

            <div className="max-w-2xl mx-auto text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1D] mb-6">
                지금 바로 <span className="text-[#E63946]">참여</span>하세요
              </h2>
              <p className="text-xl text-[#1D1D1D] mb-8">
                0.1 Club과 함께 일상 속 불편함을 해결하는 실험에 참여하고, 새로운 아이디어를 발견하세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-[#1D1D1D] text-white border-2 border-[#E63946] hover:bg-[#E63946] text-lg py-6 px-8"
                  onClick={() => openModal("지금 바로 참여하기", "이름과 이메일을 입력하여 0.1 Club에 참여하세요.")}
                >
                  지금 바로 참여하기
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#1D1D1D] text-[#1D1D1D] hover:bg-[#1D1D1D] hover:text-white text-lg py-6 px-8"
                  onClick={() =>
                    openModal("수다회 일정 확인하기", "이름과 이메일을 입력하시면 수다회 일정을 알려드립니다.")
                  }
                >
                  수다회 일정 확인하기
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
} 