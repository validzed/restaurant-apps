/* eslint-disable no-use-before-define */
import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/style.css';
import './views/components/navbar-app';
import './views/components/hero-app';
import './views/components/resto-list';
import './views/components/resto-detail';
import './views/components/footer-app';
import App from './views/app';
import swRegister from './utils/sw-register';
import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './globals/config';

const app = new App({
  button: document.querySelector('#btn_hamburger'),
  drawer: document.querySelector('#drawer_menu'),
  content: document.querySelector('main'),
  close: document.querySelector('#btn_close'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
