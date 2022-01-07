import './app.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return ( 
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
