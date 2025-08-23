import { CheckCircle, FileText, Star, Wrench } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-atlas-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-atlas-blue mb-4">
            Mengapa Memilih Atlas Advertising?
          </h2>
          <p className="text-lg text-atlas-blue/70 max-w-2xl mx-auto">
            Keunggulan yang membuat kami menjadi pilihan terbaik untuk kebutuhan
            advertising Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-atlas-blue/5 to-atlas-red/5 rounded-lg">
            <div className="w-16 h-16 bg-atlas-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-atlas-blue" />
            </div>
            <h3 className="text-lg font-semibold text-atlas-blue mb-2">
              Kualitas Terjamin
            </h3>
            <p className="text-atlas-blue/70 text-sm">
              Material berkualitas tinggi dan teknologi terdepan
            </p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-atlas-blue/5 to-atlas-red/5 rounded-lg">
            <div className="w-16 h-16 bg-atlas-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-atlas-red" />
            </div>
            <h3 className="text-lg font-semibold text-atlas-blue mb-2">
              Pengalaman 25+ Tahun
            </h3>
            <p className="text-atlas-blue/70 text-sm">
              Berpengalaman melayani berbagai jenis klien
            </p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-atlas-blue/5 to-atlas-red/5 rounded-lg">
            <div className="w-16 h-16 bg-atlas-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wrench className="w-8 h-8 text-atlas-blue" />
            </div>
            <h3 className="text-lg font-semibold text-atlas-blue mb-2">
              Tim Profesional
            </h3>
            <p className="text-atlas-blue/70 text-sm">
              Didukung tim ahli dan berpengalaman
            </p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-atlas-blue/5 to-atlas-red/5 rounded-lg">
            <div className="w-16 h-16 bg-atlas-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-atlas-red" />
            </div>
            <h3 className="text-lg font-semibold text-atlas-blue mb-2">
              Layanan Lengkap
            </h3>
            <p className="text-atlas-blue/70 text-sm">
              One-stop solution untuk semua kebutuhan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
