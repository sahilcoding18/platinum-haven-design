
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-platinum-900/95 backdrop-blur-sm py-2 shadow-md" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="font-serif font-bold text-xl md:text-2xl text-white">
            Platinum <span className="text-gold-400">Private</span> Capital
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white/80 hover:text-gold-400 transition-colors text-sm">
            Home
          </Link>
          <Link to="/#services" className="text-white/80 hover:text-gold-400 transition-colors text-sm">
            Services
          </Link>
          <Link to="/contact" className="text-white/80 hover:text-gold-400 transition-colors text-sm">
            Contact
          </Link>
          <Link to="/login">
            <Button 
              variant="outline" 
              className="border-gold-400 text-gold-400 bg-transparent hover:bg-gold-400 hover:text-platinum-900"
            >
              Client Login
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-platinum-900/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-white/80 hover:text-gold-400 transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/#services" 
              className="text-white/80 hover:text-gold-400 transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="text-white/80 hover:text-gold-400 transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/login" 
              className="text-white/80 hover:text-gold-400 transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Client Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

