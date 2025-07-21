import './globals.css'
import type { Metadata } from 'next'
import { Outfit, Ovo, Noto_Sans_TC, JetBrains_Mono} from 'next/font/google'

// Components
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'NekoNeko',
  description: 'This is a portfolio website.',
}

const jetbrainsMono = JetBrains_Mono({
  subsets:['latin'], 
  weight:['100', '200', '300' ,'400' , '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono'
})

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
  // ${outfit.className} ${ovo.className} 
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        {children}
      </body>
    </html>
  )
}
