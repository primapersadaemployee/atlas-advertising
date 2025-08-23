import { Star, Building, Users, Handshake } from "lucide-react";

interface Stat {
  number: number;
  label: string;
  icon: React.ComponentType;
}

const stats: Stat[] = [
  { number: 50, label: "Klien Puas", icon: Users },
  { number: 30, label: "Kerjasama Brand", icon: Handshake },
  { number: 20, label: "Tahun Pengalaman", icon: Star },
  { number: 25, label: "Area Kerja", icon: Building },
];

export { stats };
