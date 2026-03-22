import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-4",
        centered && "mx-auto items-center text-center",
        className,
      )}
    >
      <div className="flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-primary">
        {centered ? <span className="gold-rule" /> : null}
        <span>{eyebrow}</span>
        <span className="gold-rule" />
      </div>
      <h2 className="text-4xl leading-[1.02] md:text-5xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-base text-foreground/72 md:text-lg dark:text-white/72">
          {description}
        </p>
      ) : null}
    </div>
  );
}
