customElements.define('el-accordion', class extends HTMLDivElement {

	constructor () {
		super();
	}

	static get observedAttributes () {
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
		if (!this.hasAttribute(attr)) {
			this.setAttribute(attr, true);
			this.emmit('el-accordion-open');
			this.execInlineEvent('el-open');
		} else {
			this.removeAttribute(attr);
			this.emmit('el-accordion-close');
			this.execInlineEvent('el-close');
		}
	}

	emmit (name) {
		const event = Object.assign(new CustomEvent(name, {detail: this}), {accordion: this});
		document.dispatchEvent(event);
	}

	execInlineEvent (event) {
		if(!this.getAttribute(event)) return null;
		window[this.getAttribute(event).split('(')[0].trim()](this);
	}
}, {extends: 'div'});