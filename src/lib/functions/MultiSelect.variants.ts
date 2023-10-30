import type { Variant, Viewport } from 'kitbook'
import type Component from './MultiSelect.svelte'

export const viewports: Viewport[] = [
  { width: 800, height: 600 },
]

export const variants: Variant<Component>[] = [
  {
    props: {
      options: [
        { value: 'en', name: 'English' }, 
        { value: 'es', name: 'Spanish' },
        { value: 'fr', name: 'French' },
      ],
      selectedOptions: {
        'en': { value: 'en', name: 'English' }
      },
    },
  },
]
