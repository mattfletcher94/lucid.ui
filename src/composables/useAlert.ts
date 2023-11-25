import type { VNode } from 'vue'
import { onUnmounted, watch } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import type { variants } from '../types'
import { alertsStore } from '../stores/alerts'

interface UseAlertOptions {
  title: string | (() => VNode)
  message?: string | (() => VNode)
  variant?: variants
  buttonLabel?: string
}

export function useAlert(options: UseAlertOptions) {
    const alert = alertsStore.add({
        id: uuidv4(),
        title: options.title,
        message: options.message ?? '',
        buttonLabel: options.buttonLabel ?? 'OK',
        variant: options.variant,
        show: false,
    })

    const show = () => {
        alertsStore.show(alert.id)
        return new Promise((resolve) => {
            const unwatch = watch(() => alert.show, (show) => {
                if (!show) {
                    unwatch()
                    resolve(undefined)
                }
            })
        })
    }

    const hide = () => {
        alertsStore.close(alert.id)
    }

    const destroy = () => {
        alertsStore.destroy(alert.id)
    }

    onUnmounted(() => {
        destroy()
    })

    return {
        show,
        hide,
        destroy,
    }
}
