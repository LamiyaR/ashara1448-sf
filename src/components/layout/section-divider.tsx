import Image from "next/image";

interface SectionDividerProps {
  /** Describes the intended SF photo; used as the image alt when `src` is set. */
  alt: string;
  /** Drop a photo at /public/images/sf/<name>.jpg and pass its path to replace
   *  the gradient placeholder (build prompt §9). */
  src?: string;
  tone?: "fog" | "dusk" | "hills";
}

// Muted, desaturated palette-toned gradients standing in for the SF photos.
const TONES: Record<NonNullable<SectionDividerProps["tone"]>, string> = {
  fog: "from-[hsl(205_14%_72%)] via-[hsl(205_10%_84%)] to-[hsl(205_14%_74%)]",
  dusk: "from-[hsl(265_18%_42%)] via-[hsl(350_22%_38%)] to-[hsl(28_30%_52%)]",
  hills: "from-[hsl(95_22%_52%)] via-[hsl(75_22%_58%)] to-[hsl(40_30%_58%)]",
};

export function SectionDivider({ alt, src, tone = "fog" }: SectionDividerProps) {
  return (
    <div
      className="relative h-20 w-full overflow-hidden md:h-[140px]"
      aria-hidden
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover saturate-[0.85] brightness-[0.95]"
        />
      ) : (
        <div
          className={`absolute inset-0 bg-gradient-to-r saturate-[0.7] ${TONES[tone]}`}
        />
      )}
      {/* Cream blend on top & bottom edges so the strip melts into the page. */}
      <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
