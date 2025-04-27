
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-platinum-900 text-white/70 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between border-b border-white/10 pb-8 mb-8">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <Link to="/" className="inline-block mb-4">
              <span className="font-serif font-bold text-xl text-white">
                Platinum <span className="text-gold-400">Private</span> Capital
              </span>
            </Link>
            <p className="text-sm">
              Exclusive currency trading strategies for sophisticated investors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:text-gold-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/#services" className="hover:text-gold-400 transition-colors">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Access</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/login" className="hover:text-gold-400 transition-colors">
                    Client Portal
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gold-400 transition-colors">
                    Request Access
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#" className="hover:text-gold-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-gold-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between text-xs">
          <p>&copy; {currentYear} Platinum Private Capital. All rights reserved.</p>
          <p className="mt-2 md:mt-0">By invitation only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
