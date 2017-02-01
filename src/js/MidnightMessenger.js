class MidnightMessenger {
  constructor(stylesheets) {
    this.stylesheets = stylesheets;
  }

  injectStyles() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';

    this.stylesheets.forEach(stylesheet => {
      if (stylesheet.enabled && !stylesheet.enabled()) {
        return;
      }

      const node = link.cloneNode();
      node.href = stylesheet.url;
      document.body.appendChild(node);
    });
  }

  init() {
    this.injectStyles();
  }
}

export default MidnightMessenger;
