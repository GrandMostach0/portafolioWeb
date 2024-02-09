import React from 'react';
import Menu from './Menu';
import Cuerpo from './Cuerpo';
import About from './About';
import Proyects from './Proyects';
import Skills from './Skills';
import Footer from './components/Footer';
import BurgerMenu from './components/ButtonBurgerMenu';
import Contact from './components/ContactForm';
import './menu.css';
import './cuerpo.css';
import './app.css';

function App(){
    return(
        <div>
            <header className="menu">
                <img id="logoPersonal" src="src\assets\icons\i.svg" alt="imagen" />
                <div className='menu-noBurger'>
                    <Menu/>
                </div>
                <div className='burger'>                    
                    <BurgerMenu/>
                </div>
            </header>
            <Cuerpo />
            <About  />
            <Proyects />
            <Skills />
            <Contact />            
            <Footer />
        </div>
    );
}

export default App;