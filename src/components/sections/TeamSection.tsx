import { useState, useRef } from 'react';
import imgBig from '@imports/Nicolas_ThingLeoh.png';
import imgSmall1 from '@imports/Leslie_Moinet.png';
import imgSmall2 from '@imports/Mylene_Guilly.png';
import imgSmall3 from '@imports/Ophelie_Ledent.png';
import imgSmall4 from '@imports/Melvyn_Fontaine.png';
import imgSmall5 from '@imports/Gregoire_Loupy.png';
import imgSmall6 from '@imports/Jordane_Lelong.png';
import SectionTitle from '@/components/primitives/SectionTitle';
import svgPaths from '@imports/svg-hwmizm4k00';

type TeamMember = {
  name: string;
  role: string;
  handle: string;
  linkedin: string;
  image: string;
  large: boolean;
  objectPosition?: string;
};

const TEAM_MEMBERS: TeamMember[] = [
  { name: 'Nicolas Thing-Leoh', role: 'Founder & CEO', handle: 'Chef de meute', linkedin: 'https://www.linkedin.com/in/nicolas-thing-leoh-3b60a753/', image: imgBig, large: true },
  { name: 'Leslie Moinet', role: 'Lead Designer', handle: 'Aristochatte', linkedin: 'https://www.linkedin.com/in/leslie-moinet-a8927b88/', image: imgSmall1, large: false, objectPosition: '85% top' },
  { name: 'Mylène Guilly', role: 'Product Designer', handle: 'Chat touille', linkedin: 'https://www.linkedin.com/in/myleneguilly/', image: imgSmall2, large: false, objectPosition: '85% top' },
  { name: 'Ophélie Ledent', role: 'Brand Designer', handle: 'Psychopatte', linkedin: 'https://www.linkedin.com/in/ophelie-ledent/', image: imgSmall3, large: false },
  { name: 'Melvyn Fontaine', role: 'Front-end Developer', handle: 'Chat ninja', linkedin: 'https://www.linkedin.com/in/melvyn-fontaine/', image: imgSmall4, large: false },
  { name: 'Grégoire Loupy', role: 'Back-end Developer', handle: 'Maneki neko', linkedin: 'https://www.linkedin.com/in/greg-loupy/?skipRedirect=true', image: imgSmall5, large: false, objectPosition: '70% top' },
  { name: 'Jordane Lelong', role: 'Framer Expert', handle: 'Chat boté', linkedin: 'https://www.linkedin.com/in/jolografik/', image: imgSmall6, large: false, objectPosition: '85% top' },
];

const OVERFLOW = 44;
const CARD_WIDTH = 280; // mobile card px width

function LinkedInIcon({ id }: { id: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="shrink-0">
      <g clipPath={`url(#linkedin-clip-${id})`}>
        <path d={svgPaths.p35db0c80} fill="white" />
      </g>
      <defs>
        <clipPath id={`linkedin-clip-${id}`}>
          <rect fill="white" height="32" width="32" />
        </clipPath>
      </defs>
    </svg>
  );
}

function TeamCard({ member, mobile = false }: { member: TeamMember; mobile?: boolean }) {
  const isMobileSmall = mobile || !member.large;
  return (
    <article
      className={`group relative ${member.large && !mobile ? 'w-full h-[400px]' : 'h-[360px]'}`}
      style={
        member.large && !mobile
          ? undefined
          : { width: `${CARD_WIDTH}px`, flexShrink: 0 }
      }
    >
      <div className="absolute inset-0 bg-periwinkle-40 rounded-[48px]" />

      <div
        className={`absolute bottom-0 overflow-hidden pointer-events-none ${
          member.large && !mobile
            ? 'right-0 w-[360px] rounded-br-[48px]'
            : 'left-0 right-0 rounded-bl-[48px] rounded-br-[48px]'
        }`}
        style={{ top: `-${OVERFLOW}px` }}
      >
        <img
          src={member.image}
          alt={`Photo de ${member.name}`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          style={{
            objectPosition:
              member.large && !mobile
                ? 'right top'
                : (member.objectPosition ?? 'center top'),
          }}
        />
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-[196px] rounded-bl-[48px] rounded-br-[48px]"
        style={{ background: 'linear-gradient(to bottom, rgba(67,43,96,0) 0%, rgba(67,43,96,0.8) 100%)' }}
        aria-hidden="true"
      />

      <div className={`absolute inset-0 flex items-end p-8 ${member.large && !mobile ? 'pb-[48px]' : 'pb-8'}`}>
        <div className="flex items-end justify-between w-full gap-4">
          <div className="flex flex-col gap-[10px] flex-1 min-w-0 text-white">
            <p className={`font-display text-white leading-tight ${member.large && !mobile ? 'text-[42px] font-bold' : 'text-[20px] font-bold'}`}>
              {member.name}
            </p>
            <div className="flex flex-col">
              <p className="font-label font-extrabold text-[14px] uppercase">{member.role}</p>
              <p className="font-body italic text-white text-[14px]">{member.handle}</p>
            </div>
          </div>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn de ${member.name}`}
            className="shrink-0 opacity-80 hover:opacity-100 transition-opacity"
          >
            <LinkedInIcon id={`${member.name}-${mobile ? 'mob' : 'desk'}`} />
          </a>
        </div>
      </div>
    </article>
  );
}

function MobileCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const dragStartScroll = useRef(0);
  const DRAG_THRESHOLD = 40;
  const GAP = 16;

  const slideWidth = CARD_WIDTH + GAP;

  const goTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(idx, TEAM_MEMBERS.length - 1));
    trackRef.current?.scrollTo({ left: clamped * slideWidth, behavior: 'smooth' });
    setActiveIdx(clamped);
  };

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setActiveIdx(Math.round(el.scrollLeft / slideWidth));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    dragStartScroll.current = trackRef.current?.scrollLeft ?? 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const el = trackRef.current;
    if (!el) return;
    el.scrollLeft = dragStartScroll.current + (dragStartX.current - e.clientX);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const delta = dragStartX.current - e.clientX;
    dragStartX.current = null;
    if (Math.abs(delta) >= DRAG_THRESHOLD) {
      goTo(delta > 0 ? activeIdx + 1 : activeIdx - 1);
    } else {
      goTo(activeIdx);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Track */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="flex overflow-x-auto cursor-grab active:cursor-grabbing select-none"
        style={{ gap: `${GAP}px`, scrollbarWidth: 'none', paddingTop: OVERFLOW }}
      >
        {TEAM_MEMBERS.map((m) => (
          <TeamCard key={m.name} member={m} mobile />
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2" aria-label="Navigation équipe">
        {TEAM_MEMBERS.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Membre ${i + 1}`}
            className={`rounded-full transition-all duration-200 cursor-pointer ${
              i === activeIdx ? 'w-2 h-2 bg-rose' : 'w-1.5 h-1.5 bg-brand/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function TeamSection() {
  const [bigMember, ...restMembers] = TEAM_MEMBERS;

  return (
    <section id="team" className="w-full">
      <div className="max-w-[1280px] mx-auto px-10 md:px-[170px] flex flex-col gap-5">
        <SectionTitle>Who are we?</SectionTitle>
        <p className="font-body text-[clamp(18px,3vw,32px)] text-brand">
          Our collective of independent experts
        </p>

        {/* Mobile: carousel */}
        <div className="md:hidden -mx-10">
          <div className="px-10">
            <MobileCarousel />
          </div>
        </div>

        {/* Desktop: large card + grid */}
        <div className="hidden md:flex flex-col gap-10">
          <div style={{ paddingTop: OVERFLOW }}>
            <TeamCard member={bigMember} />
          </div>
          <div
            className="flex flex-wrap gap-x-4 justify-center"
            style={{ paddingTop: OVERFLOW, gap: `${OVERFLOW}px 16px` }}
          >
            {restMembers.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
