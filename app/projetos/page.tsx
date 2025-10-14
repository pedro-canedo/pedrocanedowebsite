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
    title: 'DER-MG - Centralização e Otimização de Dados',
    description: 'Liderança técnica na modernização da infraestrutura do Departamento de Estradas e Rodagem de Minas Gerais.',
    problem: 'Dados fragmentados em sistemas legados sem centralização e baixa eficiência de processamento',
    solution: 'Arquitetura de dados moderna em Azure com Data Lake, SQL Data Warehouse e Databricks para centralização e otimização',
    results: [
      'Centralização de dados governamentais em nuvem',
      'Implementação de pipelines CI/CD automatizados',
      'Gestão de grandes volumes com Big Data (Hadoop, Spark, Kafka)',
      'Automação de infraestrutura com ARM Templates (IaC)'
    ],
    stack: ['Azure', 'Data Lake', 'Databricks', 'SQL Data Warehouse', 'Python', 'SQL', 'Hadoop', 'Spark', 'Kafka', 'ARM Templates'],
    role: 'Tech Lead',
    year: '2024-2025'
  },
  {
    title: 'Pipeline de Dados - Montreal (DER-MG)',
    description: 'Arquitetura e implementação de pipelines escaláveis para processamento de dados governamentais.',
    problem: 'Necessidade de processar grandes volumes de dados de forma eficiente e segura',
    solution: 'Pipelines de dados com Azure DevOps, Data Lake e Databricks para ETL automatizado',
    results: [
      'Arquitetura de dados eficiente com serviços Azure',
      'Automação de pipelines CI/CD',
      'Segurança de dados, criptografia e compliance',
      'Processamento de dados estruturados e não estruturados'
    ],
    stack: ['Azure', 'Azure DevOps', 'Data Lake', 'Databricks', 'Python', 'SQL', 'ARM Templates'],
    role: 'Engenheiro de Software Sênior | DevOps',
    year: '2024'
  },
  {
    title: 'Sistema ERP - MáximaTech',
    description: 'Desenvolvimento e manutenção de sistemas ERP para atacado e varejo em todo o Brasil.',
    problem: 'Necessidade de automatização de processos para clientes de atacado e varejo',
    solution: 'Sistema robusto com backend .NET Core e frontend Angular/React, integrado com RabbitMQ',
    results: [
      'Automação de processos com ERPs',
      'Sistemas internos para clientes em todo Brasil',
      'Backend escalável com .NET Core e C#',
      'Frontend responsivo com Angular e React PWA'
    ],
    stack: ['.NET Core', 'C#', 'ASP.NET', 'RabbitMQ', 'Docker', 'Oracle SQL', 'PostgreSQL', 'Angular', 'React.js', 'PWA'],
    role: 'Engenheiro de Software',
    year: '2024'
  },
  {
    title: 'Infraestrutura DevOps - Conveste',
    description: 'Implementação completa de cultura DevOps e automação de processos na Conveste Serviços Financeiros.',
    problem: 'Processos manuais lentos, falta de automação e dificuldade de escalabilidade',
    solution: 'Pipelines CI/CD automatizados com Azure DevOps, orquestração Kubernetes/Docker e logging personalizado',
    results: [
      'Automação completa de CI/CD com Azure DevOps',
      'Orquestração de contêineres com Kubernetes e Docker',
      'Sistemas de logging personalizados',
      'Monitoramento avançado com Elasticsearch e Prometheus',
      'Promoção de cultura DevOps e práticas ágeis'
    ],
    stack: ['Azure DevOps', 'Kubernetes', 'Docker', 'Elasticsearch', 'Prometheus', 'Terraform'],
    role: 'Especialista DevOps',
    year: '2023-2024'
  },
  {
    title: 'BI Analytics Platform - Conveste',
    description: 'Plataforma de Business Intelligence para análise de dados financeiros com foco em qualidade e arquitetura.',
    problem: 'Necessidade de processar e analisar grandes volumes de dados financeiros com qualidade',
    solution: 'Plataforma BI com Python, Apache Spark, Pandas e arquitetura orientada a eventos (DDD)',
    results: [
      'Processamento de grandes volumes com Spark e Pandas',
      'Integração com Data Lake Storage Gen2',
      'Implementação de Domain-Driven Design (DDD)',
      'Integração com Kafka e Azure Event Hub',
      'Qualidade de código com TDD e Clean Code',
      'Monitoramento com SonarQube'
    ],
    stack: ['Python', 'Apache Spark', 'Pandas', 'Kafka', 'Azure Event Hub', 'Data Lake Gen2', 'SQL Server', 'Redis', '.NET Core', 'React'],
    role: 'Desenvolvedor Full Stack Pleno | DevOps',
    year: '2022-2023'
  },
  {
    title: 'Cloud Infrastructure - H.Tech',
    description: 'Desenvolvimento e manutenção de infraestrutura em Azure com foco em automação e DevOps.',
    problem: 'Necessidade de infraestrutura escalável e automatizada em cloud para diversos clientes',
    solution: 'Infraestrutura como código (IaC) com ARM Templates e Terraform, pipelines CI/CD automatizados',
    results: [
      'Infraestrutura automatizada em Azure',
      'Pipelines CI/CD com Azure DevOps',
      'Automação com ARM Templates e Terraform',
      'Monitoramento com Azure Monitor e Application Insights',
      'Alta disponibilidade e escalabilidade'
    ],
    stack: ['Azure', 'Azure DevOps', 'ARM Templates', 'Terraform', 'Azure Monitor', 'Application Insights'],
    role: 'Desenvolvedor | DevOps (Freelance)',
    year: '2019-2021'
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
            <Button asChild size="lg" className="whitespace-nowrap">
              <a href="/contato" className="flex items-center gap-2">
                Entrar em Contato
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="whitespace-nowrap">
              <a href="https://github.com/pedro-canedo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                Ver no GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

