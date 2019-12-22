(function () {

  class ElSidebar extends HTMLDivElement {

    constructor() {
      super();
    }

    connectedCallback () {
      this.createHandler();
      this.closeOnBackdropClick();
      this.closeOnSwipe();
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

    closeOnBackdropClick () {
      this.addEventListener('click', e => {
        if (e.target === this) this.close();
      });
    }

    closeOnSwipe () {

    }
  }

  window.customElements.define('el-sidebar', ElSidebar, {extends: 'div'});
})();