import React from 'react';
import Menu from './Menu';
import Cuerpo from './Cuerpo';
import About from './About';
import Proyects from './Proyects';
import Skills from './Skills';
import Footer from './components/Footer';
import Contact from './components/ContactForm';
import './app.css';
import 'aos/dist/aos.css';

function App(){
    return(
        <div className='App appfinal'>
            <Menu/>
            <div className="circulo"></div>
            <div className="circulo c-1"></div>

            <div className="container-app">
                <Cuerpo />
                <Proyects />
                <About  />
                <Skills />
                <Contact />
                <Footer />
            </div>
            
        </div>
    );
}

export default App;