import { Mic, Brain, Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-highlight/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-success/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container text-center relative z-10">
        {/* University Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-success" />
          Final Year Senior Project 2025/2026
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          <span className="gradient-text">SpeakEasy</span>
        </h1>

        <p className="text-xl md:text-2xl text-foreground font-serif mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          AI-Powered Stammer Therapy for Children
        </p>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Empowering young voices through intelligent, compassionate speech therapy — 
          helping children overcome stammering with personalized AI assistance.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-card shadow-soft">
            <Mic className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Speech Recognition</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-card shadow-soft">
            <Brain className="w-5 h-5 text-highlight" />
            <span className="text-sm font-medium">AI Analysis</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-card shadow-soft">
            <Heart className="w-5 h-5 text-success" />
            <span className="text-sm font-medium">Child-Friendly</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a href="#abstract" className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-float">
          <span className="text-sm">Explore Project</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1">
            <div className="w-1.5 h-3 rounded-full bg-current animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
