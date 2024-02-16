import React from 'react';
import LogoPersonal from './assets/icons/i.svg';
import './main.css';
import './cuerpo.css';
import './about.css';
import 'aos/dist/aos.css';

function Cuerpo2(){
    return(
        <section className='separador'>
            <div 
            className="container-about"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
                <div className="about-title">
                    <h1 className='titulos about-t'>Un poco sobre mí</h1>
                    <h2>Hola, Me llamo Victor 👋 </h2>
                </div>
                <p className='parrafos about-p'>Me gusta diseñar y desarollar páginas web o aplicaciones web, actualmente estoy trabajando en pequeños proyectos que me han ayudado a mejorar mis habilidades tanto de diseño como desarrollador web.<strong>¡Espero te guste mi portafolio!</strong></p>
                <div className="marca">
                    <img id="logo-personal-marca" src={LogoPersonal} alt="logo-personal" />
                </div>
            </div>
        </section>
    );
}

export default Cuerpo2;