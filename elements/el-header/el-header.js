(function () {

	class ElHeader extends HTMLElement {

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
				this.classList[this.prevScrollpos > currentScrollPos ? 'remove' : 'add']('hidden');
				this.prevScrollpos = currentScrollPos;
			});
		}
	}

	window.customElements.define('el-header', ElHeader, {extends: 'header'});
})();