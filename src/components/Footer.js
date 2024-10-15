import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">CarDealers</h3>
          <p className="text-gray-400">Your trusted car marketplace.</p>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-secondary">Home</Link>
          <Link to="/bargains" className="hover:text-secondary">Bargains</Link>
          <Link to="/contact" className="hover:text-secondary">Contact</Link>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-secondary">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-secondary">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-secondary">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
