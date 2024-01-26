import React from 'react';
import './menu.css'

function Menu(){
    return(
        <div className='menu'>
            <nav className="menu-opciones">
                <ul>
                    <li><a href="#">about</a></li>
                    <li><a href="#">proyects</a></li>
                    <li><a href="#">download cv</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;