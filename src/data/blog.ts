import type { BlogPost } from './types'
import { photos } from './images'

export const blogPosts: BlogPost[] = [
  {
    slug: 'shipment-details-before-booking',
    title: 'Shipment Details to Confirm Before Booking Freight',
    excerpt: 'A practical checklist for cargo type, volume, ready date, delivery notes and documents before a booking request is sent.',
    coverImage: photos.portCranes,
    publishedDate: '2026-08-01',
    body: 'A strong booking request starts with complete shipment basics. Confirm cargo description, packing method, dimensions, weight, ready date, origin contact, destination contact and any warehouse appointment requirements. When these details are prepared early, the freight plan can be reviewed faster and fewer questions appear after the cargo is already moving.',
    relatedSlugs: ['warehouse-handoff-notes', 'transport-timing-basics'],
  },
  {
    slug: 'warehouse-handoff-notes',
    title: 'How Warehouse Handoff Notes Keep Cargo Moving',
    excerpt: 'Why receiving rules, appointment windows and contact details should be part of the freight plan.',
    coverImage: photos.warehouse,
    publishedDate: '2026-08-03',
    body: 'Warehouse handoff notes turn a delivery address into an operating instruction. They should include receiving hours, appointment rules, dock or unloading notes, reference numbers and the contact who can answer questions. Clear notes help the transport team close the final handoff without searching through separate messages.',
    relatedSlugs: ['shipment-details-before-booking', 'tracking-updates-that-help'],
  },
  {
    slug: 'tracking-updates-that-help',
    title: 'Tracking Updates That Actually Help Operations Teams',
    excerpt: 'Useful shipment updates focus on milestones, next actions and exceptions instead of noise.',
    coverImage: photos.aerialShip,
    publishedDate: '2026-08-05',
    body: 'Good tracking communication explains where the cargo is, what changed and what the next handoff requires. A status update should name the milestone, timing, required action and any exception. This keeps sales, purchasing, warehouse and finance teams aligned around the same shipment view.',
    relatedSlugs: ['transport-timing-basics', 'document-readiness-for-cargo'],
  },
  {
    slug: 'transport-timing-basics',
    title: 'Transport Timing Basics for B2B Cargo Planning',
    excerpt: 'How cargo readiness, cutoff timing and receiving windows shape a more reliable route plan.',
    coverImage: photos.truck,
    publishedDate: '2026-08-07',
    body: 'Transit time is only one part of freight timing. Cargo readiness, document review, booking cutoff, pickup appointment, warehouse receiving and delivery coordination all affect the real operating schedule. A better plan considers the full chain before promising a date internally.',
    relatedSlugs: ['shipment-details-before-booking', 'warehouse-handoff-notes'],
  },
  {
    slug: 'document-readiness-for-cargo',
    title: 'Document Readiness for International Cargo',
    excerpt: 'A cleaner document checklist can reduce delays and make shipment review easier.',
    coverImage: '/assets/visual-documents.svg',
    publishedDate: '2026-08-09',
    body: 'Document readiness means the commercial invoice, packing list, cargo description, shipper details and consignee details tell the same story. Before cargo moves, teams should check names, quantities, weights, package counts and reference numbers. Small inconsistencies can create unnecessary follow-up later.',
    relatedSlugs: ['tracking-updates-that-help', 'transport-timing-basics'],
  },
]

export const blogBySlug = Object.fromEntries(blogPosts.map((post) => [post.slug, post]))
