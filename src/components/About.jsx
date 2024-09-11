import React from 'react';
import FotoPersonal from '../assets/images/foto.jpg';
import LogoPersonal2 from "./icons/LogoPersonal2";
import '../styles/about.css';

function Cuerpo2(){
    return (
      <section id="about" className="separador">
        <div className="container-about">
          <div className="about-title">
            <img
              loading="lazy"
              className="foto-personal foto-personal-about"
              src={FotoPersonal}
              alt="foto-personal"
            />
            <h1 className="titulos about-t">Acerca de mí</h1>
            <h2>Hola, Me llamo Victor 👋 </h2>
          </div>
          <p className="parrafos about-p">
            Soy un apasionado de la Tecnología, lo que me
            oriento a estudiar la
            <strong> carrera de Ingeniería en Sistemas Computacionales</strong>,
            me gusta el <strong>desarrollo Web</strong> y la <strong>Ciberseguridad</strong>. Me gusta
            aprender cosas nuevas y experimentar nuevas formas de resolver
            problemas.
          </p>
          <p className="parrafos about-p">
            Mi entusiasmo y compromiso me motivan a aprender y crecer en este
            emocionante viaje. <br />
            <strong>
              ¡Listo para absorber conocimientos y aportar en el mundo digital!
            </strong>
            .
          </p>
          <div className="marca">
            <LogoPersonal2 color={"#fff"} />
          </div>
        </div>
      </section>
    );
}

export default Cuerpo2;