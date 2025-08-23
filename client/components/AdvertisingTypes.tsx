import { Card, CardContent } from "./ui/card";
import { reklamePermanent, reklameInsidentil } from "../data/advertisingTypes";

export default function AdvertisingTypes() {
  return (
    <section className="py-16 bg-gradient-to-br from-atlas-blue/5 to-atlas-red/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-atlas-blue mb-8 text-center">
            Jenis-Jenis Reklame
          </h2>

          <Card className="border-2 border-atlas-blue/10 mb-8">
            <CardContent className="p-8">
              <p className="text-atlas-blue/80 leading-relaxed mb-6 text-justify">
                Reklame, didefinisikan bahwa yang disebut dengan Reklame adalah
                benda, alat, perbuatan atau media yang menurut bentuk, susunan
                dan corak ragamnya untuk tujuan komersial, dipergunakan untuk
                memperkenalkan, menganjurkan atau memujikan suatu barang, jasa
                atau orang ataupun untuk menarik perhatian umum kepada suatu
                barang, jasa atau orang yang ditempatkan atau yang dapat
                dilihat, dibaca, atau didengar dari suatu tempat oleh umum,
                kecuali yang dilakukan oleh pemerintah atau pemerintah daerah.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-atlas-white py-8 px-6 rounded-lg border border-atlas-blue/10 flex flex-col gap-6">
              <h3 className="text-2xl font-semibold text-atlas-blue text-center">
                Permanen / Tetap
              </h3>
              {reklamePermanent.map((type, index) => (
                <ul
                  key={index}
                  className="list-disc list-inside text-atlas-blue/80"
                >
                  <li className="text-atlas-blue text-sm md:text-base">
                    {type}
                  </li>
                </ul>
              ))}
            </div>
            <div className="bg-atlas-white py-8 px-6 rounded-lg border border-atlas-blue/10 flex flex-col gap-6">
              <h3 className="text-2xl font-semibold text-atlas-blue text-center">
                Insidentil
              </h3>
              {reklameInsidentil.map((type, index) => (
                <ul
                  key={index}
                  className="list-disc list-inside text-atlas-blue/80"
                >
                  <li className="text-atlas-blue text-sm md:text-base">
                    {type}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
