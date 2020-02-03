# fm-imgprev

Extends the "INPUT" HTML element and provides a image upload box with previewer feature. The input must be `type="file"`.

# Usage

Add the `elements.js` and `elements.css` source files from the project root on your document - this will enable all elements.  
Or you can load the JS and CSS files for a single element from the `elements` directory.

```html
<input 
    is="fm-imgprev" 
    type="file" 
    name="image_input" 
    data-height="300px" 
    data-width="300px"
    data-placeholder="Send Images"
    data-fake-btn="Enviar Imagem"
    data-fake-btn-classes="test btn classes"
    data-persistent="true"
    data-base64-input="adsfasdfasdfasdf"
    data-max-size="3"
    data-min-size="1"
    data-max-size-error="Maximum Size 3MB"
    data-min-size-error="Minimum Size 1MB"
    data-initial-img="http://picsum.photos/300"/>
```

# Structure

The input will be wrapper on a new HTML structure and will become something like that:

```html
<div class="fm-imgprev-wrapper" data-fake-btn="undefined" style="width: 300px; height: 300px;">
    <div class="fm-imgprev-preview" data-placeholder="Send Images">
      <img/>
    </div>
    <div class="fm-imgprev-actions">
      <input 
        is="fm-imgprev" 
        type="file" 
        name="image_input" 
        data-height="300px" 
        data-width="300px"
        data-placeholder="Send Images"
        data-fake-btn="Enviar Imagem"
        data-fake-btn-classes="test btn classes"
        data-persistent="true"
        data-base64-input="adsfasdfasdfasdf"
        data-max-size="3"
        data-min-size="1"
        data-max-size-error="Maximum Size 3MB"
        data-min-size-error="Minimum Size 1MB"
        data-initial-img="http://picsum.photos/300"/>
      <button class="fm-imgprev-fake-btn test btn classes">Enviar Imagem</button>
      <input type="text" hidden="true" class="fm-imgprev-b64-input" name="image_input_base64">
    </div>
</div>
```

# Behavior

The element will load a preview of the select image on a box in a base64 format. Also, when submited, a base64 version of the input file will be added to your form data. If your input was named "my_image", you can access the base64 version of your image on "my_image_base64".

# Attributes

| Attr | Description |
| --- | --- |
| data-height | The box height |
| data-width | The box width |
| data-placeholder | A message to be showed on the preview when there is no image |
| data-fake-btn | If must add a custom button element instead the default input type file to fire the file selector. The value will be the button inner text. |
| data-fake-btn-classes | Classes to be added when using the `data-fake-btn` attribute  |
| data-persistent | When setted, the previewer will not show the `remove image` button |
| data-base64-input | Initial value for the base64 input. This is a hidden input used to send the base64 version of the image on form data |
| data-max-size | Image max size in MB |
| data-min-size | Image min size in MB |
| data-max-size-error | Message to show when exceeds the max size |
| data-min-size-error | Message to show when no attends to the min size |
| data-initial-img | Image to be showed on the element initial state |

# Inline Events

Inline element events.

| Event | Description |
| --- | --- |
| data-on:image | Triggered when an image is loaded |
| data-on:reset | Triggered when the box is reseted or a image has been removed |

This events must be added on the `input` root element.

# Styling

This is a standard HTML element extended, so you can freely style it, apply your own classes, ids, attributes, etc. You can manage/change the Lightbox size, position, z-index and everything else by CSS. You may use the `[is="el-lightbox"]` element selector to target this element on your CSS and JS.