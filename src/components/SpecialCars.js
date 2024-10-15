import React from 'react';

const SpecialCars = ({ cars }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {cars.map((car) => (
        <div key={car.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <h2 className="text-xl font-semibold text-primary">{car.model}</h2>
          <p className="text-green-600 font-bold mb-4">{car.price}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {car.images.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`${car.model} pic ${index + 1}`} 
                className="w-full h-auto rounded-md shadow-md"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecialCars;
