import DataSource from '../../data/data-source';

const List = {
  async render() {
    return `
      <hero-app></hero-app>
      <h2 id="recommended" class="heading_title">Recommended Restaurant</h2>
      <resto-list class="list_items"></resto-list>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('resto-list');
    const formNavbarSearch = document.querySelector('#navbarSearch');
    const navbarSearchInput = document.querySelector('#navbarSearchInput');
    const formDrawerSearch = document.querySelector('#formDrawerSearch');
    const drawerSearchInput = document.querySelector('#drawerSearchInput');

    let restaurants;

    restaurants = await DataSource.getListRestaurant();

    const onSearchHandler = async (keyword) => {
      restaurants = await DataSource.searchRestaurant(keyword);
      restaurantContainer.data = restaurants;
    };

    formNavbarSearch.addEventListener('submit', (event) => {
      event.preventDefault();
      onSearchHandler(navbarSearchInput.value);
    });

    formDrawerSearch.addEventListener('submit', (event) => {
      event.preventDefault();
      onSearchHandler(drawerSearchInput.value);
    });

    restaurantContainer.data = restaurants;
  },
};

export default List;
