import { useLanguage } from "../i18n/language.js";

const photographs = [
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
            </figure>
          );
        })}
      </section>
    </div>
  );
}

export default PhotographyPage;
