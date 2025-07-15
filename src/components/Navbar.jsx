import { cn } from "../lib/utils";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

const navItems = [
  { name: "Acasa", href: "#hero" },
  { name: "Despre mine", href: "#about" },
  { name: "Competente", href: "#skills" },
  /*{ name: "Projects", href: "#projects" },*/
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-300",
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
            : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          <a
            className="text-xl font-bold text-primary flex items-center"
            href="#hero"
          >
            <span className="flex items-center gap-2 relative z-10">
              {/* Logo în stânga */}
              <img
                src="/media/logo_bms.png"
                alt="Urban Movement Studio Logo"
                className="w-12 h-12 object-contain sm:w-10 sm:h-10"
              />
              {/* Textul */}
              <span>
                URBAN MOVEMENT{" "}
                <span className="text-[hsl(203_37%_69%)]">STUDIO </span>
              </span>
            </span>
          </a>

          {/*desktop version*/}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/*mobile version*/}

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
          </button>
        </div>
      </nav>
      <div
        className={cn(
          "fixed inset-0 bg-background/55 backdrop-blur-md z-30 flex flex-col items-center justify-center",
          "transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-8 text-xl">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
