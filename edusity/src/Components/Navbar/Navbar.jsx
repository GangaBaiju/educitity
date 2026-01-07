import React from 'react';
import './Navbar.css';
import logo from '../../assets/logooo.webp';

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo}  alt="Site Logo"className="logo" />
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Program</li>  {/* ✅ No stray characters here */}
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
