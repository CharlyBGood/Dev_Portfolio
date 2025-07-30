interface WavesBackgroundProps {
  className?: string;
}

export function WavesBackground({ className = '' }: WavesBackgroundProps) {
  const waveData = [
    { y: 434, opacity: 1.00 },
    { y: 427, opacity: 0.98 },
    { y: 420, opacity: 0.97 },
    { y: 413, opacity: 0.95 },
    { y: 406, opacity: 0.94 },
    { y: 399, opacity: 0.92 },
    { y: 392, opacity: 0.91 },
    { y: 385, opacity: 0.89 },
    { y: 378, opacity: 0.88 },
    { y: 371, opacity: 0.86 },
    { y: 364, opacity: 0.84 },
    { y: 357, opacity: 0.83 },
    { y: 350, opacity: 0.81 },
    { y: 343, opacity: 0.80 },
    { y: 336, opacity: 0.78 },
    { y: 329, opacity: 0.77 },
    { y: 322, opacity: 0.75 },
    { y: 315, opacity: 0.74 },
    { y: 308, opacity: 0.72 },
    { y: 301, opacity: 0.70 },
    { y: 294, opacity: 0.69 },
    { y: 287, opacity: 0.67 },
    { y: 280, opacity: 0.66 },
    { y: 273, opacity: 0.64 },
    { y: 266, opacity: 0.63 },
    { y: 259, opacity: 0.61 },
    { y: 252, opacity: 0.60 },
    { y: 245, opacity: 0.58 },
    { y: 238, opacity: 0.56 },
    { y: 231, opacity: 0.55 },
    { y: 224, opacity: 0.53 },
    { y: 217, opacity: 0.52 },
    { y: 210, opacity: 0.50 },
    { y: 203, opacity: 0.49 },
    { y: 196, opacity: 0.47 },
    { y: 189, opacity: 0.45 },
    { y: 182, opacity: 0.44 },
    { y: 175, opacity: 0.42 },
    { y: 168, opacity: 0.41 },
    { y: 161, opacity: 0.39 },
    { y: 154, opacity: 0.38 },
    { y: 147, opacity: 0.36 },
    { y: 140, opacity: 0.35 },
    { y: 133, opacity: 0.33 },
    { y: 126, opacity: 0.31 },
    { y: 119, opacity: 0.30 },
    { y: 112, opacity: 0.28 },
    { y: 105, opacity: 0.27 },
    { y: 98, opacity: 0.25 },
    { y: 91, opacity: 0.24 },
    { y: 84, opacity: 0.22 },
    { y: 77, opacity: 0.21 },
    { y: 70, opacity: 0.19 },
    { y: 63, opacity: 0.17 },
    { y: 56, opacity: 0.16 },
    { y: 49, opacity: 0.14 },
    { y: 42, opacity: 0.13 },
    { y: 35, opacity: 0.11 },
    { y: 28, opacity: 0.10 },
    { y: 21, opacity: 0.08 },
    { y: 14, opacity: 0.07 }
  ];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 1422 800"
      preserveAspectRatio="none"
      className={`absolute bottom-0 left-0 w-full ${className}`}
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="oooscillate-grad">
          <stop stopColor="var(--portfolio-deep)" stopOpacity="1" offset="0%"></stop>
          <stop stopColor="var(--portfolio-medium)" stopOpacity="1" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g strokeWidth="1" stroke="url(#oooscillate-grad)" fill="none" strokeLinecap="round">
        {waveData.map((wave, index) => (
          <path
            key={index}
            d={`M 0 ${wave.y} Q 355.5 110 711 400 Q 1066.5 690 1422 ${wave.y}`}
            opacity={wave.opacity}
          />
        ))}
      </g>
    </svg>
  );
}
