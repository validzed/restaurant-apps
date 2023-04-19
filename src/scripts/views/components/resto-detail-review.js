class RestoDetailReview extends HTMLElement {
  set review(review) {
    this._review = review;
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div class="customer_review">
        <div class="customer_review_header">
          <img src="https://ui-avatars.com/api/?bold=true&background=random&size=92&name=${this._review.name}" alt="image ${this._review.name}" />
          <div class="customer_review_info">
            <p><strong>${this._review.name}</strong></p>
            <p>${this._review.date}</p>
          </div>
        </div>
        <div class="customer_review_body">
          <p>${this._review.review}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('resto-detail-review', RestoDetailReview);
