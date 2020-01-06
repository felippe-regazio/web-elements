customElements.define('el-accordion', class extends HTMLDivElement {

	constructor () {
		super();
	}

	static get observedAttributes () {
		return ['data-summary'];
	}

	attributeChangedCallback(name, oldVal, newVal) {
		this[name] = newVal;
		const func = `update_${name.toLowerCase().replace('-', '_')}`;
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

	update_data_summary (value) {
		this.summary = value;
		const $summary = this.querySelector('.el-ac-summary');
		if ($summary) $summary.innerHTML = value;
	}

	toggleAccordion () {
		const attr = 'data-expand';
		if (!this.hasAttribute(attr)) {
			this.setAttribute(attr, true);
			this.emmit('el-accordion-expand');
			this.execInlineEvent('data-on:expand');
		} else {
			this.removeAttribute(attr);
			this.emmit('el-accordion-collapse');
			this.execInlineEvent('data-on:collapse');
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