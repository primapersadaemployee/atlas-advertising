import { FileText, Printer, Wrench } from "lucide-react";
import DigitalPrinting from "/images/digital-printing.jpg";
import SablonSpanduk from "/images/sablon-spanduk.jpg";
import CetakOffset from "/images/cetak-offset.jpg";
import TBanner from "/images/t-banner.jpeg";
import RoundTag from "/images/round-tag.jpg";
import Reskin from "/images/reskin.jpg";
import Baliho from "/images/baliho.jpeg";
import Spanduk from "/images/spanduk.jpg";
import ShopSign from "/images/shop-sign.jpg";

interface Service {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  image?: string;
}

const mainServices: Service[] = [
  {
    title: "Produksi Reklame",
    description:
      "Agar tercapainya kualitas kerja yang baik kami juga melengkapi fasilitas kerja kami seperti sablon spanduk bahan dasar kain dan digital printing outdoor",
    icon: Printer,
  },
  {
    title: "Jasa Pemasangan",
    description:
      "Sebagai perusahaan yang bergerak dibidang reklame outdoor saat ini kami lebih fokus pada jasa pemasangan media reklame permanen dan insidentil",
    icon: Wrench,
  },
  {
    title: "Jasa Pajak & Perizinan",
    description:
      "Kami menyediakan jasa pengurusan pajak dan perizinan iklan reklame dengan harga yang terjangkau, telah dipercaya oleh 20+ klien dan lebih dari 30 brand seluruh Indonesia",
    icon: FileText,
  },
];

const productionServices: Service[] = [
  {
    title: "Digital Printing",
    description:
      "Layanan cetak digital berkualitas tinggi untuk berbagai kebutuhan reklame outdoor dan indoor",
    image: DigitalPrinting,
  },
  {
    title: "Sablon Produk",
    description:
      "Sablon spanduk dengan bahan dasar kain berkualitas untuk kebutuhan promosi dan event",
    image: SablonSpanduk,
  },
  {
    title: "Cetak Offset",
    description:
      "Layanan cetak offset untuk keperluan promosi dalam jumlah besar dengan kualitas konsisten",
    image: CetakOffset,
  },
];

const installationServices: Service[] = [
  {
    title: "T-Banner",
    description:
      "Pemasangan T-Banner untuk promosi event dan kegiatan komersial",
    image: TBanner,
  },
  {
    title: "Roundtag",
    description:
      "Instalasi roundtag untuk identifikasi lokasi dan branding permanen",
    image: RoundTag,
  },
  {
    title: "Reskin/Revisual",
    description:
      "Layanan perubahan tampilan visual media reklame yang sudah ada",
    image: Reskin,
  },
  {
    title: "Baliho",
    description:
      "Pemasangan baliho untuk advertising skala besar dan jangkauan luas",
    image: Baliho,
  },
  {
    title: "Spanduk",
    description:
      "Instalasi spanduk untuk berbagai keperluan promosi dan informasi",
    image: Spanduk,
  },
  {
    title: "Shop Sign",
    description:
      "Pemasangan papan nama toko dan signage untuk identitas bisnis",
    image: ShopSign,
  },
];

export { mainServices, productionServices, installationServices };
