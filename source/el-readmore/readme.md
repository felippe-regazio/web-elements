# el-readmore

This element provides a HTML DIV with a `Read More` feature.

# Usage

You must add the project's `bundle` JS and CSS from the bundle directory - this will enable all elements.  
Or you can add the JS and CSS files of the given element only, located at `elements/element-name`.

```html
<div is="el-readmore">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <ins>
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ins>
  </p>
</div>
```

You must wrap the text that want to be expandable/collapsable  inside a \<ins> tag on the `el-readmore`. The text inside the `ins` tag will be expanded or collapsed by the element. You can have more then one `ins` element inside the `el-readmore`. A "..." string is placed at the end of the collapsed text. 

In the example above the text "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" will be visible and the text wrapped by the `ins` will expand or collapse in according to the `el-readmore` state.

# Attributes

| Attr | Description |
| --- | --- |
| data-expanded | Expand the read more text when present, or collapse the text when not present |
| data-label | Used to change the toggle Button label. The value must be a string containing the open and closed state labels divided by a pipe. Example "open\|close" |

# Inline Events

Inline element events.

| Event | Description |
| --- | --- |
| data-on:toggle | Triggered when element content is toggled |
| data-on:expand | Triggered when the element content is expanded |
| data-on:collapse | Triggered when the element content is collapsed |

1. This events must be added on the root accordion element. The parameter must be a function name.
2. The function must be on the `window` scope. 
3. No code will be evaluated if used as a parameter to this events.
4. No argument must be passed to this function, just a name reference.
5. The element will be automatically passed as first (unique) parameter to your callback

Example:

```html
<div is="el-readmore" data-on:expand="myFunc">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <ins>
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ins>
  </p>
</div>

<script>
	const myFunc = readmore => {
		// do your stuff here
		console.log(readmore);
	}
</script>
```

# Styling

This is a standard HTML element extended, so you can freely style it, apply your own classes, ids, attributes, etc.
You may use the `[is="el-readmore"]` element selector to target this element on your CSS and JS.