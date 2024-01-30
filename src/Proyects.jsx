import React from 'react';
import Proyect from './components/proyect';
import './cuerpo.css';
import './about.css';
import './proyects.css';

function Proyects(){
    return(
        <section className='container-proyects'>
            <h1 className='titulos'>Proyectos</h1>
            <div className="container-proyects-cards">
                <Proyect />
                <Proyect />
                <Proyect />
                <Proyect />
                <Proyect />
                <Proyect />
            </div>
        </section>
    )
}

export default Proyects;