import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Like = {
  async render() {
    return `
      <h2 class="heading_title favorite">Your Favorite Restaurant</h2>
      <resto-list class="list_items"></resto-list>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('resto-list');
    restaurantContainer.data = restaurants;
  },
};

export default Like;
