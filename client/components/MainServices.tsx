import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { mainServices } from "../data/services";

export default function MainServices() {
  return (
    <section className="py-16 bg-atlas-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-atlas-blue mb-4">
            Layanan Utama
          </h2>
          <p className="text-lg text-atlas-blue/70 max-w-2xl mx-auto">
            Atlas Advertising menyediakan tiga kategori layanan utama untuk
            memenuhi semua kebutuhan advertising dan reklame Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <Card
              key={index}
              className="border-2 border-atlas-blue/10 hover:border-atlas-red/30 transition-all duration-300 group"
            >
              <CardHeader className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-lg bg-gradient-to-br from-atlas-blue/10 to-atlas-red/10 flex items-center justify-center group-hover:from-atlas-red/10 group-hover:to-atlas-blue/10 transition-all">
                  <service.icon className="w-12 h-12 text-atlas-blue group-hover:text-atlas-red transition-colors" />
                </div>
                <CardTitle className="text-xl text-atlas-blue group-hover:text-atlas-red transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-atlas-blue/70">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
