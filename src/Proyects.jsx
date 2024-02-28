import React, { useState } from 'react';
import Proyect from './components/proyect';
import ErrorIcon from './components/icons/ErrorIcon';
import './proyects.css';
import 'aos/dist/aos.css';

const opcionesMenu = ['Web', 'Ciberseguridad', 'Devops'];

const cards = [
  {
    id: 1,
    categoryType: 'Web',
    title: 'fazt Web Front-End',
    category: 'FullStack',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur minima enim adipisci sequi molestiae, rem maxime laborum reprehenderit suscipit non ipsum, ab ut facilis vel illo dignissimos doloribus doloremque fugiat.',
    urlGitHub: 'https://github.com/GrandMostach0',
    urlPreview: 'https://google.com/',
  },
  {
    id: 2,
    categoryType: 'Ciberseguridad',
    title: 'fazt blog Ciberseguridad',
    category: 'FullStack',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur minima enim adipisci sequi molestiae, rem maxime laborum reprehenderit suscipit non ipsum, ab ut facilis vel illo dignissimos doloribus doloremque fugiat.',
    urlGitHub: 'https://github.com/GrandMostach0',
    urlPreview: 'https://google.com/',
  },
  {
    id: 3,
    categoryType: 'Devops',
    title: 'fazt youtube Devops',
    category: 'FullStack',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur minima enim adipisci sequi molestiae, rem maxime laborum reprehenderit suscipit non ipsum, ab ut facilis vel illo dignissimos doloribus doloremque fugiat.',
    urlGitHub: 'https://github.com/GrandMostach0',
    urlPreview: 'https://google.com/',
    classNameP: 'wide',
  },
];

function Proyects() {
  const [selectedOption, setSelectedOption] = useState('Web');

  const handleOptionSelected = (option) => {
    setSelectedOption(option.toLowerCase());
  };

  const filteredCards = selectedOption
    ? cards.filter((proyect) => proyect.categoryType.toLowerCase() === selectedOption.toLowerCase())
    : cards;

  return (
    <section className='container-proyects'>
      <h1 className='titulos titulos-separadores'>Proyectos</h1>
      <div className='container-menu-proyectos'>
        {opcionesMenu.map((opcion, index) => (
          <p
            key={index}
            className={`opcion-menu ${selectedOption === opcion.toLowerCase() ? 'selected' : ''}`}
            onClick={() => handleOptionSelected(opcion)}
          >
            {opcion}
          </p>
        ))}
      </div>
      <div className='container-proyects-cards'>
        {filteredCards.length === 0 ? (
          <div className='card-proyect wide'>
            <div className="card-proyect-null">
                <div className='container-null'>
                    <ErrorIcon color={"#fff"} classNameP={'error-card'}/>
                    <p>No hay información 😕</p>
                </div>
            </div>
          </div>
        ) : (
          filteredCards.map((proyect, index) => (
            <div
              className={`card-proyect ${index % 3 === 2 ? 'wide' : 'default'}`}
              key={proyect.id}
            >
              <Proyect
                category={proyect.category}
                title={proyect.title}
                description={proyect.description}
                urlGitHub={proyect.urlGitHub}
                urlPreview={proyect.urlPreview}
                claseName={proyect.classNameP}
              />
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Proyects;
