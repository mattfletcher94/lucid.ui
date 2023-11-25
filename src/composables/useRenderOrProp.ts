import type { VNode } from 'vue'

interface Return {
  component: (() => VNode) | (() => string)
  type: 'render' | 'prop'
}

export function useRenderOrProp<
  T extends string | (() => VNode),
>(value: T | (() => VNode)): Return {
    return {
        component: typeof value === 'function' ? value : () => value,
        type: typeof value === 'function' ? 'render' : 'prop',
    }
}
