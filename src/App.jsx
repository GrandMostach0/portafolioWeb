import React from 'react';
import Menu from './components/Header';
import Cuerpo from './Cuerpo';
import About from './About';
import Proyects from './Proyects';
import Skills from './Skills';
import Footer from './components/Footer';
import Contact from './components/ContactForm';
import './cuerpo.css';
import './app.css';
import 'aos/dist/aos.css';

function App(){
    return(
        
        <div class="relative h-full w-full bg-slate-950 overflow-hidden">
            <header>
                <Menu/>
            </header>
            <Cuerpo />
            <About  />
            <Proyects />
            <Skills />
            <Contact />
            <Footer />
            <div class="fixed bottom-0 left-[-10%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            <div class="fixed bottom-0 right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
    );
}

export default App;