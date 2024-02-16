import React from 'react';
import LogoGit from '../assets/icons/github-mark/github-mark-white.svg';
import './proyect.css';

export default function proyect(props) {
  return (
    <>
      <div className='card-proyect-title'>
        <h1>{props.title}</h1>
      </div>
      <div className='card-proyect-buttons'>
        <div className='button'>
          <a className='title-buton' href="">Code</a>
          <img src={LogoGit} alt="icono-git/hub" />
        </div>
      </div>
    </>
  )
}
