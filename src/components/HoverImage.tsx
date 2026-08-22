import Image from "next/image";

type HoverImageProps = {
  src: string;
  alt: string;
  title: string;
  description?: string;
  sizes?: string;
  variant?: "overlay" | "banner";
};

export function HoverImage({
  src,
  alt,
  title,
  description,
  sizes = "(max-width: 640px) 100vw, 50vw",
  variant = "overlay",
}: HoverImageProps) {
  return (
    <figure className="group relative aspect-[16/10] overflow-hidden rounded-[var(--radius-md)]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
      />
      {variant === "banner" ? (
        <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-brand px-4 py-3 text-center transition-transform duration-300 group-hover:translate-y-0">
          <h3 className="font-display text-base font-medium text-white md:text-lg">
            {title}
          </h3>
        </figcaption>
      ) : (
        <figcaption className="absolute inset-0 flex flex-col items-center justify-center bg-brand/0 px-6 py-6 text-center text-white opacity-0 transition duration-300 group-hover:bg-brand/80 group-hover:opacity-100 md:px-10">
          <h3 className="font-display text-xl font-medium md:text-2xl">
            {title}
          </h3>
          {description ? (
            <p className="mt-3 max-h-[55%] overflow-y-auto text-xs leading-relaxed md:text-sm">
              {description}
            </p>
          ) : null}
        </figcaption>
      )}
    </figure>
  );
}
