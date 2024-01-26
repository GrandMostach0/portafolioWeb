import React from 'react';
import './cuerpo.css';
import './main.css';

function Cuerpo(){
    return(
        <div className='presentacion'>
            <div className='presentacion-text'>
                <h1 className='titulos'>Front-end Developer</h1>
                <p className='parrafos'>Focused on creating website and web applications. I like what i do ❤️</p>
            </div>
            <img src="src/assets/images/foto.png" alt="photoLead" />
        </div>
    );
}

export default Cuerpo;