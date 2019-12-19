(function () {

  class ElLightbox extends HTMLDivElement {
    
    constructor() {
      super();
    }
  }

  window.customElements.define('el-lightbox', ElLightbox, {extends: 'div'});
})();