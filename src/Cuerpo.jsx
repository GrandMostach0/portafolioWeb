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
                    <a href="https://github.com/GrandMostach0" target='_blank'><img src="src/assets/icons/github-mark/github-mark-white.svg" alt="git-hub"/></a>
                    <a href="https://www.linkedin.com/in/victorchanvarguez/" target='_blank'><img src="src/assets/icons/icon-linkedlin.svg" alt="linkedln"/></a>
                    <a href="https://www.behance.net/victorchanva" target='_blank'><img src="src/assets/icons/icon-behance.svg" alt="behance"/></a>
                    <a href="#"><img src="src/assets/icons/icon-twitter.svg" alt="twitter"/></a>
                </section>
                <section className='seccion-sociales-botones'>
                    <button>Contacto</button>
                    <button>Descargar CV</button>
                </section>
            </div>
            <img id='foto-personal' src="src/assets/images/foto.png" alt="photoLead" />
        </div>
    );
}

export default Cuerpo;