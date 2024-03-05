import React, { useState } from 'react';
import Menu from './components/Menu';
import Cuerpo from './components/Cuerpo';
import About from './components/About';
import Proyects from './components/Proyects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/ContactForm';
import Form from './components/Form';
import './app.css';
import '@fontsource-variable/onest';

import useLocalStorage from 'use-local-storage';

function App(){
    const preference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const [isDark, setIsDark] = useLocalStorage("isDark", preference);

    const toggleTheme = () => {
      setIsDark(!isDark);
    }

    return (
      <div className="App appfinal" data-theme={isDark ? "dark" : "light"}>
        <div className="circulo"></div>
        <div className="circulo c-1"></div>
        <Menu isDark={isDark} toggleTheme={toggleTheme} />
        <div className="container-app">
          <Cuerpo />
          <Proyects />
          <About />
          <Skills />
          <Contact />
        </div>
        <Footer />
      </div>
    );
}

export default App;