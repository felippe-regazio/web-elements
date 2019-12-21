(function () {

  class ElCard extends HTMLDivElement {

    constructor () {
      super();
    }
  }

  window.customElements.define('el-card', ElCard, {extends: 'div'});
})();