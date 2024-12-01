"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    // ここに実際のフォーム送信ロジックを実装します
    await new Promise(resolve => setTimeout(resolve, 1000)) // 送信シミュレーション
    setIsSubmitting(false)
    toast({
      title: "送信完了",
      description: "お問い合わせありがとうございます。担当者より連絡させていただきます。",
    })
  }

  return (
    <section className="py-24 px-6 w-full max-w-2xl">
      <h2 className="text-3xl font-bold mb-12 text-center">お問い合わせ</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input placeholder="お名前" required />
        </div>
        <div>
          <Input type="email" placeholder="メールアドレス" required />
        </div>
        <div>
          <Input placeholder="会社名" required />
        </div>
        <div>
          <Textarea placeholder="お問い合わせ内容" required />
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "送信中..." : "送信する"}
        </Button>
      </form>
    </section>
  )
}

