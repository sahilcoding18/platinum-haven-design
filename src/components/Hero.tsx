
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-platinum-900 overflow-hidden flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-platinum-800 to-platinum-900"></div>
      
      {/* Abstract background elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold-400/5 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-gold-400/5 blur-2xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-16">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white leading-tight mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            Exclusive Currency <br />
            <span className="gold-gradient text-gradient">Trading Strategies</span>
          </h1>
          
          <p className="text-white/70 text-lg md:text-xl mb-8 max-w-xl animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            Platinum Private Capital offers sophisticated currency trading solutions for discerning investors. Access is by invitation only.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            <Link to="/contact">
              <Button className="bg-gold-400 text-platinum-900 hover:bg-gold-500">
                Request Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Client Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Subtle vertical line decoration */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gradient-to-t from-gold-400/50 to-transparent"></div>
    </div>
  );
};

export default Hero;
