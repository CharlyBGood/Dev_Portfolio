import { WavesBackground } from './WavesBackground';

export function HeroSection() {
  return (
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
  );
}