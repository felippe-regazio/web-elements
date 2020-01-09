# el-lightbox

Extends the "div" HTML element and provides Lightbox feature.

# Usage

If you are not using the `bundle` JS and CSS version of this collection, you may add the element .js and .css files to your document.
The files are on the `elements/el-lightbox/` folder. Of you can add all elements by adding the files on the `bundle` folder.

```html
<div id="lightbox1" is="el-lightbox" data-boxed>
  <section>
    <header>
      <span>Header Text</span>
    </header>
    <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <footer>
      <button onclick="lightbox1('hide')">Ok</button>
    </footer>
  </section>
</div>
```

# Structure

* The element must have an `id`
* The first child must be a `section` tag
* The `section` must be have, respectively, a `header`, `div`, and `footer`.

The header and footer will be fixed. The div inside the section must be the content.

# Behavior

The element `id` must be unique to your entire document and must be a valid function name. Then the element `id` will be also available on the document as a `function`. For exemple, the `lightbox1` on the example above will release the function `lightbox1()` on the document.

You must use this function to manage your lightbox state. Your lightbox function takes 1 param that has 3 arguments: `show`,`hide`,`toggle`. Those arguments will determine the state of the Lightbox.

For example: Lets assume that your have a lightbox with an id = lightbox1. So, you will have:

```javascript
lightbox1(state);
````

Where state can be `show`,`hide`,`toggle`. So, anywhere on the document you can use the function lightbox1 (or the id of your other lightboxes) to manage your lightbox state:

```javascript
// showing the lightbox1
lightbox1('show');

// closing the lightbox1
lightbox1('hide');

// toggleing the lightbox1
lightbox1('toggle');
```

# Attributes

| Attr | Description |
| --- | --- |
| data-visible | Present when the Lightbox gets visible |
| data-boxed | Gives a default size (max-height: 500px; max-width: 800px) to the lightbox content holder |

# Global Events

Global Javascript events.

| Event | Description |
| --- | --- |
| el-lightbox-show | Triggered when a lightbox is showed |
| el-lightbox-hide | Triggered when a lightbox is hidden |

The callback takes 1 argument which returns data information about the event.
You can access the element on the event callback by checking for `data.details` or `data.lightbox`.

Example:

```javascript
document.addEventListener('el-lightbox-show', e => {
	// e is contains data about the event
	// e.details or e.header contains the target element
	console.log(e.lightbox);
})
```

# Inline Events

Inline element events.

| Event | Description |
| --- | --- |
| data-on:show | Triggered when the given el-lightbox is showed |
| data-on:hide | Triggered when the given el-lightbox is hidden |

1. This events must be added on the root header element. The parameter must be a function name.
2. The function must be on the `window` scope. 
3. No code will be evaluated if used as a parameter to this events.
4. No argument will must be passed to this function, just a name reference.
5. The element will automatically passed as first (unique) parameter to your function

Example:

```html
<div id="lightbox1" is="el-lightbox" data-boxed data-on:show="myFunc">
  <section>
    <header>
      <span>Header Text</span>
    </header>
    <div>
        Example
    </div>
    <footer>
      <button onclick="lightbox1('hide')">Ok</button>
    </footer>
  </section>
</div>

<script>
	const myFunc = lightbox => {
		// do your stuff here
		console.log(lightbox);
	}
</script>
```

# Styling

This is a standard HTML element extended, so you can freely style it, apply your own classes, ids, attributes, etc. You can manage/change the Lightbox size, position, z-index and everything else by CSS. You may use the `[is="el-lightbox"]` element selector to target this element on your CSS. 