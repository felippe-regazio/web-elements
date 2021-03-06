import './el-spinner.scss';

customElements.define('el-spinner', class extends HTMLDivElement {
  connectedCallback() {
    this.sizefy();
    this.create();
    this.colorize();
  }

  static get observedAttributes() {
    return ['data-size', 'data-color'];
  }

  attributeChangedCallback(name) {
    switch (name.toLowerCase()) {
    case 'data-color':
      this.colorize();
      break;
    case 'data-size':
      this.sizefy();
      break;
    default:
      this.colorize();
      break;
    }
  }

  sizefy() {
    let size = this.getAttribute('data-size');
    if (size) {
      if (+size) size = `${size}px`;
      this.style.width = size;
      this.style.height = size;
    }
  }

  create() {
    const spinner = document.createElement('div');
    spinner.classList.add('el-spinner-main');
    this.append(spinner);
  }

  colorize() {
    if (this.hasAttribute('data-color')) {
      this.style.color = this.getAttribute('data-color');
    }
  }
}, { extends: 'div' });
