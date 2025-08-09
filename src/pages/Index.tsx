import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ImageCarousel from "@/components/ImageCarousel";
import VideoSection from "@/components/VideoSection";
import Catalog from "@/components/Catalog";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <Hero />
      <Features />
      <ImageCarousel />
      <VideoSection />
      {/* <Catalog /> */}
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
