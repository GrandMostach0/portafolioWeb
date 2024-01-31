import React from 'react';
import './proyect.css';

export default function proyect(props) {
  return (
    <div className='card-proyect' key={props.id}>
        <div className='card-proyect-title'>
            <h1>{props.title}</h1>
        </div>
        <div className='card-proyect-buttons'>
            <button>Boton 1</button>
            <button>Buton 2</button>
        </div>
    </div>
  )
}
