import React from 'react';
import LogoGitIcon from './icons/GitHubIcon';
import './proyect.css';

import PlaceDilios from '../assets/images/placeDelirios.png';

export default function proyect(props) {
  return (
    <>
      <div className='card-proyect-img'>
        <img src={PlaceDilios} alt="Place and Deliruos" />
      </div>
      <div className='card-proyect-title-description'>
        <h1>{props.title}</h1>
        <div className='tags'>
          <p>{props.category}</p>
        </div>
        <p>{props.description}</p>
        <div className='container-tags'>
          <div className='tags'>
            <p>HTML</p>
          </div>
          
          <div className='tags'>
            <p>CSS</p>
          </div>

          <div className='tags'>
            <p>PHP</p>
          </div>
          
        </div>
        <div className='card-proyect-buttons'>
          <div className='button'>
            <a className='title-buton' href="">Code</a>
            <LogoGitIcon />
          </div>
        </div>
      </div>
    </>
  )
}
