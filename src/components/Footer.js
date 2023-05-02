import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faWhatsapp
  } from "@fortawesome/free-brands-svg-icons";
  
function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <h1 className='footer-subscription-heading'>
                Ubicacion
            </h1>
            <p className='footer-subscription-text'>
                Costa Rica, Alajuela, Alajuela
            </p>
            <iframe 
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.001569254865!2d-84.22687905742931!3d10.016728172749207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f9cdacd0a197%3A0x890bdac95730c3a2!2sOficentro%20FES!5e0!3m2!1ses!2scr!4v1681505386420!5m2!1ses!2scr" 
                style={{ border: 0 }} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">

            </iframe>
        <div class='footer-links'>
            <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                    <h2>Redes Sociales</h2>
                        <a href="https://wa.me/message/HSSSS32LFINPM1"
                        className="WhatsApp social">
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                        </a>
                        <a href="https://www.facebook.com/BoloScooters/"
                        className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="https://www.instagram.com/boloscooters"
                        className="instagram social">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                </div>
                <div class="footer-number">
                    <h2>Telefono</h2>
                    <p>+506 8815-4221</p>
                </div>
            </div>
        </div>
    </section>
</div>
  )
}

export default Footer
