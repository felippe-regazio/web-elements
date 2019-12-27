customElements.define('el-lightbox', class extends HTMLDivElement {

	constructor () {
		super();
	}

	connectedCallback () {
		this.createHandler();
		this.addCloseListeners();
	}

	disconnectedCallback () {
		window.removeEventListener('keyup', this.$onEscape);
	}

	createHandler () {
		let id = this.id;
		if (id) {
			window[id] = action => {
				this[action.toLowerCase()]();
			}
		}
	}

	open () {
		this.setAttribute('visible', true);
		this.emmit('lightbox-open');
		this.focus();
		document.body.style.overflow = 'hidden';
	}

	close () {
		this.removeAttribute('visible');
		this.emmit('lightbox-close');
		document.body.style.overflow = 'initial';
	}

	toggle () {
		this.hasAttribute('visible') ? this.close() : this.open();
		this.emmit('lightbox-toggle');
	}

	emmit (name) {
		let event = Object.assign(new CustomEvent(name, {detail: this}), {lightbox: this});
		document.dispatchEvent(event);
	}

	addCloseListeners () {
		this.addEventListener('click', e => {
			if (e.target === this) this.close();
		});
		this.$onEscape = window.addEventListener('keyup', e => {
			if(e.key === "Escape") {
				this.close();
			}
		});
	}
}, {extends: 'div'});