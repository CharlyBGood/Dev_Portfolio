import { ChevronUp, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export function ScrollNavigation() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    const checkScrollPosition = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Determinar si está en la parte superior
      setIsAtTop(scrollTop < 100);

      // Mostrar botón solo en desktop y después de scroll considerable
      // No mostrar si está en mobile o muy cerca del header
      setIsVisible(
        !isMobile && 
        scrollTop > 300 && 
        (scrollTop + windowHeight < documentHeight - 100)
      );
    };

    // Verificar tamaño de pantalla inicial
    checkScreenSize();
    
    // Listeners
    window.addEventListener('scroll', checkScrollPosition);
    window.addEventListener('resize', checkScreenSize);
    
    checkScrollPosition(); // Verificar posición inicial

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [isMobile]);

  // No renderizar nada en mobile
  if (isMobile) {
    return null;
  }

  const handleScroll = () => {
    if (isAtTop) {
      // Si está arriba, ir abajo
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    } else {
      // Si está abajo, ir arriba
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed right-4 md:right-6 bottom-12 md:bottom-12 z-50">
      {/* Botón único que cambia de flecha */}
      <button
        onClick={handleScroll}
        className={`
          group p-2.5 md:p-3 rounded-full bg-portfolio-medium/90 hover:bg-portfolio-accent 
          border border-portfolio-accent/50 backdrop-blur-sm
          shadow-lg hover:shadow-xl hover:shadow-portfolio-gradient-1/20
          transition-all duration-300 transform hover:scale-110 active:scale-95
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
        `}
        aria-label={isAtTop ? "Ir abajo" : "Volver arriba"}
      >
        {isAtTop ? (
          <ChevronDown
            className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-portfolio-text 
                       transition-all duration-200 group-hover:translate-y-0.5
                       group-active:translate-y-0"
          />
        ) : (
          <ChevronUp
            className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-portfolio-text 
                       transition-all duration-200 group-hover:-translate-y-0.5
                       group-active:translate-y-0"
          />
        )}
      </button>
    </div>
  );
}
