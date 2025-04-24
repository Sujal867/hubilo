import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../public/Hubilo_Square-Logo.svg'; // Adjust path as necessary

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="border-b border-gray-100 sticky top-0 z-10 bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Hubilo Logo" className="h-10" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <a href="#Providers" className="text-hubilo-black hover:text-webinar-blue transition-colors">Providers</a>
          <a href="#how-it-works" className="text-hubilo-black hover:text-webinar-blue transition-colors">How it Works</a>
          <a href="#faq" className="text-hubilo-black hover:text-webinar-blue transition-colors">FAQs</a>
        </nav>

        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md">
          <nav className="flex flex-col pt-8 space-y-8">
            <a href="#Providers" onClick={toggleMenu} className="text-hubilo-black hover:text-webinar-blue transition-colors">Providers</a>
            <a href="#how-it-works" onClick={toggleMenu} className="text-hubilo-black hover:text-webinar-blue transition-colors">How it Works</a>
            <a href="#faq" onClick={toggleMenu} className="text-hubilo-black hover:text-webinar-blue transition-colors">FAQs</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;


