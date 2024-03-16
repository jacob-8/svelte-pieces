# Persisted Store

Useful for user settings that don't need saved in a database, but just in `localStorage`. First argument is the key, second is the value, and add an optional true third argument to sync across tabs.

`const showSomething = createPersistedStore<boolean>('myCustomKeyName', true, true);`

The type definition will be automatically inferred from the value passed in, though you can explicitly type it as seen in the example here to enforce a desired type.

Tab syncing can be seen if you open this page in two tabs and toggle the value (you can observe the two iframes in sync below, but tab persistence is what you're really after).
