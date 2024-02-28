import React, {useState} from 'react';
import LogoPersonal from './components/icons/LogoPersonal';
import './menu.css';
import { Toggle } from './components/Toggle';

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
            <a href="/contact">Download CV</a>
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