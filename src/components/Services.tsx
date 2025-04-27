
import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Private Currency Trading",
    description: "Exclusive access to proprietary currency trading strategies with proven track records across diverse market conditions.",
    icon: <Shield className="h-6 w-6 text-gold-400" />,
  },
  {
    title: "Institutional Portfolio Management",
    description: "Sophisticated currency allocation solutions for institutional investors seeking diversification and risk management.",
    icon: <Shield className="h-6 w-6 text-gold-400" />,
  },
  {
    title: "Private Client Services",
    description: "Bespoke currency trading strategies and personalized portfolio management for high-net-worth individuals.",
    icon: <Shield className="h-6 w-6 text-gold-400" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-platinum-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4">
            Our <span className="gold-gradient text-gradient">Services</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Platinum Private Capital offers exclusive currency trading solutions for sophisticated investors seeking discretion and excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-platinum-900 border border-white/10 p-8 rounded-lg hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-platinum-800 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-medium text-white mb-3">
                {service.title}
              </h3>
              <p className="text-white/70 mb-6 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/70 mb-6">
            Access to our services is by invitation or through a private consultation request.
          </p>
          <Link to="/contact">
            <Button className="bg-gold-400 text-platinum-900 hover:bg-gold-500">
              Request Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
