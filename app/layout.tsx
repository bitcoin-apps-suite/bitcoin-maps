import type { Metadata } from 'next'
import './globals.css'
import '../components/mobile/mobile-bwallet.css'
import MobileShellInit from '../components/mobile/MobileShellInit'

export const metadata: Metadata = {
  title: 'Bitcoin Maps - Discover Bitcoin-Friendly Locations',
  description: 'Find Bitcoin-accepting businesses, ATMs, and services near you',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MobileShellInit />{children}</body>
    </html>
  )
}