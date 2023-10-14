# svelte-pieces

## 2.0.0-next.1

### Major Changes

- Svelte 4 support turned on and being tested.
- [breaking]  `<IntersectionObserverShared>` and `<IntersectionObserver>` now automatically observe the first child element's visibility to avoid annoying DOM flow challenges present with adding an observed element (e.g. inside tables).

## 1.0.62

- - improve `Avatar.svelte` to show initials when user image doesn't load

## 1.0.61

- fix: export `DataList.svelte` from `index.ts`

## 1.0.60

- - [breaking] `captions.ts` functions, `Youtube.svelte`, and `YoutubeCaptions.svelte` must be imported using specific paths now to avoid `he` and `fast-xml-parser` needlessly being optimized by Vite in every situation using `svelte-pieces`.
  - fix: types for deep imports restored (broken in 1.0.58 by update to svelte-package 2.0.0)

## 1.0.59

- update to using `noScroll` instead of SvelteKit deprecated `noscroll` in `queryParam.ts`

## 1.0.58

- update to using svelte-package 2.0.0

## 1.0.56

- - portal `<Slideover>` to `body` element the same as `<Modal>` to allow for easier use in deeply nested elements that may have z-index complications.
  - [breaking] add `showExternalIcon` prop to `<Button>` to allow for more control over when that icon shows (used to always show when `target="_blank"`). 

## 1.0.55

- - [breaking] remove buffer pixels option for `<SplitPane>` as it overrode `min` setting making that redundant and unusable. Instead of passing `--divider-hover: color` css variable as a style directive, now we set it through a prop that has a default.

## 1.0.54

- - Add `noElement` slot to `<IntersectionObserverShared>` to allow for use without breaking up document flow.

## 1.0.52

- - Add `modified` event to `<ReactiveSet>`

## 1.0.51

- - Add `<DataList>` component to allow for usage of a restricted DataList that can exclude addition of custom write-ins

## 1.0.49

- - allow BottomSheet start value to be a set pixel amount if startType="pixels"
  - breaking: require `width` and `height` in `<IntersectionObserver>` to be set specifically and don't default to 100%.

## 1.0.48

- - `<DetectUrl>` does not include sentence punctuation found at the end of a URL to avoid capturing broken links
- 
## 1.0.47

- - `<DetectUrl>` correctly handles URL's found in the middle of strings

## 1.0.46

- - Update Button external links to include `noopener noreferrer`

## 1.0.44

- - Switch to using UnoCSS compiled styles for building components.

## 1.0.43

- - Update `<BottomSheet>` to not auto-calculate max-height from content. If content is loading in while the sheet opens, it will be very janky on mobile.

## 1.0.42

- - Stores created with `createdPersistedStore` now remove window storage event listener (as they should) when last subscriber unsubscribes.

## 1.0.41

- - Fix missing `portalTarget` prop in `Header`'s `Menu` component

## 1.0.40

- - Add `QrCode` component

## 1.0.38

- - Update to handle SvelteKit's file/folder naming breaking changes

## 1.0.37

- - `createQueryParamStore` and `<QueryParam>` now use history.replaceState instead of SvelteKit `goto` method when `replaceState: true` so that setting query params from input field update will not break focus on every keystroke

## 1.0.36

- - Rename `<Set>` to `<ReactiveSet>` because of odd Svelte package error that doesn't emit types for a component named "Set"

## 1.0.31

- - Added `<BottomSheet>` component

## 1.0.24

- - Added `<Slideover>` and `<ResponsiveSlideover>` components

## 1.0.23

- - Added `createPersistedStore`, `createQueryParamStore`, and `<QueryParam>` component

## 1.0.21

- - Removed header cell styling from `ResponsiveTable.svelte` and added `stickyHeading` and `stickyColumn` options.

## 1.0.13

### Hotfix
- - Downgrade SvelteKit to @sveltejs/kit@1.0.0-next.314 to avoid problem described in https://github.com/sveltejs/kit/issues/4764

## 1.0.12

### Patch Changes

- - Add changesets
  - Update SvelteKit package
  - [Breaking] Note: if you previously used `<Button form="primary"...` that attribute was changed to `<Button form="filled"` several versions back before changesets were in use (yes, semver isn't supposed to have breaking changes, but switch to 1.0.0 too soon).
