import { useParams, Link } from 'react-router-dom';
import { getCaseStudy, getAdjacentProjects, type CaseStudy, type CaseStudySection } from '@/data/caseStudies';
import Tag from '@/components/primitives/Tag';
import Button from '@/components/primitives/Button';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import csPaths from '@/imports/ProjectPageTemplate/svg-lp82fqla5m';

function ProjectHero({ study }: { study: CaseStudy }) {
  return (
    <div className="w-full flex flex-col items-center gap-10 pb-0 mt-[150px]">
      {/* Title block */}
      <div className="w-full max-w-[1280px] mx-auto px-10 md:px-[170px] flex flex-col gap-6">
        <h1 className="font-display font-bold text-[clamp(28px,3.5vw,42px)] text-brand leading-tight">
          {study.title}
        </h1>

        {/* Subtitle */}
        <div className="flex items-center gap-5">
          <div className="w-[50px] h-[4px] bg-brand shrink-0" aria-hidden="true" />
          <p className="font-body text-[22px] text-brand">{study.subtitle}</p>
        </div>

        {/* Tags + logo */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex flex-wrap gap-4">
            {study.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
          {study.clientLogo && (
            <img
              src={study.clientLogo}
              alt={`Logo ${study.subtitle}`}
              className={`${study.id === 'project-1' ? 'h-[43px]' : 'h-[72px]'} w-auto object-contain shrink-0`}
            />
          )}
        </div>
      </div>

      {/* Cover image */}
      {study.heroImage && (
        <div className="w-full h-[350px] relative overflow-hidden">
          <img
            src={study.heroImage}
            alt={`Couverture du projet ${study.title}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Color overlay matching project card treatment */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, #432b60 0%, rgba(67,43,96,0) 30%)',
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
        </div>
      )}
    </div>
  );
}

function SectionBlock({ section }: { section: CaseStudySection }) {
  const imageEl = (
    <div className="h-[350px] overflow-hidden rounded-[48px] shrink-0 w-full sm:w-[400px]">
      <img
        src={section.image}
        alt=""
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );

  const textEl = (
    <div className="flex flex-col gap-3 flex-1 min-w-0">
      {section.text.map((p, i) => (
        <p key={i} className="font-body text-[16px] text-brand leading-relaxed">
          {p}
        </p>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Section heading */}
      <div className="flex items-center gap-6">
        <img
          src={section.icon}
          alt=""
          aria-hidden="true"
          className="w-[100px] h-[100px] object-cover shrink-0"
        />
        <p className="font-display italic text-[clamp(24px,3vw,38px)] text-brand uppercase">
          {section.label}
        </p>
      </div>

      {/* Content row */}
      <div className="relative flex flex-col sm:flex-row gap-8 items-start pb-12 border-b border-brand/20">
        {section.imageLeft ? imageEl : textEl}
        {section.imageLeft ? textEl : imageEl}
      </div>
    </div>
  );
}

function ProjectDescription({ study }: { study: CaseStudy }) {
  return (
    <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-14 px-10 md:px-[170px]">
      {/* Intro */}
      {study.intro.length > 0 && (
        <div className="flex flex-col gap-2">
          {study.intro.map((p, i) => (
            <p key={i} className="font-body text-[clamp(16px,2vw,22px)] text-brand leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      )}

      {/* Sections */}
      {study.sections.length > 0 && (
        <div className="flex flex-col gap-14 px-0 md:px-0">
          {study.sections.map((section) => (
            <SectionBlock key={section.label} section={section} />
          ))}
        </div>
      )}

      {/* Outro */}
      {study.outro.length > 0 && (
        <div className="flex flex-col gap-2">
          {study.outro.map((p, i) => (
            <p key={i} className="font-body text-[clamp(16px,2vw,22px)] text-brand leading-relaxed">
              {p}
            </p>
          ))}
          {study.outroLink && (
            <p className="font-body text-[clamp(16px,2vw,22px)] text-brand leading-relaxed">
              {"To try it out for yourself, just go to: "}
              <a
                href={study.outroLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-70 transition-opacity"
              >
                {study.outroLink.text}
              </a>
            </p>
          )}
        </div>
      )}

      {/* Coming soon placeholder */}
      {study.sections.length === 0 && (
        <p className="font-body text-[22px] text-brand/50 text-center py-20">
          Case study coming soon.
        </p>
      )}
    </div>
  );
}

function CaseStudyCTAs() {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      <Button href="/#services" variant="primary">
        Discover our services
      </Button>
      <Button href="/contact" variant="secondary">
        {"Let's talk"}
      </Button>
    </div>
  );
}

function PrevNext({ prev, next }: { prev?: CaseStudy; next?: CaseStudy }) {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1280px] mx-auto px-10 md:px-[170px] py-8 flex items-center justify-between">
        {prev ? (
          <Link
            to={`/projects/${prev.id}`}
            className="flex items-center gap-4 group"
            aria-label={`Projet précédent: ${prev.title}`}
          >
            <svg width="21" height="15" viewBox="0 0 21.1655 14.7279" fill="none" aria-hidden="true" className="rotate-180 shrink-0">
              <path d={csPaths.p1005b100} fill="#e7c1cf" />
            </svg>
            <span className="font-label font-extrabold text-[16px] text-rose uppercase group-hover:opacity-70 transition-opacity">
              Previous project
            </span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            to={`/projects/${next.id}`}
            className="flex items-center gap-4 group"
            aria-label={`Projet suivant: ${next.title}`}
          >
            <span className="font-label font-extrabold text-[16px] text-rose uppercase group-hover:opacity-70 transition-opacity">
              Next project
            </span>
            <svg width="21" height="15" viewBox="0 0 21.1655 14.7279" fill="none" aria-hidden="true" className="shrink-0">
              <path d={csPaths.p1005b100} fill="#e7c1cf" />
            </svg>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export default function CaseStudyPage() {
  const { id } = useParams<{ id: string }>();
  const study = getCaseStudy(id ?? '');
  const { prev, next } = getAdjacentProjects(id ?? '');

  if (!study) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
        <p className="font-display text-[32px] text-brand">Project not found</p>
        <Button href="/" variant="secondary">Back to home</Button>
      </div>
    );
  }

  return (
    <div className="bg-white flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-[1280px] mx-auto">
        <Header transparent={false} />
      </div>

      {/* Hero: title + cover */}
      <ProjectHero study={study} />

      {/* Body content */}
      <div className="w-full py-16">
        <ProjectDescription study={study} />
      </div>

      {/* CTAs */}
      <div className="pb-16">
        <CaseStudyCTAs />
      </div>

      {/* Prev / Next */}
      <PrevNext prev={prev} next={next} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
