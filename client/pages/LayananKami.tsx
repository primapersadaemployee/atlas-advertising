import Layout from "@/components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Printer,
  Wrench,
  FileText,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import BGHeroService from "/images/bg-hero-service.jpeg";
import DigitalPrinting from "/images/digital-printing.jpg";
import SablonSpanduk from "/images/sablon-spanduk.jpg";
import CetakOffset from "/images/cetak-offset.jpg";
import TBanner from "/images/t-banner.jpeg";
import RoundTag from "/images/round-tag.jpg";
import Reskin from "/images/reskin.jpg";
import Baliho from "/images/baliho.jpeg";
import Spanduk from "/images/spanduk.jpg";
import ShopSign from "/images/shop-sign.jpg";
import { Link } from "react-router-dom";
import CTA from "@/components/CTA";

export default function LayananKami() {
  const mainServices = [
    {
      title: "Produksi Reklame",
      description:
        "Agar tercapainya kualitas kerja yang baik kami juga melengkapi fasilitas kerja kami seperti sablon spanduk bahan dasar kain dan digital printing outdoor",
      icon: Printer,
      image: "/placeholder.svg",
      features: [
        "Teknologi Digital Printing Terdepan",
        "Bahan Berkualitas Tinggi",
        "Proses Produksi Cepat",
        "Tim Profesional Berpengalaman",
      ],
      color: "blue",
    },
    {
      title: "Jasa Pemasangan",
      description:
        "Sebagai perusahaan yang bergerak dibidang reklame outdoor saat ini kami lebih fokus pada jasa pemasangan media reklame permanen dan insidentil",
      icon: Wrench,
      image: "/placeholder.svg",
      features: [
        "Pemasangan Media Permanen",
        "Pemasangan Media Insidentil",
        "Tim Teknisi Profesional",
        "Peralatan Lengkap & Modern",
      ],
      color: "red",
    },
    {
      title: "Jasa Pajak & Perizinan",
      description:
        "Kami menyediakan jasa pengurusan pajak dan perizinan iklan reklame dengan harga yang terjangkau, telah dipercaya oleh 20+ klien dan lebih dari 30 brand seluruh Indonesia",
      icon: FileText,
      image: "/placeholder.svg",
      features: [
        "Dipercaya 20+ Klien",
        "Melayani 30+ Brand",
        "Harga Terjangkau",
        "Proses Cepat & Legal",
      ],
      color: "blue",
    },
  ];

  const productionServices = [
    {
      title: "Digital Printing",
      description:
        "Layanan cetak digital berkualitas tinggi untuk berbagai kebutuhan reklame outdoor dan indoor",
      features: [
        "Resolusi HD",
        "Tahan Cuaca",
        "Berbagai Ukuran",
        "Warna Tajam",
      ],
      image: DigitalPrinting,
    },
    {
      title: "Sablon Produk",
      description:
        "Sablon spanduk dengan bahan dasar kain berkualitas untuk kebutuhan promosi dan event",
      features: [
        "Bahan Kain Premium",
        "Tinta Anti Luntur",
        "Jahitan Kuat",
        "Custom Design",
      ],
      image: SablonSpanduk,
    },
    {
      title: "Cetak Offset",
      description:
        "Layanan cetak offset untuk keperluan promosi dalam jumlah besar dengan kualitas konsisten",
      features: [
        "Kualitas Konsisten",
        "Volume Besar",
        "Harga Ekonomis",
        "Finishing Berkualitas",
      ],
      image: CetakOffset,
    },
  ];

  const installationServices = [
    {
      title: "T-Banner",
      description:
        "Pemasangan T-Banner untuk promosi event dan kegiatan komersial",
      image: TBanner,
    },
    {
      title: "Roundtag",
      description:
        "Instalasi roundtag untuk identifikasi lokasi dan branding permanen",
      image: RoundTag,
    },
    {
      title: "Reskin/Revisual",
      description:
        "Layanan perubahan tampilan visual media reklame yang sudah ada",
      image: Reskin,
    },
    {
      title: "Baliho",
      description:
        "Pemasangan baliho untuk advertising skala besar dan jangkauan luas",
      image: Baliho,
    },
    {
      title: "Spanduk",
      description:
        "Instalasi spanduk untuk berbagai keperluan promosi dan informasi",
      image: Spanduk,
    },
    {
      title: "Shop Sign",
      description:
        "Pemasangan papan nama toko dan signage untuk identitas bisnis",
      image: ShopSign,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-black text-atlas-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(${BGHeroService})` }}
        ></div>
        <div className="relative container mx-auto px-2 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Layanan Kami
            </h1>
            <p className="text-xl text-atlas-white/90 max-w-2xl mx-auto">
              Solusi lengkap untuk semua kebutuhan advertising dan reklame Anda.
              Dari produksi hingga pemasangan dan perizinan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Overview */}
      <section className="py-16 bg-atlas-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-atlas-blue mb-4">
              Layanan Utama
            </h2>
            <p className="text-lg text-atlas-blue/70 max-w-2xl mx-auto">
              Atlas Advertising menyediakan tiga kategori layanan utama untuk
              memenuhi semua kebutuhan advertising dan reklame Anda.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card
                key={index}
                className="border-2 border-atlas-blue/10 hover:border-atlas-red/30 transition-all duration-300 group"
              >
                <CardHeader className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-lg bg-gradient-to-br from-atlas-blue/10 to-atlas-red/10 flex items-center justify-center group-hover:from-atlas-red/10 group-hover:to-atlas-blue/10 transition-all">
                    <service.icon className="w-12 h-12 text-atlas-blue group-hover:text-atlas-red transition-colors" />
                  </div>
                  <CardTitle className="text-xl text-atlas-blue group-hover:text-atlas-red transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-atlas-blue/70">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Production Services Detail */}
      <section className="py-16 bg-gradient-to-br from-atlas-blue/5 to-atlas-red/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-atlas-blue mb-4">
              Jasa Produksi
            </h2>
            <p className="text-lg text-atlas-blue/70">
              Layanan produksi reklame dengan teknologi terdepan dan kualitas
              terjamin
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {productionServices.map((service, index) => (
              <Card
                key={index}
                className="border-2 border-atlas-blue/10 hover:border-atlas-red/30 transition-colors group"
              >
                <CardHeader className="text-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto mx-auto mb-4 rounded-2xl"
                  />
                  <CardTitle className="text-lg text-atlas-blue group-hover:text-atlas-red transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-atlas-blue/70">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    to={`https://wa.me/6281322000798?text=Halo%20Atlas,%20Saya%20mau%20order%20${service.title}.`}
                    target="_blank"
                    className="flex items-center"
                  >
                    <Button className="w-full bg-atlas-red hover:bg-atlas-red/90 text-atlas-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Pesan Sekarang
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Services Detail */}
      <section className="py-16 bg-atlas-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-atlas-blue mb-4">
              Jasa Pemasangan
            </h2>
            <p className="text-lg text-atlas-blue/70">
              Layanan pemasangan profesional untuk media reklame permanen dan
              insidentil
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {installationServices.map((service, index) => (
              <Card
                key={index}
                className="border border-atlas-blue/10 hover:border-atlas-red/30 transition-colors group"
              >
                <CardHeader>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full max-h-64 mx-auto mb-4 rounded-2xl"
                  />
                  <CardTitle className="text-lg text-atlas-blue group-hover:text-atlas-red transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-atlas-blue/70">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    to={`https://wa.me/6281322000798?text=Halo%20Atlas,%20Saya%20mau%20order%20${service.title}.`}
                    target="_blank"
                    className="flex items-center"
                  >
                    <Button
                      size="sm"
                      className="w-full bg-atlas-blue hover:bg-atlas-blue/90 text-atlas-white"
                    >
                      <MessageCircle className="w-3 h-3 mr-2" />
                      Pesan Sekarang
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tax & Licensing Services */}
      <section className="py-16 bg-gradient-to-br from-atlas-blue/5 to-atlas-red/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-atlas-blue mb-4">
                Jasa Pajak & Perizinan
              </h2>
              <p className="text-lg text-atlas-blue/70">
                Pengurusan pajak dan perizinan reklame yang mudah, cepat, dan
                terpercaya
              </p>
            </div>

            <Card className="border-2 border-atlas-blue/10">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-atlas-blue mb-4">
                      Solusi Perizinan Terpercaya
                    </h3>
                    <p className="text-atlas-blue/80 mb-6 leading-relaxed">
                      Kami menyediakan jasa pengurusan pajak dan perizinan iklan
                      reklame dengan harga yang terjangkau, telah dipercaya oleh
                      20+ klien dan lebih dari 30 brand seluruh Indonesia.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-atlas-blue/5 rounded-lg">
                        <div className="text-2xl font-bold text-atlas-blue">
                          20+
                        </div>
                        <div className="text-atlas-blue/70 text-sm">
                          Klien Terpercaya
                        </div>
                      </div>
                      <div className="text-center p-4 bg-atlas-red/5 rounded-lg">
                        <div className="text-2xl font-bold text-atlas-red">
                          30+
                        </div>
                        <div className="text-atlas-blue/70 text-sm">
                          Brand Indonesia
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-4 bg-atlas-white rounded-lg border border-atlas-blue/10">
                        <CheckCircle className="w-6 h-6 text-atlas-red" />
                        <span className="text-atlas-blue font-medium">
                          Proses Legal & Resmi
                        </span>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-atlas-white rounded-lg border border-atlas-blue/10">
                        <CheckCircle className="w-6 h-6 text-atlas-red" />
                        <span className="text-atlas-blue font-medium">
                          Harga Terjangkau
                        </span>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-atlas-white rounded-lg border border-atlas-blue/10">
                        <CheckCircle className="w-6 h-6 text-atlas-red" />
                        <span className="text-atlas-blue font-medium">
                          Konsultasi Gratis
                        </span>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-atlas-white rounded-lg border border-atlas-blue/10">
                        <CheckCircle className="w-6 h-6 text-atlas-red" />
                        <span className="text-atlas-blue font-medium">
                          Proses Cepat
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Link
                    to={`https://wa.me/6281322000798?text=Halo%20Atlas,%20Saya%20mau%20order`}
                    target="_blank"
                  >
                    <Button
                      size="lg"
                      className="bg-atlas-red hover:bg-atlas-red/90 text-atlas-white px-8"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Konsultasi Gratis
                    </Button>
                  </Link>
                  <Link to="tel:+6281322000798" target="_blank">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-atlas-blue text-atlas-blue hover:bg-atlas-blue hover:text-atlas-white px-8"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Hubungi Kami
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-atlas-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-atlas-blue mb-4">
              Mengapa Memilih Atlas Advertising?
            </h2>
            <p className="text-lg text-atlas-blue/70 max-w-2xl mx-auto">
              Keunggulan yang membuat kami menjadi pilihan terbaik untuk
              kebutuhan advertising Anda
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

      {/* CTA Section */}
      <CTA />
    </Layout>
  );
}
