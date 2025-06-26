interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <div className="p-3 md:p-6 rounded-xl bg-portfolio-base hover:bg-portfolio-medium border border-portfolio-accent transition-all duration-300">
      <div className="mb-2 md:mb-4">{icon}</div>
      <h3 className="text-base md:text-xl font-semibold mb-1.5 md:mb-2 text-white">{title}</h3>
      <p className="text-portfolio-text text-xs md:text-base leading-relaxed">{description}</p>
    </div>
  );
}
