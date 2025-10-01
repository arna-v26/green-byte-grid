import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Leaf, TrendingUp } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-card/50 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Blockchain-Powered Sustainability</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="gradient-hero bg-clip-text text-transparent">
              Circular Energy
            </span>
            <br />
            <span className="text-foreground">
              & Waste Ecosystem
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Trade energy tokens, earn rewards for sustainability, and join the decentralized green economy
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="xl" className="group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="flex flex-col items-center p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm shadow-card">
              <Zap className="w-8 h-8 text-primary mb-3 animate-pulse-slow" />
              <div className="text-3xl font-bold gradient-eco bg-clip-text text-transparent">2.5M+</div>
              <div className="text-sm text-muted-foreground">Energy Tokens Traded</div>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm shadow-card">
              <Leaf className="w-8 h-8 text-success mb-3 animate-pulse-slow" />
              <div className="text-3xl font-bold gradient-eco bg-clip-text text-transparent">150K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm shadow-card">
              <TrendingUp className="w-8 h-8 text-secondary mb-3 animate-pulse-slow" />
              <div className="text-3xl font-bold gradient-tech bg-clip-text text-transparent">45%</div>
              <div className="text-sm text-muted-foreground">Carbon Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
