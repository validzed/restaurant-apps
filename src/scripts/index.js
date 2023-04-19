import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/style.css';
import data from '../DATA.json';

const btnHamburgerElmement = document.getElementById('btn_hamburger');
const btnCloseElement = document.getElementById('btn_close');
const mainElement = document.querySelector('main');
const drawerElement = document.getElementById('drawer_menu');
const listsElement = document.querySelector('.list_items');

btnHamburgerElmement.addEventListener('click', (event) => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});

[mainElement, btnCloseElement].forEach((element) => {
  element.addEventListener('click', (event) => {
    drawerElement.classList.remove('open');
    event.stopPropagation();
  });
});

data.restaurants.forEach((resto) => {
  listsElement.innerHTML += `
  <article class="item_restaurant">
    <div class="item_container">
      <div class="image">
        <a href="#">
          <img src="${resto.pictureId}" alt="picture ${resto.name}">
        </a>
        <span class="city">${resto.city}</span>
      </div>
      <div class="content">
        <div class="rating">
          <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <span class="rating_value">${resto.rating} <small>/ 5</small></span>
        </div>
        <h2><a href="#">${resto.name}</a></h2>
        <p>${resto.description}</p>
      </div>
    </div>
  </article>
  `;
});
