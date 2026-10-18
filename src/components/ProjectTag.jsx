function ProjectTag({ children, outline = false, status = false }) {
  const className = [
    "o-project-tag",
    outline ? "o-project-tag--outline" : "",
    status ? "o-project-tag--status" : "",
  ].filter(Boolean).join(" ");

  return <span className={className}>{children}</span>;
}

export default ProjectTag;
