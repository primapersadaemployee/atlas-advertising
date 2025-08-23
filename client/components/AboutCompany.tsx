import { Building, Calendar, MapPin } from "lucide-react";

export default function AboutCompany() {
  return (
    <section className="py-16 bg-atlas-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-atlas-blue mb-6">
                Tentang Perusahaan
              </h2>
              <div className="space-y-4 text-atlas-blue/80 leading-relaxed text-justify">
                <p>
                  Periklanan merupakan salah satu bentuk dari komunikasi
                  impresional yang digunakan oleh perusahaan barang atau jasa.
                  Peranan periklanan dalam pemasaran jasa adalah untuk membangun
                  kesadaran (awareness) terhadap keberadaan jasa yang
                  ditawarkan, menambah pengetahuan konsumen tentang jasa yang
                  ditawarkan, membujuk calon konsumen untuk membeli atau
                  menggunakan jasa tersebut, dan membedakan diri perusahaan satu
                  dengan perusahaan lain.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-atlas-blue/5 to-atlas-red/5 p-8 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Building className="w-8 h-8 text-atlas-red" />
                  <div>
                    <h3 className="font-semibold text-atlas-blue">
                      CV. ANUGERAH TALENTA ANDALAS
                    </h3>
                    <p className="text-atlas-blue/70 text-sm">
                      Perusahaan Induk
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Calendar className="w-8 h-8 text-atlas-red" />
                  <div>
                    <h3 className="font-semibold text-atlas-blue">
                      Sejak 2000
                    </h3>
                    <p className="text-atlas-blue/70 text-sm">
                      25+ Tahun Pengalaman
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-8 h-8 text-atlas-red" />
                  <div>
                    <h3 className="font-semibold text-atlas-blue">
                      Kota Bandung
                    </h3>
                    <p className="text-atlas-blue/70 text-sm">
                      Didirikan di Kota Bandung
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
