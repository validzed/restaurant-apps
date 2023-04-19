import CONFIG from '../../globals/config';

class RestoItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this._render();
  }

  _render() {
    this.classList.add('item_restaurant');
    this.innerHTML = `
      <div class="item_container">
        <div class="image">
          <a href="/#/detail/${this._restaurant.id}">
            <picture>
              <source media="(max-width: 800px)" data-srcset="${CONFIG.BASE_IMAGE_URL_SMALL}/${this._restaurant.pictureId}">
              <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL_MEDIUM}/${this._restaurant.pictureId}" alt="picture ${this._restaurant.name}" width="450" height="200">
            </picture>
          </a>
          <span class="city">${this._restaurant.city}</span>
        </div>
        <div class="content">
          <div class="rating">
            <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <span class="rating_value">${this._restaurant.rating} <small>/ 5</small></span>
          </div>
          <h2><a href="/#/detail/${this._restaurant.id}">${this._restaurant.name}</a></h2>
          <p>${this._restaurant.description}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('resto-item', RestoItem);
