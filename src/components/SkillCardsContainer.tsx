import { useState } from "react";
import {
  Code2,
  Cloud,
  Database,
  Layout,
  Server,
  Blocks,
} from "lucide-react";

export function SkillCardsContainer() {
  const [showModal, setShowModal] = useState(false);
  return (
    <section id="expertise" className="w-full flex justify-center items-center py-10 md:py-20">
      <div className="bg-portfolio-base rounded-xl shadow-lg border border-portfolio-accent/20 px-6 py-10 md:px-16 md:py-16 max-w-2xl w-full md:w-4/5 flex flex-col items-center min-h-[380px] md:min-h-[440px]">
        <div className="flex flex-nowrap gap-3 w-full overflow-x-auto scrollbar-none justify-center items-center mb-5">
          <Layout className="w-8 h-8 text-blue-400 shrink-0" />
          <Cloud className="w-8 h-8 text-emerald-400 shrink-0" />
          <Server className="w-8 h-8 text-purple-400 shrink-0" />
          <Database className="w-8 h-8 text-red-400 shrink-0" />
          <Code2 className="w-8 h-8 text-yellow-400 shrink-0" />
          <Blocks className="w-8 h-8 text-pink-400 shrink-0" />
        </div>        
        <p className="mb-5 text-portfolio-text/90 text-sm md:text-base text-center break-words w-full">
          En SinapsiaLab transformo tus ideas (o las de tu equipo) en herramientas digitales modernas y eficientes: desde sitios web, ecommerce y apps internas hasta automatizaciones, chatbots, bots sociales y más.
        </p>
        <button
          className="bg-portfolio-accent hover:bg-portfolio-gradient-2 text-white font-semibold px-4 py-2 rounded-full shadow transition-all duration-300 text-sm mb-3"
          onClick={() => setShowModal(true)}
        >
          Contame tu idea
        </button>
        <span className="text-[11px] text-portfolio-accent/80 text-center break-words w-full">
          ¿Querés presupuesto estimativo? Completá el formulario y lo recibís por email, o escribime directo y lo charlamos.
        </span>
      </div>
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
    </section>
  );
}