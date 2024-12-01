"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function FeaturesSection() {
  const features = [
    {
      title: "データドリブンな意思決定",
      description: "最新の分析手法を用いて、確かなデータに基づく戦略立案をサポートします",
      image: "https://picsum.photos/id/60/800/400" // オフィスでの分析風景
    },
    {
      title: "専門知識の集結",
      description: "各分野のエキスパートが連携し、包括的なソリューションを提供します",
      image: "https://picsum.photos/id/101/800/400" // チームミーティング
    },
    {
      title: "迅速な課題解決",
      description: "豊富な経験を活かし、効率的かつ効果的な問題解決を実現します",
      image: "https://picsum.photos/id/20/800/400" // テクノロジー作業
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <Card key={index} className="overflow-hidden">
          <div className="relative w-full h-48">
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle>{feature.title}</CardTitle>
            <CardDescription>{feature.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}

