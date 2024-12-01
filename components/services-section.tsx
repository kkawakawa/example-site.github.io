"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function ServicesSection() {
  const services = [
    {
      title: "データ分析・可視化",
      description: "複雑なデータを分かりやすく可視化し、実用的な洞察を導き出します",
      image: "https://picsum.photos/id/48/800/400" // データビジュアライゼーション
    },
    {
      title: "プロセス最適化",
      description: "業務フローを分析し、効率化のためのソリューションを提案します",
      image: "https://picsum.photos/id/43/800/400" // プロセス図
    },
    {
      title: "戦略立案支援",
      description: "データに基づく戦略立案と実行計画の策定をサポートします",
      image: "https://picsum.photos/id/103/800/400" // 戦略会議
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <Card key={index} className="overflow-hidden">
          <div className="relative w-full h-48">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}

