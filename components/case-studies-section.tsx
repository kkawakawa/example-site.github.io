"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "大手小売業の売上改善",
      description: "データ分析により30%の売上向上を実現した小売業の改革事例",
      image: "https://picsum.photos/id/93/800/400" // 店舗・小売
    },
    {
      title: "製造業の生産性向上",
      description: "AIを活用した生産プロセスの最適化により、生産効率を50%改善",
      image: "https://picsum.photos/id/326/800/400" // 工場・製造
    },
    {
      title: "スタートアップの成長支援",
      description: "データ戦略の立案・実行により、半年で売上3倍を達成",
      image: "https://picsum.photos/id/447/800/400" // スタートアップオフィス
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {caseStudies.map((study, index) => (
        <Card key={index} className="overflow-hidden">
          <div className="relative w-full h-48">
            <Image
              src={study.image}
              alt={study.title}
              fill
              className="object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle>{study.title}</CardTitle>
            <CardDescription>{study.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}

