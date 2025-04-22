
import React, { useEffect, useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
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
    <section id="contact" ref={sectionRef} className="py-20 bg-kerala-beige/50">
      <div className="container-custom">
        <h2 className="section-title text-center mx-auto reveal">Contact & Booking</h2>
        <p className="text-center text-lg max-w-3xl mx-auto mb-12 reveal">
          Ready to experience the tranquility of Varikasheri Mana? Reach out to us 
          or book directly through Airbnb.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col h-full">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8 reveal">
              <h3 className="font-playfair text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-kerala-earth mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p>+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-kerala-earth mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p>info@varikasherimana.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-kerala-earth mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p>Varikasheri Mana, Vaniyamkulam, Palakkad, Kerala, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WIDE Book Your Stay */}
          <div className="flex items-stretch w-full">
            <div
              className={`
                bg-gradient-to-tr from-kerala-earth/90 via-kerala-green/90 to-kerala-green-light/90
                shadow-xl rounded-2xl flex-1 reveal
                flex flex-col justify-between
                min-h-[380px]
                px-12 py-14
                lg:max-w-[700px] w-full
                border border-kerala-green-light/20
                glass-morphism
              `}
              style={{
                boxShadow: "0 8px 28px 0 rgba(76, 90, 67, 0.10)",
                background: "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)"
              }}
            >
              <div>
                <h3 className="font-playfair text-2xl font-semibold mb-6 text-kerala-earth-dark">Book Your Stay</h3>
                <p className="mb-8 text-lg text-kerala-green-dark/90">
                  Experience the charm and tranquility of our heritage property. 
                  Book directly through Airbnb for a seamless reservation process.
                </p>
              </div>
              <a 
                href="https://www.airbnb.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full btn-primary rounded-lg text-lg shadow-md hover:scale-105 transition transform duration-200 bg-kerala-green-dark hover:bg-kerala-earth-dark border-2 border-kerala-earth font-semibold flex items-center justify-center px-7 py-4"
              >
                <svg className="w-7 h-7 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.0006 5.44939C12.8008 4.38192 14.3441 3.33128 16.5637 3.33128C19.8963 3.33128 22.6012 5.89202 22.6684 9.20258C22.7356 13.0676 20.5832 16.2324 17.9456 19.0046C15.8604 21.1571 13.6407 22.6331 12.0006 22.6331C10.3604 22.6331 8.14078 21.1571 6.05555 19.0046C3.41794 16.2324 1.26554 13.0676 1.33274 9.20258C1.39994 5.89202 4.10481 3.33128 7.43742 3.33128C9.65702 3.33128 11.2003 4.38192 12.0006 5.44939Z" />
                </svg>
                Book on Airbnb
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
