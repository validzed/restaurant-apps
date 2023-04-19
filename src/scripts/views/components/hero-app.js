class HeroApp extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <figure class="hero_landing">
        <picture>
          <source media="(max-width: 480px)" data-srcset="./images/hero-image_2-small.jpg">
          <img class="lazyload" data-src="./images/hero-image_2-large.jpg" alt="restaurant hero image">
        </picture>
        <figcaption class="hero_text">
          <h1>BEST QUALITY RESTAURANT</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in blandit eros, ut aliquet lorem. Sed et faucibus lacus. Nullam et efficitur elit, imperdiet mollis elit. Class aptent taciti sociosqu ad litora torquent.</p>
          <a href="#recommended">Explore All</a>
        </figcaption>
      </figure>
    `;
  }
}

customElements.define('hero-app', HeroApp);
