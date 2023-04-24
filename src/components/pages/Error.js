import React from 'react'
import '../../App.css'
import '.././Error.css'
import { useEffect } from 'react';

function Information(){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      return (
        <div className="error-page-container">
          <h1 className="error-page-title">Oops!</h1>
          <p className="error-page-text">Algo salio mal.</p>
          <p className="error-page-text">Lo sentimos, pero la pagina que estas tratando de buscar no existe</p>
          <img className="error-page-image" src="images/error.png" alt="Error" />
          <a className="error-page-link" href="/">Menu</a> 
        </div>
      );
    };

export default Information