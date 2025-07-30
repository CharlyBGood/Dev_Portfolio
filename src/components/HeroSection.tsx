import { WavesBackground } from './WavesBackground';
import { Navbar } from './Navbar';
import {
  Code2,
  Cloud,
  Database,
  Layout,
  Server,
  Blocks,
} from "lucide-react";
import { useState } from "react";
import { LeadGenerationForm } from "./utilities/LeadGenerationForm";
import { Modal } from './utilities/Modal';
// import sinapsia from '../img/sinapsialab.png';

export function HeroSection() {
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <header
      className="px-4 md:px-6 pb-2 min-h-screen flex flex-col relative overflow-hidden w-full bg-portfolio-deep"
    >
      <Navbar />
      <WavesBackground className="top-0 md:bottom-0 absolute left-0 w-full h-[45vh] md:h-full" />
      <div className="container mx-auto max-w-4xl text-center relative z-10 flex-1 flex flex-col justify-evenly items-center pt-2 md:pt-6">
        <img
          src="https://res.cloudinary.com/dr8pwzxzn/image/upload/v1751256447/SinapsiaLabThinn8_lehxp5.png"
          className="object-contain"
          alt="SinapsiaLab Logo"
        />
        <p className="text-lg md:text-xl lg:text-2xl text-slate-300 px-2">
          Conexión de ideas, tecnología y creatividad.
        </p>
        <div className="flex flex-nowrap gap-3 w-full overflow-x-auto scrollbar-none justify-center items-center">
          <Layout className="w-8 h-8 text-blue-400 shrink-0" />
          <Cloud className="w-8 h-8 text-emerald-400 shrink-0" />
          <Server className="w-8 h-8 text-purple-400 shrink-0" />
          <Database className="w-8 h-8 text-red-400 shrink-0" />
          <Code2 className="w-8 h-8 text-yellow-400 shrink-0" />
          <Blocks className="w-8 h-8 text-pink-400 shrink-0" />
        </div>
        <h4 className="text-portfolio-text/90 text-sm md:text-base text-center break-words w-full mt-4">
          Soluciones digitales a medida. Impulsa tu negocio.
        </h4>
        <p className="text-portfolio-text/90 text-sm md:text-base text-center break-words w-full">
          {/* sitios web, apps, integraciones con IA y más. */}
        </p>
        <button
          className="bg-portfolio-accent hover:bg-portfolio-gradient-2 text-white font-semibold px-4 py-2 rounded-full shadow transition-all duration-300 text-sm"
          onClick={() => setShowModal(true)}
        >
          Contame tu idea
        </button>
        <span className="text-[11px] text-portfolio-accent/80 text-center break-words w-full">
          Recibí presupuesto por email, o escribime por <a href="https://wa.me/541136429294" target="_blank" rel="noopener noreferrer" className="underline text-green-400 font-semibold">WhatsApp</a>.
        </span>
        <Modal
          open={showModal}
          onClose={() => setShowModal(false)}
          className="max-w-lg w-full"
        >
          <LeadGenerationForm
            onSuccess={() => {
              setShowModal(false);
              setShowSuccess(true);
            }}
          />
        </Modal>
        <Modal open={showSuccess} onClose={() => setShowSuccess(false)}>
          <div className="flex flex-col items-center justify-center py-4">
            <h5 className="text-base font-bold mb-2 text-portfolio-accent">¡Genial!</h5>
            <p className="text-xs text-portfolio-text mb-2 text-center">En breve me contacto. ¡Gracias por tu interés!</p>
            <button
              className="bg-portfolio-accent hover:bg-portfolio-gradient-2 text-white font-semibold px-4 py-2 rounded-full shadow transition-all duration-300 text-sm mt-2"
              onClick={() => setShowSuccess(false)}
            >
              Cerrar
            </button>
          </div>
        </Modal>
      </div>
    </header>
  );
}