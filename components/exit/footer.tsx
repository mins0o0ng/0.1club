"use client"

import { useModal } from "@/hooks/use-modal"

interface FooterProps {
  openModal: (title: string, description: string) => void;
}

export function Footer({ openModal }: FooterProps) {
  return (
    <footer className="bg-[#F2E9DC] py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold text-[#1D1D1D]">0.1 CLUB</div>
            <p className="text-[#1D1D1D] mt-1 text-sm">일상 속 불편함을 실험으로</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <div>
              <h3 className="font-bold text-[#1D1D1D] mb-2 text-sm">소개</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#hook" className="text-[#1D1D1D] hover:text-[#E63946] text-sm">
                    0.1 Club 소개
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#1D1D1D] hover:text-[#E63946] text-sm">
                    팀 소개
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#1D1D1D] hover:text-[#E63946] text-sm">
                    연락처
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#1D1D1D] mb-2 text-sm">서비스</h3>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    className="text-[#1D1D1D] hover:text-[#E63946] text-sm"
                    onClick={(e) => {
                      e.preventDefault()
                      openModal("프리미엄 구독", "이름과 이메일을 입력하여 프리미엄 구독을 신청하세요.")
                    }}
                  >
                    프리미엄 구독
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#1D1D1D] hover:text-[#E63946] text-sm"
                    onClick={(e) => {
                      e.preventDefault()
                      openModal("실험 셀 참여", "이름과 이메일을 입력하여 실험 셀에 참여하세요.")
                    }}
                  >
                    실험 셀 참여
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#1D1D1D] hover:text-[#E63946] text-sm"
                    onClick={(e) => {
                      e.preventDefault()
                      openModal("교육 프로그램", "이름과 이메일을 입력하여 교육 프로그램에 참여하세요.")
                    }}
                  >
                    교육 프로그램
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#1D1D1D] mb-2 text-sm">정책</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="text-[#1D1D1D] hover:text-[#E63946] text-sm">
                    이용약관
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#1D1D1D] hover:text-[#E63946] text-sm">
                    개인정보처리방침
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-[#1D1D1D] mt-6 pt-6 text-center text-[#1D1D1D] text-sm">
          <p>© 2023 0.1 Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 