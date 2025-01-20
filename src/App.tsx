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

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 md:py-32 h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#9f9ea0] 0% via-[#59549b] 50% to-[#0055ff] 100%">
            Web & Salesforce Developer
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Building powerful web applications and Salesforce solutions
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#expertise"
              className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Technologies
            </a>
            <a
              href="#portfolio"
              className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-[#9f9ea0] 0% via-[#59549b] 50% to-[#0055ff] 100% hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-20 bg-slate-950" id="expertise">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Technologies & Tools</h2>
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
            Featured Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ProjectCard
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              title="Enterprise Sales Portal"
              description="Custom Salesforce community portal with React integration"
              tags={["Salesforce", "React", "LWC"]}
            />
            <ProjectCard
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
              title="Analytics Dashboard"
              description="Real-time data visualization platform"
              tags={["TypeScript", "D3.js", "Node.js"]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Get in Touch</h2>
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

      {/* Footer */}
      <footer className="py-8 text-center text-slate-400">
        <p>© 2024 | Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;
