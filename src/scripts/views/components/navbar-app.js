class NavbarApp extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <nav id="navbar">
        <div class="container navbar_wrapper">
          <a href="#" class="nav_brand">
            <img src="./icons/icon-72x72.png" alt="logo" />
            <span>Restaurant App</span>
          </a>
          <form action="#" class="navbar_search" id="navbarSearch">
            <div class="search_icon">
              <svg
                class="search_svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr_only">Search icon</span>
            </div>
            <input id="navbarSearchInput" type="text" role="search" placeholder="Search favorite food..." class="search_input" />
          </form>
          <div class="hamburger_icon">
            <button id="btn_hamburger" type="button" aria-expanded="false">
              <span class="sr_only">Open menu</span>
              <svg
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div id="drawer_menu">
            <div class="close_icon">
              <button id="btn_close" type="button" aria-expanded="false">
                <span class="sr_only">Open menu</span>
                <svg fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="stroke-width: 3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span class="label_close_icon">Close</span>
              </button>
            </div>
            <form id="formDrawerSearch" class="drawer_input">
              <div class="search_icon">
                <svg
                  class="search_svg"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr_only">Search icon</span>
              </div>
              <input id="drawerSearchInput" type="text" placeholder="Search favorite food..." class="search_input" />
            </form>
            <ul class="top_menu_wrapper">
              <li><a href="/#">Home</a></li>
              <li><a href="/#/favorite">Favorite</a></li>
              <li><a href="https://www.instagram.com/validzed" target="_blank">About Us</a></li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('navbar-app', NavbarApp);
