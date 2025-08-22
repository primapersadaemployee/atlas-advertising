import Layout from "@/components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Send,
  Building,
} from "lucide-react";
import BGHeroService from "../../public/images/bg-hero-service.jpeg";

export default function Kontak() {
  const bandungContacts = [
    { name: "Heri", phone: "0813 22 000 798", isPrimary: true },
    { name: "Heri", phone: "0813 22 000 798", isPrimary: false },
    { name: "Atto", phone: "0888 0202 2291", isPrimary: false },
    { name: "Bayu", phone: "0897 1079 090", isPrimary: false },
  ];

  const lampungContacts = [
    { name: "Admin", phone: "0813 22 11 9899", isPrimary: false },
    { name: "Admin", phone: "0813 22 11 9899", isPrimary: false },
  ];

  const primaryPhone = "081322000798";
  const primaryDisplayPhone = "0813 22 000 798";

  const handleWhatsApp = () => {
    const message = `Halo Atlas Advertising, saya tertarik dengan layanan advertising Anda. Mohon informasi lebih lanjut.`;
    const whatsappUrl = `https://wa.me/${primaryPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleDirectCall = () => {
    window.open(`tel:${primaryPhone}`, "_self");
  };

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
              Hubungi Kami
            </h1>
            <p className="text-xl text-atlas-white/90 max-w-2xl mx-auto mb-8">
              Datang ke alamat kami atau hubungi tim profesional Atlas
              Advertising. Kami siap membantu mewujudkan kebutuhan advertising
              Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-atlas-red hover:bg-atlas-red/90 px-8"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-atlas-white text-atlas-white hover:bg-atlas-white hover:text-atlas-blue px-8"
                onClick={handleDirectCall}
              >
                <Phone className="w-5 h-5 mr-2" />
                Telp Langsung
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-atlas-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-atlas-blue mb-4">
              Lokasi Kantor Kami
            </h2>
            <p className="text-lg text-atlas-blue/70">
              Atlas Advertising melayani Anda di dua lokasi strategis
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Bandung Office */}
            <Card className="border-2 border-atlas-blue/10 hover:border-atlas-red/30 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-atlas-blue flex items-center gap-2">
                    <Building className="w-6 h-6 text-atlas-red" />
                    Kantor Bandung
                  </CardTitle>
                  <Badge className="bg-atlas-red text-atlas-white">
                    Kantor Pusat
                  </Badge>
                </div>
                <CardDescription className="text-atlas-blue/70">
                  Kantor pusat melayani wilayah Jawa Barat dan sekitarnya
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-atlas-red mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-atlas-blue">Alamat:</p>
                    <p className="text-atlas-blue/80">
                      Jl. Parakan Mas Indah 1 No. 18
                      <br />
                      Kel. Antapani Tengah, Kec. Antapani
                      <br />
                      Bandung 40291
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-atlas-red mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-atlas-blue">Email:</p>
                    <div className="space-y-1">
                      <p className="text-atlas-blue/80">
                        admin@atlasadvertising.id
                      </p>
                      <p className="text-atlas-blue/80">
                        atlas.adv2017@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-atlas-red mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-atlas-blue">Telepon:</p>
                    <div className="space-y-2">
                      {bandungContacts.map((contact, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="text-atlas-blue/80">
                            {contact.phone} ({contact.name})
                          </span>
                          {contact.isPrimary && (
                            <Badge
                              variant="outline"
                              className="text-xs border-atlas-red text-atlas-red"
                            >
                              Primary
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    size="sm"
                    className="bg-atlas-red hover:bg-atlas-red/90 flex-1"
                    onClick={handleWhatsApp}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-atlas-blue text-atlas-blue hover:bg-atlas-blue hover:text-atlas-white flex-1"
                    onClick={handleDirectCall}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Lampung Office */}
            <Card className="border-2 border-atlas-blue/10 hover:border-atlas-red/30 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-atlas-blue flex items-center gap-2">
                  <Building className="w-6 h-6 text-atlas-red" />
                  Kantor Lampung
                </CardTitle>
                <CardDescription className="text-atlas-blue/70">
                  Melayani wilayah Lampung dan Sumatera Selatan
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-atlas-red mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-atlas-blue">Alamat:</p>
                    <p className="text-atlas-blue/80">
                      Jl. Sultan Badarudin No. 50
                      <br />
                      Tanjung Karang Barat
                      <br />
                      Bandar Lampung, Lampung
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-atlas-red mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-atlas-blue">Email:</p>
                    <div className="space-y-1">
                      <p className="text-atlas-blue/80">
                        admin.atlasadvertising.id
                      </p>
                      <p className="text-atlas-blue/80">
                        atlas.adv2017@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-atlas-red mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-atlas-blue">Telepon:</p>
                    <div className="space-y-2">
                      {lampungContacts.map((contact, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="text-atlas-blue/80">
                            {contact.phone} ({contact.name})
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    size="sm"
                    className="bg-atlas-blue hover:bg-atlas-blue/90 flex-1"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-atlas-blue text-atlas-blue hover:bg-atlas-blue hover:text-atlas-white flex-1"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-br from-atlas-blue/5 to-atlas-red/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-atlas-blue mb-4">
              Lokasi Kantor Bandung
            </h2>
            <p className="text-lg text-atlas-blue/70">
              Kunjungi kantor pusat kami di Bandung untuk konsultasi langsung
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-atlas-blue/10 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-full h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9005851613044!2d107.66516967500046!3d-6.928517881398446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e89cbb5c063f%3A0x1234567890abcdef!2sJl.%20Parakan%20Mas%20Indah%201%20No.18%2C%20Antapani%20Tengah%2C%20Kec.%20Antapani%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040291!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Atlas Advertising Bandung Office Location"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
            <div className="text-center mt-6">
              <p className="text-atlas-blue/70 mb-4">
                Jl. Parakan Mas Indah 1 No. 18, Kel. Antapani Tengah, Kec.
                Antapani, Bandung 40291
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="outline"
                  className="border-atlas-blue text-atlas-blue hover:bg-atlas-blue hover:text-atlas-white"
                  onClick={() =>
                    window.open(
                      "https://maps.google.com/?q=-6.928517881398446,107.6675413689449",
                      "_blank",
                    )
                  }
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Buka di Google Maps
                </Button>
                <Button
                  variant="outline"
                  className="border-atlas-red text-atlas-red hover:bg-atlas-red hover:text-atlas-white"
                  onClick={() =>
                    window.open(
                      "https://waze.com/ul?ll=-6.928517881398446,107.6675413689449&navigate=yes",
                      "_blank",
                    )
                  }
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Buka di Waze
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Additional Info */}
      <section className="py-16 bg-atlas-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-atlas-blue mb-4">
                Ikuti Kami di Media Sosial
              </h2>
              <p className="text-lg text-atlas-blue/70">
                Dapatkan update terbaru tentang portfolio dan layanan kami
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-atlas-blue/10 hover:border-atlas-red/30 transition-colors">
                <CardContent className="p-8 text-center">
                  <Facebook className="w-12 h-12 text-atlas-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-atlas-blue mb-2">
                    Facebook
                  </h3>
                  <p className="text-atlas-blue/70 mb-6">
                    Lihat portfolio terbaru dan update project kami
                  </p>
                  <Button
                    className="bg-atlas-blue hover:bg-atlas-blue/90 w-full"
                    onClick={() =>
                      window.open(
                        "https://facebook.com/atlasadvertising",
                        "_blank",
                      )
                    }
                  >
                    <Facebook className="w-4 h-4 mr-2" />
                    Follow Facebook
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-atlas-blue/10 hover:border-atlas-red/30 transition-colors">
                <CardContent className="p-8 text-center">
                  <Instagram className="w-12 h-12 text-atlas-red mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-atlas-blue mb-2">
                    Instagram
                  </h3>
                  <p className="text-atlas-blue/70 mb-6">
                    Behind the scenes dan galeri visual project kami
                  </p>
                  <Button
                    className="bg-atlas-red hover:bg-atlas-red/90 w-full"
                    onClick={() =>
                      window.open(
                        "https://instagram.com/atlasadvertising",
                        "_blank",
                      )
                    }
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Follow Instagram
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Card className="border border-atlas-blue/10">
                <CardContent className="p-8">
                  <Clock className="w-12 h-12 text-atlas-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-atlas-blue mb-2">
                    Jam Operasional
                  </h3>
                  <div className="space-y-2 text-atlas-blue/80">
                    <p>
                      <strong>Senin - Jumat:</strong> 08:00 - 17:00 WIB
                    </p>
                    <p>
                      <strong>Sabtu:</strong> 08:00 - 14:00 WIB
                    </p>
                    <p>
                      <strong>Minggu:</strong> Tutup
                    </p>
                  </div>
                  <p className="text-atlas-blue/60 text-sm mt-4">
                    *Untuk konsultasi darurat, hubungi WhatsApp kami kapan saja
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-atlas-blue text-atlas-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Memulai Project Advertising Anda?
          </h2>
          <p className="text-xl mb-8 text-atlas-white/90 max-w-2xl mx-auto">
            Hubungi tim profesional Atlas Advertising sekarang juga. Konsultasi
            gratis untuk semua kebutuhan advertising Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-atlas-red hover:bg-atlas-red/90 px-8"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat WhatsApp Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-atlas-white text-atlas-white hover:bg-atlas-white hover:text-atlas-blue px-8"
              onClick={handleDirectCall}
            >
              <Phone className="w-5 h-5 mr-2" />
              Telp Langsung: {primaryDisplayPhone}
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
