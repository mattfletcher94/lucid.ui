<script lang="ts" setup>
const props = withDefaults(defineProps<{
    color?: 'primary' | 'secondary' | 'danger',
    variant?: 'solid' | 'tonal' | 'ghost' | 'outline' | 'link',
    shape?: 'rounded' | 'circle',
    size?: 'sm' | 'md' | 'lg'
    type?: 'button' | 'submit' | 'reset'
    selected?: boolean
    disabled?: boolean
}>(), {
    color: 'primary',
    variant: 'solid',
    shape: 'rounded',
    size: 'md',
    type: 'button',
    selected: false,
    disabled: false,
} as const)
</script>

<template>
    <button
        class="lucid-button"
        :class="{
            'lucid-button--color-primary': props.color === 'primary',
            'lucid-button--color-secondary': props.color === 'secondary',
            'lucid-button--color-danger': props.color === 'danger',
            'lucid-button--variant-solid': props.variant === 'solid',
            'lucid-button--variant-tonal': props.variant === 'tonal',
            'lucid-button--variant-ghost': props.variant === 'ghost',
            'lucid-button--variant-outline': props.variant === 'outline',
            'lucid-button--variant-link': props.variant === 'link',
            'lucid-button--shape-rounded': props.shape === 'rounded',
            'lucid-button--shape-circle': props.shape === 'circle',
            'lucid-button--size-sm': props.size === 'sm',
            'lucid-button--size-md': props.size === 'md',
            'lucid-button--size-lg': props.size === 'lg',
            'lucid-button--selected': props.selected,
        }"
        :type="props.type"
        :disabled="props.disabled"
        :aria-disabled="props.disabled"
    >
        <slot />
    </button>
</template>

<style>
:root {
    --lucid-button-position: relative;
    --lucid-button-display: inline-flex;
    --lucid-button-align-items: center;
    --lucid-button-justify-content: center;
    --lucid-button-gap: var(--lucid-spacing-2);
    --lucid-button-font-size: var(--lucid-font-size-sm);
    --lucid-button-padding-x: var(--lucid-spacing-4);
    --lucid-button-padding-y: 0px;
    --lucid-button-height: auto;
    --lucid-button-width: auto;
    --lucid-button-border-radius: var(--lucid-rounded-md);
    --lucid-button-text-decoration: none;
    --lucid-button-font-weight: var(--lucid-font-weight-medium);
    --lucid-button-letter-spacing: var(--lucid-letter-spacing-wide);
    --lucid-button-color: var(--lucid-color-white);
    --lucid-button-font-family: var(--lucid-font-sans);
    --lucid-button-background-color: var(--lucid-color-primary-500);
    --lucid-button-border-color: none;
    --lucid-button-white-space: nowrap;
    --lucid-button-cursor: pointer;
    --lucid-button-user-select: none;
    --lucid-button-box-shadow: none;
    --lucid-button-box-sizing: border-box;
    --lucid-button-outline-offset: 2px;
    --lucid-button-outline-width: 2px;
    --lucid-button-outline-color: transparent;
    --lucid-button-transition: all 200ms ease-in-out;
    --lucid-button-overflow: hidden;
    --lucid-button-opacity: 1;

    --lucid-button-color-hovered: var(--lucid-color-white);
    --lucid-button-color-active: var(--lucid-color-white);
    --lucid-button-color-focused: var(--lucid-color-white);
    --lucid-button-color-selected: var(--lucid-color-white);

    --lucid-button-background-color-hovered: var(--lucid-color-primary-600);
    --lucid-button-background-color-active: var(--lucid-color-primary-700);
    --lucid-button-background-color-focused: var(--lucid-color-primary-600);
    --lucid-button-background-color-selected: var(--lucid-color-primary-600);

    --lucid-button-outline-color-hovered: transparent;
    --lucid-button-outline-color-active: transparent;
    --lucid-button-outline-color-focused: transparent;
    --lucid-button-outline-color-selected: transparent;

    --lucid-button-disabled-opacity: 0.5;
    --lucid-button-disabled-cursor: not-allowed;
}
</style>

<style scoped lang="scss">
.lucid-button {

    // shape

    &--shape-rounded {
        --lucid-button-border-radius: var(--lucid-rounded-md);
    }

    &--shape-circle {
        --lucid-button-border-radius: var(--lucid-rounded-full);
    }

    // sizes

    &--size-sm {
        --lucid-button-font-size: var(--lucid-font-size-xs);
    }

    &--size-md {
        --lucid-button-font-size: var(--lucid-font-size-sm);
    }

    &--size-lg {
        --lucid-button-font-size: var(--lucid-font-size-md);
    }

    // Combination: shape and size

    &--shape-rounded#{&}--size-sm {
        --lucid-button-padding-x: var(--lucid-spacing-2);
        --lucid-button-padding-y: 0px;
        --lucid-button-height: var(--lucid-spacing-8);
    }

    &--shape-rounded#{&}--size-md {
        --lucid-button-padding-x: var(--lucid-spacing-4);
        --lucid-button-padding-y: 0px;
        --lucid-button-height: var(--lucid-spacing-9);
    }

    &--shape-rounded#{&}--size-lg {
        --lucid-button-padding-x: var(--lucid-spacing-6);
        --lucid-button-padding-y: 0px;
        --lucid-button-height: var(--lucid-spacing-10);
    }

    &--shape-circle#{&}--size-sm {
        --lucid-button-padding-x: 0px;
        --lucid-button-padding-y: 0px;
        --lucid-button-width: var(--lucid-spacing-8);
        --lucid-button-height: var(--lucid-spacing-8);
    }

    &--shape-circle#{&}--size-md {
        --lucid-button-padding-x: 0px;
        --lucid-button-padding-y: 0px;
        --lucid-button-width: var(--lucid-spacing-9);
        --lucid-button-height: var(--lucid-spacing-9);
    }

    &--shape-circle#{&}--size-lg {
        --lucid-button-padding-x: 0px;
        --lucid-button-padding-y: 0px;
        --lucid-button-width: var(--lucid-spacing-10);
        --lucid-button-height: var(--lucid-spacing-10);
    }

    // Combination: color and variant

    &--color-primary#{&}--variant-solid {
        --lucid-button-color: var(--lucid-color-white);
        --lucid-button-background-color: var(--lucid-color-primary-500);
        --lucid-button-border-color: var(--lucid-color-primary-500);

        --lucid-button-color-hovered: var(--lucid-color-white);
        --lucid-button-color-active: var(--lucid-color-white);
        --lucid-button-color-focused: var(--lucid-color-white);
        --lucid-button-color-selected: var(--lucid-color-white);

        --lucid-button-background-color-hovered: var(--lucid-color-primary-600);
        --lucid-button-background-color-active: var(--lucid-color-primary-700);
        --lucid-button-background-color-focused: var(--lucid-color-primary-600);
        --lucid-button-background-color-selected: var(--lucid-color-primary-600);

        --lucid-button-outline-color-hovered: transparent;
        --lucid-button-outline-color-active: transparent;
        --lucid-button-outline-color-focused: var(--lucid-color-primary-600);
        --lucid-button-outline-color-selected: transparent;
    }

    &--color-primary#{&}--variant-tonal {
        --lucid-button-color: var(--lucid-color-primary-600);
        --lucid-button-background-color: var(--lucid-color-primary-100);

        --lucid-button-color-hovered: var(--lucid-color-primary-600);
        --lucid-button-color-active: var(--lucid-color-primary-600);
        --lucid-button-color-focused: var(--lucid-color-primary-600);
        --lucid-button-color-selected: var(--lucid-color-primary-600);

        --lucid-button-background-color-hovered: var(--lucid-color-primary-200);
        --lucid-button-background-color-active: var(--lucid-color-primary-300);
        --lucid-button-background-color-focused: var(--lucid-color-primary-200);
        --lucid-button-background-color-selected: var(--lucid-color-primary-200);

        --lucid-button-outline-color-hovered: transparent;
        --lucid-button-outline-color-active: transparent;
        --lucid-button-outline-color-focused: var(--lucid-color-primary-200);
        --lucid-button-outline-color-selected: transparent;
    }

    &--color-primary#{&}--variant-ghost {
        --lucid-button-color: var(--lucid-color-primary-600);
        --lucid-button-background-color: transparent;

        --lucid-button-color-hovered: var(--lucid-color-primary-600);
        --lucid-button-color-active: var(--lucid-color-primary-600);
        --lucid-button-color-focused: var(--lucid-color-primary-600);
        --lucid-button-color-selected: var(--lucid-color-primary-600);

        --lucid-button-background-color-hovered: var(--lucid-color-primary-100);
        --lucid-button-background-color-active: var(--lucid-color-primary-200);
        --lucid-button-background-color-focused: var(--lucid-color-primary-100);
        --lucid-button-background-color-selected: var(--lucid-color-primary-100);

        --lucid-button-outline-color-hovered: transparent;
        --lucid-button-outline-color-active: transparent;
        --lucid-button-outline-color-focused: var(--lucid-color-primary-200);
        --lucid-button-outline-color-selected: transparent;
    }

    &--color-primary#{&}--variant-outline {
        --lucid-button-color: var(--lucid-color-primary-500);
        --lucid-button-background-color: transparent;
        --lucid-button-border: 1px solid rgb(var(--lucid-color-primary-500));

        --lucid-button-color-hovered: var(--lucid-color-primary-600);
        --lucid-button-color-active: var(--lucid-color-primary-700);
        --lucid-button-color-focused: var(--lucid-color-primary-600);
        --lucid-button-color-selected: var(--lucid-color-primary-600);

        --lucid-button-background-color-hovered: var(--lucid-color-primary-100);
        --lucid-button-background-color-active: var(--lucid-color-primary-200);
        --lucid-button-background-color-focused: var(--lucid-color-primary-100);
        --lucid-button-background-color-selected: var(--lucid-color-primary-100);

        --lucid-button-outline-color-hovered: var(--lucid-color-primary-600);
        --lucid-button-outline-color-active: var(--lucid-color-primary-700);
        --lucid-button-outline-color-focused: var(--lucid-color-primary-600);
        --lucid-button-outline-color-selected: var(--lucid-color-primary-600);
    }

    &--color-primary#{&}--variant-link {
        --lucid-button-color: var(--lucid-color-primary-500);
        --lucid-button-background-color: transparent;
        --lucid-button-border: none;
        --lucid-button-text-decoration: underline;

        --lucid-button-color-hovered: var(--lucid-color-primary-600);
        --lucid-button-color-active: var(--lucid-color-primary-700);
        --lucid-button-color-focused: var(--lucid-color-primary-600);
        --lucid-button-color-selected: var(--lucid-color-primary-600);

        --lucid-button-background-color-hovered: transparent;
        --lucid-button-background-color-active: transparent;
        --lucid-button-background-color-focused: transparent;
        --lucid-button-background-color-selected: transparent;

        --lucid-button-outline-color-hovered: transparent;
        --lucid-button-outline-color-active: transparent;
        --lucid-button-outline-color-focused: transparent;
        --lucid-button-outline-color-selected: transparent;
    }

    &--color-secondary#{&}--variant-solid {
        --lucid-button-color: var(--lucid-color-gray-900);
        --lucid-button-background-color: var(--lucid-color-gray-100);

        --lucid-button-color-hovered: var(--lucid-color-gray-900);
        --lucid-button-color-active: var(--lucid-color-gray-900);
        --lucid-button-color-focused: var(--lucid-color-gray-900);
        --lucid-button-color-selected: var(--lucid-color-gray-900);

        --lucid-button-background-color-hovered: var(--lucid-color-gray-200);
        --lucid-button-background-color-active: var(--lucid-color-gray-300);
        --lucid-button-background-color-focused: var(--lucid-color-gray-200);
        --lucid-button-background-color-selected: var(--lucid-color-gray-200);

        --lucid-button-outline-color-hovered: transparent;
        --lucid-button-outline-color-active: transparent;
        --lucid-button-outline-color-focused: var(--lucid-color-gray-200);
        --lucid-button-outline-color-selected: transparent;
    }
    
    &--color-secondary#{&}--variant-tonal {
        --lucid-button-color: var(--lucid-color-black);
        --lucid-button-background-color: var(--lucid-color-gray-100);

        --lucid-button-color-hovered: var(--lucid-color-black);
        --lucid-button-color-active: var(--lucid-color-black);
        --lucid-button-color-focused: var(--lucid-color-black);
        --lucid-button-color-selected: var(--lucid-color-black);

        --lucid-button-background-color-hovered: var(--lucid-color-gray-200);
        --lucid-button-background-color-active: var(--lucid-color-gray-300);
        --lucid-button-background-color-focused: var(--lucid-color-gray-200);
        --lucid-button-background-color-selected: var(--lucid-color-gray-200);

        --lucid-button-outline-color-hovered: transparent;
        --lucid-button-outline-color-active: transparent;
        --lucid-button-outline-color-focused: var(--lucid-color-gray-200);
        --lucid-button-outline-color-selected: transparent;
    }

    &--color-secondary#{&}--variant-ghost {
        --lucid-button-color: var(--lucid-color-black);
        --lucid-button-background-color: transparent;

        --lucid-button-color-hovered: var(--lucid-color-black);
        --lucid-button-color-active: var(--lucid-color-black);
        --lucid-button-color-focused: var(--lucid-color-black);
        --lucid-button-color-selected: var(--lucid-color-black);

        --lucid-button-background-color-hovered: var(--lucid-color-gray-100);
        --lucid-button-background-color-active: var(--lucid-color-gray-200);
        --lucid-button-background-color-focused: var(--lucid-color-gray-100);
        --lucid-button-background-color-selected: var(--lucid-color-gray-100);

        --lucid-button-outline-color-hovered: transparent;
        --lucid-button-outline-color-active: transparent;
        --lucid-button-outline-color-focused: var(--lucid-color-gray-100);
        --lucid-button-outline-color-selected: transparent;
    }

    &--color-secondary#{&}--variant-outline {
        --lucid-button-color: var(--lucid-color-gray-900);
        --lucid-button-background-color: transparent;
        --lucid-button-border: 1px solid rgb(var(--lucid-color-gray-400));

        --lucid-button-color-hovered: var(--lucid-color-gray-800);
        --lucid-button-color-active: var(--lucid-color-gray-700);
        --lucid-button-color-focused: var(--lucid-color-gray-800);
        --lucid-button-color-selected: var(--lucid-color-gray-800);

        --lucid-button-background-color-hovered: var(--lucid-color-gray-100);
        --lucid-button-background-color-active: var(--lucid-color-gray-200);
        --lucid-button-background-color-focused: var(--lucid-color-gray-100);
        --lucid-button-background-color-selected: var(--lucid-color-gray-100);

        --lucid-button-outline-color-hovered: var(--lucid-color-gray-800);
        --lucid-button-outline-color-active: var(--lucid-color-gray-700);
        --lucid-button-outline-color-focused: var(--lucid-color-gray-800);
        --lucid-button-outline-color-selected: transparent;
    }

    &--color-secondary#{&}--variant-link {
        --lucid-button-color: var(--lucid-color-black);
        --lucid-button-background-color: transparent;
        --lucid-button-border: none;
        --lucid-button-text-decoration: underline;

        --lucid-button-color-hovered: var(--lucid-color-gray-800);
        --lucid-button-color-active: var(--lucid-color-gray-700);
        --lucid-button-color-focused: var(--lucid-color-gray-800);
        --lucid-button-color-selected: var(--lucid-color-gray-800);

        --lucid-button-background-color-hovered: transparent;
        --lucid-button-background-color-active: transparent;
        --lucid-button-background-color-focused: transparent;
        --lucid-button-background-color-selected: transparent;

        --lucid-button-outline-color-hovered: transparent;
        --lucid-button-outline-color-active: transparent;
        --lucid-button-outline-color-focused: transparent;
        --lucid-button-outline-color-selected: transparent;
    }

    &--color-danger#{&}--variant-solid {
        --lucid-button-color: var(--lucid-color-white);
        --lucid-button-background-color: var(--lucid-color-danger-500);

        --lucid-button-color-hovered: var(--lucid-color-white);
        --lucid-button-color-active: var(--lucid-color-white);
        --lucid-button-color-focused: var(--lucid-color-white);
        --lucid-button-color-selected: var(--lucid-color-white);

        --lucid-button-background-color-hovered: var(--lucid-color-danger-600);
        --lucid-button-background-color-active: var(--lucid-color-danger-700);
        --lucid-button-background-color-focused: var(--lucid-color-danger-600);
        --lucid-button-background-color-selected: var(--lucid-color-danger-600);

        --lucid-button-outline-color-hovered: transparent;
        --lucid-button-outline-color-active: transparent;
        --lucid-button-outline-color-focused: var(--lucid-color-danger-600);
        --lucid-button-outline-color-selected: transparent;
    }

    &--color-danger#{&}--variant-tonal {
        --lucid-button-color: var(--lucid-color-danger-600);
        --lucid-button-background-color: var(--lucid-color-danger-100);

        --lucid-button-color-hovered: var(--lucid-color-danger-600);
        --lucid-button-color-active: var(--lucid-color-danger-600);
        --lucid-button-color-focused: var(--lucid-color-danger-600);
        --lucid-button-color-selected: var(--lucid-color-danger-600);

        --lucid-button-background-color-hovered: var(--lucid-color-danger-200);
        --lucid-button-background-color-active: var(--lucid-color-danger-300);
        --lucid-button-background-color-focused: var(--lucid-color-danger-200);
        --lucid-button-background-color-selected: var(--lucid-color-danger-200);

        --lucid-button-outline-color-hovered: transparent;
        --lucid-button-outline-color-active: transparent;
        --lucid-button-outline-color-focused: var(--lucid-color-danger-200);
        --lucid-button-outline-color-selected: transparent;
    }

    &--color-danger#{&}--variant-ghost {
        --lucid-button-color: var(--lucid-color-danger-600);
        --lucid-button-background-color: transparent;

        --lucid-button-color-hovered: var(--lucid-color-danger-600);
        --lucid-button-color-active: var(--lucid-color-danger-600);
        --lucid-button-color-focused: var(--lucid-color-danger-600);
        --lucid-button-color-selected: var(--lucid-color-danger-600);

        --lucid-button-background-color-hovered: var(--lucid-color-danger-100);
        --lucid-button-background-color-active: var(--lucid-color-danger-200);
        --lucid-button-background-color-focused: var(--lucid-color-danger-100);
        --lucid-button-background-color-selected: var(--lucid-color-danger-100);

        --lucid-button-outline-color-hovered: transparent;
        --lucid-button-outline-color-active: transparent;
        --lucid-button-outline-color-focused: var(--lucid-color-danger-200);
        --lucid-button-outline-color-selected: transparent;
    }

    &--color-danger#{&}--variant-outline {
        --lucid-button-color: var(--lucid-color-danger-500);
        --lucid-button-background-color: transparent;
        --lucid-button-border: 1px solid rgb(var(--lucid-color-danger-500));

        --lucid-button-color-hovered: var(--lucid-color-danger-600);
        --lucid-button-color-active: var(--lucid-color-danger-700);
        --lucid-button-color-focused: var(--lucid-color-danger-600);
        --lucid-button-color-selected: var(--lucid-color-danger-600);

        --lucid-button-background-color-hovered: var(--lucid-color-danger-100);
        --lucid-button-background-color-active: var(--lucid-color-danger-200);
        --lucid-button-background-color-focused: var(--lucid-color-danger-100);
        --lucid-button-background-color-selected: var(--lucid-color-danger-100);

        --lucid-button-outline-color-hovered: var(--lucid-color-danger-600);
        --lucid-button-outline-color-active: var(--lucid-color-danger-700);
        --lucid-button-outline-color-focused: var(--lucid-color-danger-600);
        --lucid-button-outline-color-selected: var(--lucid-color-danger-600);
    }

    &--color-danger#{&}--variant-link {
        --lucid-button-color: var(--lucid-color-danger-500);
        --lucid-button-background-color: transparent;
        --lucid-button-border: none;
        --lucid-button-text-decoration: underline;

        --lucid-button-color-hovered: var(--lucid-color-danger-600);
        --lucid-button-color-active: var(--lucid-color-danger-700);
        --lucid-button-color-focused: var(--lucid-color-danger-600);
        --lucid-button-color-selected: var(--lucid-color-danger-600);

        --lucid-button-background-color-hovered: transparent;
        --lucid-button-background-color-active: transparent;
        --lucid-button-background-color-focused: transparent;
        --lucid-button-background-color-selected: transparent;

        --lucid-button-outline-color-hovered: transparent;
        --lucid-button-outline-color-active: transparent;
        --lucid-button-outline-color-focused: transparent;
        --lucid-button-outline-color-selected: transparent;
    }

    position: var(--lucid-button-position);
    display: var(--lucid-button-display);
    align-items: var(--lucid-button-align-items);
    justify-content: var(--lucid-button-justify-content);
    gap: var(--lucid-button-gap);
    font-size: var(--lucid-button-font-size);
    padding: var(--lucid-button-padding-y) var(--lucid-button-padding-x);
    height: var(--lucid-button-height);
    width: var(--lucid-button-width);
    border-radius: var(--lucid-button-border-radius);
    text-decoration: var(--lucid-button-text-decoration);
    font-weight: var(--lucid-button-font-weight);
    letter-spacing: var(--lucid-button-letter-spacing);
    color: rgb(var(--lucid-button-color));
    font-family: var(--lucid-button-font-family);
    background-color: rgb(var(--lucid-button-background-color));
    border: var(--lucid-button-border);
    box-sizing: var(--lucid-button-box-sizing);
    cursor: var(--lucid-button-cursor);
    user-select: var(--lucid-button-user-select);
    box-shadow: var(--lucid-button-box-shadow);
    box-sizing: var(--lucid-button-box-sizing);
    outline-offset: var(--lucid-button-outline-offset);
    outline-width: var(--lucid-button-outline-width);
    outline-color: rgb(var(--lucid-button-outline-color));
    transition: var(--lucid-button-transition);
    overflow: var(--lucid-button-overflow);
    opacity: var(--lucid-button-opacity);

    &:hover:not(:disabled) {
        color: rgb(var(--lucid-button-color-hovered));
        background-color: rgb(var(--lucid-button-background-color-hovered));
        outline-color: rgb(var(--lucid-button-outline-color-hovered));
    }

    &:active:not(:disabled) {
        color: rgb(var(--lucid-button-color-active));
        background-color: rgb(var(--lucid-button-background-color-active));
        outline-color: rgb(var(--lucid-button-outline-color-active));
    }

    &:focus-visible:not(:disabled) {
        color: rgb(var(--lucid-button-color-focused));
        background-color: rgb(var(--lucid-button-background-color-focused));
        outline-color: rgb(var(--lucid-button-outline-color-focused));
    }

    &:disabled {
        opacity: var(--lucid-button-disabled-opacity);
        cursor: var(--lucid-button-disabled-cursor);
    }

    &--selected {
        color: rgb(var(--lucid-button-color-selected)) !important;
        background-color: rgb(var(--lucid-button-background-color-selected)) !important;
        outline-color: rgb(var(--lucid-button-outline-color-selected));
    }
}
</style>
