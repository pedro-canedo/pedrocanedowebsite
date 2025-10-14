export function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Pedro Augusto Canedo Araujo Obalhe',
    alternateName: 'Pedro Canedo',
    jobTitle: 'Tech Lead',
    description: 'Tech Lead e DevOps Engineer com 6 anos de experiência em arquitetura de sistemas, liderança de equipes e automação de processos.',
    url: 'https://pedrocanedo.dev',
    email: 'devpedrocanedo@gmail.com',
    image: 'https://pedrocanedo.dev/profile.png',
    sameAs: [
      'https://github.com/pedro-canedo',
      'https://linkedin.com/in/pedrobalhe',
      'https://instagram.com/pedr0balhe',
    ],
    knowsAbout: [
      'Software Engineering',
      'DevOps',
      'Cloud Computing',
      'Azure',
      'Python',
      'TypeScript',
      'Go',
      'Kubernetes',
      'CI/CD',
      'Big Data',
      'Leadership',
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'FAMEF',
        description: 'MBA em Engenharia de Software',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'PUC-GO',
        description: 'Tecnologia em Análise e Desenvolvimento de Sistemas',
      },
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Montreal Oficial',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Pedro Canedo',
    url: 'https://pedrocanedo.dev',
    description: 'Site pessoal e portfólio de Pedro Canedo - Tech Lead e DevOps Engineer',
    author: {
      '@type': 'Person',
      name: 'Pedro Canedo',
    },
  }

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Pedro Canedo',
      jobTitle: 'Tech Lead',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  )
}

