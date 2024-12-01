import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold">
                Company Name
              </Link>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/features" className="hover:text-blue-500">
                    特徴
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-blue-500">
                    サービス
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="hover:text-blue-500">
                    事例
                  </Link>
                </li>
                <li>
                  <Link href="/consultants" className="hover:text-blue-500">
                    コンサルタント
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main className="pt-16">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}