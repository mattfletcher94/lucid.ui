<script setup lang="ts">
import { computed } from 'vue'
import { alertsStore } from '../../stores/alerts'
import Alert from './Alert.vue'

const props = withDefaults(defineProps<{
    teleport?: string | HTMLElement
}>(), {
    teleport: 'body',
})

const alerts = computed(() => alertsStore.alerts.filter(alert => alert.show))
</script>

<template>
  <slot />
  <Teleport :to="props.teleport">
    <TransitionGroup
      name="alert-provider"
      tag="div"
      class="alert-provider"
    >
      <Alert
        v-for="(alert, index) in alerts"
        :id="alert.id"
        :key="index"
        :title="alert.title"
        :message="alert.message"
        :button-label="alert.buttonLabel"
        :variant="alert.variant"
      />
    </TransitionGroup>
  </Teleport>
</template>

<style>
.alert-provider {
  position: fixed;
  top: 0;
  left: 0;
  width: 0px;
  height: 0px;
  z-index: 9999;
  --alert-provider-transition-duration: 500ms;
}

.alert-provider-enter-active {
    transition: opacity var(--alert-provider-transition-duration) cubic-bezier(0.1,0.9,0.2,1);
}

.alert-provider-leave-active {
    transition: opacity var(--alert-provider-transition-duration) cubic-bezier(0.1,0.9,0.2,1);
}

.alert-provider-enter-from,
.alert-provider-leave-to {
  opacity: 0;
}

.alert-provider-enter-active .alert-card {
  transition: transform var(--alert-provider-transition-duration) cubic-bezier(0.1,0.9,0.2,1);
}

.alert-provider-leave-active .alert-card {
    transition: transform var(--alert-provider-transition-duration) cubic-bezier(0.1,0.9,0.2,1);
}


.alert-provider-enter-from .alert-card {
  transform: translateY(-6px)
}

.alert-provider-leave-to .alert-card {
  transform: translateY(-6px);
}
</style>
