import React, { useState } from 'react';
import Menu from './Menu';
import Cuerpo from './Cuerpo';
import About from './About';
import Proyects from './Proyects';
import Skills from './Skills';
import Footer from './components/Footer';
import Contact from './components/ContactForm';
import Form from './components/Form';
import './app.css';
// Supports weights 100-900
import '@fontsource-variable/onest';

import useLocalStorage from 'use-local-storage';

function App(){
    //esta constante obtiene la preferencia del tema del systema, si es dark entonces la página comienza con tema dark y viceversa
    const preference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;


    /*
    Local storage, para guardar la preferencia ya que cuando se refresca vuelve a dark sin guardar cambios, con el uso de local
    storage al refrescar se mantiene los cambios*/
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