import type { Variant, VariantMeta } from 'kitbook'
import type Component from './Avatar.svelte'

export const shared_meta: VariantMeta = {
  viewports: [
    { width: 100, height: 100 },
  ],
}

const shared = {} satisfies Partial<Variant<Component>>

export const Image: Variant<Component> = {
  ...shared,
  user: {
    displayName: 'John Smith',
    email: 'b@gc.com',
    photoURL: 'https://lh5.googleusercontent.com/-qCXZXfIkRQ8/AAAAAAAAAAI/AAAAAAAAACc/wAdH8yns3QQ/photo.jpg',
  },
}

export const Broken_Image: Variant<Component> = {
  ...shared,
  user: {
    displayName: 'John Smith',
    email: 'b@gc.com',
    photoURL: 'https://broken-link.broken.jpg',
  },
}

export const Full_Name: Variant<Component> = {
  ...shared,
  user: {
    displayName: 'John Smith',
    email: 'b@gc.com',
  },
}

export const Single_Name: Variant<Component> = {
  ...shared,
  user: {
    displayName: 'John',
    email: 'b@gc.com',
  },
}

export const No_Display_Name_Use_Email: Variant<Component> = {
  ...shared,
  user: {
    email: 'b@gc.com',
  },
}
