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
      short: 'Tech Lead e DevOps Engineer com 6 anos de experiência em arquitetura de sistemas, liderança de equipes e automação de processos.',
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
        company: 'Montreal Oficial',
        period: 'Fevereiro 2025 - Atual',
        description: 'Projeto DER-MG',
        highlights: [
          'Liderança técnica de equipes multidisciplinares',
          'Arquitetura de dados com Data Lake e Databricks',
          'Pipelines CI/CD com Azure DevOps',
          'Segurança e compliance',
          'Automação IaC com ARM Templates',
          'Big data com Hadoop e Spark',
          'Desenvolvimento Python e SQL'
        ],
        technologies: ['Azure', 'Python', 'SQL', 'Databricks', 'Hadoop', 'Spark', 'Kafka']
      },
      {
        title: 'Engenheiro de Software Sênior | DevOps',
        company: 'Montreal Oficial',
        period: 'Setembro 2024 - Fevereiro 2025',
        description: 'Backend sênior e DevOps',
        highlights: [
          'Pipelines CI/CD com Azure DevOps',
          'IaC com ARM Templates',
          'Arquitetura de dados',
          'Big data com Hadoop, Spark, Kafka'
        ],
        technologies: ['Azure', 'Python', 'Databricks', 'Hadoop', 'Spark']
      },
      {
        title: 'Engenheiro de Software',
        company: 'MáximaTech',
        period: 'Maio 2024 - Setembro 2024',
        description: 'Sistemas para atacado e varejo',
        highlights: [
          'Backend .NET Core, C#, ASP.NET',
          'Frontend Angular e React.js',
          'Mensageria com RabbitMQ'
        ],
        technologies: ['.NET Core', 'C#', 'ASP.NET', 'RabbitMQ', 'Docker', 'Oracle', 'PostgreSQL', 'Angular', 'React.js']
      },
      {
        title: 'Especialista DevOps',
        company: 'Conveste Serviços Financeiros',
        period: 'Julho 2023 - Maio 2024',
        description: 'Automação e orquestração',
        highlights: [
          'Automação CI/CD com Azure DevOps',
          'Orquestração Kubernetes e Docker',
          'Logging personalizado',
          'Arquitetura cloud'
        ],
        technologies: ['Azure DevOps', 'Kubernetes', 'Docker']
      },
      {
        title: 'Desenvolvedor Full Stack Pleno | DevOps',
        company: 'Conveste',
        period: 'Julho 2022 - Julho 2023',
        description: 'Full stack e DevOps',
        highlights: [
          'Stack completo: C#, .NET, JavaScript, Python, PHP',
          'React, Next.js, FastAPI, Django',
          'Kubernetes, Docker, Kafka',
          'Metodologias DDD, TDD, Clean Code, Scrum'
        ],
        technologies: ['C#', '.NET', 'JavaScript', 'Python', 'React', 'Next.js', 'FastAPI', 'Django', 'Kubernetes', 'Docker', 'Kafka']
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

