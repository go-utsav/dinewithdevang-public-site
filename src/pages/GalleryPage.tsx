import { usePageTitle } from '../hooks/usePageTitle'
import { Gallery } from '../components/sections/Gallery'

export function GalleryPage() {
  usePageTitle('Gallery | Dine With Devang')

  return <Gallery enableLightbox />
}
