# el-spinner

Extends the "DIV" HTML element and provides a configurable loading spinner.

# Usage

You must add the project's `bundle` JS and CSS from the bundle directory - this will enable all elements.  
Or you can add the JS and CSS files of the given element only, located at `elements/element-name`.

```html
<div is="el-spinner" data-color="red" data-outline data-single></div>
```

# Attributes

| Attr | Description |
| --- | --- |
| data-single | Hide the spinner background circle |
| data-outline | Set the spinner inner bar to an outline fashion |
| data-size | Set the spinner size, must be an integer. Example data-size="100" |
| data-color | Set the spinner inner bar color. Can be any CSS color value |

# Styling

This is a standard HTML element extended, so you can freely style it, apply your own classes, ids, attributes, etc. You can manage/change the spinner size, position, z-index and everything else by CSS. You may use the `[is="el-spinner"]` element selector to target this element on your CSS and JS.