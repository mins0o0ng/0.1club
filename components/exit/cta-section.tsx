"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"

interface CTASectionProps {
  openModal: (title: string, description: string) => void;
}

const NOTION_URL = "https://aged-prepared-e1a.notion.site/1e1cc809550780d588a4dfdced665d93?pvs=4";

export function CTASection({ openModal }: CTASectionProps) {
  const [showModal, setShowModal] = useState(false)

  return (
    <section id="cta" className="bg-[#F2E9DC] container mx-auto py-20 relative">
      <AnimatedSection className="mb-16">
        <h3 className="text-3xl font-bold text-[#1D1D1D] mb-8 text-center">
          👥 다른 사람들은 이렇게 실험했어요
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection delay={0.2}>
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

          <AnimatedSection delay={0.4}>
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

      <AnimatedSection className="mt-16">
        <div className="border-4 border-[#1D1D1D] p-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1D] mb-6">
            📅 수다회는 매주 열려요!
          </h2>
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
              onClick={() => window.open(NOTION_URL, "_blank")}
            >
              수다회 일정 확인하기
            </Button>
          </div>
        </div>
      </AnimatedSection>
      {/* 공유하기 모달 */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-[320px] flex flex-col items-center">
            <div className="text-2xl font-bold mb-4">불편함을 공유해주셔서 감사합니다</div>
            <Button
              className="mt-2 px-6 py-2 bg-[#E63946] text-white rounded-lg font-semibold shadow hover:bg-[#c92d3b] transition"
              onClick={() => setShowModal(false)}
            >
              닫기
            </Button>
          </div>
        </div>
      )}
    </section>
  )
} 