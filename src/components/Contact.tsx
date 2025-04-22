
import React, { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real scenario, you'd handle form submission to a server here
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      setFormSubmitted(false);
    }, 5000);
  };

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
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md reveal">
            <h3 className="font-playfair text-2xl font-semibold mb-6">Send us a Message</h3>
            
            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md mb-6">
                Thank you for your message! We'll get back to you soon.
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kerala-earth/50"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kerala-earth/50"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kerala-earth/50"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kerala-earth/50"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Info & Booking */}
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
            
            <div className="bg-kerala-earth text-white p-8 rounded-lg shadow-md flex-1 reveal">
              <h3 className="font-playfair text-2xl font-semibold mb-6">Book Your Stay</h3>
              <p className="mb-8">
                Experience the charm and tranquility of our heritage property. 
                Book directly through Airbnb for a seamless reservation process.
              </p>
              
              <a 
                href="https://www.airbnb.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-kerala-earth-dark hover:bg-gray-100 font-medium px-6 py-3 rounded-md transition-colors duration-300 inline-flex items-center justify-center w-full"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
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
