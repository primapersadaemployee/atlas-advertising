import { partners } from "../data/partners";

export default function Partner() {
  return (
    <section className="py-16 bg-atlas-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-atlas-blue mb-4">
            Partner & Klien Kami
          </h2>
          <p className="text-lg text-atlas-blue/70">
            Dipercaya oleh berbagai perusahaan terkemuka di Indonesia
          </p>
        </div>

        {/* Scrolling logos */}
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-scroll">
            {partners.concat(partners).map((partner, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16 px-6"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
