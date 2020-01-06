# Custom Elements Collection

This is a Vanilla JavaScript `Custom Elements Collection`. They are Non-Autonomous, or `Built-in Custom Elements` focused on behavior with a minimalistic approach. Each element has a single purpose, extends a Standard HTML Element and has a basic API.

## Elements List

01. :zap: **Accordion**

	Extends the `div` element giving it an Accordion structure and behavior.

02. :zap: **Card**

	Extends the `div` element giving it a Card structure and behavior.

03. :zap: **Header**

	Extends the `header` element giving it a set of features as fixed on top and auto hide on scroll.

04. :zap: **Image Viewer**

	Extends the `img` element giving it a `full screen view`, the image will be showed on a lightbox when clicked.

05. :zap: **Lazy Load IMG**

	Extends the `img` element giving it a `lazy load` behavior. The images will be only loaded when visible.

06. :zap: **Lightbox**

	Extends the `div` element giving it a Lightbox behavior.

07. :zap: **Mustache Template Div**

	Extends the `div` element giving it a `template engine capabilities`. The div will be capable to parse `json` to fill its content.

08. :zap: **Read More**

	Extends the `div` element giving the content inside a `Read More` feature.

09. :zap: **Sidebar**

	Extends the `div` element giving it a Sidebar structure and behavior.

10. :zap: **Spinner**

	Extends the `div` element giving it different configurations to act like a loading spinner.

# Usage

**:book: Each element has its own documentation inside the `source/[element-name]` folder.**
As Customized built-in elements inherit from basic HTML elements, you can specify them via HTML or create them via JavaScript:

```
<div is="my-element"></div>
```

The above element gives the div new powers using `my-element` capabilities. That also means that my-element extends the div element. To create this same element via JavaScript you can do:

```
document.createElement("div", { is: "my-element" });
```

# Styling

# Benefits

# Custom Elements?

Custom elements are a specification part of the Web Components:

> Custom elements provide a way for authors to build their own fully-featured DOM elements. Although authors could always use non-standard elements in their documents, with application-specific behaviour added after the fact by scripting or similar, such elements have historically been non-conforming and not very functional. By defining a custom element, authors can inform the parser how to properly construct an element and how elements of that class should react to changes.

# Development

The source folder contains the source files of each element. The files will be packed into a single .min bundle at the "bundle" directory, and will be also distributed "a la carte" at the "elements" directory.

### To create a new element,

Use the npm command `npm run create [element-name]`. The element name must start with the "el-" prefix. You dont need to manually add the prefix, the prefix will be automatically added to any name. An empty element boilerplate with the given name will be available on the "source" dir.

### To start to work with you new element

Use the command `npm run dev`. This will start a development watcher on the  files using gulp. All the modifications on "source" dir will trigger a new  automatic build process. You can add your component on index.html and open it on any browser to see if it works properly. The index.html contains the bundle current version of all the elements.

### To build

Use the command `npm run build`. This will trigger the gulp taks from `gulpfile.js` and pack a new components build.