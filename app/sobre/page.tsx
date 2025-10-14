import { Metadata } from 'next'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getProfileData } from '@/lib/content'
import { Target, Users, Code, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Conheça mais sobre Pedro Canedo, sua trajetória profissional e áreas de expertise.',
}

export default function SobrePage() {
  const profile = getProfileData()

  const values = [
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Orientado a entregar soluções que geram impacto real e mensurável'
    },
    {
      icon: Users,
      title: 'Trabalho em Equipe',
      description: 'Acredito que grandes conquistas vêm de times bem liderados e colaborativos'
    },
    {
      icon: Code,
      title: 'Excelência Técnica',
      description: 'Comprometido com código limpo, boas práticas e melhoria contínua'
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Sempre buscando novas tecnologias e abordagens para resolver problemas'
    }
  ]

  return (
    <div className="container py-12 md:py-20">
      {/* Hero */}
      <section className="mb-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              Sobre Mim
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {profile.bio.long}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Com mais de 6 anos de experiência, trabalhei em projetos desafiadores para empresas 
                do setor financeiro, governo e varejo. Minha missão é transformar desafios técnicos 
                complexos em soluções elegantes e eficientes que geram valor real.
              </p>
            </div>
          </div>
          <div className="relative mx-auto lg:mx-0">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
              <div className="relative rounded-2xl overflow-hidden border-4 border-primary/20">
                <Image
                  src="/profile.png"
                  alt="Pedro Canedo"
                  width={400}
                  height={400}
                  className="object-cover scale-145"
                  style={{ objectPosition: '50% 50%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">Valores & Princípios</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <Card key={value.title}>
              <CardHeader>
                <value.icon className="h-10 w-10 mb-4 text-primary" />
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{value.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">Habilidades Técnicas</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Linguagens de Programação</h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.languages.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.frameworks.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Cloud & DevOps</h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.cloud.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Bancos de Dados</h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.databases.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Big Data & Analytics</h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.bigData.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Metodologias & Práticas</h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.methodologies.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Expertise */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">Áreas de Especialização</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {profile.expertise.map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-4 rounded-lg border bg-card">
              <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0"></div>
              <p className="text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Formação */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">Formação Acadêmica</h2>
        <div className="space-y-6">
          {profile.education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{edu.degree}</CardTitle>
                <CardDescription className="text-base">
                  {edu.institution} • {edu.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {edu.areas.map((area) => (
                    <Badge key={area} variant="outline" className="text-xs">
                      {area}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-3xl font-bold tracking-tighter mb-8">Objetivos 2025</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {profile.goals.map((goal, index) => (
            <div key={index} className="flex items-center gap-3 p-4 rounded-lg border bg-card">
              <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0"></div>
              <p className="text-muted-foreground">{goal}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

