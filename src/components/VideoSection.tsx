import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import video from "@/assets/video.mp4";


const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section id="video" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            See <span className="bg-gradient-nature bg-clip-text text-transparent">Innovation</span> in Motion
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch how PORTELS transforms the hospitality industry with our 
            revolutionary portable luxury room technology.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[500px] bg-gradient-to-br from-stone-200 to-stone-300 rounded-3xl overflow-hidden shadow-xl">
            {!isPlaying ? (
              // Custom video preview overlay
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#ded0c1] to-white">
                {/* Centered play button */}
                <button
                  onClick={handlePlayVideo}
                  className="group relative flex items-center justify-center w-20 h-20 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-8"
                >
                  <Play className="w-8 h-8 text-stone-600 ml-1 group-hover:text-stone-800 transition-colors" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-stone-300/20 to-stone-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>

                {/* Video title */}
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-stone-800 mb-2">
                    PORTELS Experience Demo
                  </h3>
                  <p className="text-stone-600">
                    1:01 minutes of pure innovation
                  </p>
                </div>

                {/* Bottom overlay content */}
                <div className="absolute bottom-0 left-0 right-0  p-8 rounded-b-3xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-semibold text-black mb-1">
                        From Setup to Stay
                      </h4>
                      <p className="text-gray-500">
                        Complete guest experience walkthrough
                      </p>
                    </div>
                    <Button
                      onClick={handlePlayVideo}
                      variant="outline" 
                      className="border-white/50 text-black hover:bg-white hover:text-stone-800 backdrop-blur-sm bg-white/10"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Play Video
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              // Actual video player
              <video
                src={video}
                width="100%"
                height="100%"
                controls
                autoPlay
                className="w-full h-[500px] object-cover"
              />
            )}
          </div>

          {/* Video features */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 rounded-2xl bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h4 className="text-lg font-semibold text-card-foreground mb-2">
                Transportation
              </h4>
              <p className="text-muted-foreground text-sm">
                See how 6 rooms fit efficiently on a single truck
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-lg font-semibold text-card-foreground mb-2">
                Quick Setup
              </h4>
              <p className="text-muted-foreground text-sm">
                Watch the complete installation process
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h4 className="text-lg font-semibold text-card-foreground mb-2">
                Luxury Experience
              </h4>
              <p className="text-muted-foreground text-sm">
                Experience the premium guest accommodation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;