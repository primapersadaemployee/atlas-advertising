import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import SpandukBentang from "/images/spanduk-bentang.jpeg";
import TBanner from "/images/t-banner.jpeg";
import Baliho from "/images/baliho.jpeg";

export default function ServiceHighlight() {
  return (
    <section className="py-16 bg-atlas-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-atlas-blue mb-4">
            Manfaat dan Fungsi Reklame Insidentil
          </h2>
          <p className="text-lg text-atlas-blue/70 max-w-2xl mx-auto">
            Berikut adalah beberapa manfaat dan fungsi reklame insidentil.
          </p>
        </div>
        <div className="flex flex-col gap-8 md:gap-16">
          <div className="flex flex-col gap-8">
            <h3 className="text-xl md:text-3xl font-bold text-atlas-blue">
              Tentang Spanduk Bentang
            </h3>
            <div className="flex flex-col-reverse md:flex-row gap-8">
              <div className="w-full md:w-1/2">
                <p className="md:text-lg text-atlas-blue/70 text-justify">
                  Spanduk adalah media informasi yang biasanya berukuran panjang
                  dan membentang di jalan raya selain jalan protocol. Spanduk
                  memiliki benttuk horizontal terbuat dari bahan kain atau flexy
                  digital printing dengan ukuran rata-rata 1 x 2 meter, sampai
                  dengan 1 x 8 meter, Spanduk merupakan alat promosi yang sudah
                  cukup lama dikenal banyak kalangan untuk melakukan kegitan
                  promosi produk mereka. Spanduk sendiri dapat dibilang media
                  promosi yang sangat kuno untuk saat ini, namun Atlas
                  Advertising sebagai perusahaan Jasa Pasang Spanduk Bentang
                  masih rutin mengerjakan pemasangan spanduk yang menjadi media
                  favorit para pengusaha dan pelaku event dikarenakan spanduk
                  sangat efektif dan harga relatif murah dibandingkan media
                  promosi lainnya. Spanduk masih menjadi rekomendasi terbaik
                  sebagai media promosi sampai saat ini.
                </p>
                <div className="flex flex-col gap-2 mt-4">
                  <h4 className="text-lg md:text-2xl font-bold text-atlas-blue">
                    Kelebihan Spanduk Bentang
                  </h4>
                  <ul className="md:text-lg list-disc list-inside text-atlas-blue/70">
                    <li>
                      Dapat menjangkau seluruh sudut-sudut jalan kota maupun
                      desa.
                    </li>
                    <li>Harga Pajak dan Perijinan lebih Murah.</li>
                    <li>Biaya Pemasangan lebih murah.</li>
                  </ul>
                  <div className="flex justify-center mt-6">
                    <Button
                      asChild
                      size="lg"
                      className="bg-atlas-red hover:bg-atlas-red/90 text-atlas-white px-8 py-6 md:text-lg"
                    >
                      <Link
                        to="/layanan-kami"
                        className="inline-flex items-center gap-2"
                      >
                        Selengkapnya
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={SpandukBentang}
                  alt="Spanduk Bentang"
                  loading="lazy"
                  className="w-full h-full object-cover object-center rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h3 className="text-xl md:text-3xl font-bold text-atlas-blue md:text-end">
              Tentang T-Banner / Standing Banner
            </h3>
            <div className="flex flex-col-reverse md:flex-row-reverse gap-8">
              <div className="w-full md:w-1/2">
                <p className="md:text-lg text-atlas-blue/70 text-justify">
                  T-Banner/Standing Banner adalah media informasi insidentil
                  yang sangat favorit dimata para pelaku usaha yang ingin
                  mempromosikan bisnisnya, umumnya berukuran 1 x 3 meter sampai
                  dengan 1 x 4 meter, dengan metode pemasangan berdiri/vertical
                  dan disangga tihang pada bagian tengah, mengapa t-banner
                  sangat digemari oleh para pelaku usaha yang akan mempromosikan
                  bisnisnya dikarenakan T-Banner dapat dipasang disekitar lokasi
                  bisnis atau tempat event, namun t-banner sendiri kadang
                  dipasangan dengan cara menyebar dan berkelompok, atau dipasang
                  pada jalan menuju venue, sampai saat ini T-banner masih
                  menjadi media promosi ungggulan untuk mempromosikan produk
                  bisnis ataupun event. Akan tetapi T-Banner adalah salah satu
                  Media Promosi yang paling popular dan sangat efektif untuk
                  meramaikan sekitar lokasi bisnis atau event. Oleh Sebab itu
                  Atlas Advertising sebagai Perusahaan jasa Pemasangan T-Banner
                  di bandung sangat sering sekali mengerjakan pemasangan
                  T-Banner di Kota bandung dan kota-kota lain di Jawa Barat.
                </p>
                <div className="flex flex-col gap-2 mt-4">
                  <h4 className="text-lg md:text-2xl font-bold text-atlas-blue">
                    Kelebihan T-Banner
                  </h4>
                  <ul className="md:text-lg list-disc list-inside text-atlas-blue/70">
                    <li>
                      Dapat menjangkau seluruh pelosok jalan kota maupun desa.
                    </li>
                    <li>Harga Pajak dan Perijinan lebih Murah.</li>
                    <li>Biaya Pemasangan lebih murah.</li>
                    <li>Dapat dipasang pada jalan menuju lokasi.</li>
                    <li>Dapat dipasang secara berkelompok.</li>
                  </ul>
                  <div className="flex justify-center mt-6">
                    <Button
                      asChild
                      size="lg"
                      className="bg-atlas-red hover:bg-atlas-red/90 text-atlas-white px-8 py-6 md:text-lg"
                    >
                      <Link
                        to="/layanan-kami"
                        className="inline-flex items-center gap-2"
                      >
                        Selengkapnya
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={TBanner}
                  alt="T-Banner"
                  loading="lazy"
                  className="w-full h-full object-cover object-center rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h3 className="text-xl md:text-3xl font-bold text-atlas-blue">
              Tentang Baliho Insidentil/Temporari
            </h3>
            <div className="flex flex-col-reverse md:flex-row gap-8">
              <div className="w-full md:w-1/2">
                <p className="md:text-lg text-atlas-blue/70 text-justify">
                  Baliho/Giant Banner paling populer dikalangan pengusaha dalam
                  mempromosikan produk bisnisnya dikarenakan ukuran yang besar
                  sehingga dapat memuat banyak konten dan mudah dibaca oleh
                  pembaca, Baliho Insidentil pada umumnya berukuran 3 x 4 meter
                  vertical dan dipasang dengan rangka bambu, penempatan atau
                  lokasi pemasangan juga tidak disembarang tempat bisa
                  tergantung izin dari pihak perizinan daerah setempat, Baliho
                  atau Giant Banner menjadi salah satu media promosi paling
                  populer dikalangan pengusaha dan Event Organizer yang ingin
                  mempromosikan produk bisnisnya, namun baliho memiliki tarif
                  yang cukup mahal sehingga jumlah yang dipasangpun tidak
                  terlalu banyak, dan penempatan baliho harus pada tempat yang
                  telah ditentukan oleh pihak perijinan atau tempat yang tidak
                  mengganggu aktifitas bisnis orang lain, Baliho banyak dipasang
                  disetiap sudut perempatan jalan kota. Namun Baliho masih
                  menjadi pilihan utama para pebisnis dan event organizer untuk
                  mempromosikan produknya, dan Atlas Advertising adalah
                  perusahaan jasa pasang baliho di bandung yang masih aktif
                  mengerjakan pekerjaan ini.
                </p>
                <div className="flex flex-col gap-2 mt-4">
                  <h4 className="text-lg md:text-2xl font-bold text-atlas-blue">
                    Kelebihan Baliho Insidentil/Temporari
                  </h4>
                  <ul className="md:text-lg list-disc list-inside text-atlas-blue/70">
                    <li>Ukuran yang besar sehingga mudah dibaca.</li>
                    <li>Titik Pemasangan disudut jalan ditengah kota.</li>
                  </ul>
                  <div className="flex justify-center mt-6">
                    <Button
                      asChild
                      size="lg"
                      className="bg-atlas-red hover:bg-atlas-red/90 text-atlas-white px-8 py-6 md:text-lg"
                    >
                      <Link
                        to="/layanan-kami"
                        className="inline-flex items-center gap-2"
                      >
                        Selengkapnya
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={Baliho}
                  alt="Baliho"
                  loading="lazy"
                  className="w-full h-full max-h-[670px] object-cover object-center rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
