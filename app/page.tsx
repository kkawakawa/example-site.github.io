"use client"

import { CaseStudiesSection } from "@/components/case-studies-section"
import { ServicesSection } from "@/components/services-section"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"
import { HeroSection } from "../components/hero-section"

function AnimatedCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      {children}
    </motion.li>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.h2
      ref={ref}
      className="text-3xl font-bold text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.h2>
  )
}

export default function Home() {
  const cards = [
    {
      href: "/features",
      title: "当社の特徴",
      description: "当社が選ばれる理由と強みについてご紹介します",
      style: "bg-white"
    },
    {
      href: "/services",
      title: "サービス内容",
      description: "提供している各種サービスの詳細をご覧いただけます",
      style: "bg-white"
    },
    {
      href: "/case-studies",
      title: "事例紹介",
      description: "これまでの支援実績と成功事例をご紹介します",
      style: "bg-white"
    },
    {
      href: "/consultants",
      title: "コンサルタント紹介",
      description: "経験豊富な専門家たちをご紹介します",
      style: "bg-white"
    },
    {
      href: "/contact",
      title: "お問い合わせ",
      description: "ご相談・お問い合わせはこちらから承ります",
      style: "bg-blue-500 text-white",
      descriptionStyle: "text-blue-50",
      span: true
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Services Section */}
      <section className="w-full bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>サービス内容</SectionTitle>
          <ServicesSection />
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              すべてのサービスを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>事例紹介</SectionTitle>
          <CaseStudiesSection />
          <div className="text-center mt-12">
            <Link
              href="/case-studies"
              className="inline-block px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              すべての事例を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Cards at the bottom */}
      <section className="w-full bg-gray-50 py-16 px-4 mt-auto">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>クイックアクセス</SectionTitle>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <AnimatedCard key={card.href} index={index}>
                <Link
                  href={card.href}
                  className={`block p-6 ${card.style} rounded-lg shadow-md hover:shadow-lg transition-shadow ${card.span ? "md:col-span-2 lg:col-span-3" : ""
                    }`}
                >
                  <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
                  <p className={card.descriptionStyle || "text-gray-600"}>{card.description}</p>
                </Link>
              </AnimatedCard>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

