import { computed } from 'vue';
import { useRoute } from 'vue-router';
import InnerHero from '../components/InnerHero.vue';
import QuoteCtaBand from '../components/QuoteCtaBand.vue';
import RelatedCards from '../components/RelatedCards.vue';
import { blogBySlug, blogPosts } from '../data/blog';
const route = useRoute();
const post = computed(() => blogBySlug[String(route.params.slug)]);
const related = computed(() => (post.value?.relatedSlugs ?? [])
    .map((slug) => blogPosts.find((item) => item.slug === slug))
    .filter(Boolean)
    .map((item) => ({ ...item, path: `/blog/${item.slug}` })));
const bodyBlocks = computed(() => {
    if (!post.value)
        return [];
    return post.value.body.split(/\n{2,}/).map((block) => {
        if (block.startsWith('## '))
            return { type: 'heading', text: block.slice(3) };
        if (block.startsWith('- '))
            return { type: 'list', items: block.split('\n').map((item) => item.replace(/^- /, '')) };
        return { type: 'paragraph', text: block };
    });
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
if (__VLS_ctx.post) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
    /** @type {[typeof InnerHero, ]} */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(InnerHero, new InnerHero({
        eyebrow: "Freight notes",
        title: (__VLS_ctx.post.title),
        description: (__VLS_ctx.post.excerpt),
        image: (__VLS_ctx.post.coverImage),
        meta: (__VLS_ctx.post.publishedDate),
    }));
    const __VLS_1 = __VLS_0({
        eyebrow: "Freight notes",
        title: (__VLS_ctx.post.title),
        description: (__VLS_ctx.post.excerpt),
        image: (__VLS_ctx.post.coverImage),
        meta: (__VLS_ctx.post.publishedDate),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.article, __VLS_intrinsicElements.article)({
        ...{ class: "post-body" },
    });
    for (const [block, index] of __VLS_getVForSourceType((__VLS_ctx.bodyBlocks))) {
        (index);
        if (block.type === 'heading') {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
            (block.text);
        }
        else if (block.type === 'list') {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
            for (const [item] of __VLS_getVForSourceType((block.items ?? []))) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
                    key: (item),
                });
                (item);
            }
        }
        else {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            (block.text);
        }
    }
    /** @type {[typeof RelatedCards, ]} */ ;
    // @ts-ignore
    const __VLS_3 = __VLS_asFunctionalComponent(RelatedCards, new RelatedCards({
        title: "Related Posts",
        items: (__VLS_ctx.related),
    }));
    const __VLS_4 = __VLS_3({
        title: "Related Posts",
        items: (__VLS_ctx.related),
    }, ...__VLS_functionalComponentArgsRest(__VLS_3));
    /** @type {[typeof QuoteCtaBand, ]} */ ;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(QuoteCtaBand, new QuoteCtaBand({}));
    const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({
        ...{ class: "not-found" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    const __VLS_9 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
        ...{ class: "button button-primary" },
        to: "/blog",
    }));
    const __VLS_11 = __VLS_10({
        ...{ class: "button button-primary" },
        to: "/blog",
    }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    __VLS_12.slots.default;
    var __VLS_12;
}
/** @type {__VLS_StyleScopedClasses['post-body']} */ ;
/** @type {__VLS_StyleScopedClasses['not-found']} */ ;
/** @type {__VLS_StyleScopedClasses['button']} */ ;
/** @type {__VLS_StyleScopedClasses['button-primary']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            InnerHero: InnerHero,
            QuoteCtaBand: QuoteCtaBand,
            RelatedCards: RelatedCards,
            post: post,
            related: related,
            bodyBlocks: bodyBlocks,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
