import React from 'react';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ArtistProfile from './pages/ArtistProfile';
import Contact from './pages/Contact';
import { Navbar } from './components/Navbar';

function App() {
  return (
  <React.Fragment>
      <Navbar />
    <Routes>
        <Route path="" element={<Home />} />
        <Route path="/artist-profile" element={<ArtistProfile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  </React.Fragment>
  );
}

export default App;