import { Helmet } from "react-helmet";
import Layout from "@/components/layout/Layout";
import BGHeroService from "/images/bg-hero-service.jpeg";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import MainServices from "@/components/MainServices";
import ProductionServices from "@/components/ProductionServices";
import InstallationServices from "@/components/InstallationServices";
import TaxLicensingServices from "@/components/TaxLicensingServices";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function LayananKami() {
  return (
    <>
      <Helmet>
        <title>
          Layanan Kami - Jasa Pasang Spanduk, Baliho, t-banner, revisual
          billboard
        </title>
        <meta
          name="description"
          content="Atlas Advertising menawarkan layanan pemasangan spanduk, baliho, t-banner, dan revisual billboard dengan kualitas terbaik. Solusi iklan outdoor yang efektif untuk meningkatkan visibilitas dan daya tarik bisnis Anda."
        />
        <meta
          name="keywords"
          content="layanan Atlas Advertising, jasa spanduk, jasa pemasangan baliho, pasang t-banner, jasa revisual billboard, iklan luar ruang, jasa reklame"
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
            title="Layanan Kami"
            description="Solusi lengkap untuk semua kebutuhan advertising dan reklame Anda. Dari produksi hingga pemasangan dan perizinan."
          />
        </div>

        {/* Main Services Overview */}
        <div data-aos="fade-up">
          <MainServices />
        </div>

        {/* Production Services Detail */}
        <div data-aos="fade-up">
          <ProductionServices />
        </div>

        {/* Installation Services Detail */}
        <div data-aos="fade-up">
          <InstallationServices />
        </div>

        {/* Tax & Licensing Services */}
        <div data-aos="fade-up">
          <TaxLicensingServices />
        </div>

        {/* Why Choose Us */}
        <div data-aos="zoom-in">
          <WhyChooseUs />
        </div>

        {/* CTA Section */}
        <div data-aos="fade-up">
          <CTA />
        </div>
      </Layout>
    </>
  );
}
