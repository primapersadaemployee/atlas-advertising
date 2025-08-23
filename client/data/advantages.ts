import { Smile } from "lucide-react";
import { Users } from "lucide-react";
import { Star } from "lucide-react";

interface Advantage {
  title: string;
  description: string;
  icon: React.ComponentType;
}

const advantages: Advantage[] = [
  {
    title: "Kualitas Terjamin",
    description:
      "Keberhasilan klien adalah prioritas utama bagi kami. Kami berusaha keras untuk mencapai tujuan pemasaran dan meningkatkan eksposur merek Anda.",
    icon: Star,
  },
  {
    title: "Pengalaman & Keahlian",
    description:
      "Atlas Advertising memiliki pengalaman yang luas dalam industri periklanan dan pemasangan iklan reklame. Tim kami terdiri dari para profesional yang berpengalaman dan ahli dalam merancang strategi iklan yang efektif.",
    icon: Users,
  },
  {
    title: "Pelayanan Pelanggan",
    description:
      "Tim layanan pelanggan kami siap membantu Anda dengan penuh perhatian dan responsif. Kami ingin memastikan klien merasa didukung dan dihargai selama seluruh proses kampanye iklan.",
    icon: Smile,
  },
];

export { advantages };
