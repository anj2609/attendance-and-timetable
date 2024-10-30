import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Home from './Home';
import Attendance from './Attendance';
import Timetable from './Timetable';
import Profile from './Profile';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <div className="p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Attendance" element={<Attendance />} />
              <Route path="/Timetable" element={<Timetable />} />
              <Route path="/Profile" element={<Profile />} />
              
            
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
