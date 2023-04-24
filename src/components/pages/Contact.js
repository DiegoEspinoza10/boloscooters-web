import React from 'react'
import '../../App.css'
import { useEffect } from 'react';

function Contact(){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <>
            <h1 className='Contact'>Contactanos</h1>
            
        </>
    );
}

export default Contact