import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">お問い合わせ</h1>
            <div className="max-w-2xl mx-auto">
                <ContactForm />
            </div>
        </main>
    )
} 