import { Link } from "react-router-dom";

function ButtonLink({ children, to, href, compact = false, download = false }) {
  const className = `o-portfolio-button${compact ? " o-portfolio-button--compact" : ""}`;
  const content = (
    <>
      <span>{children}</span>
      <span className="o-portfolio-button__icon" aria-hidden="true">
        <svg viewBox="0 0 16 13" focusable="false">
          <path d="M8.5 11.7 13.4 6.8H.5m12.9 0L8.5 1.2" />
        </svg>
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
