export function Footer() {
  return (
    <footer className="footer">
      <div className="site-container footer__main">
        <div className="footer__brand"><strong>URBAN MOVEMENT STUDIO</strong><span>URBANISM & PLANIFICARE TERITORIALĂ</span></div>
        <div className="footer__links">
          <a href="#despre">Despre noi</a><a href="#servicii">Servicii</a><a href="#competente">Competențe</a><a href="#contact">Contact</a>
        </div>
      </div>
      <div className="site-container footer__bottom">
        <span>© {new Date().getFullYear()} Urban Movement Studio. Toate drepturile rezervate.</span>
        <span>CUI: 50757325 &nbsp; | &nbsp; Reg. Com.: J2024034326000</span>
        <a href="#top">Înapoi sus ↑</a>
      </div>
    </footer>
  );
}
