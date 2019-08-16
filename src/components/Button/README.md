# Button API

Use Camunda's button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and colors.

## Examples

```js
/* No styling */
<Button type="button" onClick={handleClick}>Send</Button>

/* Primary button */
<Button type="button" className="button-primary" onClick={handleClick}>Send</Button>

/* Secondary button */
<Button type="button" className="button-secondary" onClick={handleClick}>Send</Button>

/* Icon button */
<Button type="button" className="button-icon" onClick={handleClick}>
  <svg></svg>
</Button>

/* Custom button */
<Button type="button" className="button-secondary is-outlined">Send</Button>
```

## Props

| Name        | Type    | Description  |
|:----------- |:------- |:------------ |
| children *    | `Node`    | The HTML content which should be displayed inside the button. |
| className   | `String`  | Additional classes to be applied on the button. These can be used for further styling. |