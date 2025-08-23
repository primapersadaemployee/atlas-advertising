import { advantages } from "../data/advantages";

export default function CompanyAdvantages() {
  return (
    <section className="py-16 bg-gradient-to-br from-atlas-blue/5 to-atlas-red/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-atlas-blue mb-4">
            Mengapa Harus Atlas Advertising?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-atlas-red/10 rounded-full mb-6 group-hover:bg-atlas-red/20 transition-colors">
                <advantage.icon className="w-8 h-8 text-atlas-red" />
              </div>
              <h3 className="text-xl font-semibold text-atlas-blue mb-3">
                {advantage.title}
              </h3>
              <p className="text-atlas-blue/70 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
