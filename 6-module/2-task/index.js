import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.name = product.name;
    this.price = product.price;
    this.category = product.category;
    this.image = product.image;
    this.id = product.id;

    this.currencySymbol = '€';
    this.pathToImg = '/assets/images/products/';

    let productCardHTMLString = this.render();
    this.elem = new DOMParser().parseFromString(productCardHTMLString, 'text/html').querySelector('.card');

    this.addClickEvents();

    return { elem: this.elem };
  }

  getFormattedPrice() {
    return this.currencySymbol + this.price.toFixed(2);
  }

  getImgPath() {
    return this.pathToImg + this.image;
  }

  addClickEvents() {
    this.elem.querySelector('.card__button').addEventListener('click', eventClick => {
      let addToCartEvent = new CustomEvent("product-add", { 
        detail: this.id, 
        bubbles: true 
      });

      this.elem.dispatchEvent(addToCartEvent);
    });
  }

  render() {
    return `
      <div class="card">
        <div class="card__top">
          <img src="${ this.getImgPath() }" class="card__image" alt="product">
          <span class="card__price">${ this.getFormattedPrice() }</span>
        </div>
        <div class="card__body">
          <div class="card__title">${ this.name }</div>
          <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>    
    `;
  }
}
