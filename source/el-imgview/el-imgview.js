window.customElements.define('el-imgview', class extends HTMLImageElement {

	constructor () {
		super();
	}

	connectedCallback () {
		this.addEventListener('click', () => this.openView());
	}

	disconnectedCallback () {
		window.removeEventListener('keyup', this.$onEscape);
	}

	openView () {
		document.body.append(this.createView());
		document.body.style.overflow = "hidden";
	}

	createView () {

		const view = document.createElement('div');
		view.classList.add('el-imgview-view');
		view.addEventListener('click', e => {
			this.removeView();
		});

		view.setAttribute("data-view-loading-text", this.dataset.viewLoadingText || "...");
		view.innerHTML = `<div class="el-imgview-view__image" style="background-image:url(${this.dataset.view})"></div>`;
		view.append(this.createCloseBtn());

		this.view = view;
		this.addCloseListeners();

		return this.view;
	}

	createCloseBtn () {
		const close = document.createElement('div');
		close.classList.add('el-imageview-view__close');
		close.addEventListener('click', () => this.view.remove());
		return close;
	}

	removeView () {
		this.view.remove();
		document.body.style.overflow = "initial";
	}

	addCloseListeners () {
		this.$onEscape = window.addEventListener('keyup', e => {
			if(e.key === "Escape") {
				this.removeView();
			}
		});
	}
}, {extends: 'img'});