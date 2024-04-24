A simple component that contains a form element and receives a function to fire on submit. If the function is asynchronous then you can use the loading slot value to display a spinner, block activity, or otherwise indicate that the form is processing.

Note that if you include a button with `type="submit"` in the form, and pass the `loading` prop it will automatically be disabled when the form is processing and the form will not allow duplicate submissions while processing. This is a web platform feature.
