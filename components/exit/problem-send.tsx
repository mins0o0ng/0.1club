"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FloatingEmoji } from "@/components/floating-emoji"

export function ProblemSend() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section className="bg-[#1D1D1D] py-24 text-center">
      <FloatingEmoji emoji="💭" top="10%" right="5%" delay={0.4} className="text-4xl" />
      <FloatingEmoji emoji="🤔" bottom="10%" left="8%" delay={0.9} className="text-4xl" />

      <h2 className="text-4xl font-bold text-white mb-4">
        당신이 느낀 <span className="text-[#E63946]">불편함</span>을 알려주세요
      </h2>
      <p className="text-lg text-white mb-10">작은 불편함도 괜찮아요. 함께 해결해봐요!</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-3xl mx-auto">
        <Input
          type="text"
          placeholder="도서관에서 콘센트 찾기 어려워요"
          className="flex-1 rounded-xl border-2 border-[#E63946] px-8 py-6 text-lg focus:outline-none text-gray-300 opacity-70"
        />
        <Button
          className="bg-[#E63946] text-white border-2 border-white hover:bg-white hover:text-[#E63946] py-6 px-8"
          onClick={() => setShowModal(true)}
        >
          공유하기
        </Button>
      </div>
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