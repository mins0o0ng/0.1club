"use client"

import { Button } from "@/components/ui/button"

interface HeaderProps {
  openModal: (title: string, description: string) => void;
}

export function Header({ openModal }: HeaderProps) {
  return (
    <header className="container mx-auto py-6 flex justify-between items-center">
      <div className="text-2xl font-bold text-[#1D1D1D]">0.1 CLUB</div>
      <nav className="hidden md:flex space-x-6">
        <a href="#hook" className="text-[#1D1D1D] font-medium">
          소개
        </a>
        <a href="#flow" className="text-[#1D1D1D] font-medium">
          참여 흐름
        </a>
        <a href="#cta" className="text-[#1D1D1D] font-medium">
          참여하기
        </a>
      </nav>
      <Button
        className="bg-[#1D1D1D] text-white border-2 border-[#E63946] hover:bg-[#E63946]"
        onClick={() => openModal("0.1 Club 가입하기", "이름과 이메일을 입력하여 0.1 Club에 가입하세요.")}
      >
        가입하기
      </Button>
    </header>
  )
} 