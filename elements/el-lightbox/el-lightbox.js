window.customElements.define('el-lightbox', class extends HTMLDivElement {

	constructor () {
		super();
	}

	connectedCallback () {
		this.createHandler();
		this.closeOnBackdropClick();
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

	closeOnBackdropClick () {
		this.addEventListener('click', e => {
			if (e.target === this) this.close();
		});
	}
}, {extends: 'div'});