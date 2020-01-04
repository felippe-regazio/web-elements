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
		this.focus();
		document.body.style.overflow = 'hidden';
		this.emmit('el-lightbox-show');
		this.execInlineEvent('el-show');
	}

	close () {
		this.removeAttribute('visible');
		document.body.style.overflow = 'initial';
		this.emmit('el-lightbox-close');
		this.execInlineEvent('el-close');
	}

	toggle () {
		this.hasAttribute('visible') ? this.close() : this.open();
		this.emmit('el-lightbox-toggle');
		this.execInlineEvent('el-toggle');
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

	emmit (name) {
		const event = Object.assign(new CustomEvent(name, {detail: this}), {lightbox: this});
		document.dispatchEvent(event);
	}

	execInlineEvent (event) {
		if(!this.getAttribute(event)) return null;
		window[this.getAttribute(event).split('(')[0].trim()](this);
	}
}, {extends: 'div'});