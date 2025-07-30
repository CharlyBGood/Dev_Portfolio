import { useState } from "react";
import { FolderOpen, Mail } from "lucide-react";
import { Modal } from "./utilities/Modal";
import { ContactSection } from "./ContactSection";

const navLinks = [
  { href: "#portfolio", icon: <FolderOpen className="w-5 h-5 md:w-6 md:h-6 text-white/90" aria-label="Proyectos" />, type: "link" },
  { icon: <Mail className="w-5 h-5 md:w-6 md:h-6 text-white/90" aria-label="Contacto" />, type: "modal" },
];

export function Navbar() {
  const [showModal, setShowModal] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="container mx-auto flex justify-end items-center py-2 px-4 md:px-6">
        <div className="flex gap-2 md:gap-3">
          {navLinks.map((link, idx) =>
            link.type === "link" ? (
              <a
                key={link.href}
                href={link.href}
                className="p-2 md:p-2.5 rounded-full font-medium bg-portfolio-base/70 hover:bg-portfolio-medium/80 border-none text-white shadow-sm transition-all duration-200 flex items-center justify-center"
                aria-label={link.icon.props["aria-label"]}
                title="Ir a sección"
              >
                {link.icon}
                proyectos
              </a>
            ) : (
              <button
                key={"modal" + idx}
                type="button"
                title="Contactemos"
                className="p-2 md:p-2.5 rounded-full font-medium bg-portfolio-base/70 hover:bg-portfolio-medium/80 border-none text-white shadow-sm transition-all duration-200 flex items-center justify-center"
                aria-label={link.icon.props["aria-label"]}
                onClick={() => setShowModal(true)}
              >
                {link.icon}                
              </button>
            )
          )}
        </div>
      </div>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <ContactSection />
      </Modal>
    </nav>
  );
}
