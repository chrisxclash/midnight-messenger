import MidnightMessenger from './MidnightMessenger';

import defaultStylesheet from '../styles/midnight-messenger.scss';

// Stylesheets
const STYLESHEETS = [
  {
    id: 'midnight-messenger',
    styleText: defaultStylesheet,
  },
];

const app = new MidnightMessenger(STYLESHEETS);
app.init();
