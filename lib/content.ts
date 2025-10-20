import fs from 'fs'
import path from 'path'

export interface ProfileData {
  name: string
  role: string
  location: string
  email: string
  github: string
  linkedin: string
  bio: {
    short: string
    long: string
  }
  skills: {
    languages: string[]
    frameworks: string[]
    cloud: string[]
    databases: string[]
    bigData: string[]
    tools: string[]
    methodologies: string[]
  }
  expertise: string[]
  experience: Experience[]
  education: Education[]
  goals: string[]
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
  highlights: string[]
  technologies?: string[]
}

export interface Education {
  degree: string
  institution: string
  period: string
  areas: string[]
}

export function getProfileData(): ProfileData {
  const filePath = path.join(process.cwd(), 'myoverview.md')
  const content = fs.readFileSync(filePath, 'utf8')

  // Parse básico do conteúdo
  return {
    name: 'Pedro Augusto Canedo Araujo Obalhe',
    role: 'Tech Lead',
    location: 'Brasil',
    email: 'devpedrocanedo@gmail.com',
    github: 'pedro-canedo',
    linkedin: 'linkedin.com/in/pedrobalhe',
    bio: {
      short: 'Tech Lead e DevOps Engineer atuo em em arquitetura e desenvolvimento de sistemas, liderança de equipes e automação de processos.',
      long: 'Tech Lead e DevOps Engineer especializado em arquitetura de sistemas, liderança de equipes e automação de processos. Experiência sólida em desenvolvimento backend, cloud infrastructure e análise de dados. Foco em construção de sistemas escaláveis, implementação de pipelines CI/CD e otimização de workflows de desenvolvimento.'
    },
    skills: {
      languages: ['Python', 'JavaScript', 'TypeScript', 'Go', 'C#', 'PHP', 'SQL'],
      frameworks: ['React.js', 'Node.js', 'Django', 'FastAPI', '.NET Core', 'ASP.NET', 'Angular', 'Next.js'],
      cloud: ['Azure', 'AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'ARM Templates', 'Azure DevOps', 'GitHub Actions', 'Jenkins'],
      databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'Oracle', 'SQL Server', 'Redis'],
      bigData: ['Hadoop', 'Apache Spark', 'Apache Kafka', 'Databricks', 'Pandas', 'Data Lake', 'SQL Data Warehouse'],
      tools: ['Git', 'Linux', 'RabbitMQ', 'Grafana', 'Prometheus', 'Azure Monitor', 'Application Insights'],
      methodologies: ['Scrum', 'Agile', 'DDD', 'TDD', 'Clean Code', 'CI/CD', 'IaC']
    },
    expertise: [
      'Liderança técnica de equipes multidisciplinares',
      'Mentoria de desenvolvedores',
      'Arquitetura de microservices',
      'APIs RESTful',
      'Automação CI/CD',
      'Observabilidade',
      'Containerização',
      'Segurança e compliance',
      'Otimização de queries SQL',
      'ETL pipelines',
      'Business Intelligence'
    ],
    experience: [
      {
        title: 'Tech Lead',
        company: 'Montreal Oficial (DER-MG)',
        period: 'fev de 2025 - o momento · 9 meses',
        description: 'Liderança técnica • Cloud/Data/DevOps',
        highlights: [
          'Liderança de equipes e definição de estratégia técnica',
          'Arquitetura de dados em Azure (Data Lake, SQL DW, Databricks)',
          'Pipelines CI/CD com Azure DevOps e automações IaC (ARM)',
          'Segurança de dados, criptografia e compliance',
          'Gestão de Big Data (Hadoop, Spark, Kafka)',
          'Contribuição direta com desenvolvimento em Python e SQL'
        ],
        technologies: ['Azure', 'Azure DevOps', 'Data Lake', 'SQL DW', 'Databricks', 'Python', 'SQL', 'Hadoop', 'Spark', 'Kafka', 'ARM Templates']
      },
      {
        title: 'Engenheiro de Software Sênior | DevOps Engineer',
        company: 'Montreal Oficial (DER-MG)',
        period: 'set de 2024 - fev de 2025 · 6 meses',
        description: 'Backend Sênior • Dados e DevOps',
        highlights: [
          'Implementação de pipelines CI/CD com Azure DevOps',
          'Automação de infraestrutura como código (ARM Templates)',
          'Desenvolvimento backend (Python, SQL) e arquitetura de dados',
          'Big Data: Hadoop, Spark, Kafka'
        ],
        technologies: ['Azure', 'Azure DevOps', 'Databricks', 'Python', 'SQL', 'Hadoop', 'Spark', 'Kafka', 'ARM Templates']
      },
      {
        title: 'Engenheiro de Software',
        company: 'MáximaTech',
        period: 'mai de 2024 - set de 2024 · 5 meses',
        description: 'E-commerce B2B/B2C • Microservices',
        highlights: [
          'Backend com .NET Core, C#, ASP.NET',
          'Mensageria com RabbitMQ; containerização com Docker',
          'Banco de dados Oracle e PostgreSQL; front com Angular/React'
        ],
        technologies: ['.NET Core', 'C#', 'ASP.NET', 'RabbitMQ', 'Docker', 'Oracle', 'PostgreSQL', 'Angular', 'React.js']
      },
      {
        title: 'Especialista DevOps (DevOps Engineer)',
        company: 'Conveste Serviços Financeiros',
        period: 'jul de 2023 - mai de 2024 · 11 meses',
        description: 'DevOps • Kubernetes & Observability',
        highlights: [
          'CI/CD com Azure DevOps (build/test/deploy confiável)',
          'Orquestração de contêineres (Kubernetes e Docker)',
          'Sistemas de logging personalizados, monitoramento e análise em tempo real',
          'Suporte a decisões de arquitetura e padrões de segurança'
        ],
        technologies: ['Azure DevOps', 'Kubernetes', 'Docker', 'Grafana']
      },
      {
        title: 'Desenvolvedor Full Stack - Pleno | DevOps',
        company: 'Conveste',
        period: 'jul de 2022 - jul de 2023 · 1 ano 1 mês',
        description: 'Full-Stack • DDD/TDD/Clean Code',
        highlights: [
          'C#, .NET, JavaScript, Python, PHP; React, Next.js, FastAPI, Django',
          'Kubernetes, Docker, Kafka; Azure DevOps (CI/CD)',
          'Documentação técnica e qualidade com foco em métricas'
        ],
        technologies: ['C#', '.NET', 'JavaScript', 'Python', 'React', 'Next.js', 'FastAPI', 'Django', 'Kubernetes', 'Docker', 'Kafka', 'Azure DevOps']
      },
      {
        title: 'Desenvolvedor | DevOps',
        company: 'H.Tech Consultoria (Freelance)',
        period: 'jan de 2019 - jan de 2021 · 2 anos 1 mês',
        description: 'Azure • IaC • Observabilidade',
        highlights: [
          'Pipelines CI/CD em Azure DevOps (build, testes, releases)',
          'Infraestrutura como código (ARM/Terraform) e otimização em Azure',
          'Monitoramento com Azure Monitor e Application Insights',
          'Colaboração com dev/QA/ops e melhorias contínuas com foco em segurança'
        ],
        technologies: ['Azure DevOps', 'ARM Templates', 'Terraform', 'Azure Monitor', 'App Insights']
      }
    ],
    education: [
      {
        degree: 'MBA em Engenharia de Software',
        institution: 'FAMEF',
        period: 'Outubro 2023 - Janeiro 2025',
        areas: [
          'Ciclo de Vida de Software Agile',
          'Engenharia de Requisitos',
          'Arquitetura e Projeto de Software',
          'Teste e Qualidade',
          'Gerenciamento de Projetos',
          'Governança de TI'
        ]
      },
      {
        degree: 'Tecnologia em Análise e Desenvolvimento de Sistemas',
        institution: 'PUC-GO',
        period: 'Janeiro 2021 - Abril 2024',
        areas: [
          'Algoritmos e Estruturas de Dados',
          'Engenharia de Software',
          'Segurança da Informação',
          'Desenvolvimento Cliente/Servidor',
          'Metodologias Ágeis'
        ]
      }
    ],
    goals: [
      'Contribuir para open-source',
      'Aprofundar Machine Learning e AI',
      'Mentorar desenvolvedores iniciantes',
      'Otimizar processos DevOps',
      'Desenvolver projetos de impacto social'
    ]
  }
}

