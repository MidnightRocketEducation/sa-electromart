import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Laptops from './pages/Laptops';
import SSDs from './pages/SSDs';
import Phones from './pages/Phones';
import Playstations from './pages/Playstations';
import Carousel from './components/Carousel';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>ElectroMart</h1>
          <nav>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "inactive")}>Home</NavLink>
            <NavLink to="/laptops" className={({ isActive }) => (isActive ? "active" : "inactive")}>Laptops</NavLink>
            <NavLink to="/ssds" className={({ isActive }) => (isActive ? "active" : "inactive")}>SSD's</NavLink>
            <NavLink to="/phones" className={({ isActive }) => (isActive ? "active" : "inactive")}>Phones</NavLink>
            <NavLink to="/playstations" className={({ isActive }) => (isActive ? "active" : "inactive")}>Playstations</NavLink>
          </nav>

        </header>
        <Carousel />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/ssds" element={<SSDs />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/playstations" element={<Playstations />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
