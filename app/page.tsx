"use client"

import { SignupModal } from "@/components/signup-modal"
import { useModal } from "@/hooks/use-modal"
import { Header } from "@/components/entrance/header"
import { HookSection } from "@/components/entrance/hook-section"
import { FlowSection } from "@/components/flow/flow-section"
import { CTASection } from "@/components/exit/cta-section"
import { NewsletterSection } from "@/components/exit/newsletter-section"
import { Footer } from "@/components/exit/footer"

export default function Home() {
  const { modalState, openModal, closeModal } = useModal({
    title: "",
    description: ""
  })

  return (
    <main className="min-h-screen bg-[#F2E9DC] overflow-hidden">
      <Header openModal={openModal} />
      <HookSection openModal={openModal} />
      <FlowSection />
      <CTASection openModal={openModal} />
      <NewsletterSection openModal={openModal} />
      <Footer openModal={openModal} />
      <SignupModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        description={modalState.description}
      />
    </main>
  )
}
