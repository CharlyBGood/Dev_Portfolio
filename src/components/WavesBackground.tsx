interface WavesBackgroundProps {
  className?: string;
}

export function WavesBackground({ className = "" }: WavesBackgroundProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 4000 1200"
      className={`absolute bottom-0 left-0 w-full h-full ${className}`}
      preserveAspectRatio="xMidYEnd slice"
    >
      <defs>
        {/* Gradientes de luz mejorados */}
        <linearGradient id="light1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.25)"/>
          <stop offset="50%" stopColor="rgba(255,255,255,0.45)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0.25)"/>
        </linearGradient>
        <linearGradient id="light2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(200,184,216,0.3)"/>
          <stop offset="50%" stopColor="rgba(200,184,216,0.5)"/>
          <stop offset="100%" stopColor="rgba(200,184,216,0.3)"/>
        </linearGradient>
        <linearGradient id="light3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(160,140,180,0.28)"/>
          <stop offset="50%" stopColor="rgba(160,140,180,0.48)"/>
          <stop offset="100%" stopColor="rgba(160,140,180,0.28)"/>
        </linearGradient>
        
        {/* Gradientes de sombra mejorados */}
        <linearGradient id="shadow1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(0,0,0,0.15)"/>
          <stop offset="50%" stopColor="rgba(0,0,0,0.3)"/>
          <stop offset="100%" stopColor="rgba(0,0,0,0.15)"/>
        </linearGradient>
        <linearGradient id="shadow2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(26,15,32,0.4)"/>
          <stop offset="50%" stopColor="rgba(26,15,32,0.6)"/>
          <stop offset="100%" stopColor="rgba(26,15,32,0.4)"/>
        </linearGradient>
      </defs>
      
      <g fill="none">
        {/* Sombras de las ondas - Líneas continuas */}
        {Array.from({ length: 60 }, (_, i) => {
          const startY = 1000 - (i * 8); // Desde más abajo hacia arriba
          const startX = -1000 + (i * 25); // Mayor inclinación diagonal
          const endY = startY - 100; // Ligera inclinación vertical
          const endX = startX + 5000; // Línea que cruza toda la pantalla
          
          // Parámetros para ondulaciones suaves
          const waveCount = 8; // Número de ondas completas
          const amplitude = 50 + (i % 4) * 15; // Amplitud de las ondas
          const phase = (i * 12) % 360; // Fase única para cada línea
          
          // Crear una línea ondulada continua usando múltiples puntos de Bézier
          let pathData = `M${startX},${startY}`;
          
          for (let w = 0; w < waveCount; w++) {
            const segmentLength = (endX - startX) / waveCount;
            const x1 = startX + (w * segmentLength) + (segmentLength * 0.25);
            const x2 = startX + (w * segmentLength) + (segmentLength * 0.75);
            const x3 = startX + ((w + 1) * segmentLength);
            
            const y1 = startY - ((endY - startY) * (w + 0.25) / waveCount) + 
                      Math.sin((phase + w * 90) * Math.PI / 180) * amplitude;
            const y2 = startY - ((endY - startY) * (w + 0.75) / waveCount) - 
                      Math.sin((phase + w * 90 + 45) * Math.PI / 180) * amplitude;
            const y3 = startY - ((endY - startY) * (w + 1) / waveCount);
            
            pathData += ` C${x1},${y1} ${x2},${y2} ${x3},${y3}`;
          }
          
          return (
            <path
              key={`shadow-${i}`}
              d={pathData}
              stroke={i % 2 === 0 ? "url(#shadow1)" : "url(#shadow2)"}
              strokeWidth="0.5"
              opacity={0.6 - (i * 0.008)}
            />
          );
        })}
        
        {/* Ondas principales de luz - Líneas continuas */}
        {Array.from({ length: 60 }, (_, i) => {
          const startY = 1000 - (i * 8); // Desde más abajo hacia arriba
          const startX = -1000 + (i * 25); // Mayor inclinación diagonal
          const endY = startY - 100; // Ligera inclinación vertical
          const endX = startX + 5000; // Línea que cruza toda la pantalla
          
          // Parámetros para ondulaciones suaves
          const waveCount = 8; // Número de ondas completas
          const amplitude = 50 + (i % 4) * 15; // Amplitud de las ondas
          const phase = (i * 12) % 360; // Fase única para cada línea
          
          // Crear una línea ondulada continua usando múltiples puntos de Bézier
          let pathData = `M${startX},${startY}`;
          
          for (let w = 0; w < waveCount; w++) {
            const segmentLength = (endX - startX) / waveCount;
            const x1 = startX + (w * segmentLength) + (segmentLength * 0.25);
            const x2 = startX + (w * segmentLength) + (segmentLength * 0.75);
            const x3 = startX + ((w + 1) * segmentLength);
            
            const y1 = startY - ((endY - startY) * (w + 0.25) / waveCount) + 
                      Math.sin((phase + w * 90) * Math.PI / 180) * amplitude;
            const y2 = startY - ((endY - startY) * (w + 0.75) / waveCount) - 
                      Math.sin((phase + w * 90 + 45) * Math.PI / 180) * amplitude;
            const y3 = startY - ((endY - startY) * (w + 1) / waveCount);
            
            pathData += ` C${x1},${y1} ${x2},${y2} ${x3},${y3}`;
          }
          
          return (
            <path
              key={`light-wave-${i}`}
              d={pathData}
              stroke={i % 3 === 0 ? "url(#light1)" : i % 3 === 1 ? "url(#light2)" : "url(#light3)"}
              strokeWidth={i % 4 === 0 ? "0.8" : i % 4 === 1 ? "0.6" : i % 4 === 2 ? "0.7" : "0.5"}
              opacity={0.8 - (i * 0.01)}
            />
          );
        })}
        
        {/* Ondas de detalle extra finas - Líneas continuas simplificadas */}
        {Array.from({ length: 30 }, (_, i) => {
          const startY = 1050 - (i * 15);
          const startX = -800 + (i * 20);
          const endY = startY - 80;
          const endX = startX + 4500;
          
          const amplitude = 30 + (i % 3) * 10;
          const phase = (i * 20) % 360;
          
          // Línea ondulada simplificada pero continua
          const cp1X = startX + (endX - startX) * 0.3;
          const cp1Y = startY + Math.sin(phase * Math.PI / 180) * amplitude;
          
          const cp2X = startX + (endX - startX) * 0.7;
          const cp2Y = endY + Math.sin((phase + 180) * Math.PI / 180) * amplitude;
          
          return (
            <path
              key={`detail-${i}`}
              d={`M${startX},${startY} C${cp1X},${cp1Y} ${cp2X},${cp2Y} ${endX},${endY}`}
              stroke="url(#light2)"
              strokeWidth="0.3"
              opacity={0.5 - (i * 0.015)}
            />
          );
        })}
      </g>
    </svg>
  );
}
