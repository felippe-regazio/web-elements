window.customElements.define('el-card', class extends HTMLDivElement {

	constructor () {
		super();
	}

	connectedCallback () {
		if (this.parentElement.tagName.toUpperCase() === 'A') {
			this.parentElement.style.textDecoration = 'none';
			this.setAttribute('hoverble', true);
		}
	}
}, {extends: 'div'});