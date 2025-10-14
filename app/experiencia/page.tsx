import { Metadata } from 'next'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getProfileData } from '@/lib/content'
import { Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Experiência',
  description: 'Trajetória profissional de Pedro Canedo, com mais de 6 anos de experiência em desenvolvimento de software e DevOps.',
}

export default function ExperienciaPage() {
  const profile = getProfileData()

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
          {profile.experience.map((exp, index) => (
            <div key={index} className="relative">
              {/* Ponto do timeline */}
              <div className="absolute left-0 top-8 hidden md:block">
                <div className="h-12 w-12 rounded-full border-4 border-background bg-primary flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>

              {/* Conteúdo */}
              <div className="md:ml-24">
                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="space-y-2">
                        <CardTitle className="text-2xl">{exp.title}</CardTitle>
                        <CardDescription className="text-base">
                          <span className="font-semibold text-foreground">{exp.company}</span>
                        </CardDescription>
                        <CardDescription className="text-sm">
                          {exp.period}
                        </CardDescription>
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
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Estatísticas */}
      <section className="mt-20 pt-12 border-t">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">
          Em Números
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-primary">6+</CardTitle>
              <CardDescription>Anos de Experiência</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-primary">5+</CardTitle>
              <CardDescription>Empresas</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-primary">20+</CardTitle>
              <CardDescription>Tecnologias</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-primary">100%</CardTitle>
              <CardDescription>Comprometimento</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </div>
  )
}

