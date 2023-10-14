<script>
  import { Story } from 'kitbook';
  import BadgeArrayEmit from './BadgeArrayEmit.svelte';
  import ReactiveSet from '../functions/ReactiveSet.svelte';

  let books = ['Lord of the Rings', 'www.books.com'];
</script>

<Story
  name="Edit array via Set component"
  knobs={{ canEdit: true, minimum: 0 }}
  let:knobs={{ canEdit, minimum }}>
  <ReactiveSet
    input={['A Tale of Four Cities', 'www.google.com']}
    let:value={editedBooks}
    let:add
    let:remove>
    <BadgeArrayEmit
      strings={editedBooks}
      {canEdit}
      {minimum}
      addMessage="Add Book"
      on:itemclicked={(e) => console.log('itemclicked', e.detail)}
      on:itemremoved={(e) => {
        remove(e.detail.value);
      }}
      on:additem={() => {
        const string = prompt('What would you like to add?');
        if (string) {
          add(string.trim());
        }
      }} />
  </ReactiveSet>
</Story>

<Story name="Edit array">
  <BadgeArrayEmit
    strings={books || []}
    canEdit={true}
    addMessage="Add Book"
    on:itemclicked={(e) => console.log('itemclicked', e.detail)}
    on:additem={(e) => {
      const string = prompt('What book would you like to avoid?');
      if (string) {
        books = [...books, string.trim()];
      }
    }}
    on:itemremoved={(e) => {
      books.splice(e.detail.index, 1);
      books = books;
    }} />
</Story>

<Story name="Handles a string">
  <BadgeArrayEmit strings={'How about this?'} addMessage="foo" on:additem={() => alert('fired')} />
</Story>

<Story name="Handles null">
  <BadgeArrayEmit strings={null} canEdit addMessage="foo" on:additem={() => alert('fired')} />
</Story>
