// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css";
import Navbar from './components/Navbar/Navbar';

const App = () => {
  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:700,
      easing:"ease-in",
      delay:100,
    });
  });
  return(
    <div className="overflow-x-hidden">
      <Navbar />
      
      {/* <Home />
      <About />
      <Menu />
      <Content /> */}

    </div>
  );
  
}

export default App
