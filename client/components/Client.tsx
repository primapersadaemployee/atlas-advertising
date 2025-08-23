import { Users } from "lucide-react";
import { clients } from "../data/clients";

export default function Client() {
  return (
    <section className="py-16 bg-gradient-to-br from-atlas-blue/5 to-atlas-red/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-atlas-blue mb-4">
              Klien Kami
            </h2>
            <p className="text-lg text-atlas-blue/70">
              Dipercaya oleh 22+ perusahaan dan institusi terkemuka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-atlas-white p-6 rounded-lg border border-atlas-blue/10 hover:border-atlas-red/30 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-atlas-red group-hover:text-atlas-blue transition-colors" />
                  <span className="font-medium text-atlas-blue group-hover:text-atlas-red transition-colors">
                    {client}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
