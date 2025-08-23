import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import BGHeroHome from "/images/bg-hero-home.jpg";
import Typewriter from "typewriter-effect";

export default function HeroHome() {
  return (
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
            Umbul-Umbul | Pajak dan Perijinan Reklame | Digital Printing Outdoor
            | Sablon Spanduk | Printing Offset Cetak Brosur
          </p>
          <Button
            asChild
            size="lg"
            className="bg-atlas-red hover:bg-atlas-red/90 text-atlas-white px-8 py-6 md:text-lg"
          >
            <Link to="/tentang-kami" className="inline-flex items-center gap-2">
              Selengkapnya
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
