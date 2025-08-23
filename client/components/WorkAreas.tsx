import { MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { workAreas } from "../data/workAreas";

export default function WorkAreas() {
  return (
    <section className="py-16 bg-atlas-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-atlas-blue mb-8 text-center">
            Area Kerja
          </h2>
          <p className="text-lg text-atlas-blue/70 text-center mb-12">
            Wilayah kerja kami menjangkau beberapa kota di provinsi Jawa Barat,
            Jawa Tengah, dan Lampung yang diataranya adalah sebagai berikut:
          </p>

          <div className="space-y-8">
            {(Object.entries(workAreas) as [string, string[]][]).map(
              ([province, areas]) => (
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
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
