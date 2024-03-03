import React, {useState} from 'react';
import LogoPersonal from './icons/LogoPersonal';
import '../styles/menu.css';
import { Toggle } from './Toggle';

function Menu({isDark, toggleTheme}){
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="Navbar">
        <LogoPersonal color={"#fff"}/>
        <div className="containerItems">
          <Toggle isChecked={isDark} handleChange={toggleTheme} />
          <div className={`nav-items ${isOpen && "open"}`}>
            <a href="/home">Inicio</a>
            <a href="/about">Acerca de mí</a>
            <a href="/service">Proyects</a>
            <a href="/contact">Descargar CV</a>
          </div>
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