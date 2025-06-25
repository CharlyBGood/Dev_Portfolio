interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      className="p-4 rounded-full bg-portfolio-base hover:bg-portfolio-medium border border-portfolio-accent transition-all duration-300 shadow-lg hover:shadow-xl"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}
