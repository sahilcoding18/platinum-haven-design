
import { Shield, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const services = [
  {
    title: "Private Currency Trading",
    description: "Exclusive access to proprietary currency trading strategies with proven track records across diverse market conditions.",
    icon: <Shield className="h-6 w-6 text-gold-400" />,
    details: [
      "Proprietary algorithmic trading systems",
      "24/7 global currency market access",
      "Risk-managed position sizing",
      "Custom hedging strategies",
      "Institutional-grade execution",
      "Dedicated trading desk support"
    ]
  },
  {
    title: "Institutional Portfolio Management",
    description: "Sophisticated currency allocation solutions for institutional investors seeking diversification and risk management.",
    icon: <Shield className="h-6 w-6 text-gold-400" />,
    details: [
      "Tailored currency overlay programs",
      "Dynamic asset allocation",
      "Strategic portfolio positioning",
      "Currency risk management",
      "Regular performance reporting",
      "Institutional compliance framework"
    ]
  },
  {
    title: "Private Client Services",
    description: "Bespoke currency trading strategies and personalized portfolio management for high-net-worth individuals.",
    icon: <Shield className="h-6 w-6 text-gold-400" />,
    details: [
      "Personal investment concierge",
      "Customized trading strategies",
      "Wealth preservation focus",
      "Regular strategy reviews",
      "Private banking coordination",
      "24/7 dedicated support"
    ]
  },
];

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-platinum-900 border border-white/10 p-8 rounded-lg transition-all duration-300 hover:border-gold-400/30">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-platinum-800 mb-6">
        {service.icon}
      </div>
      <h3 className="text-xl font-serif font-medium text-white mb-3">
        {service.title}
      </h3>
      <p className="text-white/70 mb-6 text-sm">
        {service.description}
      </p>
      
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="flex items-center gap-2 text-gold-400 text-sm hover:text-gold-300 transition-colors">
          Learn more <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4">
          <ul className="space-y-3">
            {service.details.map((detail, index) => (
              <li key={index} className="text-white/70 text-sm flex items-center gap-2">
                <div className="w-1 h-1 bg-gold-400 rounded-full" />
                {detail}
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-32 bg-platinum-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4">
            Our <span className="gold-gradient text-gradient">Services</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Platinum Private Capital offers exclusive currency trading solutions for sophisticated investors seeking discretion and excellence. Our services are tailored to meet the demands of institutional clients and high-net-worth individuals.
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        
        <div className="text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-white/70 mb-8">
              Access to our services is by invitation or through a private consultation request. We maintain strict client acceptance criteria to ensure the highest level of service quality and personal attention.
            </p>
            <Link to="/contact">
              <Button className="bg-gold-400 text-platinum-900 hover:bg-gold-500">
                Request Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

