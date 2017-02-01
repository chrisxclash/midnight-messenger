export default class Browser {
  constructor() {
    // TODO - Add Browser checking for Firefox
    this.browser = 'chrome';
  }

  isChrome() {
    return this.browser === 'chrome';
  }

  isFirefox() {
    return this.browser === 'firefox';
  }

  // Save To Storage
  save(data, cb) {
    if (this.browser === 'chrome') {
      chrome.storage.sync.set(data, cb);
    } else {
      self.port.emit('save', data);
      self.port.on('saved', cb);
    }
  }

  // Get From Storage
  get(data, cb) {
    if (this.browser === 'chrome') {
      chrome.storage.sync.get(data, cb);
    } else {
      self.port.emit('retrieve', data);
      self.port.on('retrieved', cb);
    }
  }

  // Get Full URL
  url(url) {
    if (this.browser === 'chrome') {
      return chrome.extension.getURL(url);
    }

    const updated = url.replace(/^\//, '');
    return self.options.pluginUrl + updated;
  }

  // Option Changed
  changed(cb) {
    if (this.browser === 'chrome') {
      chrome.storage.onChanged.addListener(cb);
    }
  }
}
