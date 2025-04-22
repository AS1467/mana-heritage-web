
import React, { useEffect, useRef } from "react";
import { Bed, TreePalm, Image, Wifi, Users, House } from "lucide-react";

const facilities = [
  {
    icon: <Bed className="w-8 h-8" />,
    title: "9 Spacious Bedrooms",
    description: "Comfortable rooms that blend traditional design with modern comforts."
  },
  {
    icon: <House className="w-8 h-8" />,
    title: "Heritage Interiors",
    description: "Authentic Kerala architecture featuring wooden carvings and traditional design elements."
  },
  {
    icon: <TreePalm className="w-8 h-8" />,
    title: "Lush 3-Acre Estate",
    description: "Surrounded by dense greenery, a serene pond, and traditional paddy fields."
  },
  {
    icon: <Image className="w-8 h-8" />,
    title: "Courtyard",
    description: "Traditional central courtyard allowing natural light and ventilation."
  },
  {
    icon: <Wifi className="w-8 h-8" />,
    title: "Modern Amenities",
    description: "High-speed internet and modern conveniences for a comfortable stay."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Communal Spaces",
    description: "Dining areas and living spaces perfect for family gatherings."
  }
];

const Facilities = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".reveal");
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll(".reveal");
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section id="facilities" ref={sectionRef} className="py-20">
      <div className="container-custom">
        <h2 className="section-title text-center mx-auto reveal">Our Facilities</h2>
        <p className="text-center text-lg max-w-3xl mx-auto mb-12 reveal">
          Experience the perfect blend of traditional Kerala architecture 
          and modern comforts at our heritage property
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md transition-transform hover:translate-y-[-5px] reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-kerala-earth mb-4">
                {facility.icon}
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">
                {facility.title}
              </h3>
              <p className="text-kerala-green">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
