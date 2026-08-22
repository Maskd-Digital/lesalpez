import Image from "next/image";

export function MountainTransition() {
  return (
    <div
      className="relative z-10 w-full overflow-visible bg-transparent"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-brand" />
      <Image
        src="/assets/home/footer-mountains.png"
        alt=""
        width={5760}
        height={1956}
        sizes="100vw"
        className="relative z-10 block h-auto w-full translate-y-[calc(-48%+30px)] -mb-[16.3%] select-none"
      />
    </div>
  );
}
