import { Metadata } from 'next'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Code2, ExternalLink, Github } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projetos',
  description: 'Portfólio de projetos desenvolvidos por Pedro Canedo, incluindo soluções em cloud, DevOps e desenvolvimento de software.',
}

const projects = [
  {
    title: 'DER-MG - Modernização de Infraestrutura',
    description: 'Liderança técnica na modernização da infraestrutura do Departamento de Estradas e Rodagem de Minas Gerais.',
    problem: 'Sistema legado com baixa escalabilidade e alto custo operacional',
    solution: 'Migração para Azure com arquitetura de dados moderna utilizando Data Lake e Databricks',
    results: [
      'Redução de 40% nos custos operacionais',
      'Melhoria de 60% na performance de processamento',
      'Implementação de pipelines CI/CD automatizados'
    ],
    stack: ['Azure', 'Databricks', 'Python', 'Spark', 'Kafka', 'ARM Templates'],
    role: 'Tech Lead',
    year: '2025'
  },
  {
    title: 'Pipeline de Big Data - Montreal',
    description: 'Arquitetura e implementação de pipeline de processamento de grandes volumes de dados.',
    problem: 'Processamento manual e lento de dados governamentais',
    solution: 'Pipeline automatizado com Hadoop, Spark e Kafka para processamento distribuído',
    results: [
      'Processamento de 10TB+ de dados diários',
      'Automação de 95% dos processos manuais',
      'Redução de tempo de processamento de horas para minutos'
    ],
    stack: ['Hadoop', 'Apache Spark', 'Kafka', 'Python', 'Azure DevOps'],
    role: 'Engenheiro de Software Sênior',
    year: '2024'
  },
  {
    title: 'Sistema de E-commerce - MáximaTech',
    description: 'Desenvolvimento de plataforma de e-commerce para atacado e varejo.',
    problem: 'Sistema antigo sem suporte a alto volume de transações',
    solution: 'Arquitetura de microservices com .NET Core, React e mensageria RabbitMQ',
    results: [
      'Suporte a 10.000+ transações simultâneas',
      'Disponibilidade de 99.9%',
      'Interface moderna e responsiva'
    ],
    stack: ['.NET Core', 'React.js', 'RabbitMQ', 'Docker', 'PostgreSQL'],
    role: 'Engenheiro de Software',
    year: '2024'
  },
  {
    title: 'Automação DevOps - Conveste',
    description: 'Implementação completa de cultura DevOps e automação de processos.',
    problem: 'Deploys manuais demorados e propensos a erros',
    solution: 'Pipelines CI/CD com Azure DevOps, Kubernetes e infraestrutura como código',
    results: [
      'Redução de 80% no tempo de deploy',
      'Zero downtime em atualizações',
      'Aumento de 300% na frequência de releases'
    ],
    stack: ['Azure DevOps', 'Kubernetes', 'Docker', 'Terraform', 'Grafana'],
    role: 'Especialista DevOps',
    year: '2023-2024'
  },
  {
    title: 'BI Analytics Platform',
    description: 'Plataforma de Business Intelligence para análise de dados financeiros.',
    problem: 'Falta de visibilidade e insights sobre dados operacionais',
    solution: 'Plataforma de BI com Python, Spark e dashboards interativos',
    results: [
      'Insights em tempo real',
      'Redução de 50% no tempo de análise',
      'Decisões baseadas em dados confiáveis'
    ],
    stack: ['Python', 'Apache Spark', 'Pandas', 'Power BI', 'SQL Server'],
    role: 'Desenvolvedor Full Stack',
    year: '2021-2022'
  }
]

export default function ProjetosPage() {
  return (
    <div className="container py-12 md:py-20">
      {/* Hero */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <Code2 className="h-12 w-12 text-primary" />
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Projetos
          </h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Uma seleção de projetos que demonstram minha experiência em resolver problemas 
          complexos com soluções tecnológicas inovadoras e escaláveis.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="space-y-12">
        {projects.map((project, index) => (
          <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">{project.year}</Badge>
                  <Badge>{project.role}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Problema e Solução */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-destructive">Problema</h4>
                  <p className="text-sm text-muted-foreground">{project.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-secondary">Solução</h4>
                  <p className="text-sm text-muted-foreground">{project.solution}</p>
                </div>
              </div>

              {/* Resultados */}
              <div>
                <h4 className="font-semibold mb-3">Resultados</h4>
                <ul className="space-y-2">
                  {project.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack */}
              <div>
                <h4 className="font-semibold mb-3">Stack Tecnológico</h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-16 pt-12 border-t">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter">
            Interessado em Saber Mais?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estes são apenas alguns exemplos. Tenho experiência em diversos outros projetos 
            e tecnologias. Vamos conversar sobre como posso ajudar no seu próximo desafio.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <a href="/contato">
                Entrar em Contato
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://github.com/pedro-canedo" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Ver no GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

