import React from 'react';

const DealerCard = ({ dealer }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <h2 className="text-xl font-semibold text-primary">{dealer.name}</h2>
      <p className="text-gray-600">{dealer.location}</p>
      <p className="text-gray-500">{dealer.description}</p>
    </div>
  );
};

export default DealerCard;

