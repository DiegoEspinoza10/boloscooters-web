import React from 'react'
import InfoList from './InfoList'
import './Info.css'

function Info() {
  return (
    <div className='cards'>
        <h1>Informacion sobre Bolo Scooters</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <InfoList
                    src='images/vision.jpg'
                    text='Proyectarnos como empresa líder en promover medios de transporte alternativos y eco-amigables ofreciendo soluciones de transporte sostenible.'
                    label='Visión'
                    />
                    <InfoList
                    src='images/mission.jpg'
                    text='Crear conciencia en la importancia de la movilidad urbana y recreativa; buscando alianzas con sectores públicos y privados a efectos de encontrar soluciones innovadoras, prácticas y sostenibles a los problemas de embotellamientos y contaminación, con el fin de mejorar la eficiencia en el desplazamiento de la ciudadanía.' 
                    label='Misión'
                    />
                </ul>   
                <ul className='cards__items'>
                    <InfoList
                    src='images/micro.jpg'
                    text='La micro movilidad consiste en utilizar medios de transporte de baja velocidad, los cuales funcionan con energía eléctrica para viajes de corta distancia; conocidos como viajes de primer y último kilómetro.'
                    label='Que es la micromovilidada'
                    />
                    <InfoList
                    src='images/bolo.jpg'
                    text='Ayuda a las personas a repensar el uso del espacio público y fomenta el interés por el rediseño de las vías públicas. La micro movilidad ofrece alternativas ecológicas para viajes cortos y lleva a las personas a reconsiderar la dependencia del automóvil y a combinar los diversos medios de trasporte para logar mayor eficiencia en el desplazamiento.'
                    label='importancia de la micromovilidada'
                    />
                </ul>  
            </div>
        </div>
    </div>
  )
}

export default Info