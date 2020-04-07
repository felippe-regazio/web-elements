import './el-card.scss';

customElements.define('el-card', class extends HTMLDivElement {
  constructor() {
    super();
  }

  connectedCallback() {
    if (this.parentElement.tagName.toUpperCase() === 'A') {
      this.parentElement.style.textDecoration = 'none';
      this.setAttribute('data-hoverble', true);
    }
  }
}, { extends: 'div' });
