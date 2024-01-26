import React from 'react';
import './cuerpo.css';
import './main.css';

function Cuerpo(){
    return(
        <div className='presentacion'>
            <div className='presentacion-text'>
                <h1 className='titulos'>Front-end Developer</h1>
                <p className='parrafos'>Focused on creating website and web applications. I like what i do ❤️</p>
                <section className='seccion-sociales-botones'>
                    <a href="#"><img src="" alt="git-hub"/></a>
                    <a href="#"><img src="" alt="linkedln"/></a>
                    <a href="#"><img src="" alt="behance"/></a>
                    <a href="#"><img src="" alt="twitter"/></a>
                </section>
            </div>
            <img id='foto-personal' src="src/assets/images/foto.png" alt="photoLead" />
        </div>
    );
}

export default Cuerpo;