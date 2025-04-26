"use client"

import { useState } from "react"
import { SignupModal } from "@/components/signup-modal"
import { Header } from "@/components/entrance/header"
import { HookSection } from "@/components/entrance/hook-section"
import { FlowSection } from "@/components/flow/flow-section"
import { CTASection } from "@/components/exit/cta-section"
import { ProblemSend } from "@/components/exit/problem-send"
import { Footer } from "@/components/exit/footer"

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState("")
  const [modalDescription, setModalDescription] = useState("")

  const openModal = (title: string, description: string) => {
    setModalTitle(title)
    setModalDescription(description)
    setModalOpen(true)
  }

  return (
    <main className="min-h-screen bg-[#F2E9DC] overflow-hidden">
      <Header openModal={openModal} />
      <HookSection openModal={openModal} />
      <FlowSection openModal={openModal} />
      <CTASection openModal={openModal} />
      <ProblemSend />
      <Footer openModal={openModal} />
      <SignupModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        title={modalTitle}
        description={modalDescription}
      />
    </main>
  )
}
