import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-300 w-64 h-full p-4 border-r border-gray-400 shadow-lg">
      <h2 className="text-3xl font-bold text-white bg-black p-2 rounded mb-4 text-center mt-2">DASHBOARD</h2>
      <ul className="space-y-3">
        <li>
          <Link className=" text-xl block text-black pb-1 pl-2 hover:bg-black hover:text-white hover:rounded-xl" to="/fees">Fees</Link>
        </li>
        
        <li>
          <Link className=" text-xl block text-black  pb-1 pl-2 hover:bg-black hover:text-white hover:rounded-xl" to="/notes">Notes</Link>
        </li>
        <li>
          <Link className=" text-xl block text-black  pb-1 pl-2 hover:bg-black hover:text-white hover:rounded-xl"  to="/profile">Profile</Link>
        </li>
        <li>
          <Link className=" text-xl block text-black  pb-1 pl-2 hover:bg-black hover:text-white hover:rounded-xl" to="/assignment">Assignment</Link>
        </li>
        <li>
          <Link className="text-xl block text-black  pb-1 pl-2 hover:bg-black hover:text-white hover:rounded-xl" to="/examination">Examination</Link>
        </li>
          <li>
          <Link className="text-xl block text-black pb-1 pl-2 hover:bg-black hover:text-white hover:rounded-xl" to="/feedback">Feedback</Link>
        </li>
        <li>
          <Link className=" text-xl block text-black  pb-1 pl-2 hover:bg-black hover:text-white hover:rounded-xl" to="/hostel">Hostel</Link>
        </li>
        <li>
          <Link className="text-xl block text-black  pb-1 pl-2 hover:bg-black hover:text-white hover:rounded-xl" to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link className="text-xl block text-black  pb-1 pl-2 hover:bg-black hover:text-white hover:rounded-xl" to="/placement">Placement</Link>
        </li>
          <li>
          <Link className="text-xl block text-black pb-1 pl-2 hover:bg-black hover:text-white hover:rounded-xl" to="/open-elective">Open Elective</Link>
        </li>
        <li>
          <Link className=" text-xl block text-black pb-1 pl-2 hover:bg-black hover:text-white hover:rounded-xl"  to="/projects">Projects</Link>
        </li>
        <li>
          <Link className=" text-xl block text-black  pb-1 pl-2 hover:bg-black hover:text-white hover:rounded-xl" to="/statistics">Statistics</Link>
        </li>
      </ul>
    </div>
);
};
export default Sidebar;