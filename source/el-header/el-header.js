customElements.define('el-header', class extends HTMLElement {

	constructor () {
		super();
	}

	connectedCallback () {

		this.applyStyle();

		if (this.hasAttribute('data-autohide')) {
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
		const hidden_class = 'el-header--hidden';
		const is_hidden = this.classList.contains(hidden_class);
		this.prevScrollpos = window.pageYOffset;
		window.addEventListener('scroll', () => {
			let currentScrollPos = window.pageYOffset;
			if (this.prevScrollpos > currentScrollPos) {
				if (this.classList.contains(hidden_class)) {
					this.classList.remove(hidden_class);
					this.emmit('el-header-show');
					this.execInlineEvent('data-on:show');
				}
			} else {
				if (!this.classList.contains(hidden_class)) {
					this.classList.add(hidden_class);
					this.emmit('el-header-hide');
					this.execInlineEvent('data-on:hide');
				}
			}
			this.prevScrollpos = currentScrollPos;
		});
	}

	emmit (name) {
		const event = Object.assign(new CustomEvent(name, {detail: this}), {header: this});
		document.dispatchEvent(event);
	}

	execInlineEvent (event) {
		if(!this.getAttribute(event)) return null;
		window[this.getAttribute(event).split('(')[0].trim()](this);
	}
}, {extends: 'header'});