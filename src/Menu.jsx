import React, {useState} from 'react';
import MenuBurger from './components/ButtonBurgerMenu';
import LogoPersonal from './components/icons/LogoPersonal';
import './menu.css';

function Menu(){
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="Navbar">
        <LogoPersonal color={"#fff"}/>
        <div className={`nav-items ${isOpen && "open"}`}>
          <a href="/home">Inicio</a>
          <a href="/about">Acerca de mí</a>
          <a href="/service">Proyects</a>
          <a href="/contact">Download CV</a>
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    );

}

export default Menu;