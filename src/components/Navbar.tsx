
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-md py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <div>
          <a 
            href="#home" 
            className="font-playfair text-2xl md:text-3xl font-bold text-kerala-green-dark tracking-wide"
          >
            Varikasheri Mana
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 bg-kerala-earth/10 px-6 py-3 rounded-full">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "facilities", label: "Facilities" },
            { id: "reach", label: "How to Reach" },
            { id: "attractions", label: "Attractions" },
            { id: "contact", label: "Contact" }
          ].map(({ id, label }) => (
            <button 
              key={id}
              onClick={() => scrollToSection(id)} 
              className="font-medium hover:text-kerala-earth transition-colors text-kerala-earth-dark"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-kerala-green-dark"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-md">
          <div className="flex flex-col space-y-4 p-4">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "facilities", label: "Facilities" },
              { id: "reach", label: "How to Reach" },
              { id: "attractions", label: "Attractions" },
              { id: "contact", label: "Contact" }
            ].map(({ id, label }) => (
              <button 
                key={id}
                onClick={() => scrollToSection(id)} 
                className="font-medium hover:text-kerala-earth transition-colors py-2 text-left"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
