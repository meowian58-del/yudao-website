import type { SeoEntry } from './types'
import { site } from './site'
import { services } from './services'
import { logisticsSolutions } from './logisticsSolutions'
import { blogPosts } from './blog'
import { photos } from './images'

export const seo: Record<string, SeoEntry> = {
  '/': {
    title: `${site.brand} | International Freight Forwarding`,
    description: 'Ocean, air, rail, road and multimodal freight coordination for B2B cargo.',
    image: '/assets/photos/hero-cargo-ship.jpg',
  },
  '/company': {
    title: `Company | ${site.brand}`,
    description: 'Learn about YUDAO GLOBAL LOGISTICS and its freight coordination approach.',
    image: '/assets/photos/yudao-staffs.png',
  },
  '/blog': {
    title: `Blog | ${site.brand}`,
    description: 'Practical freight planning notes for B2B operations teams.',
    image: '/assets/visual-documents.svg',
  },
  '/quote': {
    title: `Get A Quote | ${site.brand}`,
    description: 'Request a freight quote for ocean, air, rail, road or multimodal transport.',
    image: '/assets/photos/freight-truck.jpg',
  },
  '/privacy': {
    title: `Privacy Policy | ${site.brand}`,
    description: 'Privacy policy for the YUDAO GLOBAL LOGISTICS website.',
  },
}

services.forEach((item) => {
  seo[`/${item.slug}`] = {
    title: `${item.name} | ${site.brand}`,
    description: item.shortDescription,
    image: item.slug === 'ocean-freight' ? photos.oceanFreightOg : item.heroImage,
  }
})

logisticsSolutions.forEach((item) => {
  seo[`/${item.slug}`] = {
    title: `${item.name} | ${site.brand}`,
    description: item.shortDescription,
    image: item.heroImage,
  }
})

blogPosts.forEach((post) => {
  seo[`/blog/${post.slug}`] = {
    title: `${post.title} | ${site.brand}`,
    description: post.excerpt,
    image: post.coverImage,
  }
})
