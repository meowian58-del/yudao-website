import { createRouter, createWebHistory } from 'vue-router'
import { seo } from '../data/seo'
import { site } from '../data/site'
import HomeView from '../views/HomeView.vue'
import ServiceDetailView from '../views/ServiceDetailView.vue'
import LogisticsSolutionDetailView from '../views/LogisticsSolutionDetailView.vue'
import CompanyView from '../views/CompanyView.vue'
import BlogView from '../views/BlogView.vue'
import BlogPostView from '../views/BlogPostView.vue'
import QuoteView from '../views/QuoteView.vue'
import PrivacyView from '../views/PrivacyView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/ocean-freight', name: 'ocean-freight', component: ServiceDetailView, props: { slug: 'ocean-freight' } },
    { path: '/air-freight', name: 'air-freight', component: ServiceDetailView, props: { slug: 'air-freight' } },
    { path: '/rail-freight', name: 'rail-freight', component: ServiceDetailView, props: { slug: 'rail-freight' } },
    { path: '/road-freight', name: 'road-freight', component: ServiceDetailView, props: { slug: 'road-freight' } },
    { path: '/multimodal-transport', name: 'multimodal-transport', component: ServiceDetailView, props: { slug: 'multimodal-transport' } },
    { path: '/customs-clearance', name: 'customs-clearance', component: LogisticsSolutionDetailView, props: { slug: 'customs-clearance' } },
    { path: '/warehousing-distribution', name: 'warehousing-distribution', component: LogisticsSolutionDetailView, props: { slug: 'warehousing-distribution' } },
    { path: '/documentation-cargo-tracking', name: 'documentation-cargo-tracking', component: LogisticsSolutionDetailView, props: { slug: 'documentation-cargo-tracking' } },
    { path: '/company', name: 'company', component: CompanyView },
    { path: '/blog', name: 'blog', component: BlogView },
    { path: '/blog/:slug', name: 'blog-post', component: BlogPostView },
    { path: '/quote', name: 'quote', component: QuoteView },
    { path: '/privacy', name: 'privacy', component: PrivacyView },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView },
  ],
})

router.afterEach((to) => {
  const entry = seo[to.path] ?? {
    title: `Page Not Found | ${site.brand}`,
    description: 'The requested page could not be found.',
    noindex: true,
  }
  document.title = entry.title
  setMeta('description', entry.description)
  setMeta('og:title', entry.title, 'property')
  setMeta('og:type', 'website', 'property')
  setMeta('og:description', entry.description, 'property')
  setMeta('og:url', `${site.domain}${to.path}`)
  setMeta('twitter:card', 'summary_large_image')
  setCanonical(`${site.domain}${to.path}`)

  if (entry.image) {
    const imageUrl = absoluteUrl(entry.image)
    setMeta('og:image', imageUrl, 'property')
    setMeta('og:image:width', '1200', 'property')
    setMeta('og:image:height', '630', 'property')
    setMeta('twitter:image', imageUrl)
  }

  const robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]')
  if (entry.noindex) {
    setMeta('robots', 'noindex, nofollow')
  } else if (robots) {
    robots.remove()
  }
})

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, name)
    document.head.appendChild(tag)
  }
  tag.content = content
}

function setCanonical(href: string) {
  let tag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!tag) {
    tag = document.createElement('link')
    tag.rel = 'canonical'
    document.head.appendChild(tag)
  }
  tag.href = href
}

function absoluteUrl(path: string) {
  return path.startsWith('http') ? path : `${site.domain}${path}`
}

export default router
