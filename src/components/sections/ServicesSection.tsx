import { useState, useRef } from 'react';
import imgWorkshop from '@/imports/consulting-workshops.png';
import imgReview from '@/imports/consulting-technical-review.png';
import imgRequirements from '@/imports/consulting-requirement-analysis.png';
import imgIdeation from '@/imports/design-ideation.png';
import imgProduction from '@/imports/design-production.png';
import imgQualityControl from '@/imports/design-quality-control.png';
import imgWebDevelopment from '@/imports/development-web-application.png';
import imgMobileDevelopment from '@/imports/development-mobile-application.png';
import imgApiDevelopment from '@/imports/development-api.png';
import imgFundraising from '@/imports/prototyping-fundraising.png';
import imgUserTests from '@/imports/prototyping-user-tests.png';
import imgAcceleratedDevelopment from '@/imports/prototyping-accelerated-development.png';
import { SERVICES } from '@/data/content';
import Button from '@/components/primitives/Button';

const SERVICE_IMAGES: Record<string, string> = {
  Workshops: imgWorkshop,
  'Technical review': imgReview,
  'Requirement analysis': imgRequirements,
  Ideation: imgIdeation,
  Production: imgProduction,
  'Quality control': imgQualityControl,
  'Web Application Development': imgWebDevelopment,
  'Mobile Application Development': imgMobileDevelopment,
  'API Development': imgApiDevelopment,
  Fundraising: imgFundraising,
  'Users tests': imgUserTests,
  'Accelerated development': imgAcceleratedDevelopment,
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="24"
      viewBox="0 0 16.8491 27.6573"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-500 ${open ? 'rotate-90' : '-rotate-90 scale-y-[-1]'}`}
    >
      <path
        d="M14.8491 2L2.849 13.8287L14.8491 25.6573"
        stroke="#432B60"
        strokeLinecap="round"
        strokeOpacity="0.2"
        strokeWidth="4"
      />
    </svg>
  );
}

type Service = (typeof SERVICES)[number];

function MobileCarousel({ service }: { service: Service }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const dragStartScroll = useRef<number>(0);
  const DRAG_THRESHOLD = 40;

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    setActiveIdx(idx);
  };

  const goTo = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: idx * el.clientWidth, behavior: 'smooth' });
    setActiveIdx(idx);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    dragStartScroll.current = scrollRef.current?.scrollLeft ?? 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const el = scrollRef.current;
    if (!el) return;
    const delta = dragStartX.current - e.clientX;
    el.scrollLeft = dragStartScroll.current + delta;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const delta = dragStartX.current - e.clientX;
    dragStartX.current = null;
    const el = scrollRef.current;
    if (!el) return;
    if (Math.abs(delta) >= DRAG_THRESHOLD) {
      const next = delta > 0
        ? Math.min(activeIdx + 1, service.items.length - 1)
        : Math.max(activeIdx - 1, 0);
      goTo(next);
    } else {
      goTo(activeIdx);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Horizontally scrollable items */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing select-none"
        style={{ scrollbarWidth: 'none' }}
      >
        {service.items.map((item) => (
          <div
            key={item.title}
            className="flex-none w-full snap-center flex flex-col gap-6 pr-4"
          >
            <img
              src={SERVICE_IMAGES[item.title] ?? item.image}
              alt=""
              width={90}
              height={90}
              loading="lazy"
              className="w-[90px] h-[90px] object-cover rounded-2xl shrink-0"
            />
            <div className="flex flex-col gap-2">
              <p className="font-body font-bold text-[16px] text-brand">{item.title}</p>
              <p className="font-body text-[16px] text-brand/80">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3" aria-hidden="true">
        {service.items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-200 cursor-pointer ${
              i === activeIdx ? 'w-2 h-2 bg-rose' : 'w-1.5 h-1.5 bg-brand/20'
            }`}
          />
        ))}
      </div>

      {/* CTA */}
      <Button href="/contact" variant="secondary" className="w-full justify-center">
        {"Let's talk"}
      </Button>
    </div>
  );
}

function ServiceItem({
  service,
  open,
  onToggle,
}: {
  service: Service;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="w-full">
      <button
        type="button"
        id={`service-btn-${service.id}`}
        aria-expanded={open}
        aria-controls={`service-panel-${service.id}`}
        onClick={onToggle}
        className={`w-full flex items-center justify-between pr-12 cursor-pointer ${open ? 'h-[123px]' : 'h-[100px]'} rounded-[48px] transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand`}
      >
        <div className="flex items-center gap-4 md:gap-6 flex-1 min-w-0">
          <div
            className={`bg-brand shrink-0 transition-all duration-500 ${
              open
                ? 'h-[4px] w-[32px] md:h-[6px] md:w-[52px] opacity-100'
                : 'w-0 opacity-0 h-[4px] md:h-[6px]'
            }`}
            aria-hidden="true"
          />
          <h3 className="font-display font-bold text-[26px] md:text-[clamp(28px,3.5vw,42px)] text-brand whitespace-nowrap">
            {service.title}
          </h3>
        </div>
        <ChevronIcon open={open} />
      </button>

      {/* Animated panel */}
      <div
        id={`service-panel-${service.id}`}
        role="region"
        aria-labelledby={`service-btn-${service.id}`}
        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-6 pb-6">
            <p className="font-body text-[16px] md:text-[22px] text-brand">{service.summary}</p>

            {service.items.length > 0 && (
              <div className="flex flex-col gap-8 py-6">
                {/* Mobile: horizontal carousel */}
                <div className="md:hidden">
                  <MobileCarousel service={service} />
                </div>

                {/* Desktop: vertical list */}
                <div className="hidden md:flex flex-col gap-4 md:px-[150px]">
                  {service.items.map((item) => (
                    <div key={item.title} className="flex gap-6 items-start">
                      <img
                        src={SERVICE_IMAGES[item.title] ?? item.image}
                        alt=""
                        width={90}
                        height={90}
                        loading="lazy"
                        className="w-[90px] h-[90px] object-cover rounded-2xl shrink-0"
                      />
                      <div className="flex flex-col gap-2">
                        <p className="font-body font-bold text-[16px] text-brand">{item.title}</p>
                        <p className="font-body text-[16px] text-brand/80">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex justify-center">
                  <Button href="/contact" variant="secondary">
                    {"Let's talk"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="h-[2px] bg-brand/20 w-full" aria-hidden="true" />
    </div>
  );
}

export default function ServicesSection() {
  const [openId, setOpenId] = useState<string>(SERVICES[0].id);

  return (
    <section id="services" className="w-full">
      <div className="max-w-[1280px] mx-auto px-10 md:px-[170px]">
        <div className="max-w-[930px] mx-auto flex flex-col">
          {SERVICES.map((service) => (
            <ServiceItem
              key={service.id}
              service={service}
              open={openId === service.id}
              onToggle={() => setOpenId(openId === service.id ? '' : service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
