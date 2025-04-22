
import React, { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

    // Parallax effect for image
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollTop = window.scrollY;
        const offset = scrollTop * 0.2;
        imageRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll(".reveal");
        elements.forEach((el) => observer.unobserve(el));
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-kerala-beige/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title reveal">Welcome to Varikasheri Mana</h2>
            <p className="text-lg mb-6 reveal">
              Nestled in the heart of Vaniyamkulam, Palakkad, our heritage property is a 
              traditional "naalu kettu mana" that was once part of the historic Varikasheri Mana. 
              This architectural gem sits on a lush 3-acre estate surrounded by the breathtaking beauty 
              of Kerala's countryside.
            </p>
            <p className="text-lg mb-6 reveal">
              Our mana offers a rare glimpse into Kerala's rich architectural 
              heritage while providing all the comforts of modern living. The property 
              features a serene pond, dense greenery, and a traditional paddy field 
              ("paadam") in front, creating an atmosphere of tranquility and connection 
              with nature.
            </p>
            <p className="text-lg reveal">
              Whether you're seeking a peaceful retreat, a cultural experience, or a 
              base to explore the wonders of Palakkad, Varikasheri Mana promises an 
              unforgettable stay steeped in heritage and natural beauty.
            </p>
          </div>
          <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
            <div ref={imageRef} className="absolute inset-0 w-full h-[120%] parallax">
              <img 
                src="/lovable-uploads/1fd10989-3ee9-47df-96d2-2eb5f41d0819.png" 
                alt="Paddy fields near the Mana" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
