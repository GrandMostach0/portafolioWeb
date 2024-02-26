import FotoPersonal from './assets/images/foto.png';
import GitHubIcon from './components/icons/GitHubIcon';
import LinkedinIcon from './components/icons/LinkedinIcon';
import BehanceIcon from './components/icons/BehanceIcon';
import TwitterIcon from './components/icons/TwitterIcon';

import {Typewriter} from 'react-simple-typewriter';

import './cuerpo.css';
import './main.css';

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
    const pdfUrl = 'https://pdfobject.com/pdf/sample.pdf'; // Reemplaza con tu URL de PDF
    window.open(pdfUrl, '_blank');
};

function Cuerpo(){

    return(
        <section className='presentacion'>
            <div className="container">
                <div className='presentacion-text'>
                    <h2 className='nombre-presentacion'>Hi, I'm Victor Chan</h2>
                    <h1 className='titulos titulo-cargo'>
                        <Typewriter 
                        words={['Front-End Developer', 'Cybersecurity', 'DevOps']}
                        loop={true}
                        cursor
                        cursorStyle='|'
                        typeSpeed={150}
                        deleteSpeed={150}
                        delaySpeed={1000}/>
                    </h1>
                    <p className='des'>
                        <span className='btnDestacado'>disponible para trabajar</span>
                    </p>
                    <p className='parrafos'>¡Hola! Soy un principiante apasionado por el desarrollo web y la ciberseguridad. Estoy dando mis primeros pasos en este emocionante mundo. Mi deseo es crear soluciones digitales seguras. ¡Listo para explorar y crecer en esta apasionante travesía!</p>
                    <section className='seccion-sociales-botones'>
                        <a href="https://github.com/GrandMostach0" target='_blank'>
                            <GitHubIcon classNameP={"iconsHover"} color={"#fff"}/>
                        </a>
                        <a href="https://www.linkedin.com/in/victorchanvarguez/" target='_blank'>
                            <LinkedinIcon classNameP={"iconsHover"} color={"#fff"} />
                        </a>
                        <a href="https://www.behance.net/victorchanva" target='_blank'>
                            <BehanceIcon classNameP={"iconsHover"} color={"#fff"} />
                        </a>
                        <a href="#">
                            <TwitterIcon classNameP={"iconsHover"} color={"#fff"} />
                        </a>
                    </section>
                    <section className='seccion-sociales-botones seccion-botones'>
                        <button>Contacto</button>
                        <button onClick={handleOpenInNewTab}>Descargar CV</button>
                    </section>

                </div>
                <img className='foto-personal' src={FotoPersonal} alt="photoLead"/>
            </div>
        </section>
    );
}

export default Cuerpo;