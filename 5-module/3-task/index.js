function initCarousel() {
  let nextBtn = document.querySelector('.carousel__arrow_right');
  let prevBtn = document.querySelector('.carousel__arrow_left');

  const numberSlides = document.querySelectorAll('.carousel__slide').length;
  let currentSliderPosition = 1;

  let sum = (a, b) => a + b;
  let diff = (a, b) => a - b;

  let getElementOffsetWidth = (element) => {
    let OffsetWidth = Number(element.offsetWidth);
    let PrevOffsetWidth = Number(element.style.transform.replace(/[^-?\d+]/g, ''));

    return {OffsetWidth, PrevOffsetWidth};
  };

  let slideOnClick = (op) => {
    let carouselInner = document.querySelector('.carousel__inner');
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
