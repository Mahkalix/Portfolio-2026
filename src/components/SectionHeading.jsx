import ButtonLink from "./ButtonLink.jsx";

function SectionHeading({ title, linkLabel, to, headingId }) {
  return (
    <div className="c-section-heading">
      <h2 id={headingId}>{title}</h2>
      {to ? (
        <ButtonLink to={to} compact>
          {linkLabel}
        </ButtonLink>
      ) : null}
    </div>
  );
}

export default SectionHeading;
