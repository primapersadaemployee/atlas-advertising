import { MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export default function Map() {
  return (
    <section className="py-16 bg-gradient-to-br from-atlas-blue/5 to-atlas-red/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-atlas-blue mb-4">
            Lokasi Kantor Bandung
          </h2>
          <p className="text-lg text-atlas-blue/70">
            Kunjungi kantor pusat kami di Bandung untuk konsultasi langsung
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-atlas-blue/10 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative w-full h-96">
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.680262913327!2d107.66490207577263!3d-6.928768167822531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68dd310c321453%3A0x83dcabfcb6c33e63!2sATLAS%20Advertising%20%7C%20Jasa%20Pasang%20Spanduk%20%7C%20Jasa%20Pasang%20Baliho%20%7C%20Jasa%20Pasang%20T-Banner%20%7C%20Pajak%20%26%20Perijinan%20Reklame!5e0!3m2!1sid!2sid!4v1755867370321!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  title="Atlas Advertising Bandung Office Location"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8706.62047830392!2d107.65791808337379!3d-6.928440838699741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e99ebc50172b%3A0x89ff22f94b34f832!2sBERKAH%20MOTOR%20CIBODAS!5e0!3m2!1sen!2sid!4v1756971267668!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  title="Atlas Advertising Bandung Office Location"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </CardContent>
          </Card>
          <div className="text-center mt-6">
            <p className="text-atlas-blue/70 mb-4">
              Jl. Cibodas Raya No. 18 Kel. Antapani Tengah, Kec. Antapani
              Bandung 40291
            </p>
            <div className="flex justify-center">
              <Button
                variant="outline"
                className="border-atlas-blue text-atlas-blue hover:bg-atlas-blue hover:text-atlas-white"
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/U4yHi97nxVdeRVs98",
                    "_blank",
                  )
                }
              >
                <MapPin className="w-4 h-4 mr-2" />
                Buka di Google Maps
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
