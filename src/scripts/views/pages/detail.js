import UrlParser from '../../routes/url-parser';
import DataSource from '../../data/data-source';

const Detail = {
  async render() {
    return `
      <resto-detail class="detail_container"></resto-detail>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DataSource.detailRestaurant(url.id);
    const restoDetailElement = document.querySelector('resto-detail');
    restoDetailElement.restaurant = restaurant;
  },
};

export default Detail;
