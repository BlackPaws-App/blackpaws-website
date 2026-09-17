type TagProps = {
  label: string;
};

export default function Tag({ label }: TagProps) {
  return (
    <span className="inline-flex items-center justify-center px-5 py-[11px] rounded-[40px] bg-brand font-label text-[12px] font-extrabold text-white uppercase whitespace-nowrap tracking-wide">
      {label}
    </span>
  );
}
