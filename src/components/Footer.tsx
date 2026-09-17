import { useLocation } from 'react-router-dom';
import { FOOTER } from '@/data/content';
import Button from './primitives/Button';
import svgPaths from '@imports/svg-hwmizm4k00';
import { scrollToSection } from '@/utils/scrollToSection';

export default function Footer() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <footer
      id="contact"
      className="w-full"
      style={{ background: 'linear-gradient(to bottom, rgba(231,193,207,0) 0%, #e7c1cf 100%)' }}
    >
      <div className="max-w-[1280px] mx-auto px-10 md:px-[170px]">
        <div className="flex flex-col gap-16 pt-10 pb-4">
          {/* Footer content */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-[200px]">
            {/* Contact block */}
            <div className="flex flex-col gap-8 lg:w-[400px] shrink-0">
              <h2 className="font-display font-bold text-[42px] leading-tight text-brand">
                {FOOTER.contact.headline}
              </h2>
              <p className="font-body text-[22px] text-brand">{FOOTER.contact.subheadline}</p>
              <Button href={FOOTER.contact.ctaHref} variant="primary">
                {FOOTER.contact.cta}
              </Button>
            </div>

            {/* Plan + address */}
            <div className="flex flex-col gap-8 flex-1">
              {/* Site plan */}
              <nav aria-label="Plan du site" className="flex flex-col gap-4">
                {FOOTER.nav.map(({ label, href }) => (
                  <a
                    key={href}
                    href={isHome ? href : `/${href}`}
                    onClick={(e) => {
                      if (isHome) { e.preventDefault(); scrollToSection(href); }
                    }}
                    className="font-body text-[22px] text-brand hover:opacity-70 transition-opacity cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    {label}
                  </a>
                ))}
              </nav>

              {/* Address + social */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 16 20"
                    fill="none"
                    aria-hidden="true"
                    className="shrink-0"
                  >
                    <path d={svgPaths.p2fcac600} fill="#432B60" />
                  </svg>
                  <a
                    href="https://maps.google.com/?q=122+Rue+Amelot,+75011+Paris,+France"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-[16px] text-brand whitespace-nowrap hover:opacity-70 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    {FOOTER.address}
                  </a>
                </div>

                <a
                  href={FOOTER.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-4 h-[38px] rounded-[30px] border border-brand font-label font-bold text-[14px] text-brand w-fit hover:bg-brand hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  <svg
                    width="21"
                    height="21.84"
                    viewBox="0 0 21 21.84"
                    fill="none"
                    aria-hidden="true"
                  >
                    <g clipPath="url(#footer-github-clip)">
                      <path
                        clipRule="evenodd"
                        d={svgPaths.p4fe4000}
                        fill="currentColor"
                        fillRule="evenodd"
                      />
                    </g>
                    <defs>
                      <clipPath id="footer-github-clip">
                        <rect fill="white" height="21.84" width="21" />
                      </clipPath>
                    </defs>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Legal */}
          <p className="text-center font-body text-[14px] text-brand">
            {FOOTER.legal} —{' '}
            <a
              href="/mentions-legales"
              className="underline hover:opacity-70 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Mentions légales
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
