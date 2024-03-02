import React from 'react';
import GitHubIcon from '../components/icons/GitHubIcon';
import LinkedinIcon from '../components/icons/LinkedinIcon';
import BehanceIcon from '../components/icons/BehanceIcon';
import TwitterIcon from '../components/icons/TwitterIcon';
import EmailIcon from './icons/EmailIcon';
import PhoneIcon from './icons/PhoneIcon';
import './contactForm.css';

//componente para relalizar el cipboard
import { CopyToClipboard } from 'react-copy-to-clipboard';

//import para realizar una notificacion usando react-hot-toast
import {Toaster, toast} from 'react-hot-toast';

function ContactForm() {

  const handleEmail = () => {
    const emailAddress = "kreedlegend0@gmail.com";
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleCall = () => {
    const phoneNumber = "+52 9994552047"; // Reemplaza con tu número de teléfono
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="separador">
      <div className="container-form-contact">
        {/* zona especifico para el envio de formualarios */}
        <form
          className="formulario"
          name="FormularioContacto"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="FormularioContacto" />

          <div hidden>
            <input name="bot-field" />
          </div>

          <div className="separador-form-div-name-email">
            <div className="wrapper">
              <label className="lbl-nombre" htmlFor="name">
                Nombre
              </label>
              <input type="text" name="name" />
            </div>

            <div div className="wrapper">
              <label className="lbl-nombre" htmlFor="email">
                Email
              </label>
              <input type="email" name="email" />
            </div>
          </div>

          <div className="container-textarea">
            <label className="lbl-nombre" htmlFor="message">
              Message
            </label>
            <textarea name="message" className="textarea-responsive" />
          </div>

          <button type="submit"> Enviar </button>
        </form>

        <div className="contact">
          <h2 className="contact-title">!Contactame¡</h2>
          <p>Más información:</p>
          <p>
            <strong>¡Toca para copiar!</strong>
          </p>

          <div className="container-contact-info">
            <div className="">
              <br />
              <h4>Email : </h4>
              <CopyToClipboard text="kreedlegend0@gmail.com">
                <p
                  className="clip"
                  onClick={() =>
                    toast("Texto Copiado", {
                      position: "bottom-center",
                      style: {
                        border: "2px solid white",
                        padding: "1rem",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        background: "black",
                        color: "white",
                      },
                    })
                  }
                >
                  Kreedlegend0@gmail.com
                </p>
              </CopyToClipboard>
            </div>
            <br />
            <div className="info-phone">
              <h4>Phone : </h4>
              <CopyToClipboard text="+52 9994552047">
                <p
                  onClick={() =>
                    toast("Texto Copiado", {
                      position: "bottom-center",
                      style: {
                        border: "2px solid white",
                        padding: "1rem",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        background: "black",
                        color: "white",
                      },
                    })
                  }
                >
                  +52 9994552047
                </p>
              </CopyToClipboard>
              <br />
            </div>
            <Toaster />
          </div>
          <div className="menuEmail-Phone">
            <br />
            <p style={{ cursor: "pointer" }} onClick={handleEmail}>
              <EmailIcon />
            </p>
            <p style={{ cursor: "pointer" }} onClick={handleCall}>
              <PhoneIcon />
            </p>
            <br />
          </div>
          <p style={{ textAlign: "center" }}>
            <strong>Or sent Email here</strong>
          </p>
          <div className="cards">
            <section className="seccion-sociales-botones">
              <a href="https://github.com/GrandMostach0" target="_blank">
                <GitHubIcon
                  classNameP={"iconsHover iconsContact"}
                  color={"#fff"}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/victorchanvarguez/"
                target="_blank"
              >
                <LinkedinIcon
                  classNameP={"iconsHover iconsContact"}
                  color={"#fff"}
                />
              </a>
              <a href="https://www.behance.net/victorchanva" target="_blank">
                <BehanceIcon
                  classNameP={"iconsHover iconsContact"}
                  color={"#fff"}
                />
              </a>
              <a href="#">
                <TwitterIcon
                  classNameP={"iconsHover iconsContact"}
                  color={"#fff"}
                />
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm