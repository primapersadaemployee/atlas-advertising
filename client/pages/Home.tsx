import { Helmet } from "react-helmet";
import Layout from "@/components/layout/Layout";
import Partner from "@/components/Partner";
import CTA from "@/components/CTA";
import HeroHome from "@/components/HeroHome";
import Statistics from "@/components/Statistics";
import AboutSummary from "@/components/AboutSummary";
import ServiceHighlight from "@/components/ServiceHighlight";
import CompanyAdvantages from "@/components/CompanyAdvantages";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Jasa Pasang Spanduk, Baliho, t-banner, revisual billboard</title>
        <meta
          name="description"
          content="Atlas Advertising adalah perusahaan periklanan terpercaya yang menyediakan jasa pasang spanduk, baliho, t-banner, dan revisual billboard. Solusi iklan outdoor profesional dengan hasil cepat, rapi, dan tepat sasaran."
        />
        <meta
          name="keywords"
          content="Atlas Advertising, jasa pasang spanduk, jasa baliho, jasa pasang t-banner, jasa revisual billboard, iklan outdoor, pemasangan reklame, jasa periklanan"
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
          <HeroHome />
        </div>

        {/* Statistics Section */}
        <div data-aos="fade-up">
          <Statistics />
        </div>

        {/* About Summary Section */}
        <div data-aos="fade-up">
          <AboutSummary />
        </div>

        {/* Services Highlight Section */}
        <div data-aos="fade-up">
          <ServiceHighlight />
        </div>

        {/* Company Advantages Section */}
        <div data-aos="fade-up">
          <CompanyAdvantages />
        </div>

        {/* Partner Logos Section */}
        <div data-aos="fade-up">
          <Partner />
        </div>

        {/* CTA Section */}
        <div data-aos="fade-up">
          <CTA />
        </div>
      </Layout>
    </>
  );
}
