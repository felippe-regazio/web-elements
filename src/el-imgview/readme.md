# el-imgview

Extends the "IMG" HTML element and provides a "see in a box" feature if the user clicks on the image.

# Usage

```html
<img is="el-imgview" src="http://picsum.photos/id/180/300" data-view="http://picsum.photos/id/180/5000"/>
```

# Attributes

| Attr | Description |
| --- | --- |
| data-view | Must contain the `src` or `srcset` of a bigger version of the image, or the image that do you want to show on the box |
| data-view-loading-text | The text to be showed when loading the zoomed image, default is `...`|


The `data-view` generally must contain the same images  of the image src, but in a bigger version.
This attribute will be the reference to the zoom-box show the image on a lightbox.

# Global Events

Global Javascript events.

| Event | Description |
| --- | --- |
| el-imgview-show | Triggered when the zoom box is showed |
| el-imgview-close | Triggered when the zoom box is closed |

The callback takes 1 argument which returns data information about the event.
You can access the element on the event callback by checking for `data.details` or `data.imgview`.

Example:

```javascript
document.addEventListener('el-imgview-show', e => {
	// e is contains data about the event
	// e.details or e.header contains the target element
	console.log(e.imgview);
})
```

# Inline Events

Inline element events.

| Event | Description |
| --- | --- |
| data-on:show | Triggered when the zoom box is showed |
| data-on:hide | Triggered when the zoom box is closed |

1. This events must be added on the root accordion element. The parameter must be a function name.
2. The function must be on the `window` scope.
3. No code will be evaluated if used as a parameter to this events.
4. No argument must be passed to this function, just a name reference.
5. The element will be automatically passed as first (unique) parameter to your callback

Example:

```html
<img is="el-imgview" src="http://picsum.photos/id/180/300" data-view="http://picsum.photos/id/180/5000" data-on:show="myFunc"/>

<script>
	const myFunc = imgview => {
		// do your stuff here
		console.log(imgview);
	}
</script>
```

# Styling

This is a standard HTML element extended, so you can freely style it, apply your own classes, ids, attributes, etc.
You may use the `[is="el-imgview"]` element selector to target this element on your CSS and JS.