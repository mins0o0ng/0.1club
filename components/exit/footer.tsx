"use client"

interface FooterProps {
  openModal: (title: string, description: string) => void;
}

export function Footer({ openModal }: FooterProps) {
  return (
    <footer className="bg-[#1D1D1D] text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} 0.1 Club. All rights reserved.</p>
      </div>
    </footer>
  )
} 