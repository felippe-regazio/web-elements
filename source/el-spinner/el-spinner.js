window.customElements.define('el-spinner', class extends HTMLDivElement {

	constructor () {
		super();
	}

	connectedCallback () {
		console.log('Hello World');
	}
}, {extends: 'div'});