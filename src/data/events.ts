import type { EventCard } from '../types'
import { IMAGES } from './images'

export const events: EventCard[] = [
  {
    id: 'garden-bbq',
    slug: 'garden-bbq-parties',
    title: 'Garden & BBQ Parties',
    description: 'Al fresco celebrations under the stars',
    image: IMAGES.bbqHero,
    alt: 'Garden BBQ setup under white marquee',
    gallery: [
      { image: IMAGES.bbqGrill01, alt: 'Chicken tikka and kebabs on the grill' },
      { image: IMAGES.bbqFood01, alt: 'BBQ buffet with salads and sides' },
      { image: IMAGES.bbqGuests01, alt: 'Chef serving guests at the BBQ' },
      { image: IMAGES.bbqChef01, alt: 'Chef Devang at the grill' },
      { image: IMAGES.bbqAtmosphere01, alt: 'Multi-generational garden party' },
      { image: IMAGES.bbqPrep01, alt: 'Live cooking at the BBQ station' },
    ],
  },
  {
    id: 'private-dining',
    slug: 'private-dining',
    title: 'Private Dining',
    description: 'Intimate experiences for special occasions',
    image: IMAGES.eventPrivateDining,
    alt: 'Private Dining',
  },
  {
    id: 'canapes',
    slug: 'canape-receptions',
    title: 'Canapé Receptions',
    description: 'Elegant bites for sophisticated gatherings',
    image: IMAGES.eventCanapes,
    alt: 'Canapé Receptions',
  },
  {
    id: 'weddings',
    slug: 'weddings',
    title: 'Weddings',
    description: 'Create unforgettable wedding feasts',
    image: IMAGES.eventWedding,
    alt: 'Weddings',
  },
  {
    id: 'corporate',
    slug: 'corporate-events',
    title: 'Corporate Events',
    description: 'Impress clients with culinary excellence',
    image: IMAGES.eventCorporate,
    alt: 'Corporate Events',
  },
]

export function getEventBySlug(slug: string): EventCard | undefined {
  return events.find((event) => event.slug === slug)
}
