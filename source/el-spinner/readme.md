# el-spinner

Extends the "div" HTML element and provides a configurable loading spinner.

# Usage

If you are not using the `bundle` JS and CSS version of this collection, you may add the element .js and .css files to your document.
The files are on the `elements/el-spinner/` folder. Of you can add all elements by adding the files on the `bundle` folder.

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

This is a standard HTML element extended, so you can freely style it, apply your own classes, ids, attributes, etc. You can manage/change the spinner size, position, z-index and everything else by CSS. You may use the `[is="el-spinner"]` element selector to target this element on your CSS. 