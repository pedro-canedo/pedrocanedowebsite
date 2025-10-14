import Link from 'next/link'
import { Github, Linkedin, Mail, Instagram } from 'lucide-react'

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
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Pedro Canedo
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Tech Lead e DevOps Engineer especializado em arquitetura de sistemas e automação de processos.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} Pedro Canedo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

