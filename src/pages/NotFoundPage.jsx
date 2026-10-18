import ButtonLink from "../components/ButtonLink.jsx";
import { useLanguage } from "../i18n/language.js";

function NotFoundPage() {
  const { copy } = useLanguage();

  return (
    <section className="page page--not-found" aria-labelledby="not-found-title">
      <h1 id="not-found-title">{copy.notFound.title}</h1>
      <p>{copy.notFound.description}</p>
      <ButtonLink to="/">{copy.notFound.return}</ButtonLink>
    </section>
  );
}

export default NotFoundPage;
