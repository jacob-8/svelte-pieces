# clickoutside

Add to your `app.d.ts` file:

```ts title="app.d.ts"
declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    'on:clickoutside'?: (event: CustomEvent<any> & { target: EventTarget & T }) => any
  }
}
```
