import React from 'react';
import './menu.css';

function Menu(){
    return(
        <nav className="menu-opciones">
            <ul className='links'>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">proyects</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">download cv</a></li>
            </ul>
        </nav>
    );
}

export default Menu;