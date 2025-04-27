
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="bg-platinum-900 min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4">
                Request a <span className="gold-gradient text-gradient">Consultation</span>
              </h1>
              <p className="text-white/70 mb-6">
                Platinum Private Capital provides exclusive currency trading services for sophisticated investors. Due to our selective approach, we carefully review all consultation requests.
              </p>
              <div className="space-y-6 text-white/70">
                <div>
                  <h3 className="text-white font-medium">Private Clientele</h3>
                  <p className="text-sm">
                    Our services are tailored for high-net-worth individuals and institutional investors seeking sophisticated currency trading solutions.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-medium">Invitation-Based Access</h3>
                  <p className="text-sm">
                    Access to our expertise is typically by invitation or referral from existing clients. We may consider direct applications from qualified investors.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-platinum-800 border border-white/10 rounded-lg p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
