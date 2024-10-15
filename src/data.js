export const dealers = [
  {
    id: 1,
    name: 'Nates Car Sales',
    location: 'Downtown',
    description: 'Leading car dealership in the heart of the city.',
    cars: [
      {
        id: 1,
        model: 'Toyota Corolla 2020',
        price: '$15,000',
        images: ['https://example.com/corolla1.jpg', 'https://example.com/corolla2.jpg', 'https://example.com/corolla3.jpg'],
        description: 'A reliable and efficient sedan perfect for city driving.'
      },
      // More cars...
    ]
  },
  {
    id: 1,
    name: 'Auto Connection',
    location: 'Downtown',
    description: 'Leading car dealership in the heart of the city.',
    cars: [
      {
        id: 1,
        model: 'Toyota Corolla 2020',
        price: '$15,000',
        images: ['https://example.com/corolla1.jpg', 'https://example.com/corolla2.jpg', 'https://example.com/corolla3.jpg'],
        description: 'A reliable and efficient sedan perfect for city driving.'
      },
      // More cars...
    ]
  }
  // More dealers...
];

export const bargains = [
  {
    id: 1,
    dealerId: 1,
    model: 'Honda Civic 2018',
    price: '$12,000',
    images: ['https://example.com/civic1.jpg', 'https://example.com/civic2.jpg', 'https://example.com/civic3.jpg'],
    description: 'Sporty design with great fuel efficiency.'
  },
  // More bargain cars...
];
