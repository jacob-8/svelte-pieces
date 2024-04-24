import type { Variant, VariantMeta } from 'kitbook'
import type Component from './BadgeArray.svelte'

export const shared_meta: VariantMeta = {
  viewports: [
    { width: 500, height: 200 },
  ],
}

const shared = {
  strings: ['Lord of the Rings', 'www.books.com'],
  promptMessage: 'What is the book name?',
  addMessage: 'Add Book',
} satisfies Partial<Variant<Component>>

export const Basic: Variant<Component> = {
  ...shared,
}

export const Editable: Variant<Component> = {
  ...shared,
  canEdit: true,
}

export const Handles_strings: Variant<Component> = {
  ...shared,
  strings: 'How about this?' as any as string[],
  addMessage: 'Add Something',
  promptMessage: 'Let\'s see how this works... Add something',
}
