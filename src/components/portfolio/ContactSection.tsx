import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import SparkleDecoration from "./SparkleDecoration";
import { useToast } from "@/hooks/use-toast";
import Fireflies from "./Fireflies";
import SocialBar from "./SocialBar";

import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    await emailjs.send(
  import.meta.env.VITE_EMAIL_SERVICE_ID,
  import.meta.env.VITE_EMAIL_TEMPLATE_ID,
  {
    name: formData.name,
    email: formData.email,
    message: formData.message,
    time: new Date().toLocaleString(),
  },
  import.meta.env.VITE_EMAIL_PUBLIC_KEY
);


    toast({
      title: "Message sent!",
      description: "Thank you for reaching out.",
    });
    setFormData({ name: "", email: "", message: "" });
  } catch (err) {
    toast({
      title: "Error",
      description: "Something went wrong.",
    });
    console.error(err);
  }
};

  const contactInfo = [
    { icon: <Mail size={20} />, label: "Email", value: "kanishkad1210@gmail.com" },
    { icon: <MapPin size={20} />, label: "Location", value: "India" },
    { icon: <Phone size={20} />, label: "Phone", value: "+91 9443240065" },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 pt-32 pb-24 md:px-8 relative">
      {/* Fireflies Background */}
      <Fireflies />
      <div className="max-w-6xl mx-auto"></div>
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <SparkleDecoration size={24} />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Get In Touch</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I’d love to connect and talk about new ideas or ways we can build something meaningful together.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors h-20"
                >
                  <div className="p-2 bg-secondary rounded-lg text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium text-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-7">
      
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-card border-border rounded-xl h-12"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="xxx@xyz.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-card border-border rounded-xl h-12"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-card border-border rounded-xl resize-none"
              />
            </div>
            <Button type="submit" size="lg" className="w-full gap-2 rounded-xl hover-lift">
              <Send size={18} />
              Send Message
            </Button>
          </form>
        </div>
      </div>
      {/* Social Bar */}
      <SocialBar />
    </section>
  );
};

export default ContactSection;
