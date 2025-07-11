import { Layers, FolderOpen, Mail } from "lucide-react";

const navLinks = [
  { href: "#expertise", icon: <Layers className="w-5 h-5 md:w-6 md:h-6 text-white/90" aria-label="Tecnologías" /> },
  { href: "#portfolio", icon: <FolderOpen className="w-5 h-5 md:w-6 md:h-6 text-white/90" aria-label="Proyectos" /> },
  { href: "#contact", icon: <Mail className="w-5 h-5 md:w-6 md:h-6 text-white/90" aria-label="Contacto" /> },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="container mx-auto flex justify-end items-center py-2 px-4 md:px-6">
        <div className="flex gap-2 md:gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="p-2 md:p-2.5 rounded-full font-medium bg-portfolio-base/70 hover:bg-portfolio-medium/80 border-none text-white shadow-sm transition-all duration-200 flex items-center justify-center"
              aria-label={link.icon.props["aria-label"]}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
