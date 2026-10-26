import { useLanguage } from "../i18n/language.js";

function CarouselControls({ items, activeIndex, onSelect }) {
  const { copy } = useLanguage();
  if (items.length < 2) return null;

  return (
    <div className="c-carousel__controls">
      <button
        className="c-carousel__control-arrow"
        type="button"
        onClick={() => onSelect(activeIndex - 1)}
        aria-label={copy.carousel.previous}
      >
        <img src="/assets/figma/carousel-arrow-left.svg" alt="" draggable="false" />
      </button>
      <div className="c-carousel__dots" role="group" aria-label={copy.carousel.choose}>
        {items.map((item, index) => (
          <button
            className={index === activeIndex ? "is-active" : ""}
            key={`${item.slug}-dot`}
            type="button"
            aria-label={`${copy.carousel.show} ${item.title}`}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => onSelect(index)}
          />
        ))}
      </div>
      <button
        className="c-carousel__control-arrow is-next"
        type="button"
        onClick={() => onSelect(activeIndex + 1)}
        aria-label={copy.carousel.next}
      >
        <img src="/assets/figma/carousel-arrow-left.svg" alt="" draggable="false" />
      </button>
    </div>
  );
}

export default CarouselControls;
