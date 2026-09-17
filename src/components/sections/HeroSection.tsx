import imgPaw from '@imports/paw_lp.png';
import Header from '@/components/Header';
import Button from '@/components/primitives/Button';
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
      <div className="relative max-w-[1280px] mx-auto px-10 md:px-[170px] pt-8 pb-[140px] md:pb-[271px] flex flex-col gap-[100px] md:gap-[167px]">
        {/* Decorative paw */}
        <img
          src={imgPaw}
          alt=""
          aria-hidden="true"
          className="absolute top-[10%] right-[6%] w-[40vw] max-w-[615px] pointer-events-none select-none opacity-70 lg:opacity-100"
          style={{ top: '194px', right: 'calc(50% - 635px - 300px)', minWidth: '280px', marginTop: 0, marginBottom: 0 }}
        />

        <Header transparent />

        {/* Tagline */}
        <div className="flex flex-col gap-4 max-w-[930px] relative z-10 mt-[150px]">
          <h1
            className="font-display font-bold text-[clamp(32px,5vw,52px)] leading-tight text-white"
            style={{ textShadow: '0px 0px 48px rgba(67,43,96,0.3)' }}
          >
            {HERO.headline}
          </h1>
          <p className="font-body text-[clamp(18px,3vw,28px)] text-white max-w-[648px]">
            {HERO.subheadline}
          </p>
        </div>
      </div>
    </section>
  );
}
