# Custom Elements Collection

This is a Vanilla JavaScript `Custom Elements Collection`. They are Non-Autonomous - or `Built-in Custom Elements` - focused on behavior with a minimalistic approach. Each element has a single purpose, extends a Standard HTML Element and has a basic API.

As said by MDN: "Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps".

Built-In Web Elements are part of the "Web Components" specs. They allow us to extend a standard HTML components and give it new powers. That means we don't rewrite an entire component just to add an accordion feature, we extend an existent HTML element and give it the accordion behavior. The use is very simple: just an HTML tag with a `is="my-element"` attribute telling how the tag will be extended giving it new super powers. Built-in custom elements are a specification part of the Web Components official spec.

# Getting Started

You have some options to add the components on your project:

1. By adding the `elements.js` and `elements.css` bundle on your document. This will add all the elements.

2. By adding "à la carte". You will add the JS and CSS files only for the elements that you want. You find this files on the "elements" directory of the project.

3. Importing or requiring the desired element. You can import or require the `elements.js` and `elements.css` from the project root, or a single element from the "elements" directory.

Obs: The `el-mustache` element has a dependency. Read the element docs for further information.

# Polyfill

🚧 Safari didn't implemented built-in elements. But there's no problem, you can find a polyfill on project's "vendor" directory. The polyfill was written by Andrea Giammarchi, and here's an article about how it works: https://hackernoon.com/extending-built-in-elements-9dce404b75b4.

# Usage

You must add the element HTML `tag` setting the `is` attribute to the desired element

```html
<div is="el-accordion" data-summary="Card (el-card)" class="example">
  <h4>Accordion Example</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
</div>
```

<p>Note the `is` attribute determine that the div will have the "accordion" behavior. That could be an image so, like `<img is="el-lazyimg" ... >`. See the docs for a complete list and proper usage of each element</p>

## Elements List

* ⚡️ **Accordion**

Extends the div element giving it an Accordion structure and behavior | [doc](https://github.com/felippe-regazio/web-elements/tree/master/source/el-accordion)


* ⚡️ **Card**

Extends the div element giving it a Card structure and behavior. | [doc](https://github.com/felippe-regazio/web-elements/tree/master/source/el-card)


* ⚡️ **Header**

Extends the header element giving it a set of features as fixed on top and auto hide on scroll. | [doc](https://github.com/felippe-regazio/web-elements/tree/master/source/el-header)


* ⚡️ **Image Viewer**

Extends the img element giving it a full screen view, the image will be showed on a lightbox when clicked. | [doc](https://github.com/felippe-regazio/web-elements/tree/master/source/el-imgview)


* ⚡️ **Lazy Load IMG**

Extends the img element giving it a lazy load behavior. The images will be only loaded when visible. | [doc](https://github.com/felippe-regazio/web-elements/tree/master/source/el-lazyimg)


* ⚡️ **Lightbox**

Extends the div element giving it a Lightbox behavior. | [doc](https://github.com/felippe-regazio/web-elements/tree/master/source/el-lightbox)


* ⚡️ **Mustache Template Div**

Extends the div element giving it a template engine capabilities. The div will be capable to parse json to fill its content. | [doc](https://github.com/felippe-regazio/web-elements/tree/master/source/el-mustache)


* ⚡️ **Read More**

Extends the div element giving the content inside a Read More feature. | [doc](https://github.com/felippe-regazio/web-elements/tree/master/source/el-readmore)


* ⚡️ **Sidebar**

Extends the div element giving it a Sidebar structure and behavior. | [doc](https://github.com/felippe-regazio/web-elements/tree/master/source/el-sidebar)


* ⚡️ **Spinner**

Extends the div element giving it different configurations to act like a loading spinner. | [doc](https://github.com/felippe-regazio/web-elements/tree/master/source/el-spinner)

## Examples

You can see some live examples on https://felippe-regazio.github.io/web-elements/.
You can check some usage examples on the element Documentation MD file. See the links on **Elements List**.

## Styling

As the elements are focused on Behavior, they're initial style are really simple and minimalistic. In fact, even the CSS distributed with this elements are Behavior-Driven. The idea is keep the user free to add its own visual identity.

As the elements are add on the initial context, don't use a Shadow DOM or custom tag names, there is no hassle to style it. You just add your styles. A cool thing about it is that you can also use the `[is]` attribute to target the elements. For example:

```html
<div is="el-lightbox">
	...
</div>

<style>
	[is="el-lightbox"] {
		...
	}
	[is="el-lightbox"] div:fist-child {
		...
	}
</style>
```

Classes and attributes are also supported, just add them. You're still dealing with a simple HTML Standard element, but with some extra power.

## Benefits

1. Vanilla JS. No dependencies. No framework.
2. Add all elements, or only those that you will need.
3. Behavior driven, you are free to add your styles.
4. No Shadow-DOM
5. Inherit from Standards, inheriting all the common elements structure
6. Semantic HTML with no strange custom tag names
7. SEO Friendly and Accessibility friendly
8. Reusable and Minimal
9. Provides separation of concerns between data, behavior and style.

# Development

The source folder contains the source files of each element. The files will be packed into a single .min bundle at the "bundle" directory, and will be also distributed "a la carte" at the "elements" directory.

### To create a new element,

Use the npm command `npm run create [element-name]`. The element name must start with the "el-" prefix. You dont need to manually add the prefix, the prefix will be automatically added to any name. An empty element boilerplate with the given name will be available on the "source" dir.

### To start to work with your new element

Use the command `npm run dev`. This will start a development watcher on the  files using gulp. All the modifications on "source" dir will trigger a new  automatic build process. You can add your component on index.html and open it on any browser to see if it works properly. The index.html contains the bundle current version of all the elements.

### To build

Use the command `npm run build`. This will trigger the gulp taks from `gulpfile.js` and pack a new components build.

### UMDJS

The "building" process will automatically add the "Universal Module Definition" to the bundle JS files and to each element on the "elements" directory, allowing the elements to be required and imported.