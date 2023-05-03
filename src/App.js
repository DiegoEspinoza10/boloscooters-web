import './App.css';
import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, BrowserRouter,Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Information from './components/pages/Information';
import Error from './components/pages/Error';
import Contact from './components/pages/Contact';
import Footer
 from './components/Footer';
function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bolo Scooters</title>
        <meta name="description" content="Bolo Scooters" />
        <meta name="keywords" content="Bolo Scooters" />
      </Helmet>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home}/>
        <Route path="/Information" exact Component={Information}/>
        <Route path="Contact" exact Component={Contact}/>
        <Route path="*" exact Component={Error}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
