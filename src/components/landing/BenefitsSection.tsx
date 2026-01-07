import { Check } from "lucide-react";

const benefits = [
  "Reducción del 90% en robos y vandalismo",
  "Monitoreo en tiempo real desde tu smartphone",
  "Alertas instantáneas ante cualquier amenaza",
  "Evidencia legal en caso de incidentes",
  "Descuentos en tu seguro de hogar",
  "Tranquilidad para ti y tu familia",
];

const stats = [
  { number: "10K+", label: "Clientes Satisfechos" },
  { number: "99.9%", label: "Tiempo Activo" },
  { number: "24/7", label: "Soporte Técnico" },
  { number: "3", label: "Años de Garantía" },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              ¿Por qué elegir <span className="text-gradient">SecurVision</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Más que cámaras de seguridad, ofrecemos tranquilidad. Nuestra tecnología protege lo que más importa.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="relative bg-gradient-card rounded-2xl p-8 border border-border/50 text-center group hover:border-primary/50 transition-all"
              >
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <p className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                    {stat.number}
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
