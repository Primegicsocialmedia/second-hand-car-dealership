import React from 'react';
import { useParams } from 'react-router-dom';
import { dealers } from '../data';

const CarDetailsPage = () => {
  const { dealerId, carId } = useParams();
  const dealer = dealers.find((dealer) => dealer.id === parseInt(dealerId));
  const car = dealer.cars.find((car) => car.id === parseInt(carId));

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-primary mb-4">{car.model}</h1>
      <p className="text-green-600 font-bold mb-4">{car.price}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {car.images.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`${car.model} pic ${index + 1}`} 
            className="w-full h-auto rounded-md shadow-md transition-all duration-300 transform hover:scale-110"
          />
        ))}
      </div>
      <p className="text-gray-600">{car.description}</p>
    </div>
  );
};

export default CarDetailsPage;

