import './globals.css'
import type { Metadata } from 'next'
import { Outfit, Ovo, Noto_Sans_TC} from 'next/font/google'

export const metadata: Metadata = {
  title: 'NekoNeko',
  description: 'This is a portfolio website.',
}

const outfit = Outfit({
  subsets:['latin'], 
  weight:['400', '500', '600', '700']
});

const ovo = Ovo({
  subsets:['latin'], 
  weight:['400']
});

const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['400', '700'],
  preload: true,
  display: 'swap',
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${ovo.className} antialiased`}>{children}</body>
    </html>
  )
}
