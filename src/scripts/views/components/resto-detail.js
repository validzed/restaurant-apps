import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import CONFIG from '../../globals/config';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import './resto-detail-review';

class RestoDetail extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div class="detail_header">
        <h1>${this._restaurant.name}</h1>
        <div class="detail_sub_header">
          <i class="fa fa-location-dot" aria-hidden="true"></i>
          <span>${this._restaurant.city}</span>
        </div>
        <div class="detail_sub_header">
          <i class="fa fa-tag fa-flip-horizontal" aria-hidden="true"></i>
          ${this._restaurant?.categories.map((item) => item?.name).join(', ')}
        </div>
      </div>
      <div class="detail_content">
        <div class="detail_content_picture">
          <img src="${CONFIG.BASE_IMAGE_URL_MEDIUM}/${this._restaurant.pictureId}" alt="${this._restaurant.name}" />
        </div>
        <div class="detail_content_info">
          <div class="detail_content_info_item">
            <h2>Adress</h2>
            <p>${this._restaurant.address}</p>
          </div>
          
          <div class="detail_content_info_item">
            <h2>Foods</h2>
            <div class="detail_content_info_menu" id="menusFoods"></div>
          </div>
          
          <div class="detail_content_info_item">
            <h2>Drinks</h2>
            <div class="detail_content_info_menu" id="menusDrinks"></div>
          </div>
          
          <div class="detail_content_info_item">
            <h2>Rating & Review</h2>
            <div class="item_value">
              <span>${this._restaurant.rating}<small>/5</small></span>
              <span>${this._restaurant.customerReviews.length} <small>Reviews</small></span>
            </div>
          </div>
          
          <div id="likeButtonContainer"></div>
        </div>
      </div>

      <div class="detail_description">
        <h2>Description</h2>
        <p>${this._restaurant.description}</p>
      </div>

      <div class="detail_reviews">
        <h2>Reviews</h2>
      </div>
    `;

    const menusFoods = document.querySelector('#menusFoods');
    const menusDrinks = document.querySelector('#menusDrinks');
    const detailReviewsContainer = document.querySelector('.detail_reviews');

    this._restaurant.customerReviews.forEach((review) => {
      const restoDetailReviewElement = document.createElement('resto-detail-review');
      restoDetailReviewElement.review = review;
      detailReviewsContainer.appendChild(restoDetailReviewElement);
    });

    this._restaurant.menus.foods?.forEach((food) => {
      menusFoods.innerHTML += `<span>${food?.name}</span>`;
    });

    this._restaurant.menus.drinks?.forEach((drink) => {
      menusDrinks.innerHTML += `<span>${drink?.name}</span>`;
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: this._restaurant.id,
        name: this._restaurant.name,
        description: this._restaurant.description,
        city: this._restaurant.city,
        rating: this._restaurant.rating,
        pictureId: this._restaurant.pictureId,
      },
    });
  }
}

customElements.define('resto-detail', RestoDetail);
