import { reactive } from 'vue'
import type { variants } from '../types'

export interface Alert {
  id: string
  title: string | (() => any)
  message: string | (() => any)
  variant?: variants
  buttonLabel: string
  show: boolean
}

export const alertsStore = reactive({
    alerts: [] as Alert[],
    show(id: string) {
        const alert = this.alerts.find(a => a.id === id)
        if (alert)
            alert.show = true
    },
    close(id: string) {
        const alert = this.alerts.find(a => a.id === id)
        if (alert)
            alert.show = false
    },
    add(options: Alert) {
        this.alerts.push({ ...options, show: false })
        const added = this.alerts[this.alerts.length - 1]
        return added
    },
    destroy(id: string) {
        this.alerts = this.alerts.filter(a => a.id !== id)
    },
})
