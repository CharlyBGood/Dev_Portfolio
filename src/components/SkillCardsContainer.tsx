import {
  Code2,
  Cloud,
  Database,
  Layout,
  Server,
  Blocks,
} from "lucide-react";

import { SkillCard } from "./SkillCard";

export function SkillCardsContainer() {
  return (
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
  )
}