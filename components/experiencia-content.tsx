'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnHover } from '@/components/animations'
import { ProfileData } from '@/lib/content'
import { Briefcase } from 'lucide-react'

interface ExperienciaContentProps {
  profile: ProfileData
}

export function ExperienciaContent({ profile }: ExperienciaContentProps) {
  return (
    <div className="container py-12 md:py-20">
      {/* Hero */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <Briefcase className="h-12 w-12 text-primary" />
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Experiência Profissional
          </h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Mais de 6 anos construindo soluções escaláveis, liderando equipes e implementando
          as melhores práticas de desenvolvimento e DevOps em projetos de alto impacto.
        </p>
      </section>

      {/* Timeline */}
      <section className="relative">
        {/* Linha vertical do timeline */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border ml-6 hidden md:block"></div>

        <div className="space-y-12">
          <StaggerContainer>
            {profile.experience.map((exp, index) => (
              <StaggerItem key={index}>
                <div className="relative">
                  {/* Ponto do timeline */}
                  <div className="absolute left-0 top-8 hidden md:block">
                    <div className="h-12 w-12 rounded-full border-4 border-background bg-primary flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="md:ml-24">
                    <ScaleOnHover scale={1.01}>
                      <Card className="border-2 hover:border-primary/50 transition-colors">
                        <CardHeader>
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div className="space-y-2">
                              <CardTitle className="text-2xl">{exp.title}</CardTitle>
                              <CardDescription className="text-base">
                                <span className="font-semibold text-foreground">{exp.company}</span>
                              </CardDescription>
                              <CardDescription className="text-sm">{exp.period}</CardDescription>
                            </div>
                            {exp.description && (
                              <Badge variant="outline" className="self-start">
                                {exp.description}
                              </Badge>
                            )}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            {/* Highlights */}
                            <div>
                              <h4 className="font-semibold mb-3">Principais Responsabilidades:</h4>
                              <ul className="space-y-2">
                                {exp.highlights.map((highlight, idx) => (
                                  <li key={idx} className="flex items-start gap-3">
                                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                                    <span className="text-muted-foreground">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Tecnologias */}
                            {exp.technologies && exp.technologies.length > 0 && (
                              <div>
                                <h4 className="font-semibold mb-3">Tecnologias Utilizadas:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {exp.technologies.map((tech) => (
                                    <Badge key={tech} variant="secondary">
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </ScaleOnHover>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="mt-20 pt-12 border-t">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Em Números</h2>
        </FadeIn>
        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[{v:'6+',l:'Anos de Experiência'},{v:'5+',l:'Empresas'},{v:'20+',l:'Tecnologias'},{v:'100%',l:'Comprometimento'}].map((s, i)=> (
            <StaggerItem key={i}>
              <ScaleOnHover>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-4xl font-bold text-primary">{s.v}</CardTitle>
                    <CardDescription>{s.l}</CardDescription>
                  </CardHeader>
                </Card>
              </ScaleOnHover>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  )
}
