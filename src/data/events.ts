import type { EventCard } from '../types'
import { IMAGES } from './images'

export const events: EventCard[] = [
  {
    id: 'private-dining',
    title: 'Private Dining',
    description: 'Intimate experiences for special occasions',
    image: IMAGES.eventPrivateDining,
    alt: 'Private Dining',
  },
  {
    id: 'garden-bbq',
    title: 'Garden & BBQ Parties',
    description: 'Al fresco celebrations under the stars',
    image: IMAGES.eventGardenBbq,
    alt: 'Garden & BBQ Parties',
  },
  {
    id: 'canapes',
    title: 'Canapé Receptions',
    description: 'Elegant bites for sophisticated gatherings',
    image: IMAGES.eventCanapes,
    alt: 'Canapé Receptions',
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    description: 'Impress clients with culinary excellence',
    image: IMAGES.eventCorporate,
    alt: 'Corporate Events',
  },
  {
    id: 'weddings',
    title: 'Weddings',
    description: 'Create unforgettable wedding feasts',
    image: IMAGES.eventWedding,
    alt: 'Weddings',
  },
]
