<script>
  import { Story } from 'kitbook';
  import Form from './Form.svelte';
  import Button from '../ui/Button.svelte';
</script>

<!-- prettier-ignore -->
# Form

A simple component that contains a form element and receives a function to fire on submit. If the function is asynchronous then you can use the loading slot value to display a spinner, block activity, or otherwise indicate that the form is processing.

<Story knobs={{ seconds: 1 }} let:knobs={{ seconds }}>
  <Form
    let:loading
    onsubmit={async () => {
      console.log('starting');
      await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
      console.log('finishing');
    }}>
    <input class="border border-gray-500 rounded" type="text" placeholder="Type and hit enter" />
    <Button {loading} type="submit">Submit</Button>
  </Form>
</Story>

Note that if you include a button with `type="submit"` in the form, and pass the `loading` prop it will automatically be disabled when the form is processing and the form will not allow duplicate submissions while processing. This is a web platform feature.
