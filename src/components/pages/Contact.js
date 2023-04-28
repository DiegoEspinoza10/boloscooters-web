import React from 'react'
import '../../App.css'
import { useEffect } from 'react';

function Contact(){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <div className='Contact'>
            <h1>Contactanos</h1>
            <p>No dudes en contacarnos</p>
            <p>+506 8815-4221</p>
        </div>
    );
}

export default Contact