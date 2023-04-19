class RestoItemNotFound extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = '<p>Tidak ada restaurant untuk ditampilkan</p>';
  }
}

customElements.define('resto-item-not-found', RestoItemNotFound);
