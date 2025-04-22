
import React, { useState, useEffect } from "react";
import { Home, Info, MapPin, Star, Phone, Book } from "lucide-react";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: <Home className="w-5 h-5 mr-2" /> },
  { id: "about", label: "About", icon: <Info className="w-5 h-5 mr-2" /> },
  { id: "facilities", label: "Facilities", icon: <Star className="w-5 h-5 mr-2" /> },
  { id: "reach", label: "How to Reach", icon: <MapPin className="w-5 h-5 mr-2" /> },
  { id: "attractions", label: "Attractions", icon: <Book className="w-5 h-5 mr-2" /> },
  { id: "contact", label: "Contact", icon: <Phone className="w-5 h-5 mr-2" /> }
];

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
          ? "bg-white/95 backdrop-blur-xl shadow-xl py-2"
          : "bg-white/70 backdrop-blur-xl shadow-md py-4"
      }`}
      style={{
        borderBottom: "1px solid rgba(180, 145, 97, 0.10)",
      }}
    >
      <div className="container-custom flex justify-between items-center">
        <div>
          <a 
            href="#home" 
            className="font-playfair text-2xl md:text-3xl font-bold text-kerala-green-dark tracking-wide transition-colors hover:text-kerala-earth"
          >
            Varikasheri Mana
          </a>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-2 bg-white/20 backdrop-blur-xl px-3 py-2 rounded-2xl shadow-md border border-kerala-green/10">
          {NAV_ITEMS.map(({ id, label, icon }) => (
            <button 
              key={id}
              onClick={() => scrollToSection(id)} 
              className={`
                flex items-center gap-1 px-4 py-2 rounded-xl font-semibold transition-all
                text-kerala-green-dark bg-gradient-to-tr from-kerala-earth/10 via-white to-kerala-green-light/20
                shadow-sm
                hover:bg-kerala-earth/90 hover:text-white hover:shadow-lg
                focus:outline-none focus:ring-2 focus:ring-kerala-earth
                border border-transparent
                duration-200
              `}
              style={{
                boxShadow: "0 1px 6px 0 rgba(80, 80, 65,0.02)"
              }}
            >
              {icon}
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-kerala-green-dark bg-white/60 rounded-full p-2 border border-kerala-green/20 shadow-sm"
          aria-label="Menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 shadow-lg rounded-xl mt-4 mx-2 animate-fade-in border border-kerala-earth/10">
          <div className="flex flex-col space-y-3 p-4">
            {NAV_ITEMS.map(({ id, label, icon }) => (
              <button 
                key={id}
                onClick={() => scrollToSection(id)} 
                className={`
                  flex items-center gap-2 px-5 py-3 rounded-lg font-semibold transition-all
                  text-kerala-green-dark bg-kerala-earth/5
                  hover:bg-kerala-earth/90 hover:text-white
                  focus:outline-none focus:ring-2 focus:ring-kerala-earth
                  border border-transparent
                  text-lg
                `}
              >
                {icon}
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
