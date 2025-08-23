import { Card, CardContent } from "./ui/card";

export default function CompanyHistory() {
  return (
    <section className="py-16 bg-gradient-to-br from-atlas-blue/5 to-atlas-red/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-atlas-blue mb-8 text-center">
            Sejarah Perusahaan
          </h2>
          <Card className="border-2 border-atlas-blue/10">
            <CardContent className="p-8">
              <p className="text-atlas-blue/80 leading-relaxed text-justify">
                <strong className="text-atlas-blue">ATLAS advertising</strong>{" "}
                adalah sub bisnis dari
                <strong className="text-atlas-blue">
                  {" "}
                  CV. ANUGERAH TALENTA ANDALAS
                </strong>
                , perusahaan periklanan outdoor yang berdiri di kota Bandung
                sejak tahun 2000 hingga sekarang. Awal mula perusahaan kami
                berdiri hanya fokus pada produksi sablon spanduk kain, namun
                seiring dengan perkembangan teknologi kami membangun kemitraan
                dengan para perusahaan digital printing di kota Bandung untuk
                memenuhi kebutuhan konsumen atas dasar kualitas produksi dan
                waktu yang dibutuhkan.
              </p>
              <p className="text-atlas-blue/80 leading-relaxed mt-4 text-justify">
                Lima belas tahun lebih kami berdiri telah banyak bekerjasama
                dengan perusahaan besar di kota Bandung baik sebagai vendor
                utama maupun sebagai sub vendor. Dengan pengalaman yang cukup
                lama kami terus meningkatkan pelayanan kami sebagai perusahaan
                agen periklanan di kota Bandung.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
