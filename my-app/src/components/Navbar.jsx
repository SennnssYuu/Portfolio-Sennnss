export default function Navbar() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#expertise", label: "Expertise" },
    { href: "#works", label: "Works" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-gutter py-stack-md max-w-container-max mx-auto bg-surface/80 backdrop-blur-md">
      <a className="font-headline-md text-headline-md font-bold text-primary" href="#home">
        DESIGNER.STUDIO
      </a>
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            className="text-on-surface-variant hover:text-primary transition-colors hover:scale-105 transition-transform duration-200"
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </div>
      <a
        className="hidden md:inline-flex bg-primary-container text-on-primary font-label-caps text-label-caps px-6 py-3 rounded-full hover:scale-105 transition-transform duration-200"
        href="#contact"
      >
        Let's Talk
      </a>
      <button className="md:hidden text-primary">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </nav>
  );
}
