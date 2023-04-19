Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', 'resto-item-not-found');

  I.amOnPage('/');
  I.waitForElement('.item_restaurant .content a', 10);
  I.seeElement('.item_restaurant .content a');
  const firstRestaurant = locate('.item_restaurant .content a').first();
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('resto-item');
  const firstRestaurantLiked = locate('.item_restaurant .content a').first();
  const firstRestaurantLikedTitle = await I.grabTextFrom(firstRestaurantLiked);
  I.click(firstRestaurantLiked);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.dontSee(firstRestaurantLikedTitle);
});
