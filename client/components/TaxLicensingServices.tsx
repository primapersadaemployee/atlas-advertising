import { CheckCircle, MessageCircle, Phone } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function TaxLicensingServices() {
  return (
    <section className="py-16 bg-gradient-to-br from-atlas-blue/5 to-atlas-red/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-atlas-blue mb-4">
              Jasa Pajak & Perizinan
            </h2>
            <p className="text-lg text-atlas-blue/70">
              Pengurusan pajak dan perizinan reklame yang mudah, cepat, dan
              terpercaya
            </p>
          </div>

          <Card className="border-2 border-atlas-blue/10">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-atlas-blue mb-4">
                    Solusi Perizinan Terpercaya
                  </h3>
                  <p className="text-atlas-blue/80 mb-6 leading-relaxed">
                    Kami menyediakan jasa pengurusan pajak dan perizinan iklan
                    reklame dengan harga yang terjangkau, telah dipercaya oleh
                    20+ klien dan lebih dari 30 brand seluruh Indonesia.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-atlas-blue/5 rounded-lg">
                      <div className="text-2xl font-bold text-atlas-blue">
                        20+
                      </div>
                      <div className="text-atlas-blue/70 text-sm">
                        Klien Terpercaya
                      </div>
                    </div>
                    <div className="text-center p-4 bg-atlas-red/5 rounded-lg">
                      <div className="text-2xl font-bold text-atlas-red">
                        30+
                      </div>
                      <div className="text-atlas-blue/70 text-sm">
                        Brand Indonesia
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-atlas-white rounded-lg border border-atlas-blue/10">
                      <CheckCircle className="w-6 h-6 text-atlas-red" />
                      <span className="text-atlas-blue font-medium">
                        Proses Legal & Resmi
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-atlas-white rounded-lg border border-atlas-blue/10">
                      <CheckCircle className="w-6 h-6 text-atlas-red" />
                      <span className="text-atlas-blue font-medium">
                        Harga Terjangkau
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-atlas-white rounded-lg border border-atlas-blue/10">
                      <CheckCircle className="w-6 h-6 text-atlas-red" />
                      <span className="text-atlas-blue font-medium">
                        Konsultasi Gratis
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-atlas-white rounded-lg border border-atlas-blue/10">
                      <CheckCircle className="w-6 h-6 text-atlas-red" />
                      <span className="text-atlas-blue font-medium">
                        Proses Cepat
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link
                  to={`https://wa.me/6281322000798?text=Halo%20Atlas,%20Saya%20mau%20order`}
                  target="_blank"
                >
                  <Button
                    size="lg"
                    className="w-full bg-atlas-red hover:bg-atlas-red/90 text-atlas-white px-8"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Konsultasi Gratis
                  </Button>
                </Link>
                <Link to="tel:+6281322000798" target="_blank">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-atlas-blue text-atlas-blue hover:bg-atlas-blue hover:text-atlas-white px-8"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Hubungi Kami
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
