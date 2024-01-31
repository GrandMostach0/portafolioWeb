import React from 'react';
import Proyect from './components/proyect';
import './cuerpo.css';
import './about.css';
import './proyects.css';

const cards = [
    {
        id: 1,
        title: 'fazt Web'
    },
    {
        id: 2,
        title: 'fazt blog'
    },
    {
        id: 3,
        title: 'fazt youtube'
    }
]

function Proyects(){
    return(
        <section className='container-proyects'>
            <h1 className='titulos'>Proyectos</h1>
            <div className="container-proyects-cards">
                {
                    cards.map(proyect => (
                        <Proyect key={proyect.id} title={proyect.title}/>
                    ))
                }
            </div>
        </section>
    )
}

export default Proyects;