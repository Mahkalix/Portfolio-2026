import { useLanguage } from "../i18n/language.js";

const photographs = [
  "/assets/photography/originals/DSCF1487.jpg",
  "/assets/photography/originals/DSCF1485.jpg",
  "/assets/photography/originals/DSCF1219.jpg",
  "/assets/photography/originals/DSCF1490.jpg",
  "/assets/photography/originals/DSCF1499.jpg",
  "/assets/photography/originals/DSCF1550.jpg",
  "/assets/photography/originals/DSCF1585.jpg",
  "/assets/photography/originals/DSCF1540.jpg",
  "/assets/photography/originals/DSCF1328.jpg",
  "/assets/photography/originals/DSCF1515.jpg",
  "/assets/photography/originals/DSCF1699.jpg",
  "/assets/photography/originals/DSCF1802.jpg",
  "/assets/photography/originals/DSCF1297.jpg",
  "/assets/photography/originals/DSCF0970.jpg",
];

function PhotographyPage() {
  const { copy } = useLanguage();

  return (
    <div className="p-projects p-photography">
      <header className="p-projects__header">
        <h1>{copy.photography.title}</h1>
        <p>{copy.photography.description}</p>
        <p className="p-photography__camera">{copy.photography.camera}</p>
      </header>

      <section className="p-photography__gallery" aria-label={copy.photography.gallery}>
        {photographs.map((src, index) => (
          <figure key={src}>
            <img
              src={src}
              alt={copy.photography.alt[index]}
              loading="lazy"
              decoding="async"
            />
          </figure>
        ))}
      </section>
    </div>
  );
}

export default PhotographyPage;
