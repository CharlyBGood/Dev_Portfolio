interface WavesBackgroundProps {
  className?: string;
}

export function WavesBackground({ className = "" }: WavesBackgroundProps) {
  const lines = Array.from({ length: 25 }, (_, i) => {
    const progress = i / 24; // Progresión normalizada 0-1
    const offset = i * 6; // Mayor separación entre líneas
    
    // Puntos base manteniendo inicio y final
    const yStart = 450 - offset;
    const yEnd = 40 + offset * 0.15;
    
    // Curvas más orgánicas y fluidas
    const wave1 = Math.sin(progress * Math.PI * 0.5) * 120; // Primera ondulación
    const wave2 = Math.sin(progress * Math.PI * 0.8 + 1) * 80; // Segunda ondulación
    
    const yCtrl1 = 180 + wave1 + offset * 0.3; // Primer punto de control
    const yCtrl2 = 220 + wave2 + offset * 0.25; // Segundo punto de control
    const yMid = 280 + Math.sin(progress * Math.PI) * 60 + offset * 0.2; // Punto medio más fluido
    
    // Opacidad decreciente para efecto membrana
    const opacity = (1 - progress * 0.7) * 0.8;
    
    return (
      <path
        key={i}
        d={`M0,${yStart} C480,${yCtrl1} 720,${yCtrl2} 1200,${yMid} C1440,${yMid - 20} 1680,${yEnd + 30} 1920,${yEnd}`}
        strokeOpacity={opacity}
      />
    );
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 600"
      preserveAspectRatio="none"
      className={`absolute bottom-0 left-0 w-full h-full ${className}`}
    >
      <defs>
        {/* Gradiente principal con colores de la paleta */}
        <linearGradient id="gradPortfolio" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--portfolio-deep)" stopOpacity="0.05" />
          <stop offset="30%" stopColor="var(--portfolio-medium)" stopOpacity="0.15" />
          <stop offset="70%" stopColor="var(--portfolio-gradient-1)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--portfolio-gradient-3)" stopOpacity="0.18" />
        </linearGradient>
        
        {/* Gradiente de sombra usando la paleta */}
        <linearGradient id="gradSombra" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--portfolio-deep)" stopOpacity="0.6" />
          <stop offset="50%" stopColor="var(--portfolio-base)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--portfolio-deep)" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      
      {/* Capa de sombras para profundidad */}
      <g stroke="url(#gradSombra)" strokeWidth="0.8" fill="none" transform="translate(2,2)">
        {lines}
      </g>
      
      {/* Capa principal de luces */}
      <g stroke="url(#gradPortfolio)" strokeWidth="0.5" fill="none">
        {lines}
      </g>
    </svg>
  );
}
