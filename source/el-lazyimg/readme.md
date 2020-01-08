# el-lazyimg

Extends the "img" HTML element and provides a "lazy" feature. The image will be in a smaller (with blur or not) version till be into the viewport, then the proper size will be loaded. So, only the images visualized by the user will be really loaded by the browser. This element uses "intersectionObserver" if supported, and fall backs to a "Scroll Strategy" if not.

# Usage

If you are not using the `bundle` JS and CSS version of this collection, you may add the element .js and .css files to your document.
The files are on the `elements/el-lazyimg/` folder. Of you can add all elements by adding the files on the `bundle` folder.

```html
<img is="el-lazyimg" src="http://picsum.photos/id/180/300" data-src="http://picsum.photos/id/180/2000" data-blur/>
```

# Attributes

| Attr | Description |
| --- | --- |
| data-src | Must contain the `src` or `srcset` of a bigger version of the image, or the image that do you want to be loaded when in viewport |
| data-blur | Blur the current image while loading the proper one |
| data-loading | Automatic and dynamic attribute that keeps present only while loading the image |
| data-loaded | Automatic and dynamic attribute that is added when an image is loaded from data-src |

The image tag src must be a lighter version of the image in question. The `data-src` must be the ideal image to be loaded when the element get viewed by the user. If the image gets visible on the viewport, the `data-src` will be placed as `src`.

# Global Events

Global Javascript events.

| Event | Description |
| --- | --- |
| el-lazyimg-loaded | Triggered when the image is loaded to the lazy holder (img) |

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
| data-on:loaded | Triggered when the image is loaded to the lazy holder (img) |

1. This events must be added on the root header element. The parameter must be a function name.
2. The function must be on the `window` scope. 
3. No code will be evaluated if used as a parameter to this events.
4. No argument will must be passed to this function, just a name reference.
5. The element will automatically passed as first (unique) parameter to your function

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
You may use the `[is="el-lazyimg"]` element selector to target this element on your CSS.