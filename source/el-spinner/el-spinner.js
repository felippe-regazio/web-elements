customElements.define('el-spinner', class extends HTMLDivElement {

	constructor () {
		super();
	}

	connectedCallback () {
		for (let i=0; i<3; i++) {
			this.append(document.createElement('span'));
		}
	}
}, {extends: 'div'});