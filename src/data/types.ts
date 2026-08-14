export interface BusinessPage {
  slug: string
  name: string
  shortDescription: string
  heroImage: string
  featureImage?: string
  overview: string
  capabilities: string[]
  process: string[]
  relatedSlugs: string[]
}

export interface SolutionPage extends BusinessPage {
  needs: string[]
  benefits: string[]
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  publishedDate: string
  body: string
  relatedSlugs: string[]
}

export interface SeoEntry {
  title: string
  description: string
  image?: string
  noindex?: boolean
}
