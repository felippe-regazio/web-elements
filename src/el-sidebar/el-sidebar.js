import './el-sidebar.scss';

customElements.define('el-sidebar', class extends HTMLDivElement {
  connectedCallback() {
    this.createHandler();
    this.addCloseListeners();
    this.closeOnSwipe();
  }

  disconnectedCallback() {
    window.removeEventListener('keyup', this.$onEscape);
  }

  createHandler() {
    const { id } = this;
    if (id) {
      window[id] = (action) => {
        this[action.toLowerCase()]();
      };
    }
  }

  open() {
    this.setAttribute('data-visible', true);
    this.emmit('el-sidebar-open');
    this.execInlineEvent('data-on:open');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.removeAttribute('data-visible');
    this.emmit('el-sidebar-close');
    this.execInlineEvent('data-on:close');
    document.body.style.overflow = 'initial';
  }

  toggle() {
    this.emmit('el-sidebar-toggle');
    this.execInlineEvent('data-on:toggle');
    this.hasAttribute('data-visible') ? this.close() : this.open();
  }

  emmit(name) {
    const event = Object.assign(new CustomEvent(name, { detail: this }), { sidebar: this });
    document.dispatchEvent(event);
  }

  execInlineEvent(event) {
    if (!this.getAttribute(event)) return null;
    window[this.getAttribute(event).split('(')[0].trim()](this);
  }

  addCloseListeners() {
    this.addEventListener('click', (e) => {
      if (e.target === this) this.close();
    });
    this.$onEscape = window.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        this.close();
      }
    });
  }

  closeOnSwipe() {
    const gestureZone = this;

    let touchstartX = 0;
    let touchendX = 0;

    gestureZone.addEventListener('touchstart', (event) => {
      touchstartX = event.changedTouches[0].screenX;
      touchstartY = event.changedTouches[0].screenY;
    }, { passive: false });

    gestureZone.addEventListener('touchend', (event) => {
      touchendX = event.changedTouches[0].screenX;
      touchendY = event.changedTouches[0].screenY;
      handleGesture();
    }, { passive: false });

    function handleGesture() {
      if (touchendX < touchstartX) {
        if (gestureZone.getAttribute('data-right')) {
          gestureZone.close();
        }
      }
      if (touchendX > touchstartX) {
        if (!gestureZone.getAttribute('data-right')) {
          gestureZone.close();
        }
      }
    }
  }
}, { extends: 'div' });
