import { useLanguage } from "../i18n/language.js";

function PassCard() {
  const { copy } = useLanguage();

  return (
    <article className="c-pass-card" tabIndex="0" aria-label={copy.passCard.label}>
      <img className="c-pass-card__wing" src="/assets/pass-card-wing.png" alt="" aria-hidden="true" />

      <div className="c-pass-card__identity">
        <div className="c-pass-card__portrait">
          <span>{copy.passCard.portrait}</span>
          <img className="is-default" src="/assets/about-profile-hover.jpg" alt="Maxence Badin-Léger looking at the sunset" />
          <img className="is-hover" src="/assets/about-profile-default.jpg" alt="" />
        </div>
        <strong>Mahkalix</strong>
        <div className="c-pass-card__barcode" aria-hidden="true" />
      </div>

      <div className="c-pass-card__information">
        <header>
          <h2>Pass Card</h2>
          <span>012546 02458 D12546 B5239 24751</span>
        </header>

        <dl>
          <div><dt><span>{copy.passCard.name}</span><span aria-hidden="true">:</span></dt><dd>Maxence Badin-Léger</dd></div>
          <div><dt><span>{copy.passCard.birth}</span><span aria-hidden="true">:</span></dt><dd>{copy.passCard.birthValue}</dd></div>
          <div><dt><span>{copy.passCard.origin}</span><span aria-hidden="true">:</span></dt><dd>Saint Martin D’Hères, France</dd></div>
          <div>
            <dt><span>{copy.passCard.occupations}</span></dt>
            <dd>{copy.passCard.jobs.map((occupation) => <span key={occupation}>{occupation}</span>)}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export default PassCard;
