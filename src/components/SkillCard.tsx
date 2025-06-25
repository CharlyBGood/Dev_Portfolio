interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <div className="p-6 rounded-xl bg-[#1a0f20] hover:bg-[#2a1530] border border-[#3a2540] transition-all duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-[#c8b8d8]">{description}</p>
    </div>
  );
}
