import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/hospital">Hospital</Link></li>
        <li><Link to="/doctor">Doctor</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
