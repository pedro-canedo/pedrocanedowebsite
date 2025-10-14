import { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Linkedin, Github, Instagram, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com Pedro Canedo para discutir projetos, oportunidades ou colaborações.',
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'devpedrocanedo@gmail.com',
    href: 'mailto:devpedrocanedo@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/pedrobalhe',
    href: 'https://linkedin.com/in/pedrobalhe',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/pedro-canedo',
    href: 'https://github.com/pedro-canedo',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@pedr0balhe',
    href: 'https://instagram.com/pedr0balhe',
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: 'Brasil',
    href: null,
  },
]

export default function ContatoPage() {
  return (
    <div className="container py-12 md:py-20">
      {/* Hero */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
          Vamos Conversar?
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades 
          de colaboração. Entre em contato!
        </p>
      </section>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Outras Formas de Contato</h2>
            <p className="text-muted-foreground mb-6">
              Prefere outro canal? Você pode me encontrar nas seguintes plataformas:
            </p>
          </div>

          <div className="space-y-4">
            {contactInfo.map((item) => (
              <Card key={item.label}>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-base">{item.label}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle>Tempo de Resposta</CardTitle>
              <CardDescription>
                Geralmente respondo em até 24 horas durante dias úteis. 
                Para assuntos urgentes, o LinkedIn é a melhor opção.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 border-secondary/20 bg-secondary/5">
            <CardHeader>
              <CardTitle>Disponibilidade</CardTitle>
              <CardDescription>
                Atualmente aberto para discutir oportunidades de consultoria, 
                mentoria técnica e projetos de alto impacto.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  )
}

