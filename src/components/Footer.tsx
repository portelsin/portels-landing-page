import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold mb-6">PORTELS</div>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 max-w-lg">
              Revolutionizing the hospitality industry with portable luxury rooms.
              Efficient, sustainable, and luxurious accommodation solutions for any location.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Features</a></li>
              <li><a href="#gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Gallery</a></li>
              <li><a href="#video" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Experience</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">
                  <a
                    href="mailto:portelsinn@gmail.com"
                  >portelsinn@gmail.com</a>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80"><a href="tel:+91 7733982270">+91 7733982270</a> /
                  <a href="tel:+91 9828836382">+91 9828836382</a></span>
              </div>
              <div className="flex items-center space-x-3">
                <div>
                <MapPin className="w-5 h-5 text-primary-foreground/60" />
                </div>
                <span className="text-primary-foreground/80">3rd Floor, Room No - 304, Suits Coworking Space, Plot No - 14, Yudhister Marg, near Yojana Bhawan, Jaipur, Rajasthan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-16 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025 PORTELS. All rights reserved. Transforming hospitality, one portable room at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;