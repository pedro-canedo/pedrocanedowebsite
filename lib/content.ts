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
    aiML?: string[]
  }
  expertise: string[]
  experience: Experience[]
  education: Education[]
  certifications?: Certification[]
  goals: string[]
}

export interface Certification {
  name: string
  issuer: string
  period: string
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
    location: 'Goiânia, GO, Brasil',
    email: 'devpedrocanedo@gmail.com',
    github: 'pedro-canedo',
    linkedin: 'linkedin.com/in/pedrobalhe',
    bio: {
      short: 'Tech Lead e Desenvolvedor Full-Stack com base sólida em análise de dados, DDD e arquitetura orientada a eventos, TDD e Clean Code. Especialista em IA aplicada com experiência em OCR, LLMs com RAG e fine-tuning.',
      long: 'Tech Lead e Desenvolvedor Full-Stack com base sólida em análise de dados (Python, Spark, BI), DDD e arquitetura orientada a eventos (Kafka), TDD e Clean Code. Atuação hands-on em C#/.NET, JavaScript/React/Next.js, Python e PHP, com foco em DevOps no Azure (CI/CD, Docker, Kubernetes, observabilidade). Experiência em IA aplicada: OCR em produção, LLMs com RAG e fine-tuning/LoRA para busca semântica, normalização pós-OCR e automação de processos. Foco em qualidade, custo/latência e entrega contínua de valor ao negócio.'
    },
    skills: {
      languages: ['Python', 'JavaScript', 'TypeScript', 'C#', 'PHP', 'SQL', 'Node.js'],
      frameworks: ['React.js', 'Next.js', 'Node.js', 'Redux', '.NET Core', 'ASP.NET', 'EF Core', 'FastAPI', 'Django', 'Laravel/Blade', 'Angular'],
      cloud: ['Azure', 'AKS (Kubernetes)', 'Docker', 'Azure DevOps (CI/CD)', 'IaC (Terraform/ARM/Bicep)', 'SonarQube'],
      databases: ['SQL Server', 'Oracle', 'PostgreSQL', 'MySQL', 'ADLS Gen2'],
      bigData: ['Apache Spark', 'Pandas', 'NumPy', 'SQL Server', 'Oracle', 'ADLS Gen2'],
      tools: ['Git', 'Linux', 'Apache Kafka', 'Azure Event Hubs', 'Azure Monitor', 'Application Insights', 'Elasticsearch', 'Prometheus'],
      methodologies: ['Scrum', 'Agile', 'DDD', 'TDD', 'Clean Code', 'CI/CD', 'IaC', 'REST/GraphQL'],
      aiML: ['LLMs (OpenAI/Azure/HF)', 'RAG', 'Embeddings', 'OCR (Tesseract, Azure Document Intelligence, Google Vision)', 'Fine-tuning', 'LoRA', 'Guardrails']
    },
    expertise: [
      'Liderança técnica de equipes multidisciplinares',
      'Arquiteturas escaláveis em Azure (Data Lake, SQL DW, Databricks)',
      'Big Data: Hadoop, Spark, Kafka; governança de dados',
      'Segurança de dados, criptografia, privacidade e governança',
      'Pipelines CI/CD com Azure DevOps; quality gates (SonarQube)',
      'IaC em Azure (Terraform/Bicep/ARM); AKS, App Service, ACR, AI Services',
      'RAG, embeddings, re-ranking; OCR com Tesseract/Azure',
      'Fine-tuning/LoRA para busca semântica e automação',
      'Observabilidade e custo por requisição/token',
      'Full-stack (.NET Core/React/Next.js) com DDD, event-driven (Kafka), TDD/Clean Code',
      'IA aplicada: OCR, LLMs com RAG e fine-tuning para busca semântica'
    ],
    experience: [
      {
        title: 'Tech Lead',
        company: 'Montreal Oficial',
        period: 'fev de 2025 - atual · Remoto',
        description: 'Liderança técnica • Cloud/Data/DevOps',
        highlights: [
          'Backend sênior com responsabilidades de DevOps; pipelines Azure DevOps; IaC (ARM)',
          'Liderança técnica de squads e definição de arquiteturas escaláveis em Azure (Data Lake, SQL DW, Databricks)',
          'CI/CD com Azure DevOps; IaC (ARM/Bicep/Terraform); segurança, criptografia e compliance',
          'Big Data: Hadoop, Spark, Kafka; governança de dados (estruturados, semi-estruturados, NoSQL)',
          'Atuação no DER-MG: centralização e otimização de dados em nuvem; coordenação multidisciplinar',
          'Continuidade hands-on em Python/SQL e revisão de código/arquitetura'
        ],
        technologies: ['Azure', 'Azure DevOps', 'Data Lake', 'SQL DW', 'Databricks', 'Python', 'SQL', 'Hadoop', 'Spark', 'Kafka', 'ARM Templates', 'Bicep', 'Terraform']
      },
      {
        title: 'Engenheiro de Software Sênior | DevOps Engineer',
        company: 'Montreal Oficial',
        period: 'set de 2024 - fev de 2025 · 6 meses · Remoto',
        description: 'Backend Sênior • Dados e DevOps',
        highlights: [
          'Backend sênior com responsabilidades de DevOps; pipelines Azure DevOps; IaC (ARM)',
          'Liderança técnica de squads e definição de arquiteturas escaláveis em Azure (Data Lake, SQL DW, Databricks)',
          'CI/CD com Azure DevOps; IaC (ARM/Bicep/Terraform); segurança, criptografia e compliance',
          'Big Data: Hadoop, Spark, Kafka; governança de dados (estruturados, semi-estruturados, NoSQL)',
          'Atuação no DER-MG: centralização e otimização de dados em nuvem; coordenação multidisciplinar'
        ],
        technologies: ['Azure', 'Azure DevOps', 'Databricks', 'Python', 'SQL', 'Hadoop', 'Spark', 'Kafka', 'ARM Templates', 'Bicep', 'Terraform']
      },
      {
        title: 'Engenheiro de Software',
        company: 'MáximaTech',
        period: 'mai de 2024 - set de 2024 · 5 meses · Remoto',
        description: 'E-commerce B2B/B2C • Microservices',
        highlights: [
          '.NET Core, C#, ASP.NET, RabbitMQ, Docker, Oracle SQL e PostgreSQL',
          'Front-end com Angular e experiência em React.js/PWA para soluções de atacado/varejo integradas a ERPs'
        ],
        technologies: ['.NET Core', 'C#', 'ASP.NET', 'RabbitMQ', 'Docker', 'Oracle', 'PostgreSQL', 'Angular', 'React.js', 'PWA']
      },
      {
        title: 'Especialista DevOps (DevOps Engineer)',
        company: 'Conveste Serviços Financeiros',
        period: 'jul de 2023 - mai de 2024 · 11 meses · Goiânia-GO',
        description: 'DevOps • Kubernetes & Observability',
        highlights: [
          'CI/CD no Azure DevOps; Kubernetes/Docker; logging customizado e observabilidade',
          'Arquitetura cloud e boas práticas de segurança; cultura DevOps e melhoria contínua'
        ],
        technologies: ['Azure DevOps', 'Kubernetes', 'Docker', 'Azure Monitor', 'Application Insights', 'Elasticsearch', 'Prometheus']
      },
      {
        title: 'Desenvolvedor Full Stack – Pleno | DevOps',
        company: 'Conveste Serviços Financeiros',
        period: 'jul de 2022 - jul de 2023 · 1 ano 1 mês · Goiânia-GO',
        description: 'Full-Stack • DDD/TDD/Clean Code',
        highlights: [
          'Full-stack (.NET Core/React/Next.js) com DDD, event-driven (Kafka), TDD/Clean Code',
          'Dados: Spark, Pandas, NumPy; ADLS Gen2 e SQL Server',
          'IA aplicada: OCR, LLMs com RAG e fine-tuning para busca semântica e automação'
        ],
        technologies: ['C#', '.NET Core', 'JavaScript', 'Python', 'React', 'Next.js', 'FastAPI', 'Django', 'Kubernetes', 'Docker', 'Kafka', 'Azure DevOps', 'Spark', 'Pandas', 'NumPy', 'ADLS Gen2', 'SQL Server']
      },
      {
        title: 'Desenvolvedor | DevOps (Freelance)',
        company: 'H.Tech Consultoria em Tecnologia',
        period: 'jan de 2019 - jan de 2021 · 2 anos 1 mês · Remoto',
        description: 'Azure • IaC • Observabilidade',
        highlights: [
          'Pipelines CI/CD em Azure DevOps (build, testes, releases)',
          'Infraestrutura como código (ARM/Terraform) e otimização em Azure',
          'Monitoramento com Azure Monitor e Application Insights',
          'Colaboração com dev/QA/ops e melhorias contínuas com foco em segurança'
        ],
        technologies: ['Azure DevOps', 'ARM Templates', 'Terraform', 'Azure Monitor', 'Application Insights']
      }
    ],
    education: [
      {
        degree: 'Graduação - Análise e Desenvolvimento de Sistemas',
        institution: 'Pontifícia Universidade Católica de Goiás (PUC-GO)',
        period: 'jan/2021 – abr/2024',
        areas: [
          'Análise e Desenvolvimento de Sistemas',
          'Algoritmos e Estruturas de Dados',
          'Engenharia de Software',
          'Desenvolvimento de Software',
          'Arquitetura de Sistemas'
        ]
      }
    ],
    certifications: [
      {
        name: 'Habilidades Aplicadas: Implementar um data warehouse no Microsoft Fabric',
        issuer: 'Microsoft',
        period: 'jan/2025'
      },
      {
        name: 'Fundamentos para Desenvolvimento de Software',
        issuer: 'Microsoft',
        period: 'ago/2023'
      },
      {
        name: 'Azure: gerencie Kubernetes com AKS e ACR',
        issuer: 'Alura',
        period: 'ago/2022'
      },
      {
        name: 'Kubernetes: Deployments, Volumes e Escalabilidade',
        issuer: 'Alura',
        period: 'ago/2022'
      },
      {
        name: 'Docker: Criando containers sem dor de cabeça',
        issuer: 'Alura',
        period: 'jan/2021'
      },
      {
        name: 'Formação Certificação C# Programming',
        issuer: 'Alura',
        period: 'jan/2021'
      },
      {
        name: 'REST com NodeJS: API com Express e MySQL',
        issuer: 'Alura',
        period: 'jan/2021'
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

