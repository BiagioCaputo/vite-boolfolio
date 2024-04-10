<script>
export default {
    name: "FormAlert",
    props: {
        isOpen: Boolean,
        type: String | null,
        dismissible: Boolean,
    },
    emits: ['close']
};
</script>

<template>
    <div v-if="isOpen" class="alert  fade show"
        :class="[`alert-${type ?? 'danger'}`, { 'alert-dismissible': dismissible }]" role="alert">
        <slot></slot>
        <button v-if="dismissible" @click="$emit('close')" type="button" class="btn-close" data-bs-dismiss="alert"
            aria-label="Close"></button>
    </div>
</template>
<style lang="scss" scoped></style>