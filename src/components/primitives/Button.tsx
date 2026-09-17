import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
};

const ArrowIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15.0845 14.7279"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M14.7916 8.07107C15.1821 7.68054 15.1821 7.04738 14.7916 6.65685L8.42762 0.292893C8.0371 -0.097631 7.40393 -0.097631 7.01341 0.292893C6.62288 0.683418 6.62288 1.31658 7.01341 1.70711L12.6703 7.36396L7.01341 13.0208C6.62288 13.4113 6.62288 14.0445 7.01341 14.435C7.40393 14.8256 8.0371 14.8256 8.42762 14.435L14.7916 8.07107ZM0 7.36396V8.36396H14.0845V7.36396V6.36396H0V7.36396Z"
      fill="#432B60"
    />
  </svg>
);

export default function Button({
  href,
  onClick,
  variant = 'primary',
  children,
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-4 pl-[79px] pr-12 h-[54px] rounded-[48px] font-body text-[22px] text-brand whitespace-nowrap transition-opacity duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand cursor-pointer';

  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-rose-30',
    secondary: 'bg-periwinkle',
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (!href) {
    return (
      <button type="button" onClick={onClick} className={cls}>
        {children}
        <ArrowIcon />
      </button>
    );
  }

  // Internal route: starts with /
  if (href.startsWith('/')) {
    return (
      <Link to={href} className={cls}>
        {children}
        <ArrowIcon />
      </Link>
    );
  }

  // Anchor or external
  return (
    <a href={href} className={cls}>
      {children}
      <ArrowIcon />
    </a>
  );
}
