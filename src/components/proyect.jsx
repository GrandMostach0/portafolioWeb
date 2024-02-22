import React from 'react';
import LogoGitIcon from './icons/GitHubIcon';
import './proyect.css';

import PlaceDilios from '../assets/images/placeDelirios.png';
import GitHubIcon from './icons/GitHubIcon';
import BrowserIcon from './icons/BrowserIcons';

export default function proyect(props) {
  return (
    <>
      <div className={`card-proyect-img ${proyect.classNameP || 'default-class'}`}>
        <img src={PlaceDilios} alt="Place and Deliruos" />
      </div>
      <div className='card-proyect-title-description'>
        <h1>{props.title}</h1>
        <div className='category tags'>
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
            <a className='title-buton' href=""> <GitHubIcon color={"#ececec"} /> Code </a>
          </div>
          <div className='button'>
            <a className='title-buton' href=""> <BrowserIcon color={"#ececec"} /> Preview </a>
          </div>
        </div>
      </div>
    </>
  )
}
