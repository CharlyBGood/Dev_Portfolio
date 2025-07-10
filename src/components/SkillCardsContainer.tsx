import { useState } from "react";
import {
  Code2,
  Cloud,
  Database,
  Layout,
  Server,
  Blocks,
} from "lucide-react";
// import { SkillCard } from "./SkillCard";

export function SkillCardsContainer() {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="py-6 md:py-8 bg-portfolio-dark" id="expertise">
      <div className="container mx-auto px-4 md:px-6">        
        <div className="flex flex-col md:flex-row items-stretch gap-8 max-w-5xl mx-auto">
          {/* Lado izquierdo: Collage de íconos y descripción */}
          <div className="flex-1 bg-portfolio-base rounded-2xl shadow-2xl border border-portfolio-accent/20 flex flex-col items-center justify-center p-6 md:p-10">
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <Layout className="w-10 h-10 text-blue-400" />
              <Cloud className="w-10 h-10 text-emerald-400" />
              <Server className="w-10 h-10 text-purple-400" />
              <Database className="w-10 h-10 text-red-400" />
              <Code2 className="w-10 h-10 text-yellow-400" />
              <Blocks className="w-10 h-10 text-pink-400" />
            </div>
            <p className="text-portfolio-text/80 text-center md:text-left">
              Trabajo con tecnologías modernas como React, Node.js, Salesforce, MongoDB, automatizaciones, bots y más.
            </p>
          </div>

          {/* Lado derecho: Copy + CTA */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start bg-portfolio-base rounded-2xl shadow-2xl border border-portfolio-accent/20 p-6 md:p-10">
            <h4 className="text-2xl md:text-3xl font-bold mb-2 text-portfolio-gradient-1">
              Soluciones reales
            </h4>
            <p className="mb-6 text-portfolio-text/90">
              SinapsiaLab transforma tus ideas (o las de tu equipo) en herramientas digitales modernas y eficientes: Sitios web, ecommerce, apps internas, automatizaciones, chatbots, bots de redes sociales y más.
            </p>
            <button
              className="bg-portfolio-accent hover:bg-portfolio-gradient-2 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 text-lg mb-2"
              onClick={() => setShowModal(true)}
            >
              Contame tu idea
            </button>
            <span className="text-xs text-portfolio-accent/80 text-center md:text-left">
              ¿Querés presupuesto estimativo? Completá el formulario y lo recibís por email, o escribime directo y lo charlamos.
            </span>
          </div>
        </div>

        {/* Modal simple (placeholder, puedes mejorarlo luego) */}
        {showModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-portfolio-base rounded-xl p-8 shadow-2xl max-w-sm w-full relative">
              <button
                className="absolute top-2 right-2 text-portfolio-accent text-xl"
                onClick={() => setShowModal(false)}
                aria-label="Cerrar"
              >
                ×
              </button>
              <h5 className="text-lg font-bold mb-4">Presupuesto rápido</h5>
              <form
                className="flex flex-col gap-4"
                onSubmit={e => {
                  e.preventDefault();
                  setShowModal(false);
                  // Aquí puedes agregar lógica de envío real
                }}
              >
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="rounded px-3 py-2 border border-portfolio-accent/30 bg-portfolio-dark text-white"
                  required
                />
                <input
                  type="email"
                  placeholder="Tu email"
                  className="rounded px-3 py-2 border border-portfolio-accent/30 bg-portfolio-dark text-white"
                  required
                />
                <textarea
                  placeholder="Contame tu idea o proyecto"
                  className="rounded px-3 py-2 border border-portfolio-accent/30 bg-portfolio-dark text-white"
                  rows={3}
                  required
                />
                <button
                  type="submit"
                  className="bg-portfolio-accent hover:bg-portfolio-gradient-2 text-white font-semibold px-4 py-2 rounded-full shadow transition-all duration-300"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}