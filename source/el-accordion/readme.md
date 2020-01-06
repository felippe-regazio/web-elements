# el-accordion

Provides a single accordion element which can be nested or arranged with other ones. The element is vertically stacked and can be "expanded" or "collapsed" to reveal the content associated with that item. Its content accepts HTML.

# Usage

If you are not using the `bundle` JS and CSS version of this collection, you may add the element .js and .css files to your document.
The files are on the `elements/el-accordion/` folder. Of you can add all elements by adding the files on the `bundle` folder.

The root element must be a div with `is="el-accordion"` attribute and a `data-summary` containing the Accordion title.
All the direct children of the div[is="el-accordion"] will be wrapped in a collapsible/expandable holder.

```html
<div is="el-accordion" data-summary="Id occaecat esse aliquip magna cupidatat proident excepteur amet duis qui consectetur in ut sit sed magna">
	<p>Id occaecat esse aliquip magna cupidatat proident excepteur amet duis qui consectetur in ut sit sed magna incididunt ullamco et duis aliquip officia dolore consectetur est elit.</p>
</div>
```

# Attributes

| Attr | Description |
| --- | --- |
| data-summary | The header section of your Accordion. Commonly used as a title, must be added on the root accordion element |
| data-expand | Expand the accordion when present, or collapse when not present. Apply a value to this attribute will take no effect on the element behavior. You must add or remove it in order to trigger its behavior. This Attr must be added on the root accordion element |

# Global Events

Global Javascript events.

| Event | Description |
| --- | --- |
| el-accordion-expand | Triggered always when any accordion is expanded |
| el-accordion-collapse | Triggered always when any accordion is collapsed |

The callback takes 1 argument which returns data information about the event.
You can access the element on the event callback by checking for `data.details` or `data.accordion`.

Example:

```javascript
document.addEventListener('el-accordion-expand', e => {
	// e is contains data about the event
	// e.details or e.accordion contains the target element
	console.log(e.accordion);
})
```

# Inline Events

Inline element events.

| Event | Description |
| --- | --- |
| data-on:expand | Triggered always when any accordion is expanded |
| data-on:collapse | Triggered always when any accordion is collapsed |

1. This events must be added on the root accordion element. The parameter must be a function name.
2. The function must be on the `window` scope. 
3. No code will be evaluated if used as a parameter to this events.
4. No argument will must be passed to this function, just a name reference.
5. The element will automatically passed as first (unique) parameter to your function

Example:

```html
<div is="el-accordion" data-summary="Accordion Test" data-on:open="myFunc">
	<p>Id occaecat esse aliquip magna cupidatat proident excepteur amet duis qui consectetur in ut sit sed magna incididunt ullamco et duis aliquip officia dolore consectetur est elit.</p>
</div>

<script>
	const myFunc = accordion => {
		// do your stuff here
		console.log(accordion);
	}
</script>
```

# Styling

This is a standard HTML extended, so you can freely style it, apply your own classes, ids, attributes, etc.
You may use the `[is="el-accordion"]` element selector to target this element on your CSS.