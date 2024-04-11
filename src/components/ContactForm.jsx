import React from 'react';
import {GitHubIcon, LinkedinIcon, BehanceIcon, TwitterIcon, EmailIcon, PhoneIcon} from './Icons';
import Form from './Form';
import '../styles/contactform.css';

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
    <div id="contact" className="separador">
      <div className="container-form-contact">
        {/* zona especifico para el envio de formualarios */}
        <Form />

        <div className="contact">
          <h2 className="contact-title">¡ Contactame !</h2>
          <p>Más información:</p>
          <p>
            <strong>¡Toca para abrir!</strong>
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
            <strong>Ó ¡ enviame mensaje aqui ✉️!</strong>
          </p>
          <div className="cards">
            <section className="seccion-sociales-botones">
              <a href="https://github.com/GrandMostach0" target="_blank">
                <GitHubIcon classNameP={"iconsHover"} color={"#fff"} />
              </a>
              <a
                href="https://www.linkedin.com/in/victorchanvarguez/"
                target="_blank"
              >
                <LinkedinIcon classNameP={"iconsHover"} color={"#fff"} />
              </a>
              <a href="https://www.behance.net/victorchanva" target="_blank">
                <BehanceIcon classNameP={"iconsHover"} color={"#fff"} />
              </a>
              <a href="#">
                <TwitterIcon classNameP={"iconsHover"} color={"#fff"} />
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm