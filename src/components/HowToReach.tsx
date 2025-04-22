
import React, { useEffect, useRef } from "react";
import { Airplane, Train, Car } from "lucide-react";

const transportOptions = [
  {
    icon: <Airplane className="w-8 h-8" />,
    title: "By Air",
    details: [
      "Nearest Airport: Coimbatore International Airport (80 km)",
      "Alternative: Cochin International Airport (120 km)",
      "Taxi services available from both airports"
    ]
  },
  {
    icon: <Train className="w-8 h-8" />,
    title: "By Train",
    details: [
      "Nearest Railway Station: Palakkad Junction (20 km)",
      "Also accessible via Ottapalam Railway Station (15 km)",
      "Auto-rickshaws and taxis available from stations"
    ]
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "By Road",
    details: [
      "Well connected to major cities via NH-966",
      "From Palakkad town: 30 minutes drive",
      "From Thrissur: 1.5 hour drive",
      "Private parking available at the property"
    ]
  }
];

const HowToReach = () => {
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
    <section id="reach" ref={sectionRef} className="py-20 bg-kerala-beige/50">
      <div className="container-custom">
        <h2 className="section-title text-center mx-auto reveal">How to Reach</h2>
        <p className="text-center text-lg max-w-3xl mx-auto mb-12 reveal">
          Varikasheri Mana is conveniently located in Vaniyamkulam, Palakkad, 
          and is accessible via various transportation options
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {transportOptions.map((option, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md h-full reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-kerala-earth mb-4">
                {option.icon}
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-4">
                {option.title}
              </h3>
              <ul className="space-y-2">
                {option.details.map((detail, idx) => (
                  <li key={idx} className="text-kerala-green flex items-start">
                    <span className="text-kerala-earth mr-2">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md reveal">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125313.40077839186!2d76.57567615874051!3d10.79093274561665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86b89e3d5814b%3A0x6201ff0e07a00685!2sVaniyamkulam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1713798337518!5m2!1sen!2sin"
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Map location of Varikasheri Mana"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HowToReach;
