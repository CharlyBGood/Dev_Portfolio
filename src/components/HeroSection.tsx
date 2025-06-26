import { WavesBackground } from './WavesBackground';

export function HeroSection() {
  return (
    <header
      className="px-4 py-12 md:px-6 md:py-16 lg:py-32 h-screen relative overflow-hidden w-full bg-portfolio-deep"
    >
      <WavesBackground className="opacity-90" />
      <div className="container mx-auto max-w-4xl text-center relative z-10 pt-16 md:pt-24">
        <img 
          src="https://res.cloudinary.com/dr8pwzxzn/image/upload/v1750827212/sinapsia_y1shcw.svg" 
          className="m-auto object-contain mb-6 md:mb-8" 
          alt="SinapsiaLab Logo"
        />
        <p className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-6 md:mb-8 px-2">
          Conexión de ideas, tecnología y creatividad
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-4">
          <a
            href="#expertise"
            className="bg-portfolio-base hover:bg-portfolio-medium border border-portfolio-accent text-white px-4 py-2.5 md:px-6 md:py-3 rounded-lg font-medium transition-all duration-300 text-sm md:text-base"
          >
            Technologías
          </a>
          <a
            href="#portfolio"
            className="bg-portfolio-base hover:bg-portfolio-medium border border-portfolio-accent text-white px-4 py-2.5 md:px-6 md:py-3 rounded-lg font-medium transition-all duration-300 text-sm md:text-base"
          >
            Projectos
          </a>
          <a
            href="#contact"
            className="bg-gradient-to-r from-portfolio-medium via-portfolio-gradient-1 to-portfolio-gradient-3 hover:from-portfolio-accent hover:via-portfolio-gradient-2 hover:to-portfolio-gradient-4 text-white px-4 py-2.5 md:px-6 md:py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
          >
            Contacto
          </a>
        </div>
      </div>
    </header>
  );
}