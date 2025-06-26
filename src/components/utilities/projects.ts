export interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dr8pwzxzn/image/upload/v1750828268/horsey_pegjou.svg",
    title: "NoStateNode",
    description:
      "WebApp en modo -Lista de Recursos- para compartir entre contactos. Autenticación con Google y almacenamiento de recursos en Firebase/Firestore.",
    url: "https://nostatenode.site/",
    tags: ["React", "CSS", "Firebase/Firestore", "Google Auth/OAuth", "Vercel"],
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dr8pwzxzn/image/upload/v1750824112/robot_dnipig.png",
    title: "Chatbot Widget Customizable",
    description:
      "Widget de chatbot personalizable, configurado para conectarse directamente con backend optimizado para integración modelos de IA.",
    url: "https://chatbotfrontend-tau.vercel.app/",
    tags: [
      "API",
      "LLMs Integration/Embeddings",
      "Google Cloud/Cloud Run",
      "NodeJS/Express",
      "React/Vite",
      "TailwindCSS",
      "Vercel",
    ],
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dr8pwzxzn/image/upload/v1750824623/d60569b6-6e74-48db-861f-c8aea09d47bb.png",
    title: "Asegurando Online",
    description:
      "Sitio web personalizado para Maschio y Asociados, enfocado en llamada a la acción (CTA) con Integración de chatbot para atención al cliente y generación de leads.",
    url: "https://asegurando.online/",
    tags: ["React", "TailwindCSS", "Cloudinary", "Chatbot Integration"],
  },
];

export default projects;
