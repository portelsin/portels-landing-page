import { cn } from "@/lib/utils";
import { Truck, Home, Zap, DollarSign, Users, MapPin } from "lucide-react";

const features = [
  // {
  //   icon: Truck,
  //   title: "Efficient Transport",
  //   description: "6 luxury rooms transported on a single truck, reducing logistics costs by up to 90%",
  //   gradient: "gradient-hero"
  // },
  // {
  //   icon: Home,
  //   title: "Foldable Design",
  //   description: "Innovative foldable architecture that unfolds into full-sized luxury accommodations",
  //   gradient: "gradient-luxury"
  // },
  {
    icon: Zap,
    title: "Quick Setup",
    description: "Complete installation and setup within 4 hours, ready for immediate occupancy",
    gradient: "gradient-nature"
  },
  {
    icon: DollarSign,
    title: "Cost Effective",
    description: "Exponential reduction in transportation and setup costs compared to traditional methods",
    gradient: "gradient-hero"
  },
  {
    icon: Users,
    title: "Luxury Experience",
    description: "Premium amenities and comfort that rival traditional luxury accommodation",
    gradient: "gradient-luxury"
  },
  {
    icon: MapPin,
    title: "Versatile Locations",
    description: "Perfect for farm stays, resorts, remote locations, and temporary luxury accommodation",
    gradient: "gradient-nature"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Why Choose <span className="bg-gradient-luxury bg-clip-text text-transparent">PORTELS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionary technology meets luxury hospitality. Experience the future
            of portable accommodation solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "group p-8 rounded-3xl bg-card shadow-sm hover:shadow-luxury transition-all duration-300 hover:-translate-y-2",
                features.length % 3 === 1 && index === features.length - 1 ? "lg:col-start-2" : ""
              )}
            >
              <div
                className={`w-16 h-16 bg-${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-8 h-8 text-background" />
              </div>

              <h3 className="text-xl font-semibold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>


        <div className="mt-20 bg-gradient-subtle rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Hospitality Business?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the revolution in portable luxury accommodation. Get started with PORTELS today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-hero text-primary-foreground rounded-2xl font-semibold hover:opacity-90 transition-opacity shadow-luxury"
            >
              Schedule Consultation
            </a>
            {/* <button className="px-8 py-4 border-2 border-primary text-primary rounded-2xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
              Download Brochure
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;