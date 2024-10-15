import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary text-white">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-secondary">CarDealers</Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden block focus:outline-none" 
          onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Menu links */}
        <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} transition-all duration-300`}>
          <Link to="/" className="block md:inline-block px-4 py-2 text-white hover:bg-secondary hover:rounded transition-all duration-300">
            Home
          </Link>
          <Link to="/bargains" className="block md:inline-block px-4 py-2 text-white hover:bg-secondary hover:rounded transition-all duration-300">
            Bargains
          </Link>
          <Link to="/contact" className="block md:inline-block px-4 py-2 text-white hover:bg-secondary hover:rounded transition-all duration-300">
  Contact
</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

