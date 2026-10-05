import Header from '@/components/Header';
import Hero3DCard from '@/components/Hero3DCard';
import { HERO } from '@/data/content';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{
        background: [
          'linear-gradient(180deg, rgb(182, 183, 232) 78.305%, rgba(182, 183, 232, 0) 130.65%)',
          'linear-gradient(-60.28deg, rgb(255, 211, 188) 0.796%, rgba(255, 211, 188, 0) 70.87%)',
          'linear-gradient(119.44deg, rgba(67, 43, 96, 0.2) 0%, rgba(67, 43, 96, 0) 80.874%)',
        ].join(', '),
      }}
    >
      <div className="relative max-w-[1280px] mx-auto px-10 md:px-[170px] pt-8 pb-[140px] md:pb-[271px]">
        <Header transparent />

        {/* Tagline + 3D card */}
        <div className="flex items-center gap-12 mt-[150px]">
          {/* Text */}
          <div className="flex w-full min-w-0 flex-col gap-4 max-w-[540px] relative z-10 md:w-auto md:shrink-0">
            <h1
              className="font-display font-bold text-[clamp(32px,5vw,52px)] leading-tight text-white"
              style={{ textShadow: '0px 0px 48px rgba(67,43,96,0.3)' }}
            >
              {HERO.headline}
            </h1>
            <p className="font-body text-[clamp(18px,3vw,28px)] text-white max-w-[480px]">
              {HERO.subheadline}
            </p>
          </div>

          {/* 3D card — desktop only */}
          <div className="hidden md:flex flex-1 justify-end relative z-10">
            <Hero3DCard />
          </div>
        </div>
      </div>
    </section>
  );
}
