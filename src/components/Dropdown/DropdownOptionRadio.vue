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
        class="dropdown-option__radio"
        :class="{ 
            'dropdown-option__radio--selected': selected,
        }"
    />
</template>

<style lang="scss">
.dropdown-option__radio {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border-radius: 99999px;
    border: 1px solid rgb(var(--lucid-color-gray-300));
    background-color: transparent;
    transition: all 200ms;

    &::after {
        content: "";
        display: block;
        width: 8px;
        height: 8px;
        background-color: transparent;
        border-radius: 99999px;
    }
    
    &--selected {
        border-width: 2px;
        border-color: rgb(var(--lucid-color-primary-500));

        &::after {
            background-color: rgb(var(--lucid-color-primary-500));
        }
    }
}
</style>
