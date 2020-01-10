# el-sidebar

Extends the "DIV" HTML element adding a `Sidebar` structure and behavior.

# Usage

You must add the project's `bundle` JS and CSS from the bundle directory - this will enable all elements.  
Or you can add the JS and CSS files of the given element only, located at `elements/element-name`.

```html
<div is="el-sidebar" id="sidebar1" data-right>
  <section>
    <header>
      <span>Header Text</span>
    </header>
    <div class="has-padding">
      <span>Sidebar Items</span>
    </div>
    <footer>
      <span>Footer Text</span>
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

The element `id` must be unique to your entire document and must be a valid function name. Then the element `id` will be also available on the document as a `function`. For exemple, the `sidebar1` on the example above will release the function `sidebar1()` on the document.

You must use this function to manage your sidebar state. Your sidebar function takes 1 param that has 3 arguments: `open`,`close`,`toggle`. Those arguments will determine the state of the sidebar.

For example: Lets assume that your have a sidebar with an id = sidebar1. So, you will have:

```javascript
sidebar1(state);
````

Where state can be `open`,`close`,`toggle`. So, anywhere on the document you can use the function sidebar1 (or the id of your other sidebars) to manage your sidebar state:

```javascript
// opening the sidebar1
sidebar1('open');

// closing the sidebar1
sidebar1('close');

// toggleing the sidebar1
sidebar1('toggle');
```

# Attributes

| Attr | Description |
| --- | --- |
| data-visible | Present when the sidebar gets visible |
| data-right | Place the sidebar on the right side of the viewport |

# Global Events

Global Javascript events.

| Event | Description |
| --- | --- |
| el-sidebar-open | Triggered when a sidebar is opened |
| el-sidebar-close | Triggered when a sidebar is closed |

The callback takes 1 argument which returns data information about the event.
You can access the element on the event callback by checking for `data.details` or `data.sidebar`.

Example:

```javascript
document.addEventListener('el-sidebar-open', e => {
  // e is contains data about the event
  // e.details or e.sidebar contains the target element
  console.log(e.sidebar);
})
```

# Inline Events

Inline element events.

| Event | Description |
| --- | --- |
| data-on:open | Triggered when the given el-sidebar is opened |
| data-on:close | Triggered when the given el-sidebar is closed |

1. This events must be added on the root accordion element. The parameter must be a function name.
2. The function must be on the `window` scope. 
3. No code will be evaluated if used as a parameter to this events.
4. No argument must be passed to this function, just a name reference.
5. The element will be automatically passed as first (unique) parameter to your callback

Example:

```html
<div id="sidebar1" is="el-sidebar" data-on:open="myFunc">
  <section>
    <header>
      <span>Header Text</span>
    </header>
    <div>
        Example
    </div>
    <footer>
      <button onclick="sidebar1('close')">Ok</button>
    </footer>
  </section>
</div>

<script>
  const myFunc = sidebar => {
    // do your stuff here
    console.log(sidebar);
  }
</script>
```

# Styling

This is a standard HTML element extended, so you can freely style it, apply your own classes, ids, attributes, etc. You can manage/change the sidebar size, position, z-index and everything else by CSS. You may use the `[is="el-sidebar"]` element selector to target this element on your CSS and JS.