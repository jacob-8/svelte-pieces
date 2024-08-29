import type { Variant } from 'kitbook'
import type Component from './BottomSheet.svelte'

const shared = {
  startType: 'pixels',
  start: 400,
} satisfies Partial<Variant<Component>>

export const First: Variant<Component> = {
  ...shared,
}
