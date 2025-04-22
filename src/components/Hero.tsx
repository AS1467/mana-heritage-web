
import React, { useState, useEffect } from "react";

const images = [
  "/lovable-uploads/392d6731-690c-46e4-8a26-7b7b79b0c54d.png",
  "/lovable-uploads/022fdb09-7acd-4e7f-8afc-fcac1dd216f8.png",
  "/lovable-uploads/952233b3-b080-4cf9-b8cb-26ebbe3bc85d.png",
  "/lovable-uploads/7d0fb2f1-bd6d-42a6-a9fb-813dc3a32925.png"
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const scrollToBooking = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen">
      {/* Slider */}
      <div className="absolute inset-0 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Kerala heritage property slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-4">
              Experience Kerala's Heritage
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              A traditional "naalu kettu mana" nestled in the serene landscapes of Vaniyamkulam, Palakkad
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToBooking}
                className="btn-primary"
              >
                Book Your Stay
              </button>
              <button 
                onClick={() => {
                  const aboutSection = document.getElementById("about");
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="btn-outline border-white text-white hover:bg-white hover:text-kerala-green-dark"
              >
                Discover More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-12"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
