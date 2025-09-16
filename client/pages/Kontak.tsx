import { Helmet } from "react-helmet";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Clock, Facebook, Instagram } from "lucide-react";
import BGHeroService from "/images/bg-hero-service.jpeg";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import { useCallback } from "react";
import OfficeLocation from "@/components/OfficeLocation";
import Map from "@/components/Map";
import AdditionalInfo from "@/components/AdditionalInfo";

export default function Kontak() {
  const handleWhatsApp = useCallback(() => {
    const message = `Halo Atlas Andalas Advertising, Saya mau order...`;
    const whatsappUrl = `https://wa.me/6281322000798?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  }, []);

  const handleDirectCall = useCallback(() => {
    window.open(`tel:+6281322000798`, "_self");
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Kontak - Jasa Pasang Spanduk, Baliho, t-banner, revisual billboard
        </title>
        <meta
          name="description"
          content="Hubungi Atlas Advertising untuk konsultasi dan pemesanan jasa pasang spanduk, baliho, t-banner, atau revisual billboard. Tim kami siap membantu kebutuhan iklan outdoor bisnis Anda dengan pelayanan cepat dan profesional."
        />
        <meta
          name="keywords"
          content="kontak Atlas Advertising, hubungi jasa pasang spanduk, pemesanan baliho, jasa t-banner, konsultasi reklame, layanan pemasangan billboard"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Atlas Advertising - Jasa Spanduk, Baliho, T-Banner, Billboard"
        />
        <meta
          property="og:description"
          content="Solusi iklan outdoor profesional dengan hasil cepat, rapi, dan tepat sasaran."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://atlasadvertising.id/" />
        <meta
          property="og:image"
          content="https://atlasadvertising.id/wp-content/uploads/2023/09/cropped-logo-website-2-2.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Atlas Advertising - Jasa Spanduk, Baliho, T-Banner, Billboard"
        />
        <meta
          name="twitter:description"
          content="Solusi iklan outdoor profesional dengan hasil cepat, rapi, dan tepat sasaran."
        />
        <meta
          name="twitter:image"
          content="https://atlasadvertising.id/wp-content/uploads/2023/09/cropped-logo-website-2-2.png"
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <div data-aos="fade-down">
          <Hero
            backgroundImage={BGHeroService}
            title="Hubungi Kami"
            description="Datang ke alamat kami atau hubungi tim profesional Atlas
        Advertising. Kami siap membantu mewujudkan kebutuhan advertising
        Anda."
          >
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
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
                className="border-atlas-white text-atlas-blue hover:bg-atlas-white/90 hover:text-atlas-blue px-8"
                onClick={handleDirectCall}
              >
                <Phone className="w-5 h-5 mr-2" />
                Telp Langsung
              </Button>
            </div>
          </Hero>
        </div>

        {/* Office Locations */}
        <div data-aos="fade-up">
          <OfficeLocation
            handleWhatsApp={handleWhatsApp}
            handleDirectCall={handleDirectCall}
          />
        </div>

        {/* Map Section */}
        <div data-aos="zoom-in">
          <Map />
        </div>

        {/* Social Media & Additional Info */}
        <div data-aos="fade-up">
          <AdditionalInfo />
        </div>

        {/* Final CTA */}
        <div data-aos="fade-up">
          <CTA />
        </div>
      </Layout>
    </>
  );
}
