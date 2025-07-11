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
// import sinapsia from '../img/sinapsialab.png';

export function HeroSection() {
  const [showModal, setShowModal] = useState(false);
  return (
    <header
      className="px-4 pt-12 md:pt-20 py-2 md:px-6 md:py-4 lg:py-6 min-h-screen flex flex-col relative overflow-hidden w-full bg-portfolio-deep"
    >
      <Navbar />
      <WavesBackground className="opacity-90" />
      <div className="container mx-auto max-w-4xl text-center relative z-10 flex-1 flex flex-col justify-start items-center pt-2 md:pt-6">
        <img 
          src="https://res.cloudinary.com/dr8pwzxzn/image/upload/v1751256447/SinapsiaLabThinn8_lehxp5.png" 
          className="m-auto object-contain mb-2 md:mb-3 mt-0" 
          alt="SinapsiaLab Logo"
        />
        <p className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-2 md:mb-4 px-2">
          Conexión de ideas, tecnología y creatividad
        </p>
        <div className="flex flex-nowrap gap-3 w-full overflow-x-auto scrollbar-none justify-center items-center mb-4 md:mb-5">
          <Layout className="w-8 h-8 text-blue-400 shrink-0" />
          <Cloud className="w-8 h-8 text-emerald-400 shrink-0" />
          <Server className="w-8 h-8 text-purple-400 shrink-0" />
          <Database className="w-8 h-8 text-red-400 shrink-0" />
          <Code2 className="w-8 h-8 text-yellow-400 shrink-0" />
          <Blocks className="w-8 h-8 text-pink-400 shrink-0" />
        </div>
        <p className="mb-4 md:mb-5 text-portfolio-text/90 text-sm md:text-base text-center break-words w-full">
          En SinapsiaLab transformo tus ideas (o las de tu equipo) en herramientas digitales modernas y eficientes: desde sitios web, ecommerce y apps internas hasta automatizaciones, chatbots, bots sociales y más.
        </p>
        <button
          className="bg-portfolio-accent hover:bg-portfolio-gradient-2 text-white font-semibold px-4 py-2 rounded-full shadow transition-all duration-300 text-sm mb-2 md:mb-3"
          onClick={() => setShowModal(true)}
        >
          Contame tu idea
        </button>
        <span className="text-[11px] text-portfolio-accent/80 text-center break-words w-full">
          ¿Querés presupuesto estimativo? Completá el formulario y lo recibís por email, o escribime directo y lo charlamos.
        </span>
        {/* Modal simple (placeholder, puedes mejorarlo luego) */}
        {showModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-portfolio-base rounded-xl p-4 shadow-2xl max-w-xs w-full relative">
              <button
                className="absolute top-2 right-2 text-portfolio-accent text-base"
                onClick={() => setShowModal(false)}
                aria-label="Cerrar"
              >
                ×
              </button>
              <h5 className="text-sm font-bold mb-2">Presupuesto rápido</h5>
              <form
                className="flex flex-col gap-1"
                onSubmit={e => {
                  e.preventDefault();
                  setShowModal(false);
                  // Aquí puedes agregar lógica de envío real
                }}
              >
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="rounded px-2 py-1 border border-portfolio-accent/30 bg-portfolio-dark text-white text-xs"
                  required
                />
                <input
                  type="email"
                  placeholder="Tu email"
                  className="rounded px-2 py-1 border border-portfolio-accent/30 bg-portfolio-dark text-white text-xs"
                  required
                />
                <textarea
                  placeholder="Contame tu idea o proyecto"
                  className="rounded px-2 py-1 border border-portfolio-accent/30 bg-portfolio-dark text-white text-xs"
                  rows={2}
                  required
                />
                <button
                  type="submit"
                  className="bg-portfolio-accent hover:bg-portfolio-gradient-2 text-white font-semibold px-3 py-1.5 rounded-full shadow transition-all duration-300 text-xs"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}