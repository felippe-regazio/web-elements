# el-lazyimg

Extends the "IMG" HTML element and provides a "lazy" feature. The image will be in a smaller (with blur or not) version till appear into the viewport, only then the large size will be loaded. This element uses the "intersectionObserver" if supported, and fall backs to a "Scroll Strategy" if not.

# Usage

Add the `elements.js` and `elements.css` bundle files from the project root on your document - this will enable all elements. Or you can load the JS and CSS files for a single element from the `elements` directory.

```html
<img is="el-lazyimg" src="http://picsum.photos/id/180/300" data-src="http://picsum.photos/id/180/2000" data-blur/>
```

# Attributes

| Attr | Description |
| --- | --- |
| data-src | Must contain the `src` or `srcset` of a bigger version of the image, or the image that do you want to be loaded when in viewport |
| data-blur | Blur the current image while loading the larger one |
| data-loading | Automatic attribute that keeps present only while loading the image |
| data-loaded | Automatic attribute that is added when an image is loaded from data-src |

The image `src` must be a lighter version of the image that you want to lazy load. The `data-src` must contain the large image to be loaded when the element gets visible on the viewport. If the image gets visible on the viewport, the `data-src` will be placed as `src`.

# Global Events

Global Javascript events.

| Event | Description |
| --- | --- |
| el-lazyimg-loaded | Triggered when the large image is loaded on the element (img) |

The callback takes 1 argument which returns data information about the event.
You can access the element on the event callback by checking for `data.details` or `data.lazyimg`.

Example:

```javascript
document.addEventListener('el-lazyimg-loaded', e => {
	// e is contains data about the event
	// e.details or e.header contains the target element
	console.log(e.lazyimg);
})
```

# Inline Events

Inline element events.

| Event | Description |
| --- | --- |
| data-on:loaded | Triggered when the image is loaded on the element (img) |

1. This events must be added on the root accordion element. The parameter must be a function name.
2. The function must be on the `window` scope.
3. No code will be evaluated if used as a parameter to this events.
4. No argument must be passed to this function, just a name reference.
5. The element will be automatically passed as first (unique) parameter to your callback

Example:

```html
<img is="el-lazyimg" src="http://picsum.photos/id/180/300" data-src="http://picsum.photos/id/180/2000" data-blur data-on:loaded="myFunc"/>

<script>
	const myFunc = lazyimg => {
		// do your stuff here
		console.log(lazyimg);
	}
</script>
```

# Styling

This is a standard HTML element extended, so you can freely style it, apply your own classes, ids, attributes, etc.
You may use the `[is="el-lazyimg"]` element selector to target this element on your CSS and JS.