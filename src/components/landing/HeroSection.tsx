import { Button } from "@/components/ui/button";
import { Play, CheckCircle } from "lucide-react";
import heroCamera from "@/assets/hero-camera.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-glow-blue/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-secondary/50 rounded-full px-4 py-2 mb-6 border border-border/50">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Protección 24/7 garantizada</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Seguridad
              <span className="text-gradient block">Inteligente</span>
              para tu Hogar y Negocio
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              Cámaras de vigilancia con tecnología IA, visión nocturna avanzada y monitoreo en tiempo real desde cualquier lugar del mundo.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button variant="hero" size="xl">
                Solicitar Cotización Gratis
              </Button>
              <Button variant="heroOutline" size="xl">
                <Play className="w-5 h-5" />
                Ver Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Instalación Gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Garantía 3 Años</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Soporte 24/7</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-float">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-[60px]" />
              
              <img
                src={heroCamera}
                alt="Cámara de seguridad profesional"
                className="relative w-full max-w-lg mx-auto rounded-2xl shadow-card"
              />
              
              {/* Status badge */}
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div>
                    <p className="text-sm font-semibold">En Vivo</p>
                    <p className="text-xs text-muted-foreground">4K Ultra HD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
