import { getProfileData } from '@/lib/content'
import { HomeContent } from '@/components/home-content'

export default function HomePage() {
  const profile = getProfileData()

  return <HomeContent profile={profile} />
}
