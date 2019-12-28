customElements.define('el-readmore', class extends HTMLDivElement {

	constructor () {
		super();
	}

	connectedCallback () {
		this.addReadMore();
	}

	addReadMore () {
		this.addBtn();
		this.mapIns();
	}

	addBtn () {
		const $btn = document.createElement('button');
		let btn_classes = this.getAttribute('btn-class');

		if (btn_classes) {
			$btn.classList.add(btn_classes.split(' '));
		}

		$btn.addEventListener('click', () => {
			this.toggle();
		});

		this.$btn = $btn;
		this.update();
		this.append($btn);
	}

	mapIns () {
		this.querySelectorAll('ins').forEach(el => {
			el.parentElement.classList.add('el-readmore-has-ins');
		});
	}

	toggle () {
		// when toggle, the "expanded" element being
		// watched will trigger the update function
		// so the element will respond if "expand"
		// is manipulated by code either.
		this.toggleAttribute('expanded');
	}

	// ---------------------------------------------

	static get observedAttributes () {
		return ['expanded'];
	}

	attributeChangedCallback(name, oldVal, newVal) {
		this.update();
	}

	update () {
		if (this.$btn)
			this.$btn.innerHTML = this.getBtnLabel(this.hasAttribute('expanded'));
	}

	getBtnLabel (expanded) {
		const _default = ['Read More', 'Retract'];
		let labels = this.getAttribute('label');
		if (labels)
			labels = labels.split('|');
		if (!labels || labels.length < 2)
			labels = _default;
		return expanded ? labels[1] : labels[0];
	}
}, {extends: 'div'});