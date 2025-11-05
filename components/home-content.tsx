'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Github, Linkedin, Mail, Code2, Cloud, Database, Briefcase } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnHover } from '@/components/animations'
import { ProfileData } from '@/lib/content'

interface HomeContentProps {
  profile: ProfileData
}

export function HomeContent({ profile }: HomeContentProps) {
  const highlights = [
    {
      icon: Briefcase,
      title: 'Tech Lead',
      description: 'Liderando equipes multidisciplinares e definindo estratégias tecnológicas no DER-MG',
      color: 'text-primary'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Especialista em Azure, CI/CD, Kubernetes e automação de infraestrutura',
      color: 'text-secondary'
    },
    {
      icon: Database,
      title: 'Big Data',
      description: 'Arquitetura de dados com Data Lake, Databricks, Hadoop e Spark',
      color: 'text-accent'
    },
    {
      icon: Code2,
      title: 'Backend',
      description: 'Desenvolvimento com Python, TypeScript, C#/.NET e PHP em sistemas escaláveis',
      color: 'text-primary'
    }
  ]
  return (
    <>
      {/* Hero Section */}
      <section className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <FadeIn direction="up" delay={0.1}>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Pedro Canedo
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground md:text-2xl">
                  {profile.role}
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  {profile.bio.short}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-2">
                {profile.skills.languages.slice(0, 5).map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
                <Badge variant="outline">+{profile.skills.languages.length - 5} mais</Badge>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="whitespace-nowrap">
                  <Link href="/projetos" className="flex items-center gap-2">
                    Ver Projetos
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="whitespace-nowrap">
                  <Link href="/contato">
                    Entrar em Contato
                  </Link>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex gap-4">
                <a
                  href="https://github.com/pedro-canedo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/pedrobalhe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:devpedrocanedo@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="right">
            <div className="relative mx-auto lg:mx-0">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
                <div className="relative rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src="/profile.png"
                    alt="Foto de perfil de Pedro Canedo"
                    width={500}
                    height={400}
                    className="object-cover scale-145"
                    style={{ objectPosition: '50% 50%' }}
                    priority
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="container py-20 bg-muted/40">
        <FadeIn delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Áreas de Atuação
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Especializado em múltiplas áreas da tecnologia, com foco em resultados e impacto
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <StaggerItem key={item.title} className="flex">
              <ScaleOnHover className="flex w-full">
                <Card className="border-2 hover:border-primary/50 transition-colors flex flex-col w-full">
                  <CardHeader className="flex-shrink-0">
                    <item.icon className={`h-12 w-12 mb-4 ${item.color}`} />
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <CardDescription className="text-base flex-grow">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScaleOnHover>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Experience Preview */}
      <section className="container py-20">
        <FadeIn delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Experiência Recente
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mais de 6 anos construindo soluções escaláveis e liderando equipes
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="space-y-6 max-w-4xl mx-auto">
          {profile.experience.slice(0, 3).map((exp, index) => (
            <StaggerItem key={index}>
              <ScaleOnHover scale={1.02}>
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <CardTitle>{exp.title}</CardTitle>
                        <CardDescription className="text-base mt-2">
                          {exp.company} • {exp.period}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.slice(0, 5).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </ScaleOnHover>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg" className="whitespace-nowrap">
            <Link href="/experiencia" className="flex items-center gap-2">
              Ver Experiência Completa
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="container py-12 md:py-20 lg:py-16 bg-muted/40 pb-16 md:pb-24 lg:pb-20">
        <FadeIn delay={0.2}>
          <div className="max-w-4xl mx-auto text-center space-y-8 px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mt-4">
              Vamos Construir Algo Incrível Juntos?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de colaboração.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4 pb-4">
              <Button asChild size="lg" className="whitespace-nowrap">
                <Link href="/contato" className="flex items-center gap-2">
                  Entrar em Contato
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="whitespace-nowrap">
                <Link href="/sobre">
                  Conheça Mais Sobre Mim
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </section> */}
    </>
  )
}

