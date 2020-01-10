# el-mustache

This element provides a HTML DIV which has a built-in `Mustache Template Engine`. The element accepts a json as attribute, then parse it allowing the data to be used on the DIV content using the Mustache engine.

# Dependency

This elements depends of the `mustache.js` template engine. You must add the mustache.js script before this element js file on your document. You can find a mustache.js script on the vendor folder, or here:

Its highly recommend for you to read the `Mustache.js Documentation`. Once you correctly setup the element, you can use all the mustache.js features inside your `el-mustache` div - Mustache Doc: https://github.com/janl/mustache.js

# Usage

You must add the project's `bundle` JS and CSS from the bundle directory - this will enable all elements.  
Or you can add the JS and CSS files of the given element only, located at `elements/element-name`.

1. The root element must be a div with `is="el-mustache"`.
2. The element must have the attribute `data-json` with data in json format.

After set the data-json, you can use its content inside the div as:

```html
<div is="el-mustache" data-json='{"name":"Brasil", "alpha2Code":"BR"}' data-mock>
	<h1>Country: {{name}} {{alpha2Code}}</h1>
	<p>This post contains some data about {{name}}</p>
</div>
```

# The `data-json`

This attribute receives a json data which can be in 3 different forms:

1. A stringified json data

```html
<div is="el-mustache" data-json='{"one":"json", "two":"example"}'>
	<p>{{one}} {{two}}</p>
</div>
```

2. A "script" tag `id` that has type="application/json"

You must give the json script tag an id. Then you must pass the id with the # to the `data-json`.

```html

<script id="myjson" type="application/json">
	{
		"one":"json",
		"two":"example"
	}
</script>

<div is="el-mustache" data-json='#myjson'>
	<p>{{one}} {{two}}</p>
</div>
```

3. An API URL that returns a json

```html
<div is="el-mustache" data-json='https://example/rest/v1/info'>
	<p>{{one}} {{two}}</p>
</div>
```

If you dynamically change the data-json content, the element will be updated.

# The `data-template`

If insted to add the content inside the `el-mustache`, you can pass a template element id to be used as innerHTML of the element. This is specially useful when you have the same view to many times with different data. Example:

```html
<template id="example">
 Passed data: {{name}}
</template>

<div is="el-mustache" data-json='{"name":"fizz"}' data-template="example"></div>
<div is="el-mustache" data-json='{"name":"buzz"}' data-template="example"></div>
<div is="el-mustache" data-json='{"name":"fizzbuzz"}' data-template="example"></div>
```

# Attributes

| Attr | Description |
| --- | --- |
| data-json | A json to be parsed as the div template content |
| data-preserve-height | Keeps the element height even if has nothing loaded yet |
| data-template | Template element id to be used as innerHTML of the element |
| data-loaded | Dynamically added when the content is loaded |
| data-lazy | Only works when the `data-json` is an URL. The element will do the request only when visible on the viewport |
| data-mock | Only works when the `data-json` is an URL. This attribute will add a content mockup while the content is being loaded. It can have 3 sizes: `data-mock` or `data-mock="small"`, `data-mock="medium"` and `data-mock="large"`.
| data-debug | Debug mode: keep the content always visible, even if not loaded and log the data and errors |

# Inline Events

Inline element events.

| Event | Description |
| --- | --- |
| data-on:error | Triggered when an error accurs |
| data-on:loaded | Triggered when the content is loaded/parsed |

1. This events must be added on the root accordion element. The parameter must be a function name.
2. The function must be on the `window` scope. 
3. No code will be evaluated if used as a parameter to this events.
4. No argument must be passed to this function, just a name reference.
5. The element will be automatically passed as first (unique) parameter to your callback

Example:

```html
<div is="el-mustache" data-json='https://example/rest/v1/info' data-on:loaded="myFunc">
	<p>{{one}} {{two}}</p>
</div>

<script>
	const myFunc = elmustache => {
		// do your stuff here
		console.log(elmustache);
	}
</script>
```

# Styling

This is a standard HTML element extended, so you can freely style it, apply your own classes, ids, attributes, etc.
You may use the `[is="el-mustache"]` element selector to target this element on your CSS and JS.