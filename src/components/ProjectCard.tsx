import { ArrowRight } from "lucide-react";

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
          <div className="flex flex-col justify-center h-full gap-2 p-2 md:p-3">
            <h3 className="text-xs md:text-base font-semibold mb-1 md:mb-1.5 gradient-link text-center">{title}</h3>
            <p className="text-xs text-portfolio-text text-center">{description}</p>
            <h5 className="text-xs text-white text-center">Probá nuestro generador de sitios web.
              <ArrowRight className="inline w-4 h-4 ml-2 text-portfolio-text" />
            </h5>
          </div>
        </>
      }
    </div>
  );
}
