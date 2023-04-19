const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', 'resto-item-not-found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', 'resto-item-not-found');

  I.amOnPage('/');
  I.waitForElement('.item_restaurant .content a', 10);
  I.seeElement('.item_restaurant .content a');
  const firstRestaurant = locate('.item_restaurant .content a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('resto-item');
  const likedRestaurantTitle = await I.grabTextFrom('.item_restaurant .content a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
