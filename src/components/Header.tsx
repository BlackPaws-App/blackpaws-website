import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NAV_LINKS, FOOTER } from '@/data/content';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import svgPaths from '@imports/svg-hwmizm4k00';
import { scrollToSection } from '@/utils/scrollToSection';

type HeaderProps = {
  transparent?: boolean;
};

function BlackPawsLogo({ color }: { color: string }) {
  return (
    <div className="w-[85px] h-[85px] shrink-0" aria-label="BlackPaws logo">
      <svg viewBox="0 0 78.4838 62.2135" fill="none" className="w-full h-full">
        <g>
          <path d={svgPaths.pa38b540} fill={color} style={{ transition: 'fill 0.4s ease' }} />
          <path d={svgPaths.p26e2f80} fill={color} style={{ transition: 'fill 0.4s ease' }} />
          <path d={svgPaths.pcca200} fill={color} style={{ transition: 'fill 0.4s ease' }} />
        </g>
      </svg>
    </div>
  );
}

function MobileMenu({ onClose, onNav }: { onClose: () => void; onNav: (href: string) => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col md:hidden menu-enter"
      style={{ background: 'rgba(67,43,96,0.96)' }}
      aria-modal="true"
      role="dialog"
      aria-label="Menu mobile"
    >
      <div className="flex flex-col flex-1 px-[34px] pt-[20px] pb-[34px] overflow-y-auto">

        {/* Espace pour aligner avec la hauteur du header */}
        <div className="shrink-0 h-[60px]" />

        {/* Main content */}
        <div className="flex flex-col flex-1 justify-between mt-[58px]">

          {/* Nav links + CTA */}
          <div className="flex flex-col gap-[98px]">
            {/* Nav links */}
            <nav aria-label="Navigation mobile" className="flex flex-col gap-4 px-1">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => { e.preventDefault(); onNav(href); }}
                  className="font-display font-bold text-[42px] text-white leading-tight hover:opacity-70 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Contact us button */}
            <a
              href="/contact"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-4 h-[54px] rounded-[48px] font-body text-[22px] text-white w-full hover:opacity-80 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style={{ background: 'rgba(231,193,207,0.3)' }}
            >
              Contact us
              <svg width="15" height="15" viewBox="0 0 15.0845 14.7279" fill="none" aria-hidden="true">
                <path
                  d="M14.7916 8.07107C15.1821 7.68054 15.1821 7.04738 14.7916 6.65685L8.42762 0.292893C8.0371 -0.097631 7.40393 -0.097631 7.01341 0.292893C6.62288 0.683418 6.62288 1.31658 7.01341 1.70711L12.6703 7.36396L7.01341 13.0208C6.62288 13.4113 6.62288 14.0445 7.01341 14.435C7.40393 14.8256 8.0371 14.8256 8.42762 14.435L14.7916 8.07107ZM0 7.36396V8.36396H14.0845V7.36396V6.36396H0V7.36396Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>

          {/* Footer info */}
          <div className="flex flex-col gap-6 mt-16">
            {/* GitHub */}
            <a
              href={FOOTER.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 h-[38px] rounded-[30px] border border-white font-label font-bold text-[14px] text-white w-fit hover:opacity-70 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <svg width="21" height="21.84" viewBox="0 0 21 21.84" fill="none" aria-hidden="true">
                <g clipPath="url(#mobile-github-clip)">
                  <path clipRule="evenodd" d={svgPaths.p4fe4000} fill="white" fillRule="evenodd" />
                </g>
                <defs>
                  <clipPath id="mobile-github-clip">
                    <rect fill="white" height="21.84" width="21" />
                  </clipPath>
                </defs>
              </svg>
              GitHub
            </a>

            {/* Address */}
            <a
              href="https://maps.google.com/?q=122+Rue+Amelot,+75011+Paris,+France"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-white hover:opacity-70 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
                <path d={svgPaths.p2fcac600} fill="white" />
              </svg>
              <span className="font-body text-[16px] leading-normal">{FOOTER.address}</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function Header({ transparent = true }: HeaderProps) {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const activeId = useScrollSpy(['services', 'approach', 'team']);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const logoColor = !transparent || scrolled ? '#432b60' : 'white';

  const navLinkClass = (href: string) => {
    const id = href.slice(1);
    const isActive = activeId === id;
    return `font-body text-[16px] transition-opacity duration-200 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 text-brand focus-visible:outline-brand ${isActive ? 'font-bold' : ''}`;
  };

  const handleNav = (href: string) => {
    setMenuOpen(false);
    if (isHome) {
      setTimeout(() => scrollToSection(href), 80);
    } else {
      window.location.href = `/${href}`;
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[110] w-full pt-[25px]">
        <div className="max-w-[1280px] mx-auto px-10 md:px-[170px] flex items-center w-full">
        <a href={isHome ? '#hero' : '/'} aria-label="BlackPaws — retour en haut">
          <BlackPawsLogo color={logoColor} />
        </a>

        {/* Desktop pill nav */}
        <nav aria-label="Navigation principale" className="flex-1 flex items-center justify-center">
          <div className="hidden md:flex items-center gap-[50px] bg-periwinkle px-10 h-[54px] rounded-[50px]">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={isHome ? href : `/${href}`}
                className={navLinkClass(href)}
                onClick={(e) => { if (isHome) { e.preventDefault(); scrollToSection(href); } }}
              >
                {label}
              </a>
            ))}
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-5 h-[36px] rounded-[48px] bg-brand font-body text-[14px] text-white whitespace-nowrap hover:opacity-80 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Let's talk
            </a>
          </div>

          {/* Mobile hamburger → croix */}
          <button
            type="button"
            className="md:hidden ml-auto p-2 flex flex-col justify-center items-center w-10 h-10 gap-0 text-white relative z-[110] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className="block h-[2px] w-6 bg-current rounded-full transition-all duration-300 ease-in-out"
              style={{ transformOrigin: '77% center', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'translateY(-4px)' }}
            />
            <span
              className="block h-[2px] w-6 bg-current rounded-full transition-all duration-200 ease-in-out"
              style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? 'scaleX(0)' : 'scaleX(1)' }}
            />
            <span
              className="block h-[2px] w-6 bg-current rounded-full transition-all duration-300 ease-in-out"
              style={{ transformOrigin: '77% center', transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'translateY(4px)' }}
            />
          </button>
        </nav>
        </div>
      </header>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} onNav={handleNav} />}
    </>
  );
}
