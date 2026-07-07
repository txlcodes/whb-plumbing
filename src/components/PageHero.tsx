export default function PageHero({
  kicker,
  title,
  desc,
}: {
  kicker: string;
  title: string;
  desc?: string;
}) {
  return (
    <section className="bg-grad-deep">
      <div className="container-x py-16 md:py-20">
        <span className="kicker">{kicker}</span>
        <h1 className="mt-3 max-w-2xl text-4xl font-bold text-linen md:text-5xl">{title}</h1>
        {desc && <p className="mt-4 max-w-2xl text-sand/80 md:text-lg">{desc}</p>}
      </div>
    </section>
  );
}
