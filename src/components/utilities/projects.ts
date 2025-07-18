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
      "https://res.cloudinary.com/dr8pwzxzn/image/upload/v1750881465/902fae94-b60e-4761-916b-780ffd735b3a.png",
    title: "Asegurando Online",
    description:
      "Sitio web personalizado para Maschio y Asociados, enfocado en llamada a la acción (CTA) con Integración de chatbot para atención al cliente y generación de leads.",
    url: "https://asegurando.online/",
    tags: ["React", "TailwindCSS", "Cloudinary", "Chatbot Integration"],
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dr8pwzxzn/image/upload/v1751168366/5680e11c-0f48-44f0-a4a2-d531f918958b.png",
    title: "Planificador Financiero",
    description:
      "Aplicación web para el seguimiento de gastos personales, con autenticación de usuario y almacenamiento en la nube.",
    url: "https://expence-tracker-theta.vercel.app/",
    tags: [
      "React",
      "TailwindCSS",
      "Firebase/Firestore",
      "Vercel",
      "Google Auth",
      "Supabase",
    ],
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dr8pwzxzn/image/upload/v1751169320/c90eb03b-baaa-45c8-a1ab-4fc26257c151.png",
    title: "Cotizador Online",
    description:
      "Herramienta de cotización de productos de seguros, con carrito de compras.",
    url: "https://stunning-toffee-a5e308.netlify.app/",
    tags: ["React", "TailwindCSS", "Bolt.new", "Netlify"],
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dr8pwzxzn/image/upload/v1752506646/MiliFinalFinalFinalFinal_pkdza3.svg",
    title: "Mily",
    description:
      "Aplicación web para registro de comidas y seguimiento alimenticio, con autenticación de usuario y almacenamiento en la nube.",
    url: "https://mily-app-lyart.vercel.app/",
    tags: ["NextJS", "TailwindCSS", "Vercel", "Supabase", "Google Auth"],
  },
];

export default projects;
