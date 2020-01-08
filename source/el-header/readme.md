# el-header

Extends the "header" HTML element and provides extra features to it. The header has position fixed with top:0 by default. 

# Usage

If you are not using the `bundle` JS and CSS version of this collection, you may add the element .js and .css files to your document.
The files are on the `elements/el-header/` folder. Of you can add all elements by adding the files on the `bundle` folder.

```html
<header is="el-header" data-on:hide="" data-on:show="ex" data-autohide>
	<span>Page Header Testing<span>
</header>
```

# Attributes

| Attr | Description |
| --- | --- |
| data-autoclose | Will hide the header on scroll down, and show on scroll up |

There are 2 helper classes:

`has-padding`: Gives 16px padding to the element inside the header. You can add this class to any header children.
`el-header--hidden`: Hides the header. THe data-autohide uses this class to manage the hidden state. This class only takes effect on header's root element.

# Global Events

Global Javascript events.

| Event | Description |
| --- | --- |
| el-header-show | Triggered always when the data-autohide is setted and the header has been showed |
| el-header-hide | Triggered always when the data-autohide is setted and the header has been hidden |

The callback takes 1 argument which returns data information about the event.
You can access the element on the event callback by checking for `data.details` or `data.header`.

Example:

```javascript
document.addEventListener('el-header-show', e => {
	// e is contains data about the event
	// e.details or e.header contains the target element
	console.log(e.header);
})
```

# Inline Events

Inline element events.

| Event | Description |
| --- | --- |
| data-on:show | Triggered always when the data-autohide is setted and the header has been showed |
| data-on:hide | Triggered always when the data-autohide is setted and the header has been hidden |

1. This events must be added on the root header element. The parameter must be a function name.
2. The function must be on the `window` scope. 
3. No code will be evaluated if used as a parameter to this events.
4. No argument will must be passed to this function, just a name reference.
5. The element will automatically passed as first (unique) parameter to your function

Example:

```html
<header is="el-header" data-on:hide="myFunc" data-on:show="myFunc" data-autohide>
	<span>Page Header Testing</span>
</header>

<script>
	const myFunc = header => {
		// do your stuff here
		console.log(header);
	}
</script>
```

# Styling

This is a standard HTML element extended, so you can freely style it, apply your own classes, ids, attributes, etc.
You may use the `[is="el-header"]` element selector to target this element on your CSS.

The header is fixed on top with left and top zero by default. The height will be automatically adjusted to the size of the content.
If use are using data-autohide, a class `el-header--hidden` will be toggled on the header to set/unset the hiddens state on scroll.

You can freely style/modify all the states, behaviors and positions of this element.