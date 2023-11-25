import type { VNode } from 'vue'
import { defineComponent } from 'vue'

export function usePropOrSlot<T>(propValue: T | undefined, slotContent: VNode[] | undefined) {
    return defineComponent({
        setup() {
            return (slotContent ?? propValue)
        },
    })
}
