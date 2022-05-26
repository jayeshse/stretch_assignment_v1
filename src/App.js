import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Division from './components/Division';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Queue from './components/Queue';
import Agent from './components/Agent'

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/division' element={<Division/>} />
          <Route path='/queue/:division_id' element={<Queue/>} />
          <Route path='/agent/:queue_id' element={<Agent/>} />
        </Routes>
        </Router>
    </>
  );
}

export default App;