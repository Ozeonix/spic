import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="hero-gradient text-primary-foreground">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Shripal Public Inter College</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Nurturing minds and building futures since 2005. Committed to academic excellence and holistic development. Committed to academic excellence and holistic development.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="Social media">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["About Us", "Academics", "Admissions", "Facilities", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(/ /g, "-").replace("about-us", "about")}`} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Near SDD Group of Colleges, Adarsh Nagar, Shukul Bazaar, Amethi 227811</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> +91 8707340075</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> +91 8299358248</li>
              <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> info@shripalpubliccollege.com</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">School Hours</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Monday – Friday: 8:00 AM – 3:00 PM</li>
              <li>Saturday: 8:00 AM – 12:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Shripal Public Inter College. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
