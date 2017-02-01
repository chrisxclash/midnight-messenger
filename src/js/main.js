import Browser from './Browser';
import MidnightMessenger from './MidnightMessenger';

const browser = new Browser();

// Stylesheets
const STYLESHEETS = [
  {
    id: 'midnight-messenger',
    url: browser.url('css/midnight-messenger.css'),
  },
];

const app = new MidnightMessenger(STYLESHEETS);
app.init();
