<script setup lang="ts">
import { useSlots } from 'vue';
import Button from './../Button.vue';

const props = withDefaults(defineProps<{
    selected?: boolean;
    disabled?: boolean;
}>(), {
    selected: false,
    disabled: false,
});

const emits = defineEmits<{
    click: [MouseEvent];
}>();

const slots = useSlots();

</script>

<template>
    <Button
        class="dropdown-option"
        variant="ghost"
        color="secondary"
        type="button"
        :selected="props.selected"
        :disabled="props.disabled"
        role="menuitem"
        @click="emits('click', $event)"
    >
        <span 
            v-if="slots.start"
            class="dropdown-option__icon" 
            aria-hidden="true"
        >
            <slot 
                name="start"
                :selected="props.selected"
                :disabled="props.disabled"
            />
        </span>
        <div
            v-if="slots.default"
            class="dropdown-option__label"
        >
            <slot />
        </div>
        <span
            v-if="slots.end"
            class="dropdown-option__end"
            aria-hidden="true"
        >
            <slot 
                name="end" 
                :selected="props.selected"
                :disabled="props.disabled"
            />
        </span>
    </Button>
</template>

<style scoped lang="scss">
.dropdown-option {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    flex-shrink: 0;
    --lucid-button-border-radius: 0;
    --lucid-button-justify-content: flex-start;
    --lucid-button-font-weight: var(--lucid-font-weight-regular);
    --lucid-button-background-color-selected: var(--lucid-color-primary-100) !important;
    --lucid-button-height: var(--lucid-spacing-10) !important;

    &__label {
        flex-shrink: 1;
        text-align: left;
        max-width: 100%;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        pointer-events: none;
    }

    &__start {
        flex-shrink: 0;
    }

    &__end {
        flex-shrink: 0;
    }
}
</style>
