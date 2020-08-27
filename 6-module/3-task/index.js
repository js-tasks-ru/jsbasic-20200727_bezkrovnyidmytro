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

  initCarousel() {
    let nextBtn = this.elem.querySelector('.carousel__arrow_right');
    let prevBtn = this.elem.querySelector('.carousel__arrow_left');
  
    const numberSlides = this.elem.querySelectorAll('.carousel__slide').length;
    let currentSliderPosition = 1;
  
    let sum = (a, b) => a + b;
    let diff = (a, b) => a - b;
  
    let getElementOffsetWidth = (element) => {
      let OffsetWidth = Number(element.offsetWidth);
      let PrevOffsetWidth = Number(element.style.transform.replace(/[^-?\d+]/g, ''));
  
      return {OffsetWidth, PrevOffsetWidth};
    };
  
    let slideOnClick = (op) => {
      let carouselInner = this.elem.querySelector('.carousel__inner');
      let offsets = getElementOffsetWidth(carouselInner);
  
      let transformValue = op(offsets.PrevOffsetWidth, offsets.OffsetWidth);
      carouselInner.style.transform = `translateX(${transformValue}px)`;  
    };
  
    let hideArrows = (index) => {
      if (index === numberSlides) {
        nextBtn.style.display = 'none';
      } else {
        nextBtn.style.display = '';
      }
  
      if (index === 1) {
        prevBtn.style.display = 'none';
      } else {
        prevBtn.style.display = '';
      }
    };
  
    hideArrows(currentSliderPosition);
  
    nextBtn.addEventListener('click', (eventClick) => { 
      slideOnClick(diff);
      hideArrows(++currentSliderPosition);
    });
  
    prevBtn.addEventListener('click', (eventClick) => {
      slideOnClick(sum);
      hideArrows(--currentSliderPosition);
    });
  }
}
