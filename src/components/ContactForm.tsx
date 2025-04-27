
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Request received",
        description: "Thank you for your interest. Our team will review your request and contact you if your application meets our criteria.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-white">Full Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="bg-platinum-800 border-white/10 text-white placeholder:text-white/30 focus:border-gold-400 mt-2"
          />
        </div>
        
        <div>
          <Label htmlFor="email" className="text-white">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email address"
            className="bg-platinum-800 border-white/10 text-white placeholder:text-white/30 focus:border-gold-400 mt-2"
          />
        </div>
        
        <div>
          <Label htmlFor="phone" className="text-white">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
            className="bg-platinum-800 border-white/10 text-white placeholder:text-white/30 focus:border-gold-400 mt-2"
          />
        </div>
        
        <div>
          <Label htmlFor="message" className="text-white">Your Message</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Please briefly explain your investment interests"
            className="bg-platinum-800 border-white/10 text-white placeholder:text-white/30 focus:border-gold-400 mt-2 h-32"
          />
        </div>
      </div>

      <div className="pt-4">
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-gold-400 text-platinum-900 hover:bg-gold-500 w-full"
        >
          {isSubmitting ? "Submitting..." : "Submit Request"}
          {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>
        <p className="text-white/50 text-xs mt-4 text-center">
          Due to our exclusive client approach, we carefully review all consultation requests and will contact you if you meet our criteria.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
