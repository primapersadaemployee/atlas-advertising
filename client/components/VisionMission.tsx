import { Eye, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Compro from "/images/compro.jpg";

export default function VisionMission() {
  return (
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
                <CardTitle className="text-2xl text-atlas-blue">Visi</CardTitle>
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
                <CardTitle className="text-2xl text-atlas-blue">Misi</CardTitle>
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
              loading="lazy"
              className="w-full h-auto object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
