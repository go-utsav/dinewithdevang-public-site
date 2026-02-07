export interface EventCard {
  id: string
  title: string
  description: string
  image: string
  alt: string
}

export interface MenuItem {
  id: string
  tag: string
  title: string
  description: string
  image: string
  alt: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  event: string
}

export interface GalleryItem {
  id: string
  image: string
  alt: string
}

export interface ReelItem {
  id: string
  image: string
  alt: string
  views: string
}

export interface SiteConfig {
  email: string
  phone: string
  instagram: string
  facebook: string
  linkedIn: string
  brandName: string
  tagline: string
}
