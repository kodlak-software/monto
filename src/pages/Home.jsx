import React from 'react';
import Hero from './Hero';
import First from './First';
import Second from './Second';
import Third from './Third';
import Forth from './Forth';
import Five from './Five';


const Home = () => {
    return (
      <div className="w-full">
        <Hero />
        <First />
        <Second />
        <Third />
        <Forth />
        <Five />
      </div>
       
    );
};

export default Home;