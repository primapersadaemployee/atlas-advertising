import { Building, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { bandungContacts, lampungContacts } from "@/data/contacts";
import { Badge } from "./ui/badge";

export default function OfficeLocation({ handleWhatsApp, handleDirectCall }) {
  return (
    <section className="py-16 bg-atlas-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-atlas-blue mb-4">
            Lokasi Kantor Kami
          </h2>
          <p className="text-lg text-atlas-blue/70">
            Atlas Advertising melayani Anda di dua lokasi strategis
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Bandung Office */}
          <Card className="border-2 border-atlas-blue/10 hover:border-atlas-red/30 transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl text-atlas-blue flex items-center gap-2">
                  <Building className="w-6 h-6 text-atlas-red" />
                  Kantor Bandung
                </CardTitle>
                <Badge className="bg-atlas-red text-atlas-white">
                  Kantor Pusat
                </Badge>
              </div>
              <CardDescription className="text-atlas-blue/70">
                Kantor pusat melayani wilayah Jawa Barat dan sekitarnya
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-atlas-red mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-atlas-blue">Alamat:</p>
                  <p className="text-atlas-blue/80">
                    Jl. Parakan Mas Indah 1 No. 18
                    <br />
                    Kel. Antapani Tengah, Kec. Antapani
                    <br />
                    Bandung 40291
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-atlas-red mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-atlas-blue">Email:</p>
                  <div className="space-y-1">
                    <p className="text-atlas-blue/80">
                      admin@atlasadvertising.id
                    </p>
                    <p className="text-atlas-blue/80">
                      atlas.adv2017@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-atlas-red mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-atlas-blue">Telepon:</p>
                  <div className="space-y-2">
                    {bandungContacts.map((contact, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-atlas-blue/80">
                          {contact.phone} ({contact.name})
                        </span>
                        {contact.isPrimary && (
                          <Badge
                            variant="outline"
                            className="text-xs border-atlas-red text-atlas-red"
                          >
                            Primary
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  size="sm"
                  className="bg-atlas-red hover:bg-atlas-red/90 flex-1"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat WhatsApp
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-atlas-blue text-atlas-blue hover:bg-atlas-blue hover:text-atlas-white flex-1"
                  onClick={handleDirectCall}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Telp Langsung
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Lampung Office */}
          <Card className="border-2 border-atlas-blue/10 hover:border-atlas-red/30 transition-colors flex flex-col h-full">
            <CardHeader>
              <CardTitle className="text-xl text-atlas-blue flex items-center gap-2">
                <Building className="w-6 h-6 text-atlas-red" />
                Kantor Lampung
              </CardTitle>
              <CardDescription className="text-atlas-blue/70">
                Melayani wilayah Lampung dan Sumatera Selatan
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-atlas-red mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-atlas-blue">Alamat:</p>
                    <p className="text-atlas-blue/80">
                      Jl. Sultan Badarudin No. 50
                      <br />
                      Tanjung Karang Barat
                      <br />
                      Bandar Lampung, Lampung
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-atlas-red mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-atlas-blue">Email:</p>
                    <div className="space-y-1">
                      <p className="text-atlas-blue/80">
                        admin.atlasadvertising.id
                      </p>
                      <p className="text-atlas-blue/80">
                        atlas.adv2017@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-atlas-red mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-atlas-blue">Telepon:</p>
                    <div className="space-y-2">
                      {lampungContacts.map((contact, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="text-atlas-blue/80">
                            {contact.phone} ({contact.name})
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4 mt-auto">
                <Link
                  to="https://wa.me/6281322119899?text=Halo%20Atlas,%20Saya%20mau%20order..."
                  target="_blank"
                  className="w-full"
                >
                  <Button
                    size="sm"
                    className="bg-atlas-blue hover:bg-atlas-blue/90 w-full"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat WhatsApp
                  </Button>
                </Link>
                <Link to="tel:+6281322119899" target="_self" className="w-full">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-atlas-blue text-atlas-blue hover:bg-atlas-blue hover:text-atlas-white w-full"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Telp Langsung
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
