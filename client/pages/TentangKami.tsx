import Layout from "@/components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Target, Eye, MapPin, Users, Calendar } from "lucide-react";
import Partner from "@/components/Partner";
import BGHeroAbout from "../../public/images/bg-hero-about.jpeg";
import Compro from "../../public/images/compro.jpg";

export default function TentangKami() {
  const reklamePermanent = [
    "Reklame Billboard",
    "Reklame Megatron/Videotron/Walt",
    "Reklame TV Media",
    "Reklame Neon Sign",
    "Reklame Bando Jalan",
    "Reklame Jembatan Penyebrangan Orang",
    "Reklame Bus Shelter",
  ];

  const reklameInsidentil = [
    "Reklame Baliho",
    "Reklame Spanduk",
    "Reklame Umbul-Umbul",
    "Reklame Vertikal Banner",
    "Reklame Poster",
    "Reklame Balon Udara",
    "Reklame Banner / Round Tag",
  ];

  const workAreas = {
    "Jawa Barat": [
      "Kota Bandung",
      "Kota Cimahi",
      "Kabupaten Bandung",
      "Kabupaten Bandung Barat",
      "Kabupaten Sumedang",
      "Kabupaten Subang",
      "Kabupaten/Kota Cirebon",
      "Kabupaten Kuningan",
      "Kabupaten Majalengka",
      "Kabupaten Purwakarta",
      "Kabupaten Karawang",
      "Kabupaten Cianjur",
      "Kota Sukabumi",
      "Kabupaten Indramayu",
      "Kabupaten Garut",
      "Kabupaten/Kota Tasikmalaya",
      "Kabupaten Ciamis",
      "Kabupaten Pangandaran",
    ],
    "Jawa Tengah": ["Purwokerto", "Cilacap", "Kebumen"],
    Lampung: [
      "Kota Bandar Lampung",
      "Kota Metro",
      "Kabupaten Pringsewu",
      "Kabupaten Lampung Selatan",
    ],
  };

  const clients = [
    "PT. Mitrelindo Global",
    "PT. WAKU",
    "PT. Puma Cat Indonesia",
    "PT. Massindo Karya Prima",
    "PT. Matahari Putra Makmur",
    "PT. Yan Property",
    "PT. PP Properti",
    "PT. Percikan Iman",
    "PT. Ruang Raya Indonesia",
    "Universitas Maranatha",
    "Universitas Pendididkan Indonesia",
    "PT. Mount Scopus Indonesia",
    "PT. Pelangi Kreasi Utama",
    "PT. Phoenix Grafistama",
    "PT. Calysta Prima Estetik",
    "KABOBS premium kebab",
    "LINTAS WARNA, EO",
    "CAH EVENT, EO",
    "Mizan Distributions (penerbit)",
    "Holiday Springbed",
    "Zam Zam Residence",
    "Universitas Parahyangan",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-black text-atlas-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(${BGHeroAbout})` }}
        ></div>
        <div className="relative container mx-auto px-2 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tentang Kami
            </h1>
            <p className="text-xl text-atlas-white/90 max-w-2xl mx-auto">
              Mengenal lebih dekat Atlas Advertising, perusahaan periklanan
              outdoor terpercaya dengan pengalaman lebih dari 20 tahun.
            </p>
          </div>
        </div>
      </section>

      {/* About Company Section */}
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
                    Peranan periklanan dalam pemasaran jasa adalah untuk
                    membangun kesadaran (awareness) terhadap keberadaan jasa
                    yang ditawarkan, menambah pengetahuan konsumen tentang jasa
                    yang ditawarkan, membujuk calon konsumen untuk membeli atau
                    menggunakan jasa tersebut, dan membedakan diri perusahaan
                    satu dengan perusahaan lain.
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

      {/* Company History */}
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

      {/* Vision & Mission with Compro */}
      <section className="py-16 bg-atlas-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-atlas-blue mb-12 text-center">
              Visi & Misi
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-atlas-blue/10 hover:border-atlas-red/30 transition-colors">
                <CardHeader className="text-center">
                  <Eye className="w-12 h-12 text-atlas-red mx-auto mb-4" />
                  <CardTitle className="text-2xl text-atlas-blue">
                    Visi
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-atlas-blue/80 text-lg text-center leading-relaxed">
                    Menjadi perusahaan jasa periklanan yang terdepan untuk
                    memberikan solusi terbaik
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-atlas-blue/10 hover:border-atlas-red/30 transition-colors">
                <CardHeader className="text-center">
                  <Target className="w-12 h-12 text-atlas-red mx-auto mb-4" />
                  <CardTitle className="text-2xl text-atlas-blue">
                    Misi
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-atlas-blue/80 text-lg text-center leading-relaxed">
                    Membangun tim kerja yang kompeten agar tercipta lingkungan
                    kerja yang baik untuk tercapainya kepuasan pelanggan
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 w-full max-w-2xl mx-auto">
              <img
                src={Compro}
                alt="compro"
                className="w-full h-auto object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Advertising */}
      <section className="py-16 bg-gradient-to-br from-atlas-blue/5 to-atlas-red/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-atlas-blue mb-8 text-center">
              Jenis-Jenis Reklame
            </h2>

            <Card className="border-2 border-atlas-blue/10 mb-8">
              <CardContent className="p-8">
                <p className="text-atlas-blue/80 leading-relaxed mb-6 text-justify">
                  Reklame, didefinisikan bahwa yang disebut dengan Reklame
                  adalah benda, alat, perbuatan atau media yang menurut bentuk,
                  susunan dan corak ragamnya untuk tujuan komersial,
                  dipergunakan untuk memperkenalkan, menganjurkan atau memujikan
                  suatu barang, jasa atau orang ataupun untuk menarik perhatian
                  umum kepada suatu barang, jasa atau orang yang ditempatkan
                  atau yang dapat dilihat, dibaca, atau didengar dari suatu
                  tempat oleh umum, kecuali yang dilakukan oleh pemerintah atau
                  pemerintah daerah.
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

      {/* Work Areas */}
      <section className="py-16 bg-atlas-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-atlas-blue mb-8 text-center">
              Area Kerja
            </h2>
            <p className="text-lg text-atlas-blue/70 text-center mb-12">
              Wilayah kerja kami menjangkau beberapa kota di provinsi Jawa
              Barat, Jawa Tengah, dan Lampung yang diataranya adalah sebagai
              berikut:
            </p>

            <div className="space-y-8">
              {Object.entries(workAreas).map(([province, areas]) => (
                <Card key={province} className="border-2 border-atlas-blue/10">
                  <CardHeader>
                    <CardTitle className="text-xl text-atlas-blue flex items-center gap-2">
                      <MapPin className="w-6 h-6 text-atlas-red" />
                      {province}
                    </CardTitle>
                    <CardDescription>{areas.length} area kerja</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {areas.map((area, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-atlas-blue/20 text-atlas-blue hover:bg-atlas-blue hover:text-atlas-white"
                        >
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 bg-gradient-to-br from-atlas-blue/5 to-atlas-red/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-atlas-blue mb-4">
                Klien Kami
              </h2>
              <p className="text-lg text-atlas-blue/70">
                Dipercaya oleh 22+ perusahaan dan institusi terkemuka
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="bg-atlas-white p-6 rounded-lg border border-atlas-blue/10 hover:border-atlas-red/30 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-atlas-red group-hover:text-atlas-blue transition-colors" />
                    <span className="font-medium text-atlas-blue group-hover:text-atlas-red transition-colors">
                      {client}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Looping Section (same as homepage) */}
      <Partner />
    </Layout>
  );
}
