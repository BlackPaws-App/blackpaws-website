type SectionTitleProps = {
  as?: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
  className?: string;
};

export default function SectionTitle({ as: Tag = 'h2', children, className = '' }: SectionTitleProps) {
  return (
    <Tag className={`font-display font-bold text-[42px] leading-tight text-brand ${className}`}>
      {children}
    </Tag>
  );
}
