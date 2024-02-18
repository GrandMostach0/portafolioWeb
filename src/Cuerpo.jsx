import FotoPersonal from './assets/images/foto.png';
import LogoGit from './assets/icons/github-mark/github-mark-white.svg';
import LogoLinkedlin from './assets/icons/icon-linkedlin.svg';
import LogoBehance from './assets/icons/icon-behance.svg';
import LogoTwitter from './assets/icons/icon-twitter.svg';
import './cuerpo.css';
import './main.css';

function Cuerpo(){

    return(
        <section className='presentacion'>
            <div className='presentacion-text'>
                <h2 className='nombre-presentacion'>Hi, I'm Victor Chan</h2>
                <h1 className='titulos titulo-cargo'>Front-end Developer</h1>
                <p className='parrafos'>Focused on creating website and web applications. I like what i do ❤️</p>
                <section className='seccion-sociales-botones'>
                    <a href="https://github.com/GrandMostach0" target='_blank'><img src={LogoGit} alt="git-hub"/></a>
                    <a href="https://www.linkedin.com/in/victorchanvarguez/" target='_blank'><img src={LogoLinkedlin} alt="linkedln"/></a>
                    <a href="https://www.behance.net/victorchanva" target='_blank'><img src={LogoBehance} alt="behance"/></a>
                    <a href="#"><img src={LogoTwitter} alt="twitter"/></a>
                </section>
                <section className='seccion-sociales-botones seccion-botones'>
                    <button>Contacto</button>
                    <button>Descargar CV</button>
                </section>

            </div>
            <img id='foto-personal' src={FotoPersonal} alt="photoLead" />
        </section>
    );
}

export default Cuerpo;