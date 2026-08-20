function ProjectTag({ children, outline = false }) {
  return <span className={`o-project-tag${outline ? " o-project-tag--outline" : ""}`}>{children}</span>;
}

export default ProjectTag;
