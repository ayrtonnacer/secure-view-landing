import { Eye, Wifi, Moon, Smartphone, Cloud, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Visión 4K Ultra HD",
    description: "Imágenes cristalinas con resolución 4K para capturar cada detalle importante.",
  },
  {
    icon: Moon,
    title: "Visión Nocturna Avanzada",
    description: "Visibilidad perfecta hasta 30 metros incluso en completa oscuridad.",
  },
  {
    icon: Wifi,
    title: "Conectividad WiFi 6",
    description: "Transmisión fluida sin cables, con conexión estable y de alta velocidad.",
  },
  {
    icon: Smartphone,
    title: "App Móvil Intuitiva",
    description: "Controla y visualiza tus cámaras desde cualquier dispositivo, en cualquier lugar.",
  },
  {
    icon: Cloud,
    title: "Almacenamiento Cloud",
    description: "Grabaciones seguras en la nube con acceso ilimitado a tu historial.",
  },
  {
    icon: ShieldCheck,
    title: "Detección IA",
    description: "Inteligencia artificial que distingue personas, vehículos y movimiento sospechoso.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Tecnología de <span className="text-gradient">Vanguardia</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Equipos de última generación con las funciones más avanzadas del mercado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-gradient-card rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon container */}
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
