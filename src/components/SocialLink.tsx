interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      className="p-3 md:p-4 rounded-full bg-portfolio-base hover:bg-portfolio-medium border border-portfolio-accent transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center min-w-[48px] min-h-[48px]"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}
