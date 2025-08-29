export interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  url: string;
}

const projects: Project[] = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dr8pwzxzn/image/upload/v1750828268/horsey_pegjou.svg",
    title: "NoStateNode",
    description: "App web - Comparte recursos entre contactos.",
    url: "https://nostatenode.site/",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dr8pwzxzn/image/upload/v1750824112/robot_dnipig.png",
    title: "Chatbot Widget",
    description: "Chatbot con IA.",
    url: "https://chatty-three-kappa.vercel.app/",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dr8pwzxzn/image/upload/v1750881465/902fae94-b60e-4761-916b-780ffd735b3a.png",
    title: "Asegurando Online",
    description: "Maschio & Asociados - Landing Page.",
    url: "https://asegurando.online/",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dr8pwzxzn/image/upload/v1751168366/5680e11c-0f48-44f0-a4a2-d531f918958b.png",
    title: "Planificador Financiero",
    description: "App web gestión financiera.",
    url: "https://expence-tracker-theta.vercel.app/",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dr8pwzxzn/image/upload/v1751169320/c90eb03b-baaa-45c8-a1ab-4fc26257c151.png",
    title: "Cotizador Online",
    description: "Cotización/carrito de compras.",
    url: "https://stunning-toffee-a5e308.netlify.app/",
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
