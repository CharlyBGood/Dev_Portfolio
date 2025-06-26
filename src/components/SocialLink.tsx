interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      className="p-4 rounded-full bg-[#1a0f20] hover:bg-[#2a1530] border border-[#3a2540] transition-all duration-300 shadow-lg hover:shadow-xl"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}
