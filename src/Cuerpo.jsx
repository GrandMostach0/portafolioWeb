import FotoPersonal from './assets/images/foto.png';
import GitHubIcon from './components/icons/GitHubIcon';
import LinkedinIcon from './components/icons/LinkedinIcon';
import BehanceIcon from './components/icons/BehanceIcon';
import TwitterIcon from './components/icons/TwitterIcon';

import {Typewriter} from 'react-simple-typewriter';

import './cuerpo.css';
import './main.css';


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
                    <p className='parrafos'>Soy un apacionado del desarrollo Web y la Ciberseguridad. Mi fascinación por crear experiencias digitales y garantizar la información me impulsa explorar constantemente prácticas seguras.</p>
                    <section className='seccion-sociales-botones'>
                        <a href="https://github.com/GrandMostach0" target='_blank'>
                            <GitHubIcon color={"#fff"}/>
                        </a>
                        <a href="https://www.linkedin.com/in/victorchanvarguez/" target='_blank'>
                            <LinkedinIcon color={"#fff"} />
                        </a>
                        <a href="https://www.behance.net/victorchanva" target='_blank'>
                            <BehanceIcon color={"#fff"} />
                        </a>
                        <a href="#">
                            <TwitterIcon color={"#fff"} />
                        </a>
                    </section>
                    <section className='seccion-sociales-botones seccion-botones'>
                        <button>Contacto</button>
                        <button>Descargar CV</button>
                    </section>

                </div>
                <img className='foto-personal' src={FotoPersonal} alt="photoLead"/>
            </div>
        </section>
    );
}

export default Cuerpo;