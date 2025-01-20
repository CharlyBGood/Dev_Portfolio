interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

export function ProjectCard({
  image,
  title,
  description,
  tags,
}: ProjectCardProps) {
  return (
    <div className="rounded-xl overflow-hidden bg-slate-800 hover:transform hover:scale-[1.02] transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-slate-700 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
