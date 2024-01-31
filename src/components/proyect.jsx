import React from 'react';
import './proyect.css';

export default function proyect(props) {
  return (
    <div className='card-proyect' key={props.id}>
        <div className='card-proyect-title'>
            <h1>{props.title}</h1>
        </div>
        <div className='card-proyect-buttons'>
          <div className='button'>
            <a className='title-buton' href="">Code</a>
            <img src="src\assets\icons\github-mark\github-mark-white.png" alt="" />
          </div>
          
          <div className='button'>
            <a className='title-buton' href="">Code Live</a>
            <img src="src\assets\icons\icon-computadoraLive.png" alt="" />
          </div>
        </div>
    </div>
  )
}
