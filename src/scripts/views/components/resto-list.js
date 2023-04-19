import './resto-item';
import './resto-item-not-found';

class RestoList extends HTMLElement {
  set data(restaurants) {
    this._data = restaurants;
    this._render();
  }

  _render() {
    this.innerHTML = '';

    if (this._data.length !== 0) {
      this._data.forEach((restaurant) => {
        const restoItemElement = document.createElement('resto-item');
        restoItemElement.restaurant = restaurant;
        this.appendChild(restoItemElement);
      });
    } else {
      const restoItemNotFound = document.createElement('resto-item-not-found');
      this.appendChild(restoItemNotFound);
    }
  }
}

customElements.define('resto-list', RestoList);
