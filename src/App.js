import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BargainsPage from './pages/BargainsPage';
import DealerPage from './pages/DealerPage';
import CarDetailsPage from './pages/CarDetailsPage';
import ContactPage from './pages/ContactPage';

import { motion } from 'framer-motion';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar /> {/* Ensure Navbar is outside of Routes */}
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route
              path="/bargains"
              element={<BargainsPage />}
            />
            <Route
              path="/dealer/:id"
              element={<DealerPage />}
            />
            <Route
              path="/dealer/:dealerId/car/:carId"
              element={<CarDetailsPage />}
            />
            <Route
              path="/contact"
              element={<ContactPage />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;





