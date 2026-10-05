import { useEffect, useRef, useState } from 'react';
import { APPROACH_STEPS } from '@/data/content';
import SectionTitle from '@/components/primitives/SectionTitle';

type Step = (typeof APPROACH_STEPS)[number];

function CardTitle({ step }: { step: Step }) {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <div className="flex items-center gap-4 shrink-0">
        <span className="font-label font-bold text-[38px] text-brand uppercase">
          {step.number}
        </span>
        <div className="w-[72px] h-[6px] bg-brand" aria-hidden="true" />
      </div>
      <h3 className="font-label font-bold text-[clamp(22px,3vw,38px)] text-brand uppercase leading-tight">
        {step.titleSans}{' '}
        <em className="font-display font-normal not-italic italic">{step.titleSerif}</em>
      </h3>
    </div>
  );
}

function CardBody({ step, focused }: { step: Step; focused: boolean }) {
  const bg = focused ? '#E6D7E5' : '#F8EFF3';

  if (step.number === '03') {
    const leftBracket =
      'M25.9273 93.4021C27.0319 93.4021 27.9273 92.5067 27.9273 91.4021V73.4021C27.9273 72.2975 27.0319 71.4021 25.9273 71.4021C24.8228 71.4021 23.9273 72.2975 23.9273 73.4021V89.4021H7.92735C6.82278 89.4021 5.92735 90.2975 5.92735 91.4021C5.92735 92.5067 6.82278 93.4021 7.92735 93.4021H25.9273ZM24.5956 1.41421L23.1814 0C7.77152 15.4099 -0.196385 30.5011 0.00367641 46.0059C0.203535 61.4949 8.54938 76.8526 24.5131 92.8163L25.9273 91.4021L27.3416 89.9879C11.7239 74.3703 4.18398 59.9539 4.00334 45.9543C3.82291 31.9704 10.9798 17.8584 26.0098 2.82843L24.5956 1.41421Z';
    const rightBracket =
      'M2 0C0.89543 0 0 0.89543 0 2V20C0 21.1046 0.89543 22 2 22C3.10457 22 4 21.1046 4 20V4H20C21.1046 4 22 3.10457 22 2C22 0.89543 21.1046 0 20 0H2ZM3.37419 94.856L4.7884 96.2702C20.6834 80.3753 28.8923 64.8186 28.6862 48.8439C28.4803 32.885 19.8813 17.0528 3.41421 0.585786L2 2L0.585786 3.41421C16.7067 19.5351 24.4998 34.4259 24.6865 48.8955C24.873 63.3493 17.4751 77.9267 1.95998 93.4418L3.37419 94.856Z';
    return (
      <div
        className="w-full max-w-[930px] rounded-[32px] overflow-hidden transition-colors duration-300"
        style={{ background: bg }}
      >
        <div className="flex items-center gap-4 p-6 md:p-10">
          <div className="shrink-0 self-stretch flex items-center">
            <svg width="28" height="94" viewBox="0 0 27.9273 93.4021" fill="none" aria-hidden="true">
              <path d={leftBracket} fill="#7892C5" />
            </svg>
          </div>
          <div className="flex flex-col gap-6 flex-1 min-w-0">
            <CardTitle step={step} />
            <div className="flex flex-col gap-1">
              <h4 className="font-label text-[clamp(18px,2.5vw,28px)] text-brand uppercase leading-tight">
                Production of <em className="font-display font-normal not-italic italic">Components</em>
              </h4>
              <p className="font-label font-extrabold text-[18px] text-brand uppercase leading-7">BlackPaws secret sauce</p>
              <p className="font-body text-[16px] text-brand leading-7">
                Our experts work in-house or alongside your teams to produce the necessary elements: user research, user flows, wireframes, mock-ups, technical architecture, back-end and front-end development, user testing, etc.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-label text-[clamp(18px,2.5vw,28px)] text-brand uppercase leading-tight">
                Milestone validation <em className="font-display font-normal not-italic italic">workshops</em>
              </h4>
              <p className="font-label font-extrabold text-[18px] text-brand uppercase leading-7">We build together, as a team!</p>
              <p className="font-body text-[16px] text-brand leading-7">
                {"At each stage, we correct, adjust, and validate together. You share your constraints, and we propose solutions! You give your approval at the end of each stage before moving on to the next. It's a solid, well-established process that allows you to remain calm throughout the project and ensure that decisions are sustainable for the future."}
              </p>
            </div>
          </div>
          <div className="shrink-0 self-stretch flex items-center">
            <svg width="29" height="97" viewBox="0 0 28.69 96.2702" fill="none" aria-hidden="true">
              <path d={rightBracket} fill="#7892C5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-full max-w-[930px] rounded-[32px] overflow-hidden transition-colors duration-300 ${
        step.number === '04' ? '-translate-y-20 md:translate-y-0' : ''
      }`}
      style={{ background: bg }}
    >
      <div className="flex flex-col gap-4 p-10">
        <CardTitle step={step} />
        <div className="flex flex-col gap-1">
          <p className="font-label font-extrabold text-[18px] text-brand uppercase leading-7">{step.subtitle}</p>
          <p className="font-body text-[16px] text-brand leading-7">{step.description}</p>
        </div>
      </div>
    </div>
  );
}

// Per-card scroll heights: index 2 reduced (less space before 03), index 3 increased (more space after 03)
const CARD_SCROLL_HEIGHTS = [380, 380, 260, 500, 380];
const STICKY_TOP = 160;

export default function ApproachSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    const wrappers = cards.map((c) => c.parentElement as HTMLElement);
    if (!cards.length) return;

    const update = () => {
      const scrollY = window.scrollY;

      cards.forEach((card, i) => {
        let fullDepth = 0;
        for (let j = i + 1; j < cards.length; j++) {
          const wTop = wrappers[j].getBoundingClientRect().top + scrollY;
          if (scrollY + STICKY_TOP >= wTop) fullDepth++;
        }

        let partial = 0;
        const nextJ = i + fullDepth + 1;
        if (nextJ < cards.length) {
          const nTop = wrappers[nextJ].getBoundingClientRect().top + scrollY;
          const animEnd = nTop - STICKY_TOP;
          const animStart = animEnd - 120;
          partial = Math.max(0, Math.min(1, (scrollY - animStart) / (animEnd - animStart)));
        }

        const depth = fullDepth + partial;
        const scale = Math.max(0.5, 1 - depth * 0.14);
        const rotateX = -depth * 12;

        card.style.transform = `perspective(400px) rotateX(${rotateX}deg) scale(${scale})`;
        card.style.transformOrigin = '50% top';
      });

      let active = 0;
      for (let i = 0; i < cards.length; i++) {
        const wTop = wrappers[i].getBoundingClientRect().top + scrollY;
        if (scrollY + STICKY_TOP >= wTop) active = i;
      }
      setActiveIndex(active);
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <section id="approach" ref={sectionRef} className="w-full">
      <div className="max-w-[1280px] mx-auto px-10 md:px-[170px] flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <SectionTitle>Our approach</SectionTitle>
          <p className="font-body text-[clamp(18px,3vw,32px)] text-brand max-w-[930px]">
            A proven process on +50 projects that ensures yours will be delivered on time, on
            budget, and exceeds expectations.
          </p>
        </div>

        <div
          ref={stackRef}
          style={{ height: `${CARD_SCROLL_HEIGHTS.reduce((a, b) => a + b, 0)}px`, position: 'relative' }}
        >
          {APPROACH_STEPS.map((step, i) => (
            <div
              key={step.number}
              style={{
                height: `${CARD_SCROLL_HEIGHTS[i]}px`,
                position: 'sticky',
                top: '140px',
              }}
            >
              <div
                ref={(el) => { cardRefs.current[i] = el; }}
                style={{ willChange: 'transform' }}
              >
                <CardBody step={step} focused={activeIndex === i} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
