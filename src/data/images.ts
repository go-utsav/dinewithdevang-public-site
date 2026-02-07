/**
 * Image path mapping: logical name -> public path.
 * All assets live under public/images/ with these filenames.
 */
export const IMAGES = {
  heroChefPlating: '/images/hero-chef-plating.jpg',
  chefDevangShah: '/images/chef-devang-shah.jpg',
  eventPrivateDining: '/images/event-private-dining.jpg',
  eventGardenBbq: '/images/event-garden-bbq.jpg',
  eventCanapes: '/images/event-canapes.jpg',
  eventCorporate: '/images/event-corporate.jpg',
  eventWedding: '/images/event-wedding.jpg',
  venuePrestigious: '/images/venue-prestigious.jpg',
  menuVegetarian: '/images/menu-vegetarian.jpg',
  menuNonveg: '/images/menu-nonveg.jpg',
  menuInternational: '/images/menu-international.jpg',
} as const

export type ImageKey = keyof typeof IMAGES
