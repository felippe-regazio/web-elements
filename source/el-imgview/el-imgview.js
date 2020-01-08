customElements.define('el-imgview', class extends HTMLImageElement {

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
		this.emmit('el-imgview-show');
		this.execInlineEvent('data-on:show');
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
		close.classList.add('el-imgview-view__close');
		close.addEventListener('click', () => this.view.remove());
		return close;
	}

	removeView () {
		this.view.remove();
		document.body.style.overflow = "initial";
		this.emmit('el-imgview-close');
		this.execInlineEvent('data-on:close');
	}

	addCloseListeners () {
		this.$onEscape = window.addEventListener('keyup', e => {
			if(e.key === "Escape") {
				this.removeView();
			}
		});
	}

	emmit (name) {
		const event = Object.assign(new CustomEvent(name, {detail: this}), {imgview: this});
		document.dispatchEvent(event);
	}

	execInlineEvent (event) {
		if(!this.getAttribute(event)) return null;
		window[this.getAttribute(event).split('(')[0].trim()](this);
	}
}, {extends: 'img'});