import React from 'react';
import { Link } from 'react-router-dom';
import { dealers } from '../data';

const HomePage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-primary mb-4">Car Dealers in Your Town</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dealers.map((dealer) => (
          <Link key={dealer.id} to={`/dealer/${dealer.id}`}>
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <h2 className="text-xl font-semibold text-primary">{dealer.name}</h2>
              <p className="text-gray-600">{dealer.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

