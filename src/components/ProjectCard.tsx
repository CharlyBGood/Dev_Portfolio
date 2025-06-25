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
    <div className="rounded-xl overflow-hidden bg-[#1a0f20] hover:bg-[#2a1530] border border-[#3a2540] hover:transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl">
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
          <p className="text-[#c8b8d8] mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-[#3a2540] hover:bg-[#4a2560] text-[#e8d8f8] text-sm transition-colors duration-200"
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
