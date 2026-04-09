'use client';

interface SectionConfig {
  startPct: number;
  endPct: number;
  position: 'bottom-left' | 'top-right' | 'center';
  label: string;
  headline?: string;
  headlinePx?: number;
  headlineWeight?: number;
  headlineItalic?: boolean;
  headlineGold?: boolean;
  headlineColor?: string;
  logoUrl?: string;
  subtext: string;
  showCTA?: boolean;
}

const SECTIONS: SectionConfig[] = [
  {
    startPct: 0,
    endPct: 22,
    position: 'center',
    label: 'Premium & Custom Cakes',
    logoUrl: 'https://res.cloudinary.com/dfdudj4iy/image/upload/v1775000630/a-one-logo_rfrpic.png',
    subtext: 'Artistry in Every Slice — baked fresh, customized, and made to order.',
    showCTA: true,
  },
  {
    startPct: 30,
    endPct: 55,
    position: 'bottom-left',
    label: 'Custom Cakes Made Fresh',
    headline: 'Made Fresh\nTo Order.',
    headlinePx: 78,
    headlineWeight: 700,
    headlineColor: '#FFFFFF',
    subtext: 'Flavoursome • Fresh • Custom — every masterpiece tailored just for you.',
  },
  {
    startPct: 60,
    endPct: 78,
    position: 'top-right',
    label: 'Our Selection',
    headline: 'Explore\nOur Cakes.',
    headlinePx: 84,
    headlineWeight: 700,
    headlineGold: true,
    subtext: 'Best Sellers · Wedding Cakes · Birthday Cakes — sweet perfection for any occasion.',
  },
  {
    startPct: 84,
    endPct: 96,
    position: 'center',
    label: '',
    headline: 'Order Now.',
    headlinePx: 96,
    headlineWeight: 800,
    headlineColor: '#FFFFFF',
    subtext: 'Fresh, beautiful, golden — exactly the way you want them.',
    showCTA: true,
  },
];

function calcOpacity(
  progressPct: number,
  startPct: number,
  endPct: number
): number {
  const fadeIn = 2;
  const fadeOut = 2;

  if (progressPct < startPct - fadeIn || progressPct > endPct + fadeOut)
    return 0;
  if (progressPct < startPct)
    return (progressPct - (startPct - fadeIn)) / fadeIn;
  if (progressPct > endPct) return 1 - (progressPct - endPct) / fadeOut;
  return 1;
}

function getPositionStyle(
  position: SectionConfig['position']
): React.CSSProperties {
  switch (position) {
    case 'bottom-left':
      return {
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        textAlign: 'left',
        width: '90%',
      };
    case 'top-right':
      return {
        position: 'absolute',
        top: '12%',
        right: '5%',
        textAlign: 'right',
        width: '90%',
      };
    case 'center':
      return {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        width: '90%',
        maxWidth: '900px',
      };
  }
}

function getHeadlineStyle(section: SectionConfig): React.CSSProperties {
  const base: React.CSSProperties = {
    fontFamily: 'var(--font-serif, "Playfair Display", serif)',
    fontSize: `clamp(40px, 9vw, ${section.headlinePx}px)`,
    fontWeight: section.headlineWeight,
    fontStyle: section.headlineItalic ? 'italic' : 'normal',
    lineHeight: 1.05,
    whiteSpace: 'pre-line',
    display: 'block',
    filter: 'drop-shadow(0 4px 24px rgba(0,0,0,0.5))',
    letterSpacing: '-0.02em',
  };

  if (section.headlineGold) {
    return {
      ...base,
      background: 'linear-gradient(135deg, #E4B863 0%, #C8973A 50%, #A07828 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    };
  }
  return { ...base, color: section.headlineColor ?? '#FFFFFF' };
}

interface Props {
  progress: number;
}

export default function TextOverlay({ progress }: Props) {
  const progressPct = progress * 100;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Dark vignette overlay for text readability */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.55)_100%)] pointer-events-none" />

      {SECTIONS.map((section, i) => {
        const opacity = calcOpacity(progressPct, section.startPct, section.endPct);
        if (opacity === 0) return null;

        return (
          <div
            key={i}
            style={{
              ...getPositionStyle(section.position),
              opacity,
              transition: 'opacity 0.4s ease, transform 0.4s ease',
              zIndex: 2,
              pointerEvents: section.showCTA ? 'auto' : 'none',
              transform: section.position === 'center'
                ? `translate(-50%, calc(-50% + ${(1 - opacity) * 20}px))`
                : `translateY(${(1 - opacity) * 20}px)`,
            }}
          >
            {section.label && (
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(9px, 1vw, 11px)',
                  letterSpacing: '4px',
                  color: '#C8973A',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                  textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                }}
              >
                — {section.label} —
              </span>
            )}

            {section.logoUrl ? (
              <img
                src={section.logoUrl}
                alt="A-One Logo"
                style={{
                  maxWidth: '350px',
                  width: '90%',
                  margin: section.position === 'center' ? '0 auto' : '0',
                  filter: 'drop-shadow(0 4px 24px rgba(0,0,0,0.5))',
                  display: 'block'
                }}
              />
            ) : (
              section.headline && <span style={getHeadlineStyle(section)}>{section.headline}</span>
            )}

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(13px, 1.5vw, 16px)',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.85)',
                marginTop: '20px',
                lineHeight: 1.7,
                maxWidth: '480px',
                textShadow: '0 2px 10px rgba(0,0,0,0.6)',
                marginLeft: section.position === 'center' ? 'auto' : undefined,
                marginRight: section.position === 'center' ? 'auto' : undefined,
                textAlign: section.position === 'top-right' ? 'right' : section.position === 'center' ? 'center' : 'left',
              }}
            >
              {section.subtext}
            </p>

            {section.showCTA && (
              <div 
                className={`flex flex-col sm:flex-row gap-4 mt-8 ${section.position === 'center' ? 'items-center justify-center' : 'items-start justify-start'}`}
              >
                <a
                  href="#contact"
                  className="inline-flex text-center justify-center"
                  style={{
                    padding: '14px 36px',
                    background: 'linear-gradient(135deg, #E4B863, #C8973A)',
                    color: '#000000',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    boxShadow: '0 8px 30px rgba(200,151,58,0.5)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Book Your Cake →
                </a>
                <a
                  href="#collections"
                  className="inline-flex text-center justify-center"
                  style={{
                    padding: '14px 36px',
                    background: 'transparent',
                    color: '#FFFFFF',
                    border: '2px solid rgba(255,255,255,0.6)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  View Menu
                </a>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
