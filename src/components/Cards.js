import React from 'react'
import CardProducts from './CardProducts'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Mira nuestros productos!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardProducts
                    src='images/Bici.jpg'
                    text='Bici motos electricas 350 y 500 watts, sistema de alarma, luz delantera y trasera. Canasta para transportar objetos'
                    label='Bici motos'
                    path='/products'
                    />
                    <CardProducts
                    src='images/scooter.jpg'
                    text='Mono patines electricos de 350 watts, 3 velocidades con velocidad maxima de 33 km/h, bateria de litio' 
                    label='Monopatin electrico'
                    path='/products'
                    />
                </ul>   
                <ul className='cards__items'>
                    <CardProducts
                    src='images/Tocha.jpg'
                    text='Scooter de 2000 watts con velocidad maxima de 60 km/h, 2 baterias de litio de 20 amperios, sistema de alarma, luz delantera y trasera'
                    label='Scooter electrico'
                    path='/products'
                    />
                    <CardProducts
                    src='images/bat12ah.jpg'
                    text='Baterias de 12 voltios 12 amperios, 12 voltios 20 amperios. Acido de plomo ' 
                    label='Baterias para bici motos'
                    path='/products'
                    />
                    <CardProducts
                    src='images/batscooter.jpg'
                    text='Bateria de litio de 36 voltios 7.8 amperios' 
                    label='Baterias para scooter'
                    path='/products'
                    />
                </ul>  
                <ul className='cards__items'>
                <CardProducts
                    src='images/llantas.jpg'
                    text='Repuestos para scooters y bicis motos electricas. Baterias, llantas, frenos, etc.' 
                    label='Repuestos'
                    path='/products'
                    />
                <CardProducts
                    src='images/ninos.jpg'
                    text='Scooter para niños, diferentes modelos y colores. Para todas las edades' 
                    label='Scooters para niños'
                    path='/products'
                    />
                </ul>    
            </div>
        </div>
    </div>
  )
}

export default Cards