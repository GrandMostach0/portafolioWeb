import FotoPersonal from '../assets/images/foto.jpg';
import GitHubIcon from './icons/GitHubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import BehanceIcon from './icons/BehanceIcon';
import TwitterIcon from './icons/TwitterIcon';

import {Typewriter} from 'react-simple-typewriter';

import '../styles/cuerpo.css';
import '../index.css';

const handleDownload = () => {
    const pdfUrl = 'https://pdfobject.com/pdf/sample.pdf';  // Reemplaza con tu URL de PDF
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'curriculum.pdf';  // Reemplaza con el nombre que desees para el archivo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const handleOpenInNewTab = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/1aObTx0uqCQagvUGnwZBO8zICgWA56wWx/view?usp=sharing";
    window.open(pdfUrl, '_blank');
};

function Cuerpo(){

    return (
      <section id="inicio" className="presentacion">
        <div className="container">
          <div className="presentacion-text">
            <h2 className="nombre-presentacion">Hola, soy Victor Chan</h2>
            <h1 className="titulos titulo-cargo">
              <Typewriter
                words={["Desarrollo Web", "Ciberseguridad", "DevOps"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={150}
                deleteSpeed={150}
                delaySpeed={1000}
              />
            </h1>
            <p className="des">
              <span className="btnDestacado">disponible para trabajar ✅</span>
            </p>
            <p className="parrafos">
              Soy un apasionado del desarrollo web, la ciberseguridad
              y DevOps. Listo para explorar y crecer en esta apasionante
              travesía.
            </p>
            <section className="seccion-sociales-botones">
              <a href="https://github.com/GrandMostach0" target="_blank">
                <GitHubIcon classNameP={"iconsHover"} color={"#fff"} />
              </a>
              <a
                href="https://www.linkedin.com/in/victorchanvarguez/"
                target="_blank"
              >
                <LinkedinIcon classNameP={"iconsHover"} color={"#fff"} />
              </a>
              <a href="https://www.behance.net/victorchanva" target="_blank">
                <BehanceIcon classNameP={"iconsHover"} color={"#fff"} />
              </a>
              <a href="#">
                <TwitterIcon classNameP={"iconsHover"} color={"#fff"} />
              </a>
            </section>
            <section className="seccion-sociales-botones seccion-botones">
              <a href="#contact">
                <button>Contacto</button>
              </a>
              <button onClick={handleOpenInNewTab}>Descargar CV</button>
            </section>
          </div>
          <img
            loading="lazy"
            className="foto-personal"
            src={FotoPersonal}
            alt="photoLead"
          />
        </div>
      </section>
    );
}

export default Cuerpo;