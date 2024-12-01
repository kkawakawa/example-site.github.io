"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <motion.section
      className="w-full bg-gradient-to-b from-blue-50 to-white py-24 px-6 text-center relative overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-5xl font-bold mb-6 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        データで未来を創る
      </motion.h1>
      <motion.p
        className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        最新のデータ分析技術と豊富な経験を活かし、
        <br />
        お客様のビジネスの成長をサポートします
      </motion.p>

      <motion.div
        className="max-w-4xl mx-auto relative h-64"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <Image
          src="https://picsum.photos/id/314/1200/400"
          alt="Geometric Pattern"
          fill
          className="object-cover rounded-lg shadow-lg"
          priority
        />
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg" />
        <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl" />
        <div className="absolute -right-4 -top-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" />
      </motion.div>
    </motion.section>
  )
}

