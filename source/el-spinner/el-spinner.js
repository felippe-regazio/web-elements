customElements.define('el-spinner', class extends HTMLDivElement {

	constructor () {
		super();
	}

	connectedCallback () {
		this.sizefy();
		this.create();
		this.colorize();
	}

	sizefy () {
		let size = this.getAttribute('size');
		if (size) {
			if(+size) size = `${size}px`;
			this.style.width = size;
			this.style.height = size;
		}
	}

	create () {
		const spinner = document.createElement('div');
		spinner.classList.add('el-spinner-main');
		this.append(spinner);
	}

	colorize () {
		if (this.hasAttribute('color')) {
			this.style.color = this.getAttribute('color');
		}
	}
}, {extends: 'div'});