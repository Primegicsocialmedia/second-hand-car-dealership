import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { dealers } from '../data';

const DealerPage = () => {
  const { id } = useParams();
  const dealer = dealers.find((dealer) => dealer.id === parseInt(id));

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-primary mb-4">{dealer.name}</h1>
      <p className="text-gray-600 mb-8">{dealer.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dealer.cars.map((car) => (
          <Link key={car.id} to={`/dealer/${dealer.id}/car/${car.id}`}>
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img src={car.images[0]} alt={car.model} className="w-full h-48 object-cover rounded-md mb-4 transition-all duration-300 transform hover:scale-110" />
              <h2 className="text-xl font-semibold text-primary">{car.model}</h2>
              <p className="text-green-600 font-bold">{car.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DealerPage;


