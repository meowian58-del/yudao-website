import { computed } from 'vue';
import InnerHero from '../components/InnerHero.vue';
import QuoteCtaBand from '../components/QuoteCtaBand.vue';
import RelatedCards from '../components/RelatedCards.vue';
import { services } from '../data/services';
import { logisticsSolutions } from '../data/logisticsSolutions';
const props = defineProps();
const page = computed(() => services.find((item) => item.slug === props.slug) ?? services[0]);
const related = computed(() => page.value.relatedSlugs
    .map((slug) => services.find((item) => item.slug === slug) ?? logisticsSolutions.find((item) => item.slug === slug))
    .filter(Boolean)
    .map((item) => ({ ...item, path: `/${item.slug}` })));
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
/** @type {[typeof InnerHero, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(InnerHero, new InnerHero({
    eyebrow: (__VLS_ctx.page.name),
    title: (`${__VLS_ctx.page.name} for structured B2B cargo.`),
    description: (__VLS_ctx.page.shortDescription),
    image: (__VLS_ctx.page.heroImage),
}));
const __VLS_1 = __VLS_0({
    eyebrow: (__VLS_ctx.page.name),
    title: (`${__VLS_ctx.page.name} for structured B2B cargo.`),
    description: (__VLS_ctx.page.shortDescription),
    image: (__VLS_ctx.page.heroImage),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "detail-layout" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "detail-lead" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "eyebrow" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
(__VLS_ctx.page.overview);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "numbered-list" },
});
for (const [capability] of __VLS_getVForSourceType((__VLS_ctx.page.capabilities))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.article, __VLS_intrinsicElements.article)({
        key: (capability),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (capability);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "section-block soft-section" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "section-heading" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "eyebrow" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "process-grid" },
});
for (const [step, index] of __VLS_getVForSourceType((__VLS_ctx.page.process))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.article, __VLS_intrinsicElements.article)({
        key: (step),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (String(index + 1).padStart(2, '0'));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    (step);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "why-band" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    ...{ class: "w-full h-auto object-cover" },
    src: (__VLS_ctx.page.featureImage ?? __VLS_ctx.page.heroImage),
    alt: (`${__VLS_ctx.page.name} planning`),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "eyebrow" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
/** @type {[typeof RelatedCards, ]} */ ;
// @ts-ignore
const __VLS_3 = __VLS_asFunctionalComponent(RelatedCards, new RelatedCards({
    title: "Related Services",
    items: (__VLS_ctx.related),
}));
const __VLS_4 = __VLS_3({
    title: "Related Services",
    items: (__VLS_ctx.related),
}, ...__VLS_functionalComponentArgsRest(__VLS_3));
/** @type {[typeof QuoteCtaBand, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(QuoteCtaBand, new QuoteCtaBand({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
/** @type {__VLS_StyleScopedClasses['detail-layout']} */ ;
/** @type {__VLS_StyleScopedClasses['detail-lead']} */ ;
/** @type {__VLS_StyleScopedClasses['eyebrow']} */ ;
/** @type {__VLS_StyleScopedClasses['numbered-list']} */ ;
/** @type {__VLS_StyleScopedClasses['section-block']} */ ;
/** @type {__VLS_StyleScopedClasses['soft-section']} */ ;
/** @type {__VLS_StyleScopedClasses['section-heading']} */ ;
/** @type {__VLS_StyleScopedClasses['eyebrow']} */ ;
/** @type {__VLS_StyleScopedClasses['process-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['why-band']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['eyebrow']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            InnerHero: InnerHero,
            QuoteCtaBand: QuoteCtaBand,
            RelatedCards: RelatedCards,
            page: page,
            related: related,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
