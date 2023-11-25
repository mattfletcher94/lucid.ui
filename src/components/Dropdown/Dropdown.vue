<script lang="ts" setup>
import { ref, nextTick, onBeforeUnmount, computed } from 'vue';
import { createPopper, Instance as PopperInstance, Placement, detectOverflow } from '@popperjs/core';
import { createFocusTrap, FocusTrap as FocusTrapInstance } from 'focus-trap';
import { onClickOutside } from '@vueuse/core'

const props = withDefaults(defineProps<{
    dropdownWidth?: 'auto' | 'cover' | string;
    dropdownHeight?: 'auto' | string;
    dropdownPlacement?:  Placement;
    dropdownOffset?: string;
    closeOnSelect?: boolean;
}>(), {
    dropdownWidth: 'auto',
    dropdownHeight: 'auto',
    dropdownPlacement: 'bottom-start',
    dropdownOffset: '4',
    closeOnSelect: true,
});

const isOpen = ref(false);
const isTransitioning = ref(false);

const instancePopper = ref<PopperInstance>();
const instanceFocusTrap = ref<FocusTrapInstance>();

const templateRefDropdown = ref<HTMLDivElement>();
const templateRefPopper = ref<HTMLSpanElement>();
const templateRefPopperCard = ref<HTMLDivElement>();
const templateRefPopperCardOptions = ref<HTMLDivElement>();

const dropdownWidthCalculated = computed(() => {
    if (props.dropdownWidth === 'auto') {
        return 'auto';
    }
    if (props.dropdownWidth === 'cover') {
        return `${templateRefDropdown.value?.offsetWidth}px`;
    }
    return props.dropdownWidth;
});

const open = async () => {
    isOpen.value = true;

    // Destroy old instances
    instancePopper.value?.destroy();
    instanceFocusTrap.value?.deactivate();

    await nextTick();

    // Create new instances
    instancePopper.value = createPopperInstance();
    instanceFocusTrap.value = createFocusTrapInstance();
};

const close = () => {
    instanceFocusTrap.value?.deactivate();
    isOpen.value = false;
};

const toggle = () => {
    if (isOpen.value) {
        close();
    } else {
        open();
    }
};

const createPopperInstance = () => {
    const trigger = templateRefDropdown.value?.querySelector(':first-child');
    if (!templateRefPopper.value || !trigger) return;
    return createPopper(trigger, templateRefPopper.value, {
        placement: props.dropdownPlacement,
        strategy: 'fixed',
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, Number(props.dropdownOffset)],
                    padding: 0,
                },
            },
            {
                name: 'flip',
                enabled: false,
            },
            {
                name: 'maxSize',
                enabled: true,
                phase: 'main',
                // Prevent the dropdown from expanding outside of the viewport
                // by adding a max height to the dropdown
                fn({ state }: { state: any }) {
                    const { placement } = state;
                    const { top, bottom } = detectOverflow(state);
                    const isBelow = placement.startsWith('bottom');
                    const height = isBelow ?
                        `calc(100vh - ${Math.abs(top)}px - 16px)`
                        : `calc(100vh - ${Math.abs(bottom)}px - 16px)`;
                    state.styles.popper.height = height;
                    return state;

                }
            },
        ],
    });
};

const createFocusTrapInstance = () => {
    if (!templateRefPopper.value || !templateRefPopperCardOptions.value || !templateRefPopperCardOptions.value) return;

    const initialFocus = templateRefPopperCardOptions.value.querySelector('.dropdown-option--selected') 
        || templateRefPopperCardOptions.value as HTMLElement;

    const focusTrap = createFocusTrap(templateRefPopper.value, {
        initialFocus: () => initialFocus,
        fallbackFocus: templateRefPopperCardOptions.value,
        onDeactivate: close,
        isKeyForward: (e) => {
            if (!e.shiftKey && e.key === 'Tab') {
                return true;
            }
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                return true;
            }
            return false;
        },
        isKeyBackward: (e) => {
            if (e.shiftKey && e.key === 'Tab') {
                return true;
            }
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                return true;
            }
            return false;
        },
        escapeDeactivates: true,
        clickOutsideDeactivates: false,
        allowOutsideClick: true,
    });
    focusTrap.activate();
    return focusTrap;
};

const handleClickOptions = (e: MouseEvent) => {
    if (!props.closeOnSelect) return;
    const target = e.target as HTMLElement;
    if (target.closest('.dropdown-option')) {
        setTimeout(() => {
            close();
        }, 100);
    }
};

onClickOutside(templateRefPopper, (event) => {
    if (!templateRefDropdown.value?.contains(event.target as Node)) {
        isOpen.value && close();
    }
});

onBeforeUnmount(() => {
    instancePopper.value?.destroy();
    instanceFocusTrap.value?.deactivate();
});

defineExpose({
    open,
    close,
    toggle,
});
</script>

<template>
    <div
        ref="templateRefDropdown"
        class="dropdown"
    >
        <slot 
            name="trigger" 
            :open="open"
            :close="close"
            :toggle="toggle"
            :is-open="isOpen"
        />
        <Teleport to="body">
            <Transition
                name="dropdown__popper"
                :duration="300"
                @enter="isTransitioning = true"
                @after-enter="isTransitioning = false"
                @leave="isTransitioning = true"
                @after-leave="isTransitioning = false"
            >
                <span
                    v-if="isOpen"
                    ref="templateRefPopper"
                    class="dropdown__popper"
                >
                    <div
                        ref="templateRefPopperCard"
                        class="dropdown__popper__card"
                    >
                        <div 
                            ref="templateRefPopperCardOptions"
                            tabindex="-1"
                            class="dropdown__popper__card__options"
                            :style="{ 
                                'width': dropdownWidthCalculated,
                                'height': 'auto',
                                'overflow-y': isTransitioning ? 'hidden' : 'auto',
                                'overflow-x': 'hidden',
                            }"
                            role="menu"
                            @click="handleClickOptions"
                        >
                            <slot name="options" />
                        </div>
                    </div>
                </span>
            </Transition>
        </Teleport>
    </div>
</template>

<style lang="scss">
.dropdown {
    position: relative;
    display: inline-flex;

    &__popper {
        pointer-events: none;
        z-index: var(--lucid-dropdown-z-index);

        &__card {
            display: grid;
            overflow: hidden;
            opacity: 1;
            grid-template-rows: 1fr;
            background-color: rgba(255, 255, 255, 1);
            box-shadow: 0 0 0 1px rgba(0,0,0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); 
            border-radius: var(--lucid-rounded-md);
            max-height: 100%;
            pointer-events: initial;

            &__options {
                display: flex;
                flex-direction: column;
                outline: none;

                .dropdown-option {

                    &:first-child {
                        margin-top: var(--lucid-spacing-2);
                    }

                    &:last-child {
                        margin-bottom: var(--lucid-spacing-2);
                    }
                }
            }
        }
    }

}


.dropdown__popper-enter-active .dropdown__popper__card {
    transition: all 240ms
}

.dropdown__popper-leave-active .dropdown__popper__card {
    transition: all 240ms
}

.dropdown__popper-enter-from .dropdown__popper__card {
    grid-template-rows: 0.75fr;
    opacity: 0;
}

.dropdown__popper-leave-to .dropdown__popper__card {
    grid-template-rows: 0.75fr;
    opacity: 0;
}
</style>
