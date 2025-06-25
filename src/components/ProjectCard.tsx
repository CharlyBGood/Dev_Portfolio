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
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
          <p className="text-portfolio-text mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-portfolio-accent hover:bg-portfolio-gradient-1 text-white text-sm transition-colors duration-200"
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
