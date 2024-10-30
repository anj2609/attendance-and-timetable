import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black p-3 flex justify-between items-center">
      <div className="text-white text-2xl font-bold">MarkMe</div>
      <ul className="md:flex space-x-4">
        <li><Link to="/" className="text-white text-xl block px-4 py-2">Home</Link></li>
        <li><Link to="/Attendance" className="text-white  text-xl block px-4 py-2">Attendance</Link></li>
        <li><Link to="/Timetable" className="text-white text-xl block px-4 py-2">Timetable</Link></li>
        <li><Link to="/Profile" className="text-white  text-xl block px-4 py-2">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
