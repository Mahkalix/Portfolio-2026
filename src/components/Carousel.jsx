import CarouselControls from "./CarouselControls.jsx";
import { useRef } from "react";
import { localize, useLanguage } from "../i18n/language.js";

const swipeThreshold = 52;

function Carousel({ items, activeSlug, title, fit = "contain", variant = "wide", onChange }) {
  const pointerStart = useRef(null);
  const { copy, language } = useLanguage();
  const itemCount = items.length;
  const activeIndex = Math.max(0, items.findIndex((item) => item.slug === activeSlug));

  function goTo(index) {
    if (itemCount < 2) return;
    const nextIndex = (index + itemCount) % itemCount;
    onChange(items[nextIndex]);
  }

  function onKeyDown(event) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(activeIndex - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(activeIndex + 1);
    }
  }

  function onPointerDown(event) {
    pointerStart.current = event.clientX;
    event.currentTarget.setPointerCapture?.(event.pointerId);
  }

  function onPointerUp(event) {
    if (pointerStart.current === null) return;
    const distance = event.clientX - pointerStart.current;
    pointerStart.current = null;

    if (Math.abs(distance) < swipeThreshold) return;
    goTo(activeIndex + (distance < 0 ? 1 : -1));
  }

  function getPosition(index) {
    const distance = (index - activeIndex + itemCount) % itemCount;

    if (distance === 0) return "active";
    if (distance === 1) return "next";
    if (distance === itemCount - 1) return "previous";
    return "hidden";
  }

  return (
    <section
      className={`c-carousel c-carousel--${fit} c-carousel--${variant}`}
      aria-label={`${copy.carousel.gallery} ${title}`}
      aria-roledescription="carousel"
      onKeyDown={onKeyDown}
    >
      <div
        className="c-carousel__viewport"
        aria-live="polite"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => { pointerStart.current = null; }}
      >
        {items.map((item, index) => {
          const position = getPosition(index);

          return (
            <figure
              className={`is-${position}`}
              data-position={position}
              key={item.slug}
              aria-hidden={index !== activeIndex}
              style={{
                "--slide-bg": item.background || "#000",
                "--slide-fg": item.foreground || "#fff",
              }}
            >
              {item.image ? (
                <img src={item.image} alt={`${item.title} — ${copy.carousel.view} ${index + 1}`} draggable="false" />
              ) : (
                <span className="c-carousel__placeholder">
                  <strong>{localize(item.previewTitle, language) || item.title}</strong>
                  <small>{localize(item.previewCaption, language) || copy.carousel.previewPending}</small>
                </span>
              )}
            </figure>
          );
        })}

      </div>

      <CarouselControls items={items} activeIndex={activeIndex} onSelect={goTo} />
    </section>
  );
}

export default Carousel;
