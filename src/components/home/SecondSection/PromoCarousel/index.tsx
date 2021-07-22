import Carousel from 'react-multi-carousel'

import CardPromo from '../CardPromo'

const PromoCarousel = () => {
  return (
    <Carousel
      className="py-5"
      containerClass="carousel-container"
      arrows
      centerMode={false}
      draggable
      swipeable
      customRightArrow={
        <button type="button" aria-label="Go to next slide" className="absolute z-50 right-0 opacity-50 hover:opacity-100">
          <img
            src="/assets/icons/right-arrow-rounded.svg"
            height="75"
            width="75"
          />
        </button>
      }
      customLeftArrow={
        <button type="button" aria-label="Go to previous slide" className="absolute z-50 left-0 opacity-50 hover:opacity-100">
          <img
            src="/assets/icons/left-arrow-rounded.svg"
            height="75"
            width="75"
          />
        </button>
      }
      partialVisbile
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 720
          },
          items: 2,
          partialVisibilityGutter: 100
        },
      }}
    >
      <CardPromo />
      <CardPromo />
      <CardPromo />
      <CardPromo />
      <CardPromo />
    </Carousel>
  );
};

export default PromoCarousel