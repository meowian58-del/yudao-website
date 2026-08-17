import { ref } from 'vue';
import { services } from '../data/services';
import { site } from '../data/site';
const status = ref('');
const state = ref('idle');
async function submit(event) {
    const form = event.target;
    const formData = new FormData(form);
    state.value = 'loading';
    status.value = 'Sending your request...';
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            headers: { Accept: 'application/json' },
            body: formData,
        });
        if (!response.ok)
            throw new Error('The request could not be sent. Please email us directly if the issue continues.');
        state.value = 'success';
        status.value = 'Thank you. Your request has been received and our team will review the shipment details.';
        form.reset();
    }
    catch (error) {
        state.value = 'error';
        status.value = error instanceof Error ? error.message : `Please email ${site.email} if the form cannot be sent.`;
    }
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "quote-layout" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "quote-intro" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "eyebrow" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: (`mailto:${__VLS_ctx.site.email}`),
});
(__VLS_ctx.site.email);
__VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
    ...{ onSubmit: (__VLS_ctx.submit) },
    ...{ class: "quote-form" },
    action: "https://formsubmit.co/ajax/official@yudaoglobal.com",
    method: "POST",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
    type: "hidden",
    name: "_subject",
    value: "New Quote Request from YUDAO GLOBAL LOGISTICS Website",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
    type: "hidden",
    name: "_captcha",
    value: "false",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
    type: "hidden",
    name: "_template",
    value: "table",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    ...{ class: "honeypot" },
    'aria-hidden': "true",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
    name: "_honey",
    tabindex: "-1",
    autocomplete: "off",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
    name: "Full Name",
    autocomplete: "name",
    required: true,
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
    name: "Company Name",
    autocomplete: "organization",
    required: true,
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
    name: "Business Email",
    type: "email",
    autocomplete: "email",
    required: true,
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
    name: "Phone / WhatsApp",
    autocomplete: "tel",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    name: "Service Needed",
    required: true,
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "",
});
for (const [service] of __VLS_getVForSourceType((__VLS_ctx.services))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        key: (service.slug),
    });
    (service.name);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
    name: "Cargo Type",
    required: true,
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
    name: "Origin",
    required: true,
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
    name: "Destination",
    required: true,
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    ...{ class: "full-span" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({
    name: "Message",
    rows: "6",
    required: true,
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "form-status" },
    ...{ class: (__VLS_ctx.state) },
    role: "status",
});
(__VLS_ctx.status);
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ class: "button button-primary" },
    type: "submit",
    disabled: (__VLS_ctx.state === 'loading'),
});
(__VLS_ctx.state === 'loading' ? 'Sending...' : 'Send Request');
/** @type {__VLS_StyleScopedClasses['quote-layout']} */ ;
/** @type {__VLS_StyleScopedClasses['quote-intro']} */ ;
/** @type {__VLS_StyleScopedClasses['eyebrow']} */ ;
/** @type {__VLS_StyleScopedClasses['quote-form']} */ ;
/** @type {__VLS_StyleScopedClasses['honeypot']} */ ;
/** @type {__VLS_StyleScopedClasses['full-span']} */ ;
/** @type {__VLS_StyleScopedClasses['form-status']} */ ;
/** @type {__VLS_StyleScopedClasses['button']} */ ;
/** @type {__VLS_StyleScopedClasses['button-primary']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            services: services,
            site: site,
            status: status,
            state: state,
            submit: submit,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
