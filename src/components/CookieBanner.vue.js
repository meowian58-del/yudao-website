import { onMounted, ref } from 'vue';
const visible = ref(false);
onMounted(() => {
    visible.value = localStorage.getItem('yudao-cookie-accepted') !== 'true';
});
function accept() {
    localStorage.setItem('yudao-cookie-accepted', 'true');
    visible.value = false;
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
if (__VLS_ctx.visible) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "cookie-banner" },
        role: "dialog",
        'aria-label': "Cookie notice",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.accept) },
        type: "button",
    });
}
/** @type {__VLS_StyleScopedClasses['cookie-banner']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            visible: visible,
            accept: accept,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
