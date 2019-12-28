customElements.define('el-header', class extends HTMLElement {

	constructor () {
		super();
	}

	connectedCallback () {

		this.applyStyle();

		if (this.hasAttribute('autohide')) {
			this.autohide();
		}
	}

	applyStyle () {
		if (this.offsetHeight) {
			this.parentElement.style.position = 'relative';
			this.parentElement.style.paddingTop = `${this.offsetHeight}px`;
		}
	}

	autohide () {
		this.prevScrollpos = window.pageYOffset;
		window.addEventListener('scroll', () => {
			let currentScrollPos = window.pageYOffset;
			this.classList[this.prevScrollpos > currentScrollPos ? 'remove' : 'add']('el-header--hidden');
			this.prevScrollpos = currentScrollPos;
		});
	}
}, {extends: 'header'});