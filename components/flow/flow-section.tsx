/// <reference types="react" />

"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const steps = [
  {
    emoji: "💬",
    title: "수다",
    coreSentence: "“이거 나만 불편해?” 그 한마디가, 실험의 씨앗이 돼요.",
  },
  {
    emoji: "🧠",
    title: "발견",
    coreSentence: "“나도 그랬어.” 그 말이 나오면, 실험은 이미 반쯤 시작된 거예요.",
  },
  {
    emoji: "🧪",
    title: "실험",
    coreSentence: "해보는 순간, 그냥 아이디어가 진짜가 돼요.",
  },
  {
    emoji: "📊",
    title: "공유",
    coreSentence: "나의 실험이, 누군가의 다음 아이디어가 돼요.",
  },
]

const SCROLL_THRESHOLD = 180;
const NOTION_URL = "https://aged-prepared-e1a.notion.site/1e1cc809550780d588a4dfdced665d93?pvs=4";
const CENTER_ACTIVATION_RANGE = 100; // 화면 중앙에서 ±100px 이내일 때만 활성

export function FlowSection({ onShareClick }: { onShareClick?: () => void } = {}) {
  const [current, setCurrent] = useState(0)
  const wheelAccumulator = useRef(0)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    let lock = false;

    const onWheel = (e: WheelEvent) => {
      const section = document.getElementById("flow-section-sticky");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;
      const screenCenter = window.innerHeight / 2;

      const centerOffset = Math.abs(sectionCenter - screenCenter);

      // 중앙에 충분히 가까울 때만 작동
      const inCenterView = centerOffset < CENTER_ACTIVATION_RANGE;
      if (!inCenterView) return;

      if (lock) {
        e.preventDefault();
        return;
      }

      wheelAccumulator.current += e.deltaY;

      const threshold = 180;

      if (wheelAccumulator.current > threshold && current < steps.length - 1) {
        e.preventDefault();
        setCurrent((prev) => Math.min(prev + 1, steps.length - 1));
        wheelAccumulator.current = 0;
        lock = true;
        setTimeout(() => (lock = false), 300);
      } else if (wheelAccumulator.current < -threshold && current > 0) {
        e.preventDefault();
        setCurrent((prev) => Math.max(prev - 1, 0));
        wheelAccumulator.current = 0;
        lock = true;
        setTimeout(() => (lock = false), 300);
      } else if (
        (e.deltaY > 0 && current < steps.length - 1) ||
        (e.deltaY < 0 && current > 0)
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [current]);

  // 카드 스택 스타일 계산
  const getCardStyle = (idx: number) => {
    const offset = idx - current
    return {
      zIndex: steps.length - offset,
      scale: 1 - offset * 0.04,
      y: offset * 12,
      rotate: offset * 2,
      opacity: offset > 2 ? 0 : 1 - offset * 0.18,
      boxShadow: offset === 0 ? "0 8px 32px rgba(0,0,0,0.10)" : "none",
      position: "absolute" as const,
      left: 0,
      top: 0,
      width: "100%",
      pointerEvents: (offset === 0 ? "auto" : "none") as 'auto' | 'none',
      transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
      cursor: offset === 0 ? "pointer" : "default",
    }
  }

  return (
    <section id="flow-section-sticky" className="bg-[#f2e9dc] flex flex-col items-center justify-center min-h-screen py-0">
      <div className="text-center mt-8 mb-6">
        <h2 className="text-4xl font-bold mb-8">
          <span className="text-[#E63946]">실험</span>은 이렇게 진행돼요
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          작은 불편함에서 시작해 큰 변화를 만드는 과정입니다.
        </p>
      </div>
      <div className="relative w-[440px] h-[300px] flex items-center justify-center" style={{margin: 0, padding: 0}}>
        <AnimatePresence>
          {steps.map((step, idx) => {
            const offset = idx - current
            if (offset < 0) return null
            if (offset > 2) return null
            return (
              <motion.div
                key={idx}
                style={getCardStyle(idx)}
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                animate={{ opacity: getCardStyle(idx).opacity, scale: getCardStyle(idx).scale, y: getCardStyle(idx).y, rotate: getCardStyle(idx).rotate }}
                exit={{ opacity: 0, scale: 0.9, y: -60 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="bg-white rounded-2xl shadow-xl p-12 w-[400px] h-[260px] flex flex-col justify-center items-center">
                  <div className="text-6xl mb-6">{step.emoji}</div>
                  <h3 className="text-3xl font-bold mb-3">{step.title}</h3>
                  <p className="text-center text-gray-600 text-xl leading-tight mb-4">{step.coreSentence}</p>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </section>
  )
}
