export interface Project {
  id: number;
  image?: string;
  title: string;
  description?: string;
  url?: string;
  alt?: string;
  buttonText?: string;
  // handleClick?; () => void;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Soluciones web con impacto real",    
    buttonText: "Obtener presupuesto",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dr8pwzxzn/image/upload/v1756475182/71be6b44-243c-4132-b5b1-861c90bd4813.png",
    title: "Landing Flyer",
    description: `Landing Flyer - Tu web profesional en horas por $150 USD. \n \n 
      Diseño editable, hosting (1 año) + dominio opcional.`,
    url: "https://landingflyer.sinapsialab.com",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dr8pwzxzn/image/upload/v1750824112/robot_dnipig.png",
    title: "Chatbot",
    description: "Chatbot con IA.",
    url: "https://chatty-three-kappa.vercel.app/",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dr8pwzxzn/image/upload/v1750881465/902fae94-b60e-4761-916b-780ffd735b3a.png",
    title: "Asegurando Online",
    description: "Maschio & Asociados - Landing Page.",
    url: "https://asegurando.online/",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dr8pwzxzn/image/upload/v1750828268/horsey_pegjou.svg",
    title: "NoStateNode",
    description: "App web - Comparte recursos entre contactos.",
    url: "https://nostatenode.site/",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dr8pwzxzn/image/upload/v1756472152/9f3edee6-9482-4534-8688-d25c0a050919.png",
    title: "Charly BGood",
    description: "Sitio web -Charly BGood- | arte & creative code.",
    url: "https://www.charlybgood.com/",
  },
];

export default projects;
