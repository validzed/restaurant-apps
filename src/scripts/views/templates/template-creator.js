const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
    <span>Like</span>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="liked">
    <i class="fa fa-heart" aria-hidden="true"></i>
    <span>Liked</span>
  </button>
`;

export { createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate };
