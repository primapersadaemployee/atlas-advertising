import { Clock, Facebook, Instagram } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export default function AdditionalInfo() {
  return (
    <section className="py-16 bg-atlas-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-atlas-blue mb-4">
              Ikuti Kami di Media Sosial
            </h2>
            <p className="text-lg text-atlas-blue/70">
              Dapatkan update terbaru tentang portfolio dan layanan kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-atlas-blue/10 hover:border-atlas-red/30 transition-colors">
              <CardContent className="p-8 text-center">
                <Facebook className="w-12 h-12 text-atlas-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-atlas-blue mb-2">
                  Facebook
                </h3>
                <p className="text-atlas-blue/70 mb-6">
                  Lihat portfolio terbaru dan update project kami
                </p>
                <Button
                  className="bg-atlas-blue hover:bg-atlas-blue/90 w-full"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/cetakspandukdibandung?mibextid=ZbWKwL",
                      "_blank",
                    )
                  }
                >
                  <Facebook className="w-4 h-4 mr-2" />
                  Follow Facebook
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-atlas-blue/10 hover:border-atlas-red/30 transition-colors">
              <CardContent className="p-8 text-center">
                <Instagram className="w-12 h-12 text-atlas-red mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-atlas-blue mb-2">
                  Instagram
                </h3>
                <p className="text-atlas-blue/70 mb-6">
                  Behind the scenes dan galeri visual project kami
                </p>
                <Button
                  className="bg-atlas-red hover:bg-atlas-red/90 w-full"
                  onClick={() =>
                    window.open(
                      "https://instagram.com/pasangspanduk_bandung?igshid=ZDc4ODBmNjlmNQ==",
                      "_blank",
                    )
                  }
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Follow Instagram
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="border border-atlas-blue/10">
              <CardContent className="p-8">
                <Clock className="w-12 h-12 text-atlas-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-atlas-blue mb-2">
                  Jam Operasional
                </h3>
                <div className="space-y-2 text-atlas-blue/80">
                  <p>
                    <strong>Senin - Jumat:</strong> 08:00 - 17:00 WIB
                  </p>
                  <p>
                    <strong>Sabtu:</strong> 08:00 - 14:00 WIB
                  </p>
                  <p>
                    <strong>Minggu:</strong> Tutup
                  </p>
                </div>
                <p className="text-atlas-blue/60 text-sm mt-4">
                  *Untuk konsultasi darurat, hubungi WhatsApp kami kapan saja
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
