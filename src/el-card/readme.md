# el-card

Provides a div with Card behavior.

# Usage

```html
<div is="el-card">
	<img src="http://picsum.photos/300">
	<div>
		<h4>Card Title</h4>
		<p>Voluptate ut dolore incididunt sint ex adipisicing officia nulla labore laborum dolore pariatur proident dolor officia nisi magna reprehenderit aliquip ullamco velit ex commodo sed do excepteur ullamco dolore mollit et mollit reprehenderit elit dolore ex.</p>
	</div>
</div>
```

# Structure

* All the `img` elements that are a direct child of the el-card will be blocked.
* All the div tags that are a direct child of the el-card will have 16px padding.
* If you wrap the card in a link (\<a> tag), the card will have a hover state.

# Attributes

| Attr | Description |
| --- | --- |
| data-hoverble | Force a box-shadow effect on the card when hovered|

# Styling

This is a standard HTML element extended, so you can freely style it, apply your own classes, ids, attributes, etc.
You may use the `[is="el-card"]` element selector to target this element on your CSS and JS.