import React from 'react';
import PlaceDilios from '../assets/images/placeDelirios.png';
import GitHubIcon from './icons/GitHubIcon';
import BrowserIcon from './icons/BrowserIcons';
import './proyect.css';

export default function proyect(props) {
  return (
    <>
      <div className={`card-proyect-img ${proyect.classNameP || 'default-class'}`}>
        <img loading='lazy' src={PlaceDilios} alt="Place and Deliruos" />
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
            <a className='title-buton' href={props.urlGitHub} target='_blank'> 
            <GitHubIcon color={"#ececec"} classNameP={'resize-icon'} /> Code
            </a>
          </div>
          <div className='button'>
            <a className='title-buton' href={props.urlPreview} target='_blank'> 
            <BrowserIcon color={"#ececec"} classNameP={'resize-icon'}/> Preview 
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
