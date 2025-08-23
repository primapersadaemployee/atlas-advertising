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
import { installationServices } from "../data/services";

export default function InstallationServices() {
  return (
    <section className="py-16 bg-atlas-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-atlas-blue mb-4">
            Jasa Pemasangan
          </h2>
          <p className="text-lg text-atlas-blue/70">
            Layanan pemasangan profesional untuk media reklame permanen dan
            insidentil
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {installationServices.map((service, index) => (
            <Card
              key={index}
              className="border border-atlas-blue/10 hover:border-atlas-red/30 transition-colors group"
            >
              <CardHeader>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full max-h-64 mx-auto mb-4 rounded-2xl"
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
                  <Button
                    size="sm"
                    className="w-full bg-atlas-blue hover:bg-atlas-blue/90 text-atlas-white"
                  >
                    <MessageCircle className="w-3 h-3 mr-2" />
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
