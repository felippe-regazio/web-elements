(function () {

  class ElHeader extends HTMLElement {

    constructor () {
      super();
    }

    connectedCallback () {
    	this.applyStyle();
    }

    applyStyle () {

    	let sticky = this.hasAttribute('sticky');

			if (sticky) {
				this.style.position = 'sticky';
				this.parentElement.style.position = 'relative';
			}

			if (this.offsetHeight && !sticky) {
				this.parentElement.style.paddingTop = `${this.offsetHeight}px`;
			}
    }
  }

  window.customElements.define('el-header', ElHeader, {extends: 'header'});
})();