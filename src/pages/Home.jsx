import React from 'react';
import Hero from './Hero';
import First from './First';
import Second from './Second';
import Third from './Third';
import Forth from './Forth';
import Five from './Five';
import Six from './Six';
import Form from './Form';
import Footer from './Footer';


const Home = () => {
    return (
      <div className="w-full">
        <Hero />
        <First />
        <Second />
        <Third />
        <Forth />
        <Five />
        <Six />
        <Form />
        <Footer />
      </div>
       
    );
};

export default Home;