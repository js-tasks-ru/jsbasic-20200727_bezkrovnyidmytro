import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.currencySymbol = '€';

    let carouselHTMLString = this.render();
    this.elem = new DOMParser().parseFromString(carouselHTMLString, 'text/html').querySelector('.carousel');

    this.initCarousel();
    this.addClickEvents();

    return { elem: this.elem };
  }

  renderSlides() {
    return this.slides.map(slide => this.renderSlide(slide)).join('');
  }

  getFormattedPrice(price) {
    return this.currencySymbol + price.toFixed(2);
  }

  renderSlide(slide) {
    return `
      <div class="carousel__slide" data-id="${ slide.id }">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">${this.getFormattedPrice(slide.price)}</span>
          <div class="carousel__title">${ slide.name }</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `;
  }

  addClickEvents() {
    let cardButtons = this.elem.querySelectorAll('.carousel__button');
    Array.from(cardButtons).map(cardButton => {
      cardButton.addEventListener('click', eventClick => {
        let addToCartEvent = new CustomEvent("product-add", { 
          detail: eventClick.target.closest('.carousel__slide').dataset.id, 
          bubbles: true 
        });

        this.elem.dispatchEvent(addToCartEvent);
      });
    });
  }

  render() {
    return `
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">
          ${ this.renderSlides() }
        </div>
      </div>
    `;
  }

  hideArrows(index) {
    if (index === this.slides.length) {
      this.nextBtn.style.display = 'none';
    } else {
      this.nextBtn.style.display = '';
    }

    if (index === 1) {
      this.prevBtn.style.display = 'none';
    } else {
      this.prevBtn.style.display = '';
    }
  }

  getElementOffsetWidth(element) {
    let OffsetWidth = Number(element.offsetWidth);
    let PrevOffsetWidth = Number(element.style.transform.replace(/[^-?\d+]/g, ''));

    return {OffsetWidth, PrevOffsetWidth};
  }

  slideOnClick(op) {
    let carouselInner = this.elem.querySelector('.carousel__inner');
    let offsets = this.getElementOffsetWidth(carouselInner);

    let transformValue = op(offsets.PrevOffsetWidth, offsets.OffsetWidth);
    carouselInner.style.transform = `translateX(${transformValue}px)`;
  }

  initCarousel() {
    this.nextBtn = this.elem.querySelector('.carousel__arrow_right');
    this.prevBtn = this.elem.querySelector('.carousel__arrow_left');

    let currentSliderPosition = 1;
  
    let sum = (a, b) => a + b;
    let diff = (a, b) => a - b;

    this.hideArrows(currentSliderPosition);
  
    this.nextBtn.addEventListener('click', () => {
      this.slideOnClick(diff);
      this.hideArrows(++currentSliderPosition);
    });
  
    this.prevBtn.addEventListener('click', () => {
      this.slideOnClick(sum);
      this.hideArrows(--currentSliderPosition);
    });
  }
}
