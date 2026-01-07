import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="relative bg-gradient-card rounded-3xl p-8 md:p-16 border border-border/50 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-glow-blue/10 rounded-full blur-[80px]" />

          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Protege tu hogar <span className="text-gradient">hoy mismo</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Obtén una cotización gratuita y sin compromiso. Nuestros expertos te asesorarán sobre la mejor solución para tus necesidades.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group">
                Solicitar Cotización Gratis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl">
                <Phone className="w-5 h-5" />
                Llamar Ahora
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Sin permanencia • Instalación incluida • Garantía de 3 años
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

CTASection.displayName = "CTASection";

export default CTASection;
