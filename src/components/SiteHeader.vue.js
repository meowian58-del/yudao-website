import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { mainNav, serviceNav, solutionNav } from '../data/navigation';
import { site } from '../data/site';
const route = useRoute();
const isOpen = ref(false);
const openDropdown = ref(null);
const closeTimer = ref(null);
const isHome = computed(() => route.path === '/');
const isMobile = ref(false);
let mediaQuery = null;
watch(() => route.fullPath, () => closeAll());
watch(isOpen, (value) => {
    document.body.classList.toggle('nav-open', value);
});
onMounted(() => {
    mediaQuery = window.matchMedia('(max-width: 767px)');
    updateViewportMode(mediaQuery);
    mediaQuery.addEventListener('change', updateViewportMode);
    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('click', handleOutsideClick);
});
onBeforeUnmount(() => {
    mediaQuery?.removeEventListener('change', updateViewportMode);
    document.removeEventListener('keydown', handleKeydown);
    document.removeEventListener('click', handleOutsideClick);
    document.body.classList.remove('nav-open');
});
function closeAll() {
    isOpen.value = false;
    openDropdown.value = null;
}
function toggleDropdown(name) {
    openDropdown.value = openDropdown.value === name ? null : name;
}
function openMenu(name) {
    if (isMobile.value)
        return;
    cancelClose();
    openDropdown.value = name;
}
function scheduleClose() {
    cancelClose();
    closeTimer.value = window.setTimeout(() => {
        openDropdown.value = null;
    }, 180);
}
function cancelClose() {
    if (closeTimer.value !== null) {
        window.clearTimeout(closeTimer.value);
        closeTimer.value = null;
    }
}
function updateViewportMode(event) {
    isMobile.value = event.matches;
    if (!event.matches) {
        isOpen.value = false;
    }
    openDropdown.value = null;
}
function handleKeydown(event) {
    if (event.key === 'Escape')
        closeAll();
}
function handleOutsideClick(event) {
    const target = event.target;
    if (!(target instanceof Node))
        return;
    const header = document.querySelector('.site-header');
    if (header && !header.contains(target))
        closeAll();
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({
    ...{ class: "site-header" },
    ...{ class: ({ 'is-floating': __VLS_ctx.isHome, 'is-solid': !__VLS_ctx.isHome }) },
});
const __VLS_0 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ 'onClick': {} },
    ...{ class: "brand" },
    to: "/",
    'aria-label': "YUDAO GLOBAL LOGISTICS home",
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClick': {} },
    ...{ class: "brand" },
    to: "/",
    'aria-label': "YUDAO GLOBAL LOGISTICS home",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_4;
let __VLS_5;
let __VLS_6;
const __VLS_7 = {
    onClick: (__VLS_ctx.closeAll)
};
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    ...{ class: "brand-logo" },
    src: "/assets/brand/logo-yudao.png",
    alt: "",
    'aria-hidden': "true",
});
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.isOpen = !__VLS_ctx.isOpen;
        } },
    ...{ class: "menu-toggle" },
    type: "button",
    'aria-expanded': (__VLS_ctx.isOpen),
    'aria-label': "Toggle navigation",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({
    ...{ class: "site-nav" },
    ...{ class: ({ 'is-open': __VLS_ctx.isOpen }) },
    'aria-label': "Primary navigation",
});
const __VLS_8 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    ...{ 'onClick': {} },
    ...{ class: "nav-link mobile-home-link" },
    to: "/",
}));
const __VLS_10 = __VLS_9({
    ...{ 'onClick': {} },
    ...{ class: "nav-link mobile-home-link" },
    to: "/",
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
let __VLS_12;
let __VLS_13;
let __VLS_14;
const __VLS_15 = {
    onClick: (__VLS_ctx.closeAll)
};
__VLS_11.slots.default;
var __VLS_11;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onMouseenter: (__VLS_ctx.cancelClose) },
    ...{ onMouseleave: (__VLS_ctx.scheduleClose) },
    ...{ class: "nav-group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.toggleDropdown('services');
        } },
    ...{ onMouseenter: (...[$event]) => {
            __VLS_ctx.openMenu('services');
        } },
    ...{ class: "nav-link nav-button" },
    type: "button",
    'aria-expanded': (__VLS_ctx.openDropdown === 'services'),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "nav-chevron" },
    'aria-hidden': "true",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "submenu" },
    ...{ class: ({ 'is-visible': __VLS_ctx.openDropdown === 'services' }) },
});
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.serviceNav))) {
    const __VLS_16 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
        ...{ 'onClick': {} },
        key: (item.path),
        to: (item.path),
    }));
    const __VLS_18 = __VLS_17({
        ...{ 'onClick': {} },
        key: (item.path),
        to: (item.path),
    }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    let __VLS_20;
    let __VLS_21;
    let __VLS_22;
    const __VLS_23 = {
        onClick: (__VLS_ctx.closeAll)
    };
    __VLS_19.slots.default;
    (item.label);
    var __VLS_19;
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onMouseenter: (__VLS_ctx.cancelClose) },
    ...{ onMouseleave: (__VLS_ctx.scheduleClose) },
    ...{ class: "nav-group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.toggleDropdown('solutions');
        } },
    ...{ onMouseenter: (...[$event]) => {
            __VLS_ctx.openMenu('solutions');
        } },
    ...{ class: "nav-link nav-button" },
    type: "button",
    'aria-expanded': (__VLS_ctx.openDropdown === 'solutions'),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "desktop-label" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "mobile-label" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "nav-chevron" },
    'aria-hidden': "true",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "submenu" },
    ...{ class: ({ 'is-visible': __VLS_ctx.openDropdown === 'solutions' }) },
});
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.solutionNav))) {
    const __VLS_24 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
        ...{ 'onClick': {} },
        key: (item.path),
        to: (item.path),
    }));
    const __VLS_26 = __VLS_25({
        ...{ 'onClick': {} },
        key: (item.path),
        to: (item.path),
    }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    let __VLS_28;
    let __VLS_29;
    let __VLS_30;
    const __VLS_31 = {
        onClick: (__VLS_ctx.closeAll)
    };
    __VLS_27.slots.default;
    (item.label);
    var __VLS_27;
}
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.mainNav))) {
    const __VLS_32 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
        ...{ 'onClick': {} },
        key: (item.path),
        ...{ class: "nav-link" },
        to: (item.path),
    }));
    const __VLS_34 = __VLS_33({
        ...{ 'onClick': {} },
        key: (item.path),
        ...{ class: "nav-link" },
        to: (item.path),
    }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    let __VLS_36;
    let __VLS_37;
    let __VLS_38;
    const __VLS_39 = {
        onClick: (__VLS_ctx.closeAll)
    };
    __VLS_35.slots.default;
    (item.label);
    var __VLS_35;
}
const __VLS_40 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
    ...{ 'onClick': {} },
    ...{ class: "nav-cta" },
    to: "/quote",
}));
const __VLS_42 = __VLS_41({
    ...{ 'onClick': {} },
    ...{ class: "nav-cta" },
    to: "/quote",
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
let __VLS_44;
let __VLS_45;
let __VLS_46;
const __VLS_47 = {
    onClick: (__VLS_ctx.closeAll)
};
__VLS_43.slots.default;
(__VLS_ctx.site.primaryCta);
var __VLS_43;
/** @type {__VLS_StyleScopedClasses['site-header']} */ ;
/** @type {__VLS_StyleScopedClasses['is-floating']} */ ;
/** @type {__VLS_StyleScopedClasses['is-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['brand']} */ ;
/** @type {__VLS_StyleScopedClasses['brand-logo']} */ ;
/** @type {__VLS_StyleScopedClasses['menu-toggle']} */ ;
/** @type {__VLS_StyleScopedClasses['site-nav']} */ ;
/** @type {__VLS_StyleScopedClasses['is-open']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['mobile-home-link']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-group']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-button']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-chevron']} */ ;
/** @type {__VLS_StyleScopedClasses['submenu']} */ ;
/** @type {__VLS_StyleScopedClasses['is-visible']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-group']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-button']} */ ;
/** @type {__VLS_StyleScopedClasses['desktop-label']} */ ;
/** @type {__VLS_StyleScopedClasses['mobile-label']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-chevron']} */ ;
/** @type {__VLS_StyleScopedClasses['submenu']} */ ;
/** @type {__VLS_StyleScopedClasses['is-visible']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-cta']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            RouterLink: RouterLink,
            mainNav: mainNav,
            serviceNav: serviceNav,
            solutionNav: solutionNav,
            site: site,
            isOpen: isOpen,
            openDropdown: openDropdown,
            isHome: isHome,
            closeAll: closeAll,
            toggleDropdown: toggleDropdown,
            openMenu: openMenu,
            scheduleClose: scheduleClose,
            cancelClose: cancelClose,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
