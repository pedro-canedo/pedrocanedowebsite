import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@/components/analytics'
import { StructuredData } from '@/components/structured-data'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://pedrocanedo.dev'),
  title: {
    default: 'Pedro Canedo | Tech Lead & DevOps Engineer',
    template: '%s | Pedro Canedo'
  },
  description: 'Tech Lead e DevOps Engineer com 6 anos de experiência em arquitetura de sistemas, liderança de equipes e automação de processos. Especialista em Azure, Python, e desenvolvimento de soluções escaláveis.',
  keywords: ['Tech Lead', 'DevOps', 'Azure', 'Python', 'Software Engineer', 'Cloud Architecture', 'CI/CD'],
  authors: [{ name: 'Pedro Canedo', url: 'https://pedrocanedo.dev' }],
  creator: 'Pedro Canedo',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://pedrocanedo.dev',
    title: 'Pedro Canedo | Tech Lead & DevOps Engineer',
    description: 'Tech Lead e DevOps Engineer especializado em arquitetura de sistemas e automação de processos.',
    siteName: 'Pedro Canedo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pedro Canedo | Tech Lead & DevOps Engineer',
    description: 'Tech Lead e DevOps Engineer especializado em arquitetura de sistemas e automação de processos.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

