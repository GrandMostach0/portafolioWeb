import FotoPersonal from './assets/images/foto.png';
import LogoGit from './assets/icons/github-mark/github-mark-white.svg';
import LogoLinkedlin from './assets/icons/icon-linkedlin.svg';
import LogoBehance from './assets/icons/icon-behance.svg';
import LogoTwitter from './assets/icons/icon-twitter.svg';
import './cuerpo.css';
import './main.css';

import './components/icons/GitHubIcon';
import GitHubIcon from './components/icons/GitHubIcon';
import LinkedinIcon from './components/icons/LinkedinIcon';'./components/icons/LinkedinIcon';
import BehanceIcon from './components/icons/BehanceIcon';
import TwitterIcon from './components/icons/TwitterIcon';

function Cuerpo(){

    return(
        <section className='presentacion'>
            <div className="container">
                <div className='presentacion-text'>
                    <h2 className='nombre-presentacion'>Hi, I'm Victor Chan</h2>
                    <h1 className='titulos titulo-cargo'>Front-end Developer</h1>
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
                <img id='foto-personal' src={FotoPersonal} alt="photoLead"/>
            </div>
        </section>
    );
}

export default Cuerpo;