
customElements.define('el-lightbox', class extends HTMLDivElement {

	constructor () {
		super();
	}

	connectedCallback () {
		this.createHandler();
		this.addHideListeners();
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

	show () {
		this.setAttribute('data-visible', true);
		this.focus();
		document.body.style.overflow = 'hidden';
		this.emmit('el-lightbox-show');
		this.execInlineEvent('data-on:show');
	}

	hide () {
		this.removeAttribute('data-visible');
		document.body.style.overflow = 'initial';
		this.emmit('el-lightbox-hide');
		this.execInlineEvent('data-on:hide');
	}

	toggle () {
		this.hasAttribute('data-visible') ? this.hide() : this.show();
		this.emmit('el-lightbox-toggle');
		this.execInlineEvent('data-on:toggle');
	}

	addHideListeners () {
		this.addEventListener('click', e => {
			if (e.target === this) this.hide();
		});
		this.$onEscape = window.addEventListener('keyup', e => {
			if(e.key === "Escape") {
				this.hide();
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