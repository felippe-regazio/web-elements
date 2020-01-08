customElements.define('el-mustache', class extends HTMLDivElement {

	constructor () {
		super();
	}

	static get observedAttributes () {
		return ['data-json'];
	}

	attributeChangedCallback(name, oldVal, newVal) {
		this.init();
	}

	connectedCallback () {
		this.init();
	}

	// ----------------------------------------

	init () {
		if (typeof Mustache === 'undefined') {
			this.error('This element depends of Mustache template engine');
		} else {
			this.isLazy() ? this.lazyLoad() : this.getDataAndMount();
		}
	}

	getDataAndMount () {
		this.reset();
		let data_json = this.dataset.json || "{}";
		if (data_json.trim().startsWith("{")) {
			// json string
			const json = this.parseJsonAttr(data_json);
			this.render(json);
		} else if (data_json.trim().startsWith("#")) {
			// json element (id)
			const json = {};
			const data = document.getElementById(data_json.slice(1));
			if (data) json = this.parseJsonAttr(data.innerHTML);
			this.render(json);
		} else {
			// json url request
			this.httpRequest(data_json).then(json => {
				this.render(json);
			});
		}
	}

	parseJsonAttr (json) {
		try {
			json = JSON.parse(json);
		} catch (error) {
			json = {};
			this.error(error);
		}
		return json;
	}

	httpRequest (url) {
		return fetch(url, {method: 'GET'})
		.then(response => {
			return response.json();
		}).then(json => {
			if (this.debug()) {
				console.log(`El-Mustache Data from : ${url}`);
				console.log(json);
			}
			return json;
		}).catch(error => {
			this.error(error)
		});
	}

	render (data) {
		if (!data) data = {};
		if (!this.$template) this.$template = this.getTemplate();
		this.innerHTML = Mustache.to_html(this.$template, data);
		this.loaded();
	}

	getTemplate () {

		let template = "";
		const template_id = this.getAttribute('data-template');
		const template_el = template_id ? document.getElementById(template_id) : undefined;

		if (template_id && !template_el) {
			this.error(`The setted template "${template_id}" doesn't exist on the document`);
			return "";
		}

		template = template_el ? template_el.innerHTML : this.innerHTML;
		return template;
	}

	error (message) {
		this.loaded();
		this.execInlineEvent('data-on:error');
		if (this.debug()) console.error(message);
	}

	// ----------------------------------------

	lazyScrollStrategy () {
		this.$onscroll = window.addEventListener('scroll', e => {
			setTimeout(() => {
				this.loadIfVisible();
			}, 1);
		});
		this.$onresize = window.addEventListener('resize', e => {
			setTimeout(() => {
				this.loadIfVisible();
			}, 1);
		});
	}

	lazyIntersectionStrategy () {
		const o_o = new IntersectionObserver((entries, observer) => {
			if (entries[0].isIntersecting) {
				this.getDataAndMount();
				o_o.unobserve(this);
			}
		});
		o_o.observe(this);
	}

	lazyRemoveEvents () {
		if (this.$onscroll) window.removeEventListener('scroll', this.$onscroll);
		if (this.$onresize) window.removeEventListener('scroll', this.$onresize);
	}

	loadIfVisible () {
		if (!this.hasAttribute('data-loaded') && this.isInViewport(this)) {
			this.getDataAndMount();
			this.lazyRemoveEvents();
		}
	}

	lazyLoad () {
		if ("IntersectionObserver" in window) {
			this.lazyIntersectionStrategy();
		} else {
			this.lazyScrollStrategy();
			this.loadIfVisible();
		}
	}

	isInViewport(el){
		var rect = el.getBoundingClientRect();
		return (
			rect.bottom >= 0 &&
			rect.right >= 0 &&
			rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.left <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}

	isLazy () {
		return this.hasAttribute('data-lazy');
	}

	// ----------------------------------------

	reset () {
		this.removeAttribute('data-loaded');
	}

	loaded () {
		this.setAttribute('data-loaded', true);
		this.execInlineEvent('data-on:loaded');
	}

	reset () {
		this.removeAttribute('data-loaded');
	}

	debug () {
		return this.hasAttribute('data-debug');
	}

	execInlineEvent (event) {
		if(!this.getAttribute(event)) return null;
		window[this.getAttribute(event).split('(')[0].trim()](this);
	}

}, {extends: 'div'});