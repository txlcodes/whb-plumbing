import Image from "next/image";

export default function Logo({
  className = "h-16 w-auto md:h-[4.6rem]",
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <Image
      src="/images/logo.png"
      alt="WHB Plumbing — Anniston, AL"
      width={1440}
      height={754}
      priority
      className={`${className} rounded-lg shadow-md`}
    />
  );
}
