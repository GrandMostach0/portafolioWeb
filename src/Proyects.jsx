import React from 'react';
import Proyect from './components/proyect';
import './cuerpo.css';
import './about.css';
import './proyects.css';
import 'aos/dist/aos.css';

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
    },
    {
        id: 4,
        title: 'fazt Web'
    },
    {
        id: 5,
        title: 'fazt blog'
    },
    {
        id: 6,
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
                        <div className='card-proyect' key={proyect.id}>
                            <Proyect key={proyect.id} title={proyect.title}/>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Proyects;