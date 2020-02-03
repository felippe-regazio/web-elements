customElements.define('fm-imgprev', class extends HTMLInputElement {

	constructor () {
		super();
		this.CONNECTED = false;
		this.WRAPPER = undefined;
		this.LABEL_CLASS = 'fm-imgprev-label';
		this.HOLDER_CLASS = 'fm-imgprev-wrapper';
		this.PREVIEW_CLASS = 'fm-imgprev-preview';
		this.ACTIONS_CLASS = 'fm-imgprev-actions';
	}

	static get observedAttributes () {
		return [
			'data-width', 
			'data-height', 
			'data-placeholder',
			'data-fake-btn',
			'data-fake-btn-classes'
			];
	}

	attributeChangedCallback(name, oldVal, newVal) {
		name = name.toLowerCase();
		if (name == 'data-width' || name == 'data-height') {
			this.resize();
		}
		if (name == 'data-placeholder') {
			this.updateLabel(this.dataset.placeholder);
		}
		if (name == 'data-fake-btn') {
			this.updateFakeBtnText(this.dataset.fakeBtn);
		}
		if (name == 'data-fake-btn-classes') {
			this.updateFakeBtnClasses(oldVal, newVal);
		}
	}	

	connectedCallback () {
		if (!this.CONNECTED) {
			this.connect();
		}
	}

	validateElement () {
		// this element must be an input type file
		const elType = this.getAttribute('type');
		if (!elType || elType.toLowerCase() != "file") {
			console.warn('fm-imgprev element must be an input type file');
		}
	}

	connect () {
		this.CONNECTED = true;
		this.validateElement();
		this.wrap();
		this.listen();
	}

	wrap () {
		if (!this.WRAPPER) {
			const wrapper = document.createElement('div');
			wrapper.classList.add(this.HOLDER_CLASS);
			wrapper.style.width = this.dataset.width || '100%';
			wrapper.style.height = this.dataset.height || '100%';
			if (this.dataset.fakeBtn) wrapper.dataset.fakeBtn = this.dataset.fakebtn;
			this.parentElement.insertBefore(wrapper, this);
			this.WRAPPER = wrapper;
			this.addPreviewer();
			this.addActions();
		}
	}

	addActions() {
		const actions = document.createElement('div');
		actions.classList.add(this.ACTIONS_CLASS);
		actions.append(this);
		actions.append(this.createFakeBtn());
		actions.append(this.createB64ImgInput());
		this.WRAPPER.append(actions);
	}

	addPreviewer () {
		if (this.WRAPPER) {
			const preview = document.createElement('div');
			preview.classList.add(this.PREVIEW_CLASS);
			preview.setAttribute('data-placeholder', this.dataset.placeholder || '');
			preview.append(this.createPreviewImg());
			if (!this.dataset.persistent) preview.append(this.createPreviewCloseBtn());
			this.WRAPPER.prepend(preview);
		}
	}

	createPreviewImg () {
		const img = document.createElement('img');
		const initialImg = this.dataset.initialImg;
		if (initialImg) img.src = initialImg;
		return img;
	}

	createFakeBtn () {
		const btn = document.createElement('button');
		let classes = this.dataset.fakeBtnClasses ? this.dataset.fakeBtnClasses.split(' ') : '';
		btn.innerText = this.dataset.fakeBtn || 'Upload Image';
		btn.classList.add('fm-imgprev-fake-btn');
		if (classes) btn.classList.add(...classes);
		btn.addEventListener('click', () => this.click());
		return btn;
	}

	createB64ImgInput () {
		const input = document.createElement('input');
		input.setAttribute('type', 'text');
		input.setAttribute('hidden', 'true');
		input.classList.add('fm-imgprev-b64-input');
		input.setAttribute('name', `${this.name}_base64`);
		input.value = this.dataset.base64Input || "";
		return input;
	}	

	createPreviewCloseBtn () {
		const close = document.createElement('span');
		close.classList.add('close');
		close.addEventListener('click', () => this.resetState());
		return close;
	}

	updateLabel (label) {
		if (this.WRAPPER && label) {			
			this.WRAPPER.querySelector(`.${this.PREVIEW_CLASS}`).dataset.placeholder = label;
		}
	}

	updateFakeBtnText (text) {
		if (this.WRAPPER && text) {			
			this.WRAPPER.querySelector(`.fm-imgprev-fake-btn`).innerText = text;
		}
	}

	updateFakeBtnClasses (oldClasses, newClasses) {
		if (this.WRAPPER) {
			const btn = this.WRAPPER.querySelector(`.fm-imgprev-fake-btn`);
			if (oldClasses.length) {
				btn.classList.remove(...oldClasses.split(' '));
			}
			if (newClasses.length) {
				btn.classList.add(...newClasses.split(' '));	
			}
		}		
	}

	resize () {
		if (this.WRAPPER) {
			this.parentElement.style.width = this.dataset.width || '100%';
			this.parentElement.style.height = this.dataset.height || '100%';
		}
	}

	isLoading (is) {
		if (this.WRAPPER) {
			this.WRAPPER.classList[is ? 'add' : 'remove']('loading');
		}
	}

	listen () {
		this.addEventListener('change', e => {
			this.isLoading(true);
			const files = e.target.files;
			const fr = new FileReader();
			const maxSize = +this.dataset.maxSize;
			const minSize = +this.dataset.minSize;
			if (files && files[0]) {
				fr.onload = e => {
					if (this.validateImgSize(files[0].size, minSize, maxSize)) {
						this.updatePreviewImage(e.target.result);
					} else {
						return false;
					}
				}
				fr.onerror = err => {
					console.error(err);
				}
				fr.onloadend = () => {
					this.isLoading(false);
				}
				fr.readAsDataURL(files[0]);
			} else {
				this.resetState();
			}
		});
	}

	validateImgSize (imgSize, min, max) {
		if (max && this.bytesToSize(imgSize) > max) {
			this.value = "";
			this.isLoading(false);
			console.error(this.dataset.maxSizeError);
			return false;
		}
		if (min && imgSize < min) {
			this.value = "";
			this.isLoading(false);
			console.error(this.dataset.minSizeError);
			return false;
		}
		return true;
	}

	updatePreviewImage (base64Image) {
		this.WRAPPER.querySelector(`.${this.PREVIEW_CLASS} img`).src = base64Image;
		this.WRAPPER.querySelector(`.fm-imgprev-b64-input`).value = base64Image;
		this.isLoading(false);
		this.execInlineEvent('data-on:image');
	}

	resetState () {
		this.value = '';
		this.isLoading(false);
		this.WRAPPER.querySelector(`.fm-imgprev-b64-input`).value = '';
		this.WRAPPER.querySelector(`.${this.PREVIEW_CLASS} img`).removeAttribute('src');
		this.execInlineEvent('data-on:reset');
	}

	bytesToSize (bytes) {
		// return in MB
		return (bytes / (1024*1024)).toFixed(2);
	}

	execInlineEvent (event) {
		if(!this.getAttribute(event)) return null;
		window[this.getAttribute(event).split('(')[0].trim()](this);
	}

}, {extends: 'input'});