import { useState } from "react";
import { Mail } from "lucide-react";
import { Modal } from "./utilities/Modal";
import { ContactSection } from "./ContactSection";

const navLinks = [
  { href: "https://sinapsialab.com", src: "https://res.cloudinary.com/dr8pwzxzn/image/upload/v1753991068/creativesinapsistesterReal_qbe1zr.png", type: "link" },
  { icon: <Mail className="w-5 h-5 md:w-6 md:h-6 text-white/90" aria-label="Contacto" />, type: "modal" },
];

export function Navbar() {
  const [showModal, setShowModal] = useState(false);
  return (
    <nav className="fixed top-0 left-0 flex justify-between p-2 w-full z-50 bg-transparent backdrop-blur-md">

      {navLinks.map((link, idx) =>
        link.type === "link" ? (
          <a
            key={link.href}
            href={link.href}
            className="p-2 md:p-2.5 rounded-full font-medium bg-portfolio-base/70 hover:bg-portfolio-medium/80 border-none text-white shadow-sm transition-all duration-200 flex items-center justify-center mx-4"
            title="Ir a sección"
          >
            <img src={link.src} alt="Logo" className="w-6 h-6 md:w-7 md:h-7 object-contain" />
          </a>
        ) : (
          <button
            key={"modal" + idx}
            type="button"
            title="Contactemos"
            className="p-2 md:p-2.5 mx-4 rounded-full font-medium bg-portfolio-base/70 hover:bg-portfolio-medium/80 border-none text-white shadow-sm transition-all duration-200 flex items-center justify-center"
            onClick={() => setShowModal(true)}
          >
            {link.icon}
          </button>
        )
      )}
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <ContactSection />
      </Modal>
    </nav>
  );
}
