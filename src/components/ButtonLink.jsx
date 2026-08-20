import { Link } from "react-router-dom";

function ButtonLink({ children, to, href, compact = false, download = false }) {
  const className = `o-portfolio-button${compact ? " o-portfolio-button--compact" : ""}`;
  const content = (
    <>
      <span>{children}</span>
      <span className="o-portfolio-button__icon" aria-hidden="true">
        <img src="/assets/figma/button-arrow.svg" alt="" />
      </span>
    </>
  );

  if (to) {
    return (
      <Link className={className} to={to}>
        {content}
      </Link>
    );
  }

  return (
    <a className={className} href={href} download={download || undefined}>
      {content}
    </a>
  );
}

export default ButtonLink;
