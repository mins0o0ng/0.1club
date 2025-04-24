"use client"

import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { handleSignup } from '@/app/actions/signup'
import { useToast } from '@/hooks/use-toast'

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

export function SignupModal({ isOpen, onClose, title, description }: SignupModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await handleSignup({ name, email })
      
      if (result.success) {
        toast({
          title: "가입 신청 완료",
          description: "곧 담당자가 연락드리겠습니다.",
        })
        onClose()
      } else {
        throw new Error(result.error)
      }
    } catch (error) {
      toast({
        title: "오류 발생",
        description: "잠시 후 다시 시도해주세요.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // 뉴스레터 구독 모달
  if (title.includes('뉴스레터')) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px] bg-[#F2E9DC] border-2 border-[#1D1D1D]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#1D1D1D]">{title}</DialogTitle>
            <DialogDescription className="text-[#1D1D1D]">
              해당 이메일로 매주 뉴스레터를 발송해드릴게요!
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <Button 
              onClick={onClose}
              className="bg-[#1D1D1D] text-white border-2 border-[#E63946] hover:bg-[#E63946]"
            >
              확인
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  // 일반 가입 모달
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-[#F2E9DC] border-2 border-[#1D1D1D]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#1D1D1D]">{title}</DialogTitle>
          <DialogDescription className="text-[#1D1D1D]">{description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border-2 border-[#1D1D1D]"
            />
            <Input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-2 border-[#1D1D1D]"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-[#1D1D1D] text-white border-2 border-[#E63946] hover:bg-[#E63946]" 
            disabled={isLoading}
          >
            {isLoading ? "처리중..." : "가입하기"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
