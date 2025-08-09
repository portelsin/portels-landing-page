import { Button } from "@/components/ui/button";
import heroImage from "@/assets/1.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-5 animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            <span className="text-white">Portable</span>
            <br />
            <span className="bg-gradient-luxury bg-clip-text text-transparent">Luxury</span>
            <br />
            <span className="text-white">Redefined</span>
          </h1>

          <p className="text-xl text-white max-w-lg leading-relaxed">
            Luxury portable rooms that set up anywhere with just an electricity inlet and sewage outlet — ideal for premium stays, farm retreats, and upscale resorts
          </p>

          <div className="flex gap-4">
            <a
              href="#video"
              className="bg-gradient-hero py-2 px-4 rounded-lg text-primary-foreground hover:opacity-90 transition-opacity shadow-luxury"
            >
              Watch Demo
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 p4-8">
            {/* <div className="text-center">
              <div className="text-3xl font-bold text-primary">6</div>
              <div className="text-sm text-muted-foreground">Rooms per truck</div>
            </div> */}
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50%</div>
              <div className="text-sm text-gray-100">Logistic Cost reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">4h</div>
              <div className="text-sm text-gray-100">Setup time</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;