import { WavesBackground } from './WavesBackground';

export function HeroSection() {
  return (
    <header
      className="px-6 py-16 md:py-32 h-screen relative overflow-hidden w-full bg-portfolio-deep"
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
            className="bg-portfolio-base hover:bg-portfolio-medium border border-portfolio-accent text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
          >
            Technologías
          </a>
          <a
            href="#portfolio"
            className="bg-portfolio-base hover:bg-portfolio-medium border border-portfolio-accent text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
          >
            Projectos
          </a>
          <a
            href="#contact"
            className="bg-gradient-to-r from-portfolio-medium via-portfolio-gradient-1 to-portfolio-gradient-3 hover:from-portfolio-accent hover:via-portfolio-gradient-2 hover:to-portfolio-gradient-4 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contacto
          </a>
        </div>
      </div>
    </header>
  );
}