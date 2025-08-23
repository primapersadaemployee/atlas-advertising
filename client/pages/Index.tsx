import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Building,
  Star,
  Handshake,
  Smile,
} from "lucide-react";
import BGHeroHome from "/images/bg-hero-home.jpg";
import Typewriter from "typewriter-effect";
import SpandukBentang from "/images/spanduk-bentang.jpeg";
import TBanner from "/images/t-banner.jpeg";
import Baliho from "/images/baliho.jpeg";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Partner from "@/components/Partner";

export default function Index() {
  const stats = [
    { number: 50, label: "Klien Puas", icon: Users },
    { number: 30, label: "Kerjasama Brand", icon: Handshake },
    { number: 20, label: "Tahun Pengalaman", icon: Star },
    { number: 25, label: "Area Kerja", icon: Building },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const advantages = [
    {
      title: "Kualitas Terjamin",
      description:
        "Keberhasilan klien adalah prioritas utama bagi kami. Kami berusaha keras untuk mencapai tujuan pemasaran dan meningkatkan eksposur merek Anda.",
      icon: Star,
    },
    {
      title: "Pengalaman & Keahlian",
      description:
        "Atlas Advertising memiliki pengalaman yang luas dalam industri periklanan dan pemasangan iklan reklame. Tim kami terdiri dari para profesional yang berpengalaman dan ahli dalam merancang strategi iklan yang efektif.",
      icon: Users,
    },
    {
      title: "Pelayanan Pelanggan",
      description:
        "Tim layanan pelanggan kami siap membantu Anda dengan penuh perhatian dan responsif. Kami ingin memastikan klien merasa didukung dan dihargai selama seluruh proses kampanye iklan.",
      icon: Smile,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-black text-atlas-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(${BGHeroHome})` }}
        ></div>
        <div className="relative container mx-auto px-2 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-6 flex flex-col md:gap-4">
              <span>Solusi Terpercaya untuk</span>
              <span className="text-atlas-red">
                <Typewriter
                  options={{
                    strings: "Advertising & Reklame",
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <p className="md:text-lg mb-8 text-atlas-white/90 mx-auto">
              Jasa Pasang Spanduk | Pasang Baliho | Pasang T-Banner | Pasang
              Umbul-Umbul | Pajak dan Perijinan Reklame | Digital Printing
              Outdoor | Sablon Spanduk | Printing Offset Cetak Brosur
            </p>
            <Button
              asChild
              size="lg"
              className="bg-atlas-red hover:bg-atlas-red/90 text-atlas-white px-8 py-6 md:text-lg"
            >
              <Link
                to="/tentang-kami"
                className="inline-flex items-center gap-2"
              >
                Selengkapnya
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-atlas-white" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="space-y-10 md:space-y-20">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
              We Are Your Business Partner
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-atlas-blue/10 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-atlas-blue" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-atlas-blue mb-2">
                    {inView ? (
                      <CountUp end={stat.number} duration={5} suffix="+" />
                    ) : (
                      "0+"
                    )}
                  </div>
                  <div className="text-atlas-blue/70 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Summary Section */}
      <section className="py-16 bg-gradient-to-br from-atlas-blue/5 to-atlas-red/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-atlas-blue mb-6 md:mb-12">
              Tentang Atlas Advertising
            </h2>
            <p className="md:text-lg text-atlas-blue/80 mb-8 leading-relaxed text-justify">
              Periklanan merupakan salah satu bentuk dari komunikasi impresional
              yang digunakan oleh perusahaan barang atau jasa. Peranan
              periklanan dalam pemasaran jasa adalah untuk membangun kesadaran
              (awareness) terhadap keberadaan jasa yang ditawarkan, menambah
              pengetahuan konsumen tentang jasa yang ditawarkan, membujuk calon
              konsumen untuk membeli atau menggunakan jasa tersebut, dan
              membedakan diri perusahaan satu dengan perusahaan lain.
            </p>
            <p className="md:text-lg text-atlas-blue/80 mb-8 leading-relaxed text-justify">
              ATLAS Adverstising hadir dengan komitmen memberikan pelayanan satu
              pintu terhadap konsumen, mulai dari proses produksi, pajak dan
              perijinan hingga pemasangan spanduk, baliho, T-Banner,
              reskin/revisual billboard dan shopsign, produksi shopsing, neonbox
              dan huruf timbul, baik didalam maupun luar kota, oleh karena itu
              tim kami siap untuk membantu promosi usaha anda secara
              profesional.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-atlas-blue text-atlas-blue hover:bg-atlas-blue hover:text-atlas-white"
            >
              <Link
                to="/tentang-kami"
                className="inline-flex items-center gap-2"
              >
                Tentang Kami
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Highlight Section */}
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
                    Spanduk adalah media informasi yang biasanya berukuran
                    panjang dan membentang di jalan raya selain jalan protocol.
                    Spanduk memiliki benttuk horizontal terbuat dari bahan kain
                    atau flexy digital printing dengan ukuran rata-rata 1 x 2
                    meter, sampai dengan 1 x 8 meter, Spanduk merupakan alat
                    promosi yang sudah cukup lama dikenal banyak kalangan untuk
                    melakukan kegitan promosi produk mereka. Spanduk sendiri
                    dapat dibilang media promosi yang sangat kuno untuk saat
                    ini, namun Atlas Advertising sebagai perusahaan Jasa Pasang
                    Spanduk Bentang masih rutin mengerjakan pemasangan spanduk
                    yang menjadi media favorit para pengusaha dan pelaku event
                    dikarenakan spanduk sangat efektif dan harga relatif murah
                    dibandingkan media promosi lainnya. Spanduk masih menjadi
                    rekomendasi terbaik sebagai media promosi sampai saat ini.
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
                    mempromosikan bisnisnya, umumnya berukuran 1 x 3 meter
                    sampai dengan 1 x 4 meter, dengan metode pemasangan
                    berdiri/vertical dan disangga tihang pada bagian tengah,
                    mengapa t-banner sangat digemari oleh para pelaku usaha yang
                    akan mempromosikan bisnisnya dikarenakan T-Banner dapat
                    dipasang disekitar lokasi bisnis atau tempat event, namun
                    t-banner sendiri kadang dipasangan dengan cara menyebar dan
                    berkelompok, atau dipasang pada jalan menuju venue, sampai
                    saat ini T-banner masih menjadi media promosi ungggulan
                    untuk mempromosikan produk bisnis ataupun event. Akan tetapi
                    T-Banner adalah salah satu Media Promosi yang paling popular
                    dan sangat efektif untuk meramaikan sekitar lokasi bisnis
                    atau event. Oleh Sebab itu Atlas Advertising sebagai
                    Perusahaan jasa Pemasangan T-Banner di bandung sangat sering
                    sekali mengerjakan pemasangan T-Banner di Kota bandung dan
                    kota-kota lain di Jawa Barat.
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
                    Baliho/Giant Banner paling populer dikalangan pengusaha
                    dalam mempromosikan produk bisnisnya dikarenakan ukuran yang
                    besar sehingga dapat memuat banyak konten dan mudah dibaca
                    oleh pembaca, Baliho Insidentil pada umumnya berukuran 3 x 4
                    meter vertical dan dipasang dengan rangka bambu, penempatan
                    atau lokasi pemasangan juga tidak disembarang tempat bisa
                    tergantung izin dari pihak perizinan daerah setempat, Baliho
                    atau Giant Banner menjadi salah satu media promosi paling
                    populer dikalangan pengusaha dan Event Organizer yang ingin
                    mempromosikan produk bisnisnya, namun baliho memiliki tarif
                    yang cukup mahal sehingga jumlah yang dipasangpun tidak
                    terlalu banyak, dan penempatan baliho harus pada tempat yang
                    telah ditentukan oleh pihak perijinan atau tempat yang tidak
                    mengganggu aktifitas bisnis orang lain, Baliho banyak
                    dipasang disetiap sudut perempatan jalan kota. Namun Baliho
                    masih menjadi pilihan utama para pebisnis dan event
                    organizer untuk mempromosikan produknya, dan Atlas
                    Advertising adalah perusahaan jasa pasang baliho di bandung
                    yang masih aktif mengerjakan pekerjaan ini.
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
                    className="w-full h-full max-h-[670px] object-cover object-center rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Advantages Section */}
      <section className="py-16 bg-gradient-to-br from-atlas-blue/5 to-atlas-red/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-atlas-blue mb-4">
              Mengapa Harus Atlas Advertising?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-atlas-red/10 rounded-full mb-6 group-hover:bg-atlas-red/20 transition-colors">
                  <advantage.icon className="w-8 h-8 text-atlas-red" />
                </div>
                <h3 className="text-xl font-semibold text-atlas-blue mb-3">
                  {advantage.title}
                </h3>
                <p className="text-atlas-blue/70 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <Partner />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-atlas-blue/5 to-atlas-red/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Memulai Proyek Advertising Anda?
          </h2>
          <p className="text-xl mb-8 text-atlas-blue-70 max-w-2xl mx-auto">
            Konsultasikan kebutuhan advertising Anda dengan tim profesional
            kami. Dapatkan solusi terbaik untuk brand Anda.
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
              <Link to="/galeri">Lihat Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
