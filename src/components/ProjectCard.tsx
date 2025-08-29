interface ProjectCardProps {
  id: number;
  image?: string;
  title: string;
  description?: string;
  url?: string;
  alt?: string;
  buttonText?: string;
}

export function ProjectCard({
  image,
  title,
  description,
  url,
  buttonText
}: ProjectCardProps) {
  return (
    <div className="rounded-xl overflow-hidden bg-portfolio-base hover:bg-portfolio-medium border border-portfolio-accent hover:transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl">
      {url ?
        <a href={url} target="_blank" rel="noopener noreferrer" className="block">
          {image ?
            <img src={image} alt={title} className="w-full h-[6em]  object-cover" /> : null
          }
          <div className="p-2 md:p-3">
            <h3 className="text-xs md:text-base font-semibold mb-1 md:mb-1.5 text-white">{title}</h3>
            <p className="text-portfolio-text mb-1 md:mb-2 text-[11px] md:text-sm line-clamp-3">{description}</p>
          </div>
        </a>
        :
        <>
          <div className="flex flex-col p-2 md:p-3">
            <h3 className="text-xs md:text-base font-semibold mb-1 md:mb-1.5 gradient-link p-2 text-center">{title}</h3>
            <p className="text-portfolio-text mb-1 md:mb-2 text-sm md:text-sm line-clamp-3">{description}</p>
            <ul className="mb-2">
              <li className="text-xs m-1 text-portfolio-text">- Visibilidad y conversión de clientes.</li>
              <li className="text-xs m-1 text-portfolio-text">- Bots y automatizaciones.</li>
              <li className="text-xs m-1 text-portfolio-text">- Sitios web, hosting y soporte.</li>
            </ul>
            <button className="mt-2 bg-portfolio-accent hover:bg-portfolio-gradient-2 text-white font-semibold px-4 py-1 rounded-full shadow transition-all duration-300 text-xs">{buttonText}</button>
          </div>
        </>
      }
    </div>
  );
}
