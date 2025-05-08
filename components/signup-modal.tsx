"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { handleSignup } from "@/app/actions/signup"
import { useToast } from "@/components/ui/use-toast"

interface SignupModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description: string
}

export function SignupModal({ open, onOpenChange, title, description }: SignupModalProps) {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await handleSignup({ name, email })
      toast({
        title: "저장완료!",
        description: "곧 담당자가 연락드리겠습니다.",
      })
      onOpenChange(false)
    } catch (error) {
      toast({
        title: "오류가 발생했습니다",
        description: "잠시 후 다시 시도해주세요.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const isSignupModal = !title.includes("💬") && !title.includes("🧠") && 
                       !title.includes("🧪") && !title.includes("📊") && 
                       !title.includes("🚀")

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-[#F2E9DC] border-2 border-[#1D1D1D]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#1D1D1D]">{title}</DialogTitle>
          <DialogDescription className="text-[#1D1D1D] whitespace-pre-line">
            {description}
          </DialogDescription>
        </DialogHeader>
        {isSignupModal ? (
          <form onSubmit={handleSubmit} className="space-y-4 mt-20">
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
            <Button 
              type="submit" 
              className="w-full bg-[#1D1D1D] text-white border-2 border-[#E63946] hover:bg-[#E63946]" 
              disabled={loading}
            >
              {loading ? "처리중..." : "가입하기"}
            </Button>
          </form>
        ) : (
          <div className="flex justify-end mt-4">
            <Button 
              onClick={() => onOpenChange(false)}
              className="bg-[#1D1D1D] text-white border-2 border-[#E63946] hover:bg-[#E63946]"
            >
              확인
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
