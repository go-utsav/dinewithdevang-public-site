import type { MenuItem } from '../types'
import { IMAGES } from './images'

export const menus: MenuItem[] = [
  {
    id: 'vegetarian',
    tag: 'Traditional & Contemporary',
    title: 'Indian Vegetarian Feasts',
    description: "Authentic vegetarian dishes celebrating India's rich culinary heritage",
    image: IMAGES.menuVegetarian,
    alt: 'Indian Vegetarian Feasts',
  },
  {
    id: 'nonveg',
    tag: 'Signature Creations',
    title: 'Indian Non-Vegetarian Specialties',
    description: 'Premium meats prepared with aromatic spices and expert technique',
    image: IMAGES.menuNonveg,
    alt: 'Indian Non-Vegetarian Specialties',
  },
  {
    id: 'international',
    tag: 'Global Flavors',
    title: 'International Cuisine',
    description: 'World-class dishes from Mediterranean to contemporary fusion',
    image: IMAGES.menuInternational,
    alt: 'International Cuisine',
  },
]
