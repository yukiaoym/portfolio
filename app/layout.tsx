import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/global.css'
import './styles/destyle.css'
import './styles/destyle.min.css'
import StyledComponentsRegistry from './lib/registry'
 
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Yuki Mishina | 三品 ゆき',
    description: '三品ゆきのポートフォリオです。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="ja">
        <body>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
  )
}
