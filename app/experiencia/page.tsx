import { Metadata } from 'next'
import { getProfileData } from '@/lib/content'
import { ExperienciaContent } from '@/components/experiencia-content'

export const metadata: Metadata = {
  title: 'Experiência',
  description: 'Trajetória profissional de Pedro Canedo, com mais de 6 anos de experiência em desenvolvimento de software e DevOps.',
}

export default function ExperienciaPage() {
  const profile = getProfileData()

  return <ExperienciaContent profile={profile} />
}

