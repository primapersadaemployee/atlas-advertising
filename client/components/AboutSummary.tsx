import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutSummary() {
  return (
    <section className="py-16 bg-gradient-to-br from-atlas-blue/5 to-atlas-red/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-atlas-blue mb-6 md:mb-12">
            Tentang Atlas Advertising
          </h2>
          <p className="md:text-lg text-atlas-blue/80 mb-8 leading-relaxed text-justify">
            Periklanan merupakan salah satu bentuk dari komunikasi impresional
            yang digunakan oleh perusahaan barang atau jasa. Peranan periklanan
            dalam pemasaran jasa adalah untuk membangun kesadaran (awareness)
            terhadap keberadaan jasa yang ditawarkan, menambah pengetahuan
            konsumen tentang jasa yang ditawarkan, membujuk calon konsumen untuk
            membeli atau menggunakan jasa tersebut, dan membedakan diri
            perusahaan satu dengan perusahaan lain.
          </p>
          <p className="md:text-lg text-atlas-blue/80 mb-8 leading-relaxed text-justify">
            ATLAS Adverstising hadir dengan komitmen memberikan pelayanan satu
            pintu terhadap konsumen, mulai dari proses produksi, pajak dan
            perijinan hingga pemasangan spanduk, baliho, T-Banner,
            reskin/revisual billboard dan shopsign, produksi shopsing, neonbox
            dan huruf timbul, baik didalam maupun luar kota, oleh karena itu tim
            kami siap untuk membantu promosi usaha anda secara profesional.
          </p>
          <Button
            asChild
            variant="outline"
            className="border-atlas-blue text-atlas-blue hover:bg-atlas-blue hover:text-atlas-white"
          >
            <Link to="/tentang-kami" className="inline-flex items-center gap-2">
              Tentang Kami
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
