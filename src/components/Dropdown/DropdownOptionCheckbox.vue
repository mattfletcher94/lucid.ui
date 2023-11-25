<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        selected: {
            type: Boolean,
            default: false,
        },
    },
});
</script>

<template>
    <span 
        class="dropdown-option__checkbox"
        :class="{ 
            'dropdown-option__checkbox--selected': selected,
        }"
    />
</template>

<style lang="scss">
.dropdown-option__checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border-radius: var(--lucid-rounded-md);
    border: 1px solid rgb(var(--lucid-color-gray-300));
    background-color: rgb(var(--lucid-color-white));
    transition: all 200ms;

    &--selected {
        border-color: rgb(var(--lucid-color-primary-500));
        background-color: rgb(var(--lucid-color-primary-500));

        &::after {
            content: "";
            display: block;
            width: 16px;
            height: 16px;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none"><path d="M9 0.5L3.26087 8.5L1 6.23913" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg>');
            background-position: center;
            background-repeat: no-repeat;
            background-size: 11px;
        }
    }
}
</style>
