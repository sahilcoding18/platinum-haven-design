
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-platinum-900 min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
};

export default Index;
