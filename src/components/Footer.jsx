function Footer({ inert = false }) {
  return (
    <footer id="site-footer" className="c-site-footer" inert={inert ? true : undefined}>
      <p className="c-site-footer__copyright">© 2026 Badin-Léger Maxence</p>
    </footer>
  );
}

export default Footer;
