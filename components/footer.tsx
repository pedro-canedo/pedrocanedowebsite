import Link from 'next/link'
import { Github, Linkedin, Mail, Instagram } from 'lucide-react'
import { TypingText } from '@/components/typing-text'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/pedro-canedo',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/pedrobalhe',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:devpedrocanedo@gmail.com',
    icon: Mail,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/pedr0balhe',
    icon: Instagram,
  },
]

const footerLinks = [
  {
    title: 'Navegação',
    links: [
      { name: 'Home', href: '/' },
      { name: 'Sobre', href: '/sobre' },
      { name: 'Experiência', href: '/experiencia' },
      { name: 'Projetos', href: '/projetos' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacidade', href: '/privacidade' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Brand & Social */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center">
              <span className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Pedro Canedo
              </span>
            </Link>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {footerLinks[0].links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/privacidade"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacidade
            </Link>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t space-y-3">
          <div className="text-center">
            <TypingText 
              text="Tech Lead e DevOps Engineer especializado em arquitetura de sistemas e automação de processos."
              speed={50}
              className="text-sm text-muted-foreground"
            />
          </div>
          <p className="text-xs text-center text-muted-foreground">
            © {new Date().getFullYear()} Pedro Canedo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

