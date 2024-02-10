import React from 'react';
import './buttonBurgerMenu.css';

function ButtonBurgerMenu(props){
    return(
        /*nav-icon-6 */
        <div onClick={props.handleClick}  className={`icon nav-icon-6 ${props.clicked ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default ButtonBurgerMenu;