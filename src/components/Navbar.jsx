import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Despre noi", href: "#despre" },
  { label: "Servicii", href: "#servicii" },
  { label: "Competențe", href: "#competente" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className="header" id="top">
      <div className="site-container header__inner">
        <a href="#top" className="brand" aria-label="Urban Movement Studio — acasă" onClick={() => setMenuOpen(false)}>
          {!logoFailed && <img src="/media/logo.png" alt="Urban Movement Studio" className="brand__logo" onError={() => setLogoFailed(true)} />}
          {logoFailed && <span className="brand__text">URBAN MOVEMENT <small>STUDIO</small></span>}
        </a>
        <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`} aria-label="Navigare principală" id="main-menu">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
          ))}
          <a className="nav-cta" href="mailto:mihai.nicolescu@umstudio.ro" onClick={() => setMenuOpen(false)}>Începe un proiect <span aria-hidden="true">↗</span></a>
        </nav>
        <button type="button" className="header__toggle" aria-expanded={menuOpen} aria-controls="main-menu" aria-label={menuOpen ? "Închide meniul" : "Deschide meniul"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
    </header>
  );
}
