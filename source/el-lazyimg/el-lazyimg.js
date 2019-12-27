customElements.define('el-lazyimg', class extends HTMLImageElement {

	constructor () {
		super();
	}

	connectedCallback () {
		if (this.validate) {
			this.watch();
		} else {
			console.log('There is a lazy load <img> element without src or data-src');
		}
	}

	validate () {
		return this.src && this.dataset.src || this.srcset && this.dataset.srcset;
	}

	addErrorHandle () {
		this.onerror = () => {
			this.unblur();
			this.removeEvents();
		}
	}

	watch () {
		this.addErrorHandle();
		// check the best approach to check img visibility
		// try to use the intersection observer, and
		// if not able to use it, fallback to onScroll
		if ("IntersectionObserver" in window) {
			this.intersectionStrategy();
		} else {
			this.onScrollStrategy();
			this.loadIfVisible();
		}
	}

	onScrollStrategy () {
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

	intersectionStrategy () {
		const o_o = new IntersectionObserver((entries, observer) => {
			if (entries[0].isIntersecting) {
				this.loadImage();
				o_o.unobserve(this);
			}
		});
		o_o.observe(this);
	}

	loadIfVisible () {
		if (!this.hasAttribute('loaded') && !this.hasAttribute('loading') && this.isInViewport(this)) {
			this.loadImage();
		}
	}

	loadImage () {
		this.onload = this.loaded();
		if(this.src) this.src = this.dataset.src;
		if (this.srcset) this.srcset = this.dataset.srcset;
		this.setAttribute('loading', true);
		this.removeEvents();
	}

	loaded () {
		this.setAttribute('loaded', true);
		this.unblur();
		this.removeAttribute('loading');
	}

	removeEvents () {
		if (this.$onscroll) window.removeEventListener('scroll', this.$onscroll);
		if (this.$onresize) window.removeEventListener('scroll', this.$onresize);
	}

	unblur () {
		this.removeAttribute('blur');
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
}, {extends: 'img'});