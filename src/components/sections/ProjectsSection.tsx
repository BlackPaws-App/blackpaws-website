import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import imgProject1 from '@imports/4a4da4a72a3ff6f5602e1935ba9d62a5d339ede6.png';
import imgProject2 from '@/imports/source-project-thumbnail.png';
import imgProject3 from '@/imports/image-1.png';
import imgProject4 from '@/imports/image-13.png';
import imgProject5 from '@/imports/image-14.png';
import imgProject6 from '@/imports/image-15.png';
import imgLogoPays from '@/imports/PaysCathare_logo.png';
import imgLogoSource from '@/imports/Source_logo.png';
import imgLogoAirbnb from '@/imports/Group22/89689a22b9a774481728fd729a48b040b536e769.png';
import imgLogoBouygues from '@/imports/RcbtSolution/d5b2e4ec084b5542714fed2d4abb2cc5c0d480d6.png';
import TravelLogo from '@/imports/TravelLogo/index';
import GekomedLogoWhite from '@/imports/GekomedLogoWhite1/index';
import { PROJECTS } from '@/data/content';
import Tag from '@/components/primitives/Tag';
import SectionTitle from '@/components/primitives/SectionTitle';

const PROJECT_IMAGES: Record<string, string> = {
  'project-1': imgProject1,
  'project-2': imgProject2,
  'project-3': imgProject3,
  'project-4': imgProject4,
  'project-5': imgProject5,
  'project-6': imgLogoBouygues,
};

const PROJECT_LOGOS: Record<string, string | 'travel-svg' | 'gekomed-svg'> = {
  'project-1': imgLogoPays,
  'project-2': imgLogoSource,
  'project-3': 'gekomed-svg',
  'project-4': imgLogoAirbnb,
  'project-5': 'travel-svg',
  'project-6': imgProject6,
};

type Project = (typeof PROJECTS)[number];

function ProjectCard({ project }: { project: Project }) {
  const imgSrc = PROJECT_IMAGES[project.id] || project.image || null;
  const logo = PROJECT_LOGOS[project.id];
  const isTravelSvg = logo === 'travel-svg';
  const isGekomedSvg = logo === 'gekomed-svg';

  return (
    <Link
      to={`/projects/${project.id}`}
      aria-label={`Voir le projet ${project.title}`}
      className={`relative rounded-[48px] overflow-hidden bg-brand/10 ${
        project.large ? 'w-full h-[390px]' : 'flex-1 min-w-[280px] h-[390px]'
      } group cursor-pointer block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand`}
    >
      {/* Image */}
      <div className="absolute inset-0 overflow-hidden">
        {imgSrc && (
          <img
            src={imgSrc}
            alt={`Aperçu du projet ${project.title}`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      {/* Gradients overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(31,19,45,0.98) 0%, rgba(67,43,96,0.8) 32%, rgba(67,43,96,0) 58%)',
          mixBlendMode: 'multiply',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, #54648e, #ffd8e4)',
          mixBlendMode: 'hard-light',
          opacity: 0.7,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-8">
        <div className="flex items-start justify-between">
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
          <span className="font-body font-bold text-[32px] text-brand" aria-hidden="true">
            →
          </span>
        </div>

        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-display text-[18px] leading-snug text-white">{project.title}</p>
            <p className="font-label font-extrabold text-[12px] text-white uppercase tracking-wide">
              {project.client}
            </p>
          </div>
          {logo && !isTravelSvg && !isGekomedSvg && (
            <img src={logo as string} alt={`Logo ${project.client}`} className="shrink-0 w-28 h-28 object-contain drop-shadow-lg" />
          )}
          {isTravelSvg && (
            <div className="shrink-0 w-28 h-28 relative">
              <TravelLogo />
            </div>
          )}
          {isGekomedSvg && (
            <div className="shrink-0 relative" style={{ width: '116px', height: '20px' }}>
              <GekomedLogoWhite />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

function ExpandableRow({ projects, expanded }: { projects: Project[]; expanded: boolean }) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [innerHeight, setInnerHeight] = useState(0);

  // Measure inner height once mounted and on resize
  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setInnerHeight(el.offsetHeight);
    });
    ro.observe(el);
    setInnerHeight(el.offsetHeight);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      style={{
        height: expanded ? `${innerHeight}px` : '0px',
        overflow: 'hidden',
        transition: 'height 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)',
      }}
    >
      <div ref={innerRef}>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6"
          style={{
            opacity: expanded ? 1 : 0,
            transform: expanded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s',
          }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [large, ...rest] = PROJECTS;
  const visible = rest.slice(0, 2);
  const extra = rest.slice(2);
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="projects" className="w-full">
      <div className="max-w-[1280px] mx-auto px-10 md:px-[170px] flex flex-col gap-7 items-center">
        <SectionTitle className="w-full">Projects</SectionTitle>

        <div className="flex flex-col gap-6 w-full max-w-[930px]">
          <ProjectCard project={large} />
          <div className="flex flex-col sm:flex-row gap-6">
            {visible.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

          {/* Extra projects row — animated expand */}
          {extra.length > 0 && (
            <ExpandableRow projects={extra} expanded={expanded} />
          )}
        </div>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="inline-flex items-center gap-4 px-12 h-[54px] rounded-[48px] bg-periwinkle font-body text-[22px] text-brand whitespace-nowrap hover:opacity-80 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand cursor-pointer"
        >
          {expanded ? 'Show less' : 'See more projects'}
          <svg
            width="10"
            height="18"
            viewBox="0 0 10.4246 17.7716"
            fill="none"
            aria-hidden="true"
            className="shrink-0 transition-transform duration-300"
            style={{ transform: expanded ? 'rotate(90deg)' : 'rotate(-90deg)' }}
          >
            <path d="M9.4246 1L1.4245 8.88581L9.4246 16.7716" stroke="#432B60" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </section>
  );
}
