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
                    text='Bici motos eléctricas 350 y 500 watts cuentan con sistema de alarma, luz delantera y trasera. Canasta de transporte de objetos.'
                    label='Bici motos'
                    path='/products'
                    />
                    <CardProducts
                    src='images/scooter.jpg'
                    text='Mono patines eléctricos de 350 watts, 3 velocidades con velocidad máxima de 33 km/h, batería de litio, llantas rellenas y luces delanteras, traseras y de freno.' 
                    label='Monopatin electrico'
                    path='/products'
                    />
                </ul>   
                <ul className='cards__items'>
                    <CardProducts
                    src='images/Tocha.jpg'
                    text='Scooter de 2000 watts con velocidad máxima de 60 km/h, 2 baterías de litio de 20 amperios, sistema de alarma, canasta trasera, sistema de frenos de disco y luz delantera y trasera'
                    label='Scooter electrico'
                    path='/products'
                    />
                    <CardProducts
                    src='images/bat12ah.jpg'
                    text='Baterías de 12 voltios 12 amperios, 12 voltios 20 amperios. Ácido de plomo ' 
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
                    text='Todo en repuestos para scooters y bici motos eléctricas. Baterías, llantas, frenos, suspensiones, etc.' 
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