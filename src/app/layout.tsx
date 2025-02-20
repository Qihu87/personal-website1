import { ThemeProvider } from 'next-themes'
import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from '../components/ThemeToggle'
import BackgroundImage from '../components/BackgroundImage'

export const metadata: Metadata = {
  title: 'AI TK - 0基础小白的AI中文学习网站',
  description: '将用最简明了的教程帮你入门AI相关知识',
  icons: {
    icon: [
      {
        url: '/images/logo/logo.svg',
        type: 'image/svg+xml',
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo/logo.svg" type="image/svg+xml" />
      </head>
      <body>
        <ThemeProvider 
          attribute="data-theme" 
          defaultTheme="light"
          enableSystem={false}
          storageKey="theme"
        >
          <nav className="navbar">
            <div className="nav-content">
              <Link href="/" className="logo">
                <Image 
                  src="/images/logo/logo.png"
                  alt="AI TK Logo"
                  width={120}
                  height={40}
                  priority
                />
              </Link>
              <div className="nav-links">
                <Link href="/chatgpt">ChatGPT教程</Link>
                <Link href="/cursor">Cursor教程</Link>
                <Link href="/basic">0基础学编程</Link>
                <Link href="/tools">AI工具推荐</Link>
                <Link href="/about">关于我</Link>
              </div>
              <div className="social-links">
                <Link href="/xiaohongshu" className="social-icon">
                  <Image 
                    src="/images/social/xiaohongshu.svg"
                    alt="小红书"
                    width={103}
                    height={54}
                    className="xiaohongshu-icon"
                  />
                </Link>
                <Link href="https://www.youtube.com/@AI-tkz" target="_blank" className="social-icon">
                  <Image 
                    src="/images/social/youtube.svg"
                    alt="YouTube"
                    width={106}
                    height={54}
                    className="youtube-icon"
                  />
                </Link>
                <Link href="https://b23.tv/eLI5J3d" target="_blank" className="social-icon">
                  <Image 
                    src="/images/social/bilibili.svg"
                    alt="哔哩哔哩"
                    width={24}
                    height={24}
                    className="bilibili-icon"
                  />
                </Link>
                <Link href="/wechat" className="social-icon">
                  <Image 
                    src="/images/social/wechat.svg"
                    alt="微信"
                    width={24}
                    height={20}
                    className="wechat-icon"
                  />
                </Link>
              </div>
            </div>
          </nav>
          <BackgroundImage />
          <div className="main-content">
            {children}
          </div>
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
} 