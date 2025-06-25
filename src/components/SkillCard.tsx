interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <div className="p-6 rounded-xl bg-portfolio-base hover:bg-portfolio-medium border border-portfolio-accent transition-all duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-portfolio-text">{description}</p>
    </div>
  );
}
