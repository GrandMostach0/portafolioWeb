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
import 'aos/dist/aos.css';

function App(){


    return(
        <div>
            <Menu/>
            <Cuerpo />
            <div 
            data-aos = "fade-right"
            data-aos-offset = "300"
            data-aos-easing = "ease-in-sine">
                <About  />
            </div>
            <Proyects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;