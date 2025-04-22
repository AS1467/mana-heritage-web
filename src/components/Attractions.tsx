
import React, { useEffect, useRef } from "react";
import { Landmark, TreePalm, Image } from "lucide-react";

const attractions = [
  {
    image: "/lovable-uploads/fe58c026-2b2a-41fb-b2c0-7c5de07681e4.png",
    title: "Paddy Field Walks",
    description: "Experience the serene beauty of traditional Kerala paddy fields right in front of the property."
  },
  {
    image: "/lovable-uploads/926d87ee-a01e-4770-aeb7-4cf74d412719.png",
    title: "Heritage Architecture",
    description: "Explore the unique 'naalu kettu' architectural style with its courtyard and traditional elements."
  },
  {
    image: "/lovable-uploads/cf20f554-d6fa-4dd2-b395-6e977650b329.png",
    title: "Traditional Interiors",
    description: "Witness authentic Kerala woodwork, traditional furniture, and heritage design."
  },
  {
    image: "/lovable-uploads/4c41b644-9bdb-4c90-91af-c4ed4b936d2c.png",
    title: "Forest Trails",
    description: "Venture into the surrounding lush greenery for peaceful walks among nature."
  },
  {
    image: "/lovable-uploads/1fd10989-3ee9-47df-96d2-2eb5f41d0819.png",
    title: "Local Temples",
    description: "Visit nearby ancient temples that showcase Kerala's rich cultural and religious heritage."
  },
  {
    image: "/lovable-uploads/7d0fb2f1-bd6d-42a6-a9fb-813dc3a32925.png",
    title: "Kerala Countryside",
    description: "Immerse yourself in the authentic rural lifestyle of Kerala's picturesque villages."
  }
];

const nearbyIcons = {
  cultural: <Landmark className="w-6 h-6" />,
  nature: <TreePalm className="w-6 h-6" />,
  experience: <Image className="w-6 h-6" />
};

const nearbyAttractions = [
  {
    name: "Silent Valley National Park",
    distance: "50 km",
    type: "nature"
  },
  {
    name: "Malampuzha Dam & Gardens",
    distance: "35 km",
    type: "nature"
  },
  {
    name: "Palakkad Fort",
    distance: "25 km",
    type: "cultural"
  },
  {
    name: "Kalpathi Ratholsavam Festival (Nov)",
    distance: "30 km",
    type: "cultural"
  },
  {
    name: "Traditional Kathakali Performances",
    distance: "Local arrangements",
    type: "experience"
  },
  {
    name: "Ayurvedic Treatments",
    distance: "Available on request",
    type: "experience"
  }
];

const Attractions = () => {
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
    <section id="attractions" ref={sectionRef} className="py-20">
      <div className="container-custom">
        <h2 className="section-title text-center mx-auto reveal">Experiences & Attractions</h2>
        <p className="text-center text-lg max-w-3xl mx-auto mb-12 reveal">
          Discover the unique charms of our property and explore the cultural 
          and natural treasures of Palakkad
        </p>
        
        {/* On-property experiences */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {attractions.map((item, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md bg-white reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-kerala-green">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Nearby attractions */}
        <h3 className="section-subtitle text-center mb-8 reveal">Nearby Attractions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 reveal">
          {nearbyAttractions.map((attraction, index) => (
            <div 
              key={index}
              className="flex items-start p-4 bg-kerala-beige/50 rounded-lg"
            >
              <div className="text-kerala-earth mr-4 mt-1">
                {nearbyIcons[attraction.type as keyof typeof nearbyIcons]}
              </div>
              <div>
                <h4 className="font-medium text-kerala-green-dark">
                  {attraction.name}
                </h4>
                <p className="text-sm text-kerala-green">
                  {attraction.distance}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attractions;
