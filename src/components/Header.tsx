import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <img
            src="logo.jpg"
            height={60}
            width={60}
          />
          <h2 className="text-2xl font-bold text-primary">
            PORTELS
          </h2>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#gallery" className="text-foreground hover:text-primary transition-colors">
            Gallery
          </a>
          <a href="#video" className="text-foreground hover:text-primary transition-colors">
            Experience
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
        <a href="#features" className="bg-gradient-hero text-primary-foreground hover:opacity-90 transition-opacity py-2 px-4 rounded-md">
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;