import { ProjectCard } from "./ProjectCard";

export function ProjectCardsContainer() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Proyectos Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ProjectCard
            image="https://res.cloudinary.com/dr8pwzxzn/image/upload/v1750828268/horsey_pegjou.svg"
            title="NoStateNode"
            description={`WebApp en modo -Lista de Recuros- para compartir con entre contactos. Autenticación con Google y almacenamiento de recursos en Firebase/Firestore.`}
            url="https://asegurando.online/"
            tags={["React", "CSS", "Firebase", "Firestore", "Google Auth/0Auth", "Vercel"]}
          />
          <ProjectCard
            image="https://res.cloudinary.com/dr8pwzxzn/image/upload/v1750824112/robot_dnipig.png"
            title="Chatbot Widget Customizable"
            description="Widget de chatbot personalizable, configurado para conectarse directamente con backend optimizado para integración modelos de IA."
            url="https://chatbotfrontend-tau.vercel.app/"
            tags={["API", "LLMs Integration/Embeddings", "Google Cloud/ Cloud Run", "NodeJS/Express", "React/Vite", "TailwindCSS", "Vercel"]}
          />
          <ProjectCard
            image="https://res.cloudinary.com/dr8pwzxzn/image/upload/v1750824623/d60569b6-6e74-48db-861f-c8aea09d47bb.png"
            title="Asegurando Online"
            description={`Sitio web personalizado para Maschio y Asociados, enfocado en llamada a la acción (CTA) con Integración de chatbot para atención al cliente y generación de leads.`}
            url="https://asegurando.online/"
            tags={["React", "TailwindCSS", "Cloudinary", "Chatbot Integration"]}
          />
        </div>
      </div>
    </section>
  )
}