import {
  Linkedin,
  Mail,
  Code2,
  Cloud,
  Database,
  Layout,
  Server,
  Blocks,
} from "lucide-react";

import { SiGithub } from "@icons-pack/react-simple-icons";

import { SkillCard } from "./components/SkillCard";
import { ProjectCard } from "./components/ProjectCard";
import { SocialLink } from "./components/SocialLink";
import { Footer } from "./components/Footer";
import { WavesBackground } from "./components/WavesBackground";

function App() {
  return (
    <div className="min-h-screen bg-[#0c070f] text-white">
      {/* Hero Section */}
      <header
        className="px-6 py-16 md:py-32 h-screen relative overflow-hidden w-full bg-[#0c070f]"
      >
        <WavesBackground className="opacity-90" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">          
          <img src="https://res.cloudinary.com/dr8pwzxzn/image/upload/v1750827212/sinapsia_y1shcw.svg" className="m-auto object-contain" />
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Conexión de ideas, tecnología y creatividad
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#expertise"
              className="bg-[#1a0f20] hover:bg-[#2a1530] border border-[#3a2540] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Technologías
            </a>
            <a
              href="#portfolio"
              className="bg-[#1a0f20] hover:bg-[#2a1530] border border-[#3a2540] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Projectos
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-[#2a1530] via-[#4a2560] to-[#6a3590] hover:from-[#3a2540] hover:via-[#5a3570] hover:to-[#7a45a0] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contacto
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-20 bg-[#150a1a]" id="expertise">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Tech-Stack & Herramientas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <SkillCard
              icon={<Layout className="w-8 h-8 text-blue-400" />}
              title="Frontend Development"
              description="Html5, CSS, JavaScript, React, BootStrap, Tailwind CSS, and modern web technologies"
            />
            <SkillCard
              icon={<Cloud className="w-8 h-8 text-emerald-400" />}
              title="Salesforce Development"
              description="Apex, Lightning Web Components, and Salesforce customization"
            />
            <SkillCard
              icon={<Server className="w-8 h-8 text-purple-400" />}
              title="Backend Development"
              description="Node.js, Express, and API development"
            />
            <SkillCard
              icon={<Database className="w-8 h-8 text-red-400" />}
              title="Database Design"
              description="SOQL, SOSL, MongoDB, SQL and data modeling"
            />
            <SkillCard
              icon={<Code2 className="w-8 h-8 text-yellow-400" />}
              title="Integration"
              description="REST APIs, middleware, and third-party integrations"
            />
            <SkillCard
              icon={<Blocks className="w-8 h-8 text-pink-400" />}
              title="Architecture"
              description="Scalable and maintainable solution design"
            />
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Proyectos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ProjectCard
              image="https://res.cloudinary.com/dr8pwzxzn/image/upload/v1750828268/horsey_pegjou.svg"
              title="Asegurando Online"
              description={`Sitio web personalizado para Maschio y Asociados, enfocado en llamada a la acción (CTA) con Integración de chatbot para atención al cliente y generación de leads.`}
              url="https://asegurando.online/"
              tags={["React", "TailwindCSS", "Cloudinary", "Chatbot Integration"]}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#150a1a]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Conactemos</h2>
          <div className="flex justify-center gap-8">
            <SocialLink
              href="https://github.com/CharlyBGood"
              icon={<SiGithub />}
              label="GitHub"
            />
            <SocialLink
              href="https://linkedin.com/in/carlos-bonavita"
              icon={<Linkedin />}
              label="LinkedIn"
            />
            <SocialLink
              href="mailto:bonavita.carlos@gmail.com"
              icon={<Mail />}
              label="Email"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
