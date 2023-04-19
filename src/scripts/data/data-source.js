import API_ENDPOINT from '../globals/api-endpoint';

class DataSource {
  static async getListRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async searchRestaurant(keyword) {
    const response = await fetch(API_ENDPOINT.SEARCH_RESTAURANT(keyword));
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
}

export default DataSource;
