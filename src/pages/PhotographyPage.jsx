import CarouselControls from "../components/CarouselControls.jsx";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/language.js";

const photographs = [
  { name: "DSCF2536", width: 1280, height: 853 },
  { name: "DSCF2535", width: 1280, height: 1920 },
  { name: "DSCF2518", width: 1280, height: 853 },
  { name: "DSCF2514", width: 1280, height: 1920 },
  { name: "DSCF2502", width: 1280, height: 1920 },
  { name: "DSCF2466", width: 1280, height: 1920 },
  { name: "DSCF2443", width: 1280, height: 853 },
  { name: "DSCF2442", width: 1280, height: 853 },
  { name: "DSCF2408", width: 1280, height: 853 },
  { name: "DSCF2383", width: 1280, height: 853 },
  { name: "DSCF2329", width: 1280, height: 853 },
  { name: "DSCF2328", width: 1280, height: 853 },
  { name: "DSCF1487", width: 1280, height: 1864 },
  { name: "DSCF1485", width: 1280, height: 1815 },
  { name: "DSCF1219", width: 1280, height: 1920 },
  { name: "DSCF1490", width: 1280, height: 853 },
  { name: "DSCF1499", width: 1280, height: 1920 },
  { name: "DSCF1550", width: 1280, height: 1920 },
  { name: "DSCF1585", width: 1280, height: 853 },
  { name: "DSCF1540", width: 1280, height: 1920 },
  { name: "DSCF1328", width: 1280, height: 853 },
  { name: "DSCF1515", width: 1280, height: 853 },
  { name: "DSCF1699", width: 1280, height: 853 },
  { name: "DSCF1802", width: 1280, height: 853 },
  { name: "DSCF1297", width: 1280, height: 853 },
  { name: "DSCF0970", width: 1280, height: 853 },
];

function PhotographyPage() {
  const { copy } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);
  const dialogRef = useRef(null);
  const activePhoto = activeIndex === null ? null : photographs[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;
    const dialog = dialogRef.current;
    if (!dialog.open) dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [activeIndex]);

  function closePreview() {
    dialogRef.current.close();
    setActiveIndex(null);
  }

  function selectPhoto(index) {
    setActiveIndex((index + photographs.length) % photographs.length);
  }

  const carouselItems = photographs.map((photo, index) => ({
    slug: photo.name,
    title: copy.photography.alt[index],
  }));

  return (
    <div className="p-projects p-photography">
      <header className="p-projects__header">
        <h1>{copy.photography.title}</h1>
        <p>{copy.photography.description}</p>
        <p className="p-photography__camera">{copy.photography.camera}</p>
      </header>

      <section className="p-photography__gallery" aria-label={copy.photography.gallery}>
        {photographs.map((photograph, index) => {
          const basePath = `/assets/photography/web/${photograph.name}`;

          return (
            <figure key={photograph.name}>
              <button
                className="p-photography__thumbnail"
                type="button"
                aria-label={`${copy.photography.openPreview} : ${copy.photography.alt[index]}`}
                aria-haspopup="dialog"
                onClick={() => setActiveIndex(index)}
              >
              <img
                src={`${basePath}-1280.webp`}
                srcSet={`${basePath}-640.webp 640w, ${basePath}-1280.webp 1280w`}
                sizes="(min-width: 1024px) 32vw, (min-width: 792px) 50vw, calc(100vw - 40px)"
                width={photograph.width}
                height={photograph.height}
                alt={copy.photography.alt[index]}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                decoding="async"
              />
              </button>
            </figure>
          );
        })}
      </section>

      <dialog
        ref={dialogRef}
        className="p-photography__preview"
        aria-label={copy.photography.preview}
        onCancel={closePreview}
        onClose={() => setActiveIndex(null)}
        onClick={(event) => { if (event.target === event.currentTarget) closePreview(); }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") { event.preventDefault(); selectPhoto(activeIndex - 1); }
          if (event.key === "ArrowRight") { event.preventDefault(); selectPhoto(activeIndex + 1); }
        }}
      >
        {activePhoto ? (
          <div className="p-photography__preview-content">
            <button type="button" className="c-menu-toggle is-open p-photography__close" aria-label={copy.photography.close} onClick={closePreview} autoFocus>
              <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
            </button>
            <figure>
              <img src={`/assets/photography/web/${activePhoto.name}-1280.webp`} alt={copy.photography.alt[activeIndex]} />
              <figcaption aria-live="polite">{copy.photography.alt[activeIndex]} ({activeIndex + 1} / {photographs.length})</figcaption>
            </figure>
            <CarouselControls items={carouselItems} activeIndex={activeIndex} onSelect={selectPhoto} compact />
          </div>
        ) : null}
      </dialog>
    </div>
  );
}

export default PhotographyPage;
