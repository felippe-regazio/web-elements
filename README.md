# Custom Elements Collection

This is a Vanilla JavaScript `Non-Autonomous Elements Collection` focused on behavior with a minimalistic approach. Each element has a single purpose, extends a Standard HTML Element and has a basic API.

# Getting Started

Add the `dist/{element-name}.js` element file to your page, or add `dist/all-elements.js ` to load all the elements. Now you are ready to go.

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

<p>Note the `is` attribute determine that the div will have the "accordion" behavior. See the docs for a complete list and proper usage of each element</p>

## Examples

You can see the element list and live examples on https://felippe-regazio.github.io/web-elements/.

Click [here](https://github.com/felippe-regazio/web-elements/tree/master/source) to go to the github elements folder and click on the element folder to see its single documentation. Every element has its own README.

## Styling

As the elements are focused on Behavior, they have a simple and minimalistic built-in style. The idea is keep the user free to add its own visual identity. As the elements are add on the root context, there is no hassle to style it. You just add your styles. A cool thing about it is that you can also use the `[is]` attribute to target the elements on css. For example:

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

# Development

The `src` contains each element source code which will be packed with webpack to the dist folder. See the webpack.config.js to further details.

# Npm Scripts

Create a new element on `src`

```
npm run create {element-name}
```

Build the elements collection

```
npm run build
```

Start the Dev mode

```
npm run build
```

Dev mode & Autofix Linter

```
npm run fix
```

### To start to work on a new element

Use the command `npm run dev`. This will start a development watcher on the files. All the modifications on "src" dir will trigger a new  automatic build process. You can add your component on index.html and open it on any browser to see if its working properly. The index.html contains the bundle current version of all the elements.

### UMDJS

The "building" process will automatically add the "Universal Module Definition" to the bundle JS files and to each element on the "elements" directory, allowing the elements to be required and/or imported.
