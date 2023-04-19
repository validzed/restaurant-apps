class FooterApp extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <footer class="footer_app">
        <div class="container footer_wrapper">
          <div class="copyright">
            <a href="#">&copy; 2023 - Restaurant App</a>
          </div>
          <ul class="footer_menu">
            <li><a href="#">Term of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-app', FooterApp);
