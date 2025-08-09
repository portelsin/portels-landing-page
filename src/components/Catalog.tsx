import { Download, FileText, Image, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Catalog = () => {
  const { toast } = useToast();

  const handleDownload = (filename: string) => {
    toast({
      title: "Download Started",
      description: `${filename} is being downloaded.`,
    });
  };

  const catalogItems = [
    {
      title: "PORTELS Complete Catalog 2024",
      description: "Comprehensive guide featuring all room types, specifications, and customization options.",
      type: "PDF Catalog",
      size: "12.5 MB",
      icon: FileText,
      featured: true
    },
    {
      title: "Room Specifications Sheet",
      description: "Detailed technical specifications, dimensions, and setup requirements for all models.",
      type: "Technical PDF",
      size: "3.2 MB",
      icon: FileText,
      featured: false
    },
    {
      title: "Installation Guide",
      description: "Step-by-step installation manual with visual guides and safety protocols.",
      type: "PDF Manual",
      size: "8.7 MB",
      icon: FileText,
      featured: false
    },
    {
      title: "Room Gallery",
      description: "High-resolution images showcasing interior designs and customization possibilities.",
      type: "Image Pack",
      size: "45.3 MB",
      icon: Image,
      featured: false
    }
  ];

  return (
    <section id="catalog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Product <span className="bg-gradient-luxury bg-clip-text text-transparent">Catalog</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download our comprehensive catalog to explore the full range of PORTELS
            portable luxury rooms and technical specifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {catalogItems.map((item, index) => (
            <div key={index} className={`relative p-6 rounded-2xl border transition-all duration-300 hover:shadow-luxury group ${item.featured
              ? 'bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20'
              : 'bg-card border-border hover:border-primary/30'
              }`}>
              {item.featured && (
                <div className="absolute -top-3 -right-3">
                  <div className="bg-gradient-hero text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </div>
                </div>
              )}

              <div className="text-center space-y-4">
                <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center ${item.featured
                  ? 'bg-gradient-hero'
                  : 'bg-gradient-to-br from-muted to-secondary'
                  }`}>
                  <item.icon className={`w-8 h-8 ${item.featured ? 'text-primary-foreground' : 'text-muted-foreground'
                    }`} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground mb-4">
                    <span className="bg-muted px-2 py-1 rounded-full">{item.type}</span>
                    <span className="bg-muted px-2 py-1 rounded-full">{item.size}</span>
                  </div>
                </div>

                <Button
                  variant={item.featured ? "default" : "outline"}
                  className="w-full group-hover:scale-105 transition-transform duration-200"
                  onClick={() => handleDownload(item.title)}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-muted/50 to-secondary/50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Need Custom Solutions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team can create custom room configurations and provide detailed proposals
              tailored to your specific project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-hero py-2 px-4 rounded-lg text-primary-foreground hover:opacity-90 transition-opacity shadow-luxury"
              >
                Request Custom Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;