import React from 'react'
import '../HeroSection.css'
import '../../App.css'
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import { useEffect } from 'react';

function Home(){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <>
        <HeroSection />
        <Cards />
        </>
    );
}

export default Home