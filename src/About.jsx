import React from 'react';
import LogoPersonal from './assets/icons/i.svg';
import FotoPersonal from './assets/images/foto.png'
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
                    <img className='foto-personal foto-personal-about' src={FotoPersonal} alt="foto-personal" />
                    <h1 className='titulos about-t'>Acerca de mí</h1>
                    <h2>Hola, Me llamo Victor 👋 </h2>
                </div>
                <p className='parrafos about-p'>¡Hola! Soy un estudiante de Ingeniería en Sistemas Computacionales, y como aprendiz, estoy sumergiéndome en el fascinante universo del desarrollo web y la ciberseguridad. Mis primeros pasos incluyen explorar tanto el frontend como el backend. Además, tengo conocimientos básicos en DevOps, buscando optimizar procesos de implementación. Mi entusiasmo y compromiso como principiante me motivan a aprender y crecer en este emocionante viaje. <strong>¡Listo para absorber conocimientos y aportar en el mundo digital!</strong></p>
                <div className="marca">
                    <img id="logo-personal-marca" src={LogoPersonal} alt="logo-personal" />
                </div>
            </div>
        </section>
    );
}

export default Cuerpo2;