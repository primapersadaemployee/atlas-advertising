import { ArrowUpRight, Grid3X3, Image, List } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { gallerys } from "../data/gallerys";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

  const countCategory = (name: string) => {
    const count = gallerys.filter(
      (gallery) => gallery.category === name,
    ).length;
    return count;
  };

  const categories = [
    { id: "all", name: "Semua", count: gallerys.length },
    {
      id: "digital-printing",
      name: "Digital Printing",
      count: countCategory("digital-printing"),
    },
    {
      id: "sablon-spanduk",
      name: "Sablon Spanduk",
      count: countCategory("sablon-spanduk"),
    },
    { id: "t-banner", name: "T-Banner", count: countCategory("t-banner") },
    { id: "round-tag", name: "Round Tag", count: countCategory("round-tag") },
    { id: "shop-sign", name: "Shop Sign", count: countCategory("shop-sign") },
    { id: "baliho", name: "Baliho", count: countCategory("baliho") },
    {
      id: "pasang-spanduk",
      name: "Pasang Spanduk",
      count: countCategory("pasang-spanduk"),
    },
    {
      id: "cetak-offset",
      name: "Cetak Offset",
      count: countCategory("cetak-offset"),
    },
  ];

  const filteredGallery =
    selectedCategory === "all"
      ? gallerys
      : gallerys.filter((gallery) => gallery.category === selectedCategory);

  return (
    <section className="py-16 bg-gradient-to-br from-atlas-blue/5 to-atlas-red/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-atlas-blue mb-4">
            Galeri Produk & Pemasangan
          </h2>
          <p className="text-lg text-atlas-blue/70 max-w-4xl mx-auto">
            Berikut adalah dokumentasi hasil pekerjaan kami selama ini semoga
            dapat menjadi referensi untuk dapat bekerjasama dengan Perusahaan
            Anda.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-1">
          <div className="flex flex-wrap items-center gap-1">
            {/* <Filter className="w-5 h-5 text-atlas-blue mr-2" /> */}
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={
                  selectedCategory === category.id
                    ? "bg-atlas-red hover:bg-atlas-red/90 text-atlas-white"
                    : "border-atlas-blue/20 text-atlas-blue hover:bg-atlas-blue hover:text-atlas-white"
                }
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className={
                viewMode === "grid"
                  ? "bg-atlas-blue hover:bg-atlas-blue/90"
                  : "border-atlas-blue/20 text-atlas-blue hover:bg-atlas-blue hover:text-atlas-white"
              }
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              className={
                viewMode === "list"
                  ? "bg-atlas-blue hover:bg-atlas-blue/90"
                  : "border-atlas-blue/20 text-atlas-blue hover:bg-atlas-blue hover:text-atlas-white"
              }
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Gallery Grid */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGallery.map((gallery) => (
              <Card
                key={gallery.id}
                className="border border-atlas-blue/10 hover:border-atlas-red/30 transition-all duration-300 group overflow-hidden cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={gallery.image}
                    alt={gallery.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-atlas-blue/0 group-hover:bg-atlas-blue/20 transition-colors duration-300 flex items-center justify-center">
                    <ArrowUpRight className="w-6 h-6 text-atlas-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-2 left-2">
                    <Badge
                      variant="outline"
                      className="bg-atlas-white/90 text-atlas-blue border-atlas-blue/20 text-xs"
                    >
                      {
                        categories.find((cat) => cat.id === gallery.category)
                          ?.name
                      }
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-sm font-semibold text-atlas-blue mb-1 line-clamp-1 group-hover:text-atlas-red transition-colors">
                    {gallery.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredGallery.map((gallery) => (
              <Card
                key={gallery.id}
                className="border border-atlas-blue/10 hover:border-atlas-red/30 transition-colors group cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-6">
                    <img
                      src={gallery.image}
                      alt={gallery.title}
                      className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-atlas-blue group-hover:text-atlas-red transition-colors">
                          {gallery.title}
                        </h3>
                        <Badge
                          variant="outline"
                          className="border-atlas-blue/20 text-atlas-blue"
                        >
                          {
                            categories.find(
                              (cat) => cat.id === gallery.category,
                            )?.name
                          }
                        </Badge>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-atlas-blue/40 group-hover:text-atlas-red transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {filteredGallery.length === 0 && (
          <div className="text-center py-12">
            <Image className="w-16 h-16 text-atlas-blue/30 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-atlas-blue mb-2">
              Tidak ada dokumentasi ditemukan
            </h3>
            <p className="text-atlas-blue/70">
              Coba ganti kategori filter untuk melihat dokumentasi lainnya.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
