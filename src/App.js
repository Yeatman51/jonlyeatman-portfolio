import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/navbar';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App background-img">
      

      <Header/>
      <Router>
      <Navbar/>
      </Router>
      <About/>
      <Footer/>
      

      
    </div>
  );
}

export default App;
