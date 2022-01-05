import './app.css';
import React, { useEffect } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import Routes from './Routes';
// import Nav from './components/Nav';
// import Footer from './components/Footer';
import axios from 'axios';




function App() {

  const callApi = async () => {
    axios.get("/").then((res) => 
    console.log(res.data.test));
  };

  useEffect(() => {
    callApi();
  }, []);

  return <div>test</div>;

    // <div className="App">
    //   <BrowserRouter>
    //     <Nav />
    //     <Routes />
    //     <Footer />
    //   </BrowserRouter>
    // </div>
    
}

export default App;