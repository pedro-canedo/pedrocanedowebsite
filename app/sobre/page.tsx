import { Metadata } from 'next'
import { getProfileData } from '@/lib/content'
import { SobreContent } from '@/components/sobre-content'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Conheça mais sobre Pedro Canedo, sua trajetória profissional e áreas de expertise.',
}

export default function SobrePage() {
  const profile = getProfileData()

  return <SobreContent profile={profile} />
}
