import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/navbar';
import Wrapper from "./components/Wrapper";
import Home from './pages/Home';
import Developer from './pages/Developer';
import Designer from './pages/Designer';
import Photographer from './pages/Photographer';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App background-img">
      

      <Header/>

      <Router>
      <Navbar/>
      <Wrapper>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Developer" component={Developer} />
          <Route exact path="/Designer" component={Designer} />
          <Route exact path="/Photographer" component={Photographer} />
          <Route exact path="/About" component={About} />  
      </Wrapper>
      </Router>

      <Footer/>
      

      
    </div>
  );
}

export default App;
