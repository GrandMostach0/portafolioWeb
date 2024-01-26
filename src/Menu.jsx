import React from 'react';
import './menu.css';

function Menu(){
    return(
        <nav className="menu-opciones">
            <ul>
                <li><a href="#">about</a></li>
                <li><a href="#">proyects</a></li>
                <li><a href="#">download cv</a></li>
            </ul>
        </nav>
    );
}

export default Menu;