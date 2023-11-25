<script setup lang="ts">
import type { VNode } from 'vue'
import { ref } from 'vue'
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'
import { useRenderOrProp } from '../../composables/useRenderOrProp'
import Button from '../Button.vue'
import type { variants } from '../../types'
import { alertsStore } from '../../stores/alerts'

const props = withDefaults(defineProps<{
    id: string
    title: string | (() => VNode)
    message: string | (() => VNode)
    buttonLabel: string | (() => VNode)
    variant: variants
}>(), {
    id: 'alert',
    title: 'Alert Title',
    message: 'Alert Message',
    buttonLabel: 'Okay',
    variant: 'primary',
})

const target = ref()

const { component: titleComponent } = useRenderOrProp(props.title)
const { component: messageComponent } = useRenderOrProp(props.message)
const { component: labelComponent } = useRenderOrProp(props.buttonLabel)

useFocusTrap(target, { immediate: true })

const hide = () => {
    alertsStore.close(props.id)
}
</script>

<template>
  <div
    ref="target"
    class="alert"
    role="alertdialog"
    :aria-labelledby="`alert-title-${props.id}`"
    :aria-describedby="props.message ? `alert-message-${props.id}` : undefined"
    tabindex="0"
    @keydown.esc="hide"
  >
    <button
      type="button"
      title="Close alert"
      aria-hidden="true"
      aria-label="Close alert"
      class="alert-backdrop"
      tabindex="-1"
      @click="hide"
    />
    <div
      ref="target"
      class="alert-card"
    >
      <h2
        :id="`alert-title-${props.id}`"
        class="alert-card__title"
      >
        <titleComponent />
      </h2>
      <div
        v-if="props.message"
        :id="`alert-message-${props.id}`"
        class="alert-card__message"
      >
        <messageComponent />
      </div>
      <div
        class="alert-card__button-wrapper"
      >
        <Button
          class="alert-card__button"
          aria-label="Close alert"
          title="Close alert"
          color="secondary"
          variant="tonal"
          size="md"
          @click="hide"
        >
          Cancel
        </Button>
        <Button
          class="alert-card__button"
          aria-label="Close alert"
          title="Close alert"
          color="primary"
          variant="solid"
          size="md"
          @click="hide"
        >
          <labelComponent />
        </Button>
      </div>
    </div>
  </div>
</template>

<style>
.alert {
  display: flex;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: var(--lucid-spacing-6);
  justify-content: center;
  align-items: start;
  height: 100%;
  width: 100%;
  z-index: 999;
}

.alert .alert-backdrop {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(var(--lucid-color-gray-700), 0.75);
  cursor: default;
}

.alert-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: var(--lucid-spacing-1);
  width: 100%;
  max-width: 380px;
  padding: var(--lucid-spacing-6) var(--lucid-spacing-6);
  background-color: rgb(var(--lucid-color-white));
  border-radius: var(--lucid-rounded-md);
  -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.alert-card__title {
    display: block;
    width: 100%;
    text-align: left;
    color: rgb(var(--lucid-color-black));
    font-weight: var(--lucid-font-weight-semibold);
    font-size: var(--lucid-font-size-lg);
    line-height: var(--lucid-line-height-normal);
}

.alert-card__message {
  display: block;
  width: 100%;
  text-align: left;
  color: rgb(var(--lucid-color-gray-600));
  font-size: var(--lucid-font-size-sm);
  line-height: var(--lucid-line-height-normal);
  font-weight: var(--lucid-font-weight-regular);
}

.alert-card__button-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: var(--lucid-spacing-3);
  width: 100%;
  margin-top: var(--lucid-spacing-5);
}
</style>
