interface HeroProps {
  backgroundImage: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function Hero({
  backgroundImage,
  title,
  description,
  children,
}: HeroProps) {
  return (
    <section className="relative bg-black text-atlas-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="relative container mx-auto px-2 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-atlas-white/90 max-w-2xl mx-auto">
            {description}
          </p>
          {children}
        </div>
      </div>
    </section>
  );
}
