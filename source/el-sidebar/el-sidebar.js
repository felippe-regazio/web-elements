customElements.define('el-sidebar', class extends HTMLDivElement {

	constructor() {
		super();
	}

	connectedCallback () {
		this.createHandler();
		this.addCloseListeners();
		this.closeOnSwipe();
	}

	disconnectedCallback () {
		window.removeEventListener('keyup', this.$onEscape);
	}

	createHandler () {
		let id = this.id;
		if (id) {
			window[id] = action => {
				this[action.toLowerCase()]();
			}
		}
	}

	open () {
		this.setAttribute('visible', true);
		this.emmit('sidebar-open');
		document.body.style.overflow = 'hidden';
	}

	close () {
		this.removeAttribute('visible');
		this.emmit('sidebar-close');
		document.body.style.overflow = 'initial';
	}

	toggle () {
		this.hasAttribute('visible') ? this.close() : this.open();
		this.emmit('sidebar-toggle');
	}

	emmit (name) {
		let event = Object.assign(new CustomEvent(name, {detail: this}), {sidebar: this});
		document.dispatchEvent(event);
	}

	addCloseListeners () {
		this.addEventListener('click', e => {
			if (e.target === this) this.close();
		});
		this.$onEscape = window.addEventListener('keyup', e => {
			if(e.key === "Escape") {
				this.close();
			}
		});
	}

	closeOnSwipe () {

		const gestureZone = this;

		let touchstartX = 0;
		let touchstartY = 0;
		let touchendX = 0;
		let touchendY = 0;

		gestureZone.addEventListener('touchstart', function(event) {
			touchstartX = event.changedTouches[0].screenX;
			touchstartY = event.changedTouches[0].screenY;
		}, { passive: false });

		gestureZone.addEventListener('touchend', function(event) {
			touchendX = event.changedTouches[0].screenX;
			touchendY = event.changedTouches[0].screenY;
			handleGesture();
		}, { passive: false });

		function handleGesture () {
			// touchendX < touchstartX // swiped right
			// touchendX > touchstartX // swiped left
			// touchendY < touchstartY // swiped up
			// touchendY > touchstartY // swiped down
			// touchendY === touchstartY // tap
			if (touchendX < touchstartX) {
				if (gestureZone.getAttribute('right')) {
					gestureZone.close();
				}
			}
			if (touchendX > touchstartX) {
				if (!gestureZone.getAttribute('right')) {
					gestureZone.close();
				}
			}
		}
	}
}, {extends: 'div'});