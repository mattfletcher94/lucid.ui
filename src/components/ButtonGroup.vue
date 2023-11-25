<script lang="ts" setup>
const props = withDefaults(defineProps<{
    label?: string,
    direction?: 'horizontal' | 'vertical',
    gap?: 'none' | 'sm' | 'md' | 'lg'
}>(), {
    label: 'Button group',
    gap: 'none',
    direction: 'horizontal',
} as const)
</script>

<template>
  <div 
    class="lucid-button-group"
    :class="{
      'lucid-button-group--gap-none': props.gap === 'none',
      'lucid-button-group--gap-sm': props.gap === 'sm',
      'lucid-button-group--gap-md': props.gap === 'md',
      'lucid-button-group--gap-lg': props.gap === 'lg',
      'lucid-button-group--direction-horizontal': props.direction === 'horizontal',
      'lucid-button-group--direction-vertical': props.direction === 'vertical',
    }"
    role="group" 
    :aria-label="props.label" 
  >
    <slot />
  </div>
</template>

<style>
:root {
    --lucid-button-group-position: relative;
    --lucid-button-group-display: inline-flex;
    --lucid-button-group-flex-direction: row;
    --lucid-button-group-flex-align: center;
    --lucid-button-group-gap-none: 1px;
    --lucid-button-group-gap-sm: var(--lucid-spacing-1);
    --lucid-button-group-gap-md: var(--lucid-spacing-2);
    --lucid-button-group-gap-lg: var(--lucid-spacing-3);
    --lucid-button-group-gap: var(--lucid-button-group-gap-none);
    --lucid-button-group-width: auto;
}
</style>

<style lang="scss">
.lucid-button-group {

    &--gap-none {
        --lucid-button-group-gap: var(--lucid-button-group-gap-none);
    }

    &--gap-sm {
        --lucid-button-group-gap: var(--lucid-button-group-gap-sm);
    }

    &--gap-md {
        --lucid-button-group-gap: var(--lucid-button-group-gap-md);
    }

    &--gap-lg {
        --lucid-button-group-gap: var(--lucid-button-group-gap-lg);
    }

    &--direction-horizontal {
        --lucid-button-group-flex-direction: row;
        --lucid-button-group-width: auto;
    }

    &--direction-vertical {
        --lucid-button-group-flex-direction: column;
        --lucid-button-group-width: 100%;
    }

    position: var(--lucid-button-group-position);
    display: var(--lucid-button-group-display);
    flex-direction: var(--lucid-button-group-flex-direction);
    align-items: var(--lucid-button-group-flex-align);
    gap: var(--lucid-button-group-gap);
    border-radius: var(--lucid-rounded-md);
    overflow: hidden;

    &--direction-vertical {
        > * {
            width: var(--lucid-button-group-width) !important;
        }
    }

    .lucid-button {
        border-radius: 0 !important;
    }

    // Remove border from buttons between first and last
    /*button:not(:first-child):not(:last-child) {
        border-radius: 0;
    }*/

    // Remove border right radius from first button
    /*button:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    // Remove border left radius from last button
    button:last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }*/
}
</style>