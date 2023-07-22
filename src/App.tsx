import React from 'react';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import { Navbar } from './components/Navbar';

function App() {
  return (
  <React.Fragment>
      <Navbar />
    <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      </Routes>
  </React.Fragment>
  );
}

export default App;