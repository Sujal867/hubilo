
import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="border-b border-gray-100 sticky top-0 z-10 bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-2xl font-bold text-webinar-darkOrange mr-8">Hubilo Services Hub</h1>
          </Link>
        </div>
        <div className="flex items-center">
          <nav className="hidden md:flex space-x-6">
            
            <a href="#" className="text-hubilo-black hover:text-webinar-blue transition-colors">Providers</a>
            <Link to="/how-it-works" className="text-hubilo-black hover:text-webinar-blue transition-colors">How it Works</Link>
            <a href="#" className="text-hubilo-black hover:text-webinar-blue transiton-colors">FAQs</a>
          
          </nav>
        </div>
      
      </div>
    </header>
  );
};

export default Header;
