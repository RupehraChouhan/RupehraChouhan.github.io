type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "start" | "center";
};

export function SectionHeading({ id, eyebrow, title, description, align = "start" }: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={`flex flex-col gap-3 ${centered ? "items-center text-center" : ""}`}>
      <p className="text-[13px] font-medium uppercase text-muted">{eyebrow}</p>
      <h2 id={id} className="font-display text-[32px] font-bold leading-tight text-ink sm:text-[40px]">
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-normal text-body ${centered ? "max-w-[640px]" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
