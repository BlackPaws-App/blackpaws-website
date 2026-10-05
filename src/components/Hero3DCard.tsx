import { useEffect, useRef } from 'react';
import imgCard from '@/imports/hero-3d-card.png';

export default function Hero3DCard() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef({ rx: 0, ry: 0 });
  const currentRef = useRef({ rx: 0, ry: 0 });

  useEffect(() => {
    const MAX_DEG = 10;

    const onMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const nx = (e.clientX - cx) / cx;
      const ny = (e.clientY - cy) / cy;
      targetRef.current = {
        rx: -ny * MAX_DEG,
        ry: nx * MAX_DEG,
      };
    };

    const animate = () => {
      const lerp = 0.06;
      currentRef.current.rx += (targetRef.current.rx - currentRef.current.rx) * lerp;
      currentRef.current.ry += (targetRef.current.ry - currentRef.current.ry) * lerp;

      const { rx, ry } = currentRef.current;
      const wrap = wrapRef.current;
      if (wrap) {
        wrap.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative select-none"
      style={{
        width: 'clamp(340px, 42vw, 620px)',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
      aria-hidden="true"
    >
      {/* Deep shadow layers — offset copies behind the extrusion, respecting its alpha */}
      {[
        { z: '-42px', opacity: 0.12 },
        { z: '-36px', opacity: 0.08 },
      ].map(({ z, opacity }, i) => (
        <img
          key={i}
          src={imgCard}
          alt=""
          draggable={false}
          className="absolute inset-0 w-full h-auto block pointer-events-none"
          style={{
            transform: `translateZ(${z})`,
            opacity,
            filter: 'blur(0.5px)',
          }}
        />
      ))}

      {/* Pale translucent silhouettes create a glass-like edge as the paw tilts. */}
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={`edge-${i}`}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: [
              'linear-gradient(145deg,',
              'rgba(214,205,228,0.72) 0%,',
              'rgba(150,130,174,0.68) 55%,',
              'rgba(103,79,125,0.72) 100%)',
            ].join(' '),
            transform: `translateZ(${-32 + i * 4}px)`,
            WebkitMaskImage: `url(${imgCard})`,
            WebkitMaskSize: '100% auto',
            WebkitMaskRepeat: 'no-repeat',
            maskImage: `url(${imgCard})`,
            maskSize: '100% auto',
            maskRepeat: 'no-repeat',
          }}
        />
      ))}

      {/* Main face */}
      <div
        className="relative"
        style={{
          transform: 'translateZ(0px)',
          filter: [
            'drop-shadow(0 24px 60px rgba(67,43,96,0.28))',
            'drop-shadow(0 4px 12px rgba(67,43,96,0.16))',
          ].join(' '),
        }}
      >
        <img
          src={imgCard}
          alt="Aperçu d'un projet BlackPaws"
          className="w-full h-auto block"
          draggable={false}
        />

        {/* Glass sheen — mix-blend-mode:overlay so it only tints opaque pixels */}
        <img
          src={imgCard}
          alt=""
          draggable={false}
          className="absolute inset-0 w-full h-auto block pointer-events-none"
          style={{
            mixBlendMode: 'overlay',
            opacity: 0,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.0) 55%)',
            mixBlendMode: 'overlay',
            WebkitMaskImage: `url(${imgCard})`,
            WebkitMaskSize: '100% auto',
            WebkitMaskRepeat: 'no-repeat',
            maskImage: `url(${imgCard})`,
            maskSize: '100% auto',
            maskRepeat: 'no-repeat',
          }}
        />
      </div>
    </div>
  );
}
