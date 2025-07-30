interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  url: string;
}

export function ProjectCard({
  image,
  title,
  description,
  url
}: ProjectCardProps) {
  return (
    <div className="rounded-xl overflow-hidden bg-portfolio-base hover:bg-portfolio-medium border border-portfolio-accent hover:transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl">
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        <img src={image} alt={title} className="w-full h-12 sm:h-14 md:h-16 object-cover" />
        <div className="p-2 md:p-3">
          <h3 className="text-xs md:text-base font-semibold mb-1 md:mb-1.5 text-white">{title}</h3>
          <p className="text-portfolio-text mb-1 md:mb-2 text-[11px] md:text-sm line-clamp-3">{description}</p>
        </div>
      </a>
    </div>
  );
}
