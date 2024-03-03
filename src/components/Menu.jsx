import React, { useState } from "react";
import LogoPersonal from "./icons/LogoPersonal";
import "../styles/menu.css";
import { Toggle } from "./Toggle";

function Menu({ isDark, toggleTheme }) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      // Cerrar el menú después de hacer clic en un enlace
      setIsOpen(false);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <LogoPersonal color={"#fff"} />
      <div className="containerItems">
        <Toggle isChecked={isDark} handleChange={toggleTheme} />
        <div className={`nav-items ${isOpen && "open"}`}>
          {/* Usa la función scrollToSection para manejar los clics en los enlaces */}
          <a href="#inicio" onClick={() => scrollToSection("inicio")}>
            Inicio
          </a>
          <a href="#about" onClick={() => scrollToSection("about")}>
            Acerca de mí
          </a>
          <a href="#proyectos" onClick={() => scrollToSection("proyectos")}>
            Proyectos
          </a>
          <a href="#contact" onClick={() => scrollToSection("contact")}>
            Contacto
          </a>
          <a href="#cv" onClick={() => scrollToSection("cv")}>
            Descargar CV
          </a>
        </div>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Menu;
