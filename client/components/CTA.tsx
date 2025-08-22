import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-atlas-blue/5 to-atlas-red/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Siap Memulai Proyek Advertising Anda?
        </h2>
        <p className="text-xl mb-8 text-atlas-blue-70 max-w-2xl mx-auto">
          Konsultasikan kebutuhan advertising Anda dengan tim profesional kami.
          Dapatkan solusi terbaik untuk brand Anda.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-atlas-red hover:bg-atlas-red/90 px-8"
          >
            <Link to="/kontak">Hubungi Kami</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-atlas-blue hover:bg-atlas-blue/90 px-8"
          >
            <Link to="/galeri">Lihat Galeri</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
