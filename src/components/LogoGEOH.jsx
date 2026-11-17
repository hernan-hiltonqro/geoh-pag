import { useId } from 'react';

export const GeohLogo = ({
  className = '',
  variant = 'light', // 'light' | 'dark'
  showTagline = true,
  decorative = false,
}) => {
  const uid = useId().replace(/:/g, '');
  const isDark = variant === 'dark';

  const colors = {
    arc: isDark ? '#B88B58' : '#9B7344',
    primary: isDark ? '#F8F9FA' : '#4D2926',
    hLetter: isDark ? '#151617' : '#FFFFFF',
    tagline: isDark ? '#A0A4AB' : '#85888D',
  };

  return (
    <svg
      viewBox={showTagline ? '0 0 520 425' : '55 15 390 340'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role={decorative ? 'presentation' : 'img'}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : 'GEOH - Gestión Estratégica y Operación Hotelera'}
    >
      <style>{`
        @keyframes drawArc-${uid} {
          from {
            stroke-dashoffset: 900;
            opacity: 0.2;
          }
          to {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }
        @keyframes fadeScale-${uid} {
          from {
            opacity: 0;
            transform: scale(0.92);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes popBadge-${uid} {
          0% {
            opacity: 0;
            transform: scale(0.6);
          }
          70% {
            opacity: 1;
            transform: scale(1.06);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes pulseBadge-${uid} {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.04);
          }
        }
        @keyframes fadeUp-${uid} {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .arc-${uid} {
          stroke-dasharray: 900;
          stroke-dashoffset: 900;
          animation: drawArc-${uid} 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .g-letter-${uid} {
          opacity: 0;
          transform-origin: 228px 190px;
          animation: fadeScale-${uid} 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.25s forwards;
        }
        .h-badge-${uid} {
          opacity: 0;
          transform-origin: 384px 114px;
          animation:
            popBadge-${uid} 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.65s forwards,
            pulseBadge-${uid} 4.5s ease-in-out 1.5s infinite;
        }
        .tagline-${uid} {
          opacity: 0;
          animation: fadeUp-${uid} 0.8s ease-out 0.9s forwards;
        }
      `}</style>

      {/* Aro exterior animado */}
      <path
        className={`arc-${uid}`}
        d="M 386.4 171.7 A 152 152 0 1 1 340.6 75.7"
        stroke={colors.arc}
        strokeWidth="6.5"
        strokeLinecap="butt"
      />

      {/* Letra G central */}
      <text
        className={`g-letter-${uid}`}
        x="228"
        y="256"
        textAnchor="middle"
        fill={colors.primary}
        style={{
          fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
          fontSize: '215px',
          fontWeight: 400,
        }}
      >
        G
      </text>

      {/* Emblema H superior derecho */}
      <g className={`h-badge-${uid}`}>
        <circle cx="384" cy="114" r="39" fill={colors.primary} />
        <text
          x="384"
          y="130"
          textAnchor="middle"
          fill={colors.hLetter}
          style={{
            fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
            fontSize: '46px',
            fontWeight: 400,
          }}
        >
          H
        </text>
      </g>

      {/* Subtítulo inferior */}
      {showTagline && (
        <text
          className={`tagline-${uid}`}
          x="260"
          y="398"
          textAnchor="middle"
          fill={colors.tagline}
          style={{
            fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
            fontSize: '22px',
            fontWeight: 600,
            letterSpacing: '-0.01em',
          }}
        >
          Gestión Estratégica y Operación Hotelera
        </text>
      )}
    </svg>
  );
};