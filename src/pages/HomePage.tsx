import { usePageTitle } from '../hooks/usePageTitle'
import {
  Hero,
  Celebration,
  Gallery,
  Menus,
  Testimonials,
  Reels,
  CtaBlock,
} from '../components/sections'

export function HomePage() {
  usePageTitle('Home | Dine With Devang')

  return (
    <>
      <Hero />
      <Celebration />
      <Gallery />
      <Menus />
      <Reels />
      <Testimonials />
      <CtaBlock />
    </>
  )
}
