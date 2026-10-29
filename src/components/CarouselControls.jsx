import { useLanguage } from "../i18n/language.js";

function CarouselControls({ items, activeIndex, onSelect, compact = false }) {
  const { copy } = useLanguage();
  if (items.length < 2) return null;

  return (
    <div className={`c-carousel__controls${compact ? " is-compact" : ""}`}>
      <button
        className="c-carousel__control-arrow"
        type="button"
        onClick={() => onSelect(activeIndex - 1)}
        aria-label={copy.carousel.previous}
      >
        <img src="/assets/figma/carousel-arrow-left.svg" alt="" draggable="false" />
      </button>
      {compact ? (
        <div className="c-carousel__progress" role="progressbar" aria-label={copy.carousel.choose} aria-valuemin={1} aria-valuemax={items.length} aria-valuenow={activeIndex + 1}>
          <span style={{ width: `${((activeIndex + 1) / items.length) * 100}%` }} />
        </div>
      ) : (
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
      )}
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
