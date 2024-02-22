import React from 'react';
import Proyect from './components/proyect';
import './cuerpo.css';
import './about.css';
import './proyects.css';
import 'aos/dist/aos.css';
import proyect from './components/proyect';

const cards = [
    {
        id: 1,
        category: 'FullStack',
        title: 'fazt Web',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur minima enim adipisci sequi molestiae, rem maxime laborum reprehenderit suscipit non ipsum, ab ut facilis vel illo dignissimos doloribus doloremque fugiat.',
        classNameP: 'wide'
    },
    {
        id: 2,
        title: 'fazt blog',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur minima enim adipisci sequi molestiae, rem maxime laborum reprehenderit suscipit non ipsum, ab ut facilis vel illo dignissimos doloribus doloremque fugiat.'
    },
    {
        id: 3,
        title: 'fazt youtube',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur minima enim adipisci sequi molestiae, rem maxime laborum reprehenderit suscipit non ipsum, ab ut facilis vel illo dignissimos doloribus doloremque fugiat.',
    },
    {
        id: 4,
        title: 'fazt Web',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur minima enim adipisci sequi molestiae, rem maxime laborum reprehenderit suscipit non ipsum, ab ut facilis vel illo dignissimos doloribus doloremque fugiat.',
        classNameP: 'wide'
    }
]

function Proyects(){
    return(
        <section className='container-proyects'>
            <h1 className='titulos titulos-separadores'>Proyectos</h1>
            <div className="container-proyects-cards">
                {
                    cards.length === 0 ? (
                        <div className='card-proyect'>No hay datos</div>
                    ) : (
                        cards.map(proyect => (

                            <div 
                            className={`card-proyect ${proyect.classNameP || 'default-class'}`}
                            key={proyect.id}>
                                <Proyect
                                category={proyect.category}
                                title={proyect.title}
                                description={proyect.description}
                                claseName={proyect.classNameP}/>
                            </div>

                        ))
                    )
                }
            </div>
        </section>
    )
}

export default Proyects;