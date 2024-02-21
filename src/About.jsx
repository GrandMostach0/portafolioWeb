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
                <p className='parrafos about-p'>¡Hola! Soy un estudiante apasionado de Ingeniería en Sistemas Computacionales con un profundo interés en el desarrollo web y la ciberseguridad. Mi trayectoria incluye habilidades sólidas en desarrollo frontend y backend, respaldadas por conocimientos en DevOps para optimizar la implementación de sistemas. Mi enfoque proactivo en la ciberseguridad garantiza la creación de soluciones digitales robustas y seguras. Estoy emocionado por contribuir al mundo digital con mi pasión por la tecnología, mi experiencia en desarrollo y mi compromiso con la seguridad cibernética. <strong>¡Listo para enfrentar desafíos y seguir aprendiendo en este apasionante viaje tecnológico!</strong>.</p>
                <div className="marca">
                    <img id="logo-personal-marca" src={LogoPersonal} alt="logo-personal" />
                </div>
            </div>
        </section>
    );
}

export default Cuerpo2;