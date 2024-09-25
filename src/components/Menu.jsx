import React, { useState } from "react";
import LogoPersonal2 from "./icons/LogoPersonal2";
import "../styles/menu.css";
import { Toggle } from "./Toggle";

function Menu({ isDark, toggleTheme }) {

  const handleOpenInNewTab = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/1aww46LI0X-eOHD95u3pxw4NB5tRWYDJK/view?usp=sharing"; // Reemplaza con tu URL de PDF
    window.open(pdfUrl, "_blank");
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset =
        section.offsetTop -
        window.innerHeight / 2 +
        section.clientHeight / 2 +
        100;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

   const handleContactButtonClick = () => {
     scrollToSection("contact");
   };

  return (
    <div className="Navbar">
      <a href="#inicio">
        <LogoPersonal2/>
      </a>
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
          <a href="#" onClick={handleOpenInNewTab}>
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
