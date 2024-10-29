import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Home from './Home';
import Attendance from './Attendance';
import Timetable from './Timetable';


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
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/timetable" element={<Timetable />} />
              
            
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
