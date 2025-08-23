import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";
import { productionServices } from "../data/services";

export default function ProductionServices() {
  return (
    <section className="py-16 bg-gradient-to-br from-atlas-blue/5 to-atlas-red/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-atlas-blue mb-4">
            Jasa Produksi
          </h2>
          <p className="text-lg text-atlas-blue/70">
            Layanan produksi reklame dengan teknologi terdepan dan kualitas
            terjamin
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {productionServices.map((service, index) => (
            <Card
              key={index}
              className="border-2 border-atlas-blue/10 hover:border-atlas-red/30 transition-colors group"
            >
              <CardHeader className="text-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto mx-auto mb-4 rounded-2xl"
                />
                <CardTitle className="text-lg text-atlas-blue group-hover:text-atlas-red transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-atlas-blue/70">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  to={`https://wa.me/6281322000798?text=Halo%20Atlas,%20Saya%20mau%20order%20${service.title}.`}
                  target="_blank"
                  className="flex items-center"
                >
                  <Button className="w-full bg-atlas-red hover:bg-atlas-red/90 text-atlas-white">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Pesan Sekarang
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
