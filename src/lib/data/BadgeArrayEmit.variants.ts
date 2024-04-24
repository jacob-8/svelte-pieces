import type { Variant, VariantMeta } from 'kitbook'
import type Component from './BadgeArrayEmit.svelte'

export const shared_meta: VariantMeta = {
  viewports: [
    { width: 500, height: 200 },
  ],
}

const shared = {
  canEdit: true,
} satisfies Partial<Variant<Component>>

export const Handles_strings: Variant<Component> = {
  ...shared,
  strings: 'How about this?' as any as string[],
}
export const Handles_null: Variant<Component> = {
  ...shared,
  strings: null,
}
