import React from 'react';
import './menu.css';

function Menu(){
    return(
        <>
        <nav className='nav-container'>

            <div className='links'>
                <a href="#">Inicio</a>
                <a href="#">about</a>
                <a href="#">proyects</a>
                <a href="#">Contact</a>
                <a href="#">download cv</a>
            </div>
        </nav>
        </>
    );
}

export default Menu;