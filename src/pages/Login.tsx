
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Login = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    clientId: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login attempt
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Access Restricted",
        description: "Please contact your account manager for access.",
        variant: "destructive",
      });
    }, 1500);
  };

  return (
    <div className="bg-platinum-900 min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-center">
          <div className="max-w-md w-full bg-platinum-800 border border-white/10 rounded-lg p-8">
            <div className="flex justify-center mb-6">
              <div className="bg-platinum-900 w-16 h-16 rounded-full flex items-center justify-center">
                <Lock className="h-8 w-8 text-gold-400" />
              </div>
            </div>
            
            <h1 className="text-2xl font-serif font-semibold text-white text-center mb-2">
              Client Portal
            </h1>
            <p className="text-white/70 text-sm text-center mb-8">
              Secure access for Platinum Private Capital clients
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="clientId" className="text-white">Client ID</Label>
                  <Input
                    id="clientId"
                    name="clientId"
                    value={credentials.clientId}
                    onChange={handleChange}
                    required
                    placeholder="Enter your client ID"
                    className="bg-platinum-900 border-white/10 text-white placeholder:text-white/30 focus:border-gold-400 mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="password" className="text-white">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                    placeholder="Enter your password"
                    className="bg-platinum-900 border-white/10 text-white placeholder:text-white/30 focus:border-gold-400 mt-2"
                  />
                </div>
              </div>

              <div>
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="bg-gold-400 text-platinum-900 hover:bg-gold-500 w-full"
                >
                  {isLoading ? "Verifying..." : "Access Portal"}
                </Button>
              </div>
              
              <div className="flex items-center justify-between text-xs pt-2">
                <a href="#" className="text-gold-400 hover:underline">Forgot Client ID?</a>
                <a href="#" className="text-gold-400 hover:underline">Forgot Password?</a>
              </div>
            </form>
            
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center text-white/50 text-xs">
              <Shield className="h-4 w-4 mr-2 text-gold-400" />
              <span>Secure encrypted connection</span>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;
