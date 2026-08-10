import type { SolutionPage } from './types'
import { photos } from './images'

export const logisticsSolutions: SolutionPage[] = [
  {
    slug: 'customs-clearance',
    name: 'Customs Clearance',
    shortDescription: 'Practical customs document coordination for freight movement.',
    heroImage: '/assets/visual-documents.svg',
    overview: 'Customs clearance support helps operations teams prepare shipment information, align commercial documents and reduce avoidable communication gaps.',
    capabilities: ['Commercial document checklist', 'Shipment information review', 'Broker communication coordination', 'Clearance status follow-up'],
    process: ['Collect invoice, packing and shipment details', 'Review document consistency before movement', 'Coordinate status updates with the freight plan'],
    needs: ['Teams that need cleaner document preparation', 'Import or export shipments with multiple handoff parties', 'Cargo movements where missing details can slow coordination'],
    benefits: ['Fewer document surprises', 'Clearer ownership across handoff points', 'More predictable shipment communication'],
    relatedSlugs: ['documentation-cargo-tracking', 'warehousing-distribution', 'ocean-freight'],
  },
  {
    slug: 'warehousing-distribution',
    name: 'Warehousing & Distribution',
    shortDescription: 'Warehouse handoff and distribution coordination for B2B cargo.',
    heroImage: photos.warehouse,
    overview: 'Warehousing and distribution support connects freight movement with receiving, storage, appointment and outbound delivery requirements.',
    capabilities: ['Warehouse intake coordination', 'Appointment and receiving note follow-up', 'Distribution handoff planning', 'Inventory movement communication'],
    process: ['Confirm receiving rules and cargo details', 'Align warehouse timing with transport milestones', 'Coordinate outbound handoff instructions'],
    needs: ['Cargo arriving into a warehouse workflow', 'Platform sellers coordinating inbound movement', 'Teams managing multiple receiving parties'],
    benefits: ['Cleaner warehouse intake', 'Better timing between transport and receiving teams', 'Less manual follow-up across channels'],
    relatedSlugs: ['road-freight', 'multimodal-transport', 'documentation-cargo-tracking'],
  },
  {
    slug: 'documentation-cargo-tracking',
    name: 'Documentation & Cargo Tracking',
    shortDescription: 'Shipment document control and milestone visibility.',
    heroImage: '/assets/visual-documents.svg',
    overview: 'Documentation and cargo tracking keeps the paperwork, shipment milestones and internal communication connected from booking to delivery.',
    capabilities: ['Document checklist management', 'Milestone status updates', 'Cargo readiness follow-up', 'Exception notes and handoff records'],
    process: ['Create a shipment checklist', 'Update milestones as cargo moves', 'Share clear notes for receiving and delivery teams'],
    needs: ['Operations teams that need one clean shipment view', 'Recurring freight programs with repeated document tasks', 'B2B cargo requiring milestone visibility'],
    benefits: ['Clearer shipment records', 'Easier internal alignment', 'Reduced uncertainty during quiet transport stages'],
    relatedSlugs: ['customs-clearance', 'multimodal-transport', 'ocean-freight'],
  },
]

export const solutionBySlug = Object.fromEntries(logisticsSolutions.map((item) => [item.slug, item]))
