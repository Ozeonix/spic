import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "Near SDD Group of Colleges, Adarsh Nagar, Shukul Bazaar, Amethi 227811" },
  { icon: Phone, label: "Phone", value: "+91 8707340075 / 8299358248" },
  { icon: Mail, label: "Email", value: "info@shripalpubliccollege.com" },
  { icon: Clock, label: "Office Hours", value: "Mon–Sat, 9:00 AM – 4:00 PM" },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Thank you for contacting us. We'll respond soon." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      <section className="hero-gradient py-20 text-center">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Contact Us</motion.h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">We'd love to hear from you. Reach out for any queries.</p>
        </div>
      </section>

      <section className="section-padding container">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><Label htmlFor="name">Name</Label><Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></div>
                    <div><Label htmlFor="email">Email</Label><Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required /></div>
                  </div>
                  <div><Label htmlFor="subject">Subject</Label><Input id="subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required /></div>
                  <div><Label htmlFor="message">Message</Label><Textarea id="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required /></div>
                  <Button type="submit" className="gold-gradient text-secondary-foreground border-0 hover:opacity-90 w-full"><Send className="mr-2 h-4 w-4" /> Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Info & Map */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="space-y-4">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <c.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{c.label}</p>
                    <p className="text-sm text-muted-foreground">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64 bg-muted flex items-center justify-center">
              <iframe
                title="School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1155!2d81.596224!3d26.6332731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDM3JzU5LjgiTiA4McKwMzUnNDYuNCJF!5e0!3m2!1sen!2sin!4v1"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
