import { Helmet } from "react-helmet";
import Layout from "@/components/layout/Layout";
import Partner from "@/components/Partner";
import BGHeroAbout from "/images/bg-hero-about.jpeg";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";

export default function Galeri() {
  return (
    <>
      <Helmet>
        <title>
          Galeri - Jasa Pasang Spanduk, Baliho, t-banner, revisual billboard
        </title>
        <meta
          name="description"
          content="Lihat portofolio pemasangan spanduk, baliho, t-banner, dan billboard yang telah dikerjakan Atlas Advertising. Bukti nyata komitmen kami dalam memberikan hasil iklan outdoor yang rapi, menarik, dan efektif."
        />
        <meta
          name="keywords"
          content="galeri Atlas Advertising, portofolio pemasangan spanduk, hasil pemasangan baliho, contoh iklan outdoor, dokumentasi reklame, proyek billboard"
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
            backgroundImage={BGHeroAbout}
            title="Galeri"
            description="Dokumentasi pekerjaan dan portfolio Atlas Advertising. Lihat hasil karya kami untuk berbagai klien di seluruh Indonesia."
          />
        </div>

        {/* Gallery Section */}
        <div data-aos="fade-up">
          <Gallery />
        </div>

        {/* Partner Section */}
        <div data-aos="fade-up">
          <Partner />
        </div>
      </Layout>
    </>
  );
}
