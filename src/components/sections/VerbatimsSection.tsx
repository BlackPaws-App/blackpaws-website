import { useState, useRef, useEffect } from 'react';
import { TESTIMONIALS } from '@/data/content';

function ChevronArrow({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      width="22"
      height="41"
      viewBox="0 0 22.4325 41"
      fill="none"
      aria-hidden="true"
      className={direction === 'left' ? '' : 'rotate-180 scale-y-[-1]'}
    >
      <path
        d="M21.4325 1L1.43246 20.5L21.4325 40"
        stroke="#B3C9F5"
        strokeLinecap="round"
        strokeOpacity="0.4"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function VerbatimsSection() {
  const total = TESTIMONIALS.length;

  // current: displayed index, dir: which way new slide enters
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState<'left' | 'right' | null>(null);
  const [animKey, setAnimKey] = useState(0);
  const animating = useRef(false);

  const go = (nextIdx: number, direction: 'left' | 'right') => {
    if (animating.current) return;
    animating.current = true;
    setDir(direction);
    setCurrent(nextIdx);
    setAnimKey((k) => k + 1);
    setTimeout(() => { animating.current = false; }, 380);
  };

  const prev = () => go((current - 1 + total) % total, 'right');
  const next = () => go((current + 1) % total, 'left');

  const testimonial = TESTIMONIALS[current];

  // The entering slide starts offset, then transitions to 0
  const enterFrom = dir === 'left' ? '60px' : dir === 'right' ? '-60px' : '0px';

  return (
    <section aria-label="Témoignages clients" className="w-full">
      <div className="max-w-[1280px] mx-auto px-10 md:px-[170px]">
        <div className="max-w-[930px] mx-auto flex flex-col gap-8">

          {/* Carousel */}
          <div className="flex items-center gap-8">
            <button
              type="button"
              onClick={prev}
              aria-label="Témoignage précédent"
              className="shrink-0 p-1 cursor-pointer transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <ChevronArrow direction="left" />
            </button>

            <div className="flex-1 overflow-hidden">
              <SlideContent key={animKey} enterFrom={enterFrom}>
                <blockquote className="font-display italic text-[clamp(24px,4vw,52px)] text-brand text-center leading-tight">
                  "{testimonial.quote}"
                </blockquote>
              </SlideContent>
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Témoignage suivant"
              className="shrink-0 p-1 cursor-pointer transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <ChevronArrow direction="right" />
            </button>
          </div>

          {/* Author */}
          <div className="text-right">
            <SlideContent key={`author-${animKey}`} enterFrom={enterFrom} delay={40}>
              <p className="font-body font-bold text-[16px] text-brand">{testimonial.author}</p>
              <p className="font-body text-[16px] text-brand">{testimonial.role}</p>
            </SlideContent>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3" role="tablist" aria-label="Navigation témoignages">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === current}
                aria-label={`Témoignage ${i + 1}`}
                onClick={() => go(i, i > current ? 'left' : 'right')}
                className={`rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                  i === current ? 'w-2 h-2 bg-rose' : 'w-1.5 h-1.5 bg-brand/20'
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// Mounts with offset + opacity 0, transitions to natural position
function SlideContent({
  children,
  enterFrom,
  delay = 0,
}: {
  children: React.ReactNode;
  enterFrom: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Set initial state synchronously
    el.style.transform = `translateX(${enterFrom})`;
    el.style.opacity = '0';
    el.style.transition = 'none';

    const id = setTimeout(() => {
      el.style.transition = `transform 0.38s cubic-bezier(0.25,0.8,0.25,1), opacity 0.32s ease`;
      el.style.transform = 'translateX(0)';
      el.style.opacity = '1';
    }, delay);

    return () => clearTimeout(id);
  }, [enterFrom, delay]);

  return <div ref={ref}>{children}</div>;
}
