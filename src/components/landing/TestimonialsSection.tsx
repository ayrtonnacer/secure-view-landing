import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Propietaria de Negocio",
    content: "Desde que instalamos las cámaras SecurVision, los intentos de robo desaparecieron. La calidad de imagen es impresionante.",
    rating: 5,
  },
  {
    name: "Carlos Ramírez",
    role: "Gerente de Edificio",
    content: "El sistema de detección IA nos avisa inmediatamente de cualquier actividad sospechosa. Ha cambiado completamente nuestra seguridad.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Madre de Familia",
    content: "Puedo ver a mis hijos cuando llegan de la escuela desde mi trabajo. La app es súper fácil de usar y la tranquilidad no tiene precio.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Lo que dicen <span className="text-gradient">nuestros clientes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Miles de hogares y negocios ya confían en SecurVision
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative bg-gradient-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-glow-cyan to-glow-blue flex items-center justify-center">
                  <span className="font-display font-bold text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
