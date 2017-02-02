class MidnightMessenger {
  constructor(stylesheets) {
    this.stylesheets = stylesheets;
  }

  injectStyles() {
    const style = document.createElement('style');

    this.stylesheets.forEach(stylesheet => {
      if (stylesheet.enabled && !stylesheet.enabled()) {
        return;
      }

      const node = style.cloneNode();
      node.type = 'text/css';

      if (node.styleSheet) {
        node.styleSheet.cssText = stylesheet.styleText;
      } else {
        node.appendChild(document.createTextNode(stylesheet.styleText));
      }

      document.body.appendChild(node);
    });
  }

  init() {
    this.injectStyles();
  }
}

export default MidnightMessenger;
