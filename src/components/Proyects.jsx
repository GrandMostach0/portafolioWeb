import React, { useState } from 'react';
import Proyect from './proyect';
import ErrorIcon from './icons/ErrorIcon';
import '../styles/proyects.css';

const opcionesMenu = ['Web', 'Ciberseguridad', 'Devops'];

import proyectsData from '../json/proyectsData.json';

function Proyects() {
  const [selectedOption, setSelectedOption] = useState('Web');

  const handleOptionSelected = (option) => {
    setSelectedOption(option.toLowerCase());
  };

  const filteredCards = selectedOption
    ? proyectsData.filter((proyect) => proyect.categoryType.toLowerCase() === selectedOption.toLowerCase())
    : proyectsData;

  return (
    <section className="container-proyects">
      <h1 className="titulos titulos-separadores">Proyectos</h1>
      <div className="container-menu-proyectos">
        {opcionesMenu.map((opcion, index) => (
          <p
            key={index}
            className={`opcion-menu ${
              selectedOption === opcion.toLowerCase() ? "selected" : ""
            }`}
            onClick={() => handleOptionSelected(opcion)}
          >
            {opcion}
          </p>
        ))}
      </div>
      <div className="container-proyects-cards">
        {filteredCards.length === 0 ? (
          <div className="card-proyect wide">
            <div className="card-proyect-null">
              <div className="container-null">
                <ErrorIcon color={"#fff"} classNameP={"error-card"} />
                <p>No hay información 😕</p>
              </div>
            </div>
          </div>
        ) : (
          filteredCards.map((proyect, index) => (
            <div
              className={`card-proyect ${index % 3 === 2 ? "wide" : "default"}`}
              key={proyect.id}
            >
              <Proyect
                category={proyect.category}
                title={proyect.title}
                imagePath={proyect.imagePath}
                description={proyect.description}
                urlGitHub={proyect.urlGitHub}
                urlPreview={proyect.urlPreview}
                claseName={proyect.classNameP}
                tags={proyect.tags}
              />
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Proyects;
