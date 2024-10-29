import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <ul className="flex space-x-6">
        <li><Link className="text-white hover:underline font-bold pt-6" to="/">Home</Link></li>
        <li><Link className="text-white hover:underline font-bold pl-10 pt-6" to="/attendance">Attendance</Link></li>
        <li><Link className="text-white hover:underline font-bold pl-10 pt-6" to="/timetable">Timetable</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
