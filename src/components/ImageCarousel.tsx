import { useEffect, useState } from "react";
import roomImageFromoutside from "@/assets/1.jpeg";
import interiorRoomImag1 from "@/assets/2.jpeg";

const images = [
  { src: roomImageFromoutside, alt: "Ready to use room — simply connect to a power supply and sewage outlet." },
  { src: interiorRoomImag1, alt: "Luxury room interior with modern amenities" }
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Experience <span className="bg-gradient-luxury bg-clip-text text-transparent">PORTELS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our innovative portable luxury rooms transform any location 
            into a premium accommodation destination.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-3xl shadow-luxury">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentIndex 
                    ? "opacity-100 scale-100" 
                    : "opacity-0 scale-105"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent"></div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-primary scale-125" 
                    : "bg-muted hover:bg-primary/50"
                }`}
              />
            ))}
          </div>

          <div className="absolute bottom-8 left-8 bg-card/90 backdrop-blur-sm rounded-2xl p-6 max-w-md">
            <h3 className="text-xl font-semibold text-card-foreground mb-2">
              {images[currentIndex].alt}
            </h3>
            <p className="text-muted-foreground text-sm">
              Revolutionary design meets uncompromising luxury in every PORTELS unit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;