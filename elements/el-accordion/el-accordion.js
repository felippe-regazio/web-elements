(function () {

  class ElAccordion extends HTMLDivElement {
    
    constructor() {
      super();
    }

	  static get observedAttributes() {
	    return ['summary'];
	  }

	  attributeChangedCallback(name, oldVal, newVal) {
	  	this[name] = newVal;
	  	const func = `update${name.charAt(0).toUpperCase() + name.slice(1)}`;
	  	if (typeof this[func] === 'function') this[func](newVal);
	  }

	  connectedCallback () {
	    
	    const template = `
	    	<div class="el-ac-summary">
	    		<span>
	    			${this.summary}
	    		</span>
	    	</div>
	    	<div class="el-ac-content">
	    		${this.innerHTML}
	    	</div>
	    `;

	    this.innerHTML = template;
	    
	    this.querySelector('.el-ac-summary').addEventListener('click', e => {
	    	e.preventDefault();
	    	this.toggleAccordion();
	    });
	  }

	  updateSummary (value) {
	  	this.summary = value;
	  	const $summary = this.querySelector('.el-ac-summary');
	  	if ($summary) $summary.innerHTML = value;
	  }

	  toggleAccordion () {
	  	const attr = 'expand';
	  	this.hasAttribute(attr) ? this.removeAttribute(attr) : this.setAttribute(attr, true);
	  }
  }

  window.customElements.define('el-accordion', ElAccordion, {extends: 'div'});
})();