import React from 'react'
import '../../App.css'
import { useEffect } from 'react';
import Info from '../Info';

function Information(){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <>
            <h1 className='Information'>Informacion</h1>
            <Info />
        </>
    );
}

export default Information