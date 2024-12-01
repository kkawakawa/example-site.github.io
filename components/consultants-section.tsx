"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function ConsultantsSection() {
  const consultants = [
    {
      name: "山田 太郎",
      role: "データアナリスト責任者",
      description: "15年以上のデータ分析経験を持つエキスパート。多数の企業の改革を支援。",
      image: "https://picsum.photos/id/64/800/400" // プロフェッショナルな男性
    },
    {
      name: "鈴木 美咲",
      role: "戦略コンサルタント",
      description: "大手コンサルティングファーム出身。戦略立案のスペシャリスト。",
      image: "https://picsum.photos/id/65/800/400" // プロフェッショナルな女性
    },
    {
      name: "佐藤 健一",
      role: "プロセスコンサルタント",
      description: "製造業での実務経験を活かした業務改善のエキスパート。",
      image: "https://picsum.photos/id/91/800/400" // ビジネスパーソン
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {consultants.map((consultant, index) => (
        <Card key={index} className="overflow-hidden">
          <div className="relative w-full h-48">
            <Image
              src={consultant.image}
              alt={consultant.name}
              fill
              className="object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle>{consultant.name}</CardTitle>
            <div className="text-sm font-medium text-blue-600 mb-2">
              {consultant.role}
            </div>
            <CardDescription>{consultant.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}

