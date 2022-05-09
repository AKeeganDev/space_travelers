import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Rockets from './pages/rockets';
import Missions from './pages/missions';
import MyProfile from './pages/myProfile';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my_profile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}
