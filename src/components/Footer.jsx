import React from 'react';
import GitHubIcon from './icons/GitHubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import BehanceIcon from './icons/BehanceIcon';
import TwitterIcon from './icons/TwitterIcon';
import LogoPersonal from './icons/LogoPersonal';
import '../styles/Footer.css';

import ReactIcons from './icons/ReactIcons';
import CSSIcons from './icons/CSSIcon';
export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="separador-footer">
        <LogoPersonal color={"#fff"} />
        <div className="footer-description">
          <p>
            Transformado ideas en realidad a traves de soluciones innovadoras.
          </p>
        </div>
        <section className="seccion-sociales-botones">
          <a href="https://github.com/GrandMostach0" target="_blank">
            <GitHubIcon classNameP={"iconsHover icon-footer"} color={"#fff"} />
          </a>
          <a
            href="https://www.linkedin.com/in/victorchanvarguez/"
            target="_blank"
          >
            <LinkedinIcon classNameP={"iconsHover icon-footer"} color={"#fff"} />
          </a>
          <a href="https://www.behance.net/victorchanva" target="_blank">
            <BehanceIcon classNameP={"iconsHover icon-footer"} color={"#fff"} />
          </a>
          <a href="#">
            <TwitterIcon classNameP={"iconsHover icon-footer"} color={"#fff"} />
          </a>
        </section>
      </div>
      <div className="separador-footer">
        <h4 className="footer-title">navegación</h4>
        <div className="footer-options">
          <a href="#">Inicio</a>
          <a href="#">about</a>
          <a href="#">proyects</a>
          <a href="#">Contact</a>
          <a href="#">download cv</a>
        </div>
      </div>
      <div className="separador-footer">
        <h4 className="footer-title">Sobre esta página</h4>
        <p>página hecha con:</p>
        <div className="icon-footer-made">
          <CSSIcons size={24} />
          <p>CSS</p>
        </div>
        <div className="icon-footer-made">
          <ReactIcons size={24} />
          <p>React</p>
        </div>
        <p>
          por <strong>Victor Bernardo Chan Varguez</strong>
        </p>
      </div>
    </footer>
  );
}
