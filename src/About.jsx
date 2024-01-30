import React from 'react';
import './main.css';
import './cuerpo.css';
import './about.css';

function Cuerpo2(){
    return(
        <section className='separador'>
            <div className="container-about">
                <div className="about-title">
                    <h1 className='titulos'>Un poco sobre mí</h1>
                    <h2>Hola, Me llamo Victor 👋 </h2>
                </div>
                <p className='parrafos'>Me gusta diseñar y desarollar páginas web o aplicaciones web, actualmente estoy trabajando en pequeños proyectos que me han ayudado a mejorar mis habilidades tanto de diseño como desarrollador web.</p>
                <img src="src\assets\icons\i.svg" alt="logo-personal" />
            </div>
        </section>
    );
}

export default Cuerpo2;