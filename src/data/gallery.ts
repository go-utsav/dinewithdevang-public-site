import type { GalleryItem } from '../types'
import { IMAGES } from './images'

export const galleryItems: GalleryItem[] = [
  { id: '1', image: IMAGES.heroChefPlating, alt: 'Chef plating gourmet dish' },
  { id: '2', image: IMAGES.eventPrivateDining, alt: 'Private dining setup' },
  { id: '3', image: IMAGES.eventGardenBbq, alt: 'Garden BBQ party' },
  { id: '4', image: IMAGES.eventCanapes, alt: 'Elegant canapés' },
  { id: '5', image: IMAGES.menuVegetarian, alt: 'Vegetarian thali' },
  { id: '6', image: IMAGES.menuNonveg, alt: 'Lamb rack preparation' },
  { id: '7', image: IMAGES.eventCorporate, alt: 'Corporate dining' },
  { id: '8', image: IMAGES.menuInternational, alt: 'Truffle pasta' },
  { id: '9', image: IMAGES.eventWedding, alt: 'Wedding buffet' },
]
