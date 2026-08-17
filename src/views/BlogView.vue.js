import InnerHero from '../components/InnerHero.vue';
import { blogPosts } from '../data/blog';
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
/** @type {[typeof InnerHero, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(InnerHero, new InnerHero({
    eyebrow: "Blog",
    title: "Freight planning notes for operations teams.",
    description: "Short, practical articles about shipment preparation, timing, documents and cargo handoffs.",
    image: "/assets/visual-documents.svg",
}));
const __VLS_1 = __VLS_0({
    eyebrow: "Blog",
    title: "Freight planning notes for operations teams.",
    description: "Short, practical articles about shipment preparation, timing, documents and cargo handoffs.",
    image: "/assets/visual-documents.svg",
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "section-block" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "card-grid" },
});
for (const [post] of __VLS_getVForSourceType((__VLS_ctx.blogPosts))) {
    const __VLS_3 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    const __VLS_4 = __VLS_asFunctionalComponent(__VLS_3, new __VLS_3({
        key: (post.slug),
        ...{ class: "blog-card" },
        to: (`/blog/${post.slug}`),
    }));
    const __VLS_5 = __VLS_4({
        key: (post.slug),
        ...{ class: "blog-card" },
        to: (`/blog/${post.slug}`),
    }, ...__VLS_functionalComponentArgsRest(__VLS_4));
    __VLS_6.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        ...{ class: "w-full h-auto object-cover" },
        src: (post.coverImage),
        alt: (post.title),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.time, __VLS_intrinsicElements.time)({});
    (post.publishedDate);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    (post.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (post.excerpt);
    var __VLS_6;
}
/** @type {__VLS_StyleScopedClasses['section-block']} */ ;
/** @type {__VLS_StyleScopedClasses['card-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['blog-card']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            InnerHero: InnerHero,
            blogPosts: blogPosts,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
