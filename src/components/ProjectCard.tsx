interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
}

export function ProjectCard({
  image,
  title,
  description,
  tags,
  url
}: ProjectCardProps) {
  return (
    <div className="rounded-xl overflow-hidden bg-portfolio-base hover:bg-portfolio-medium border border-portfolio-accent hover:transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl">
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        <img src={image} alt={title} className="w-full h-28 sm:h-32 md:h-36 object-cover" />
        <div className="p-3 md:p-4">
          <h3 className="text-sm md:text-lg font-semibold mb-1.5 md:mb-2 text-white">{title}</h3>
          <p className="text-portfolio-text mb-2 md:mb-3 text-xs md:text-sm line-clamp-3">{description}</p>
          <div className="flex flex-wrap gap-1 md:gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-1.5 py-0.5 md:px-2 md:py-1 rounded-full bg-portfolio-accent hover:bg-portfolio-gradient-1 text-white text-[10px] md:text-xs transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}
