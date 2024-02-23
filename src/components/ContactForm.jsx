import React from 'react';
import { set, useForm } from 'react-hook-form';
import GitHubIcon from '../components/icons/GitHubIcon';
import LinkedinIcon from '../components/icons/LinkedinIcon';
import BehanceIcon from '../components/icons/BehanceIcon';
import TwitterIcon from '../components/icons/TwitterIcon';

import './contactForm.css';

//componente para relalizar el cipboard
import { CopyToClipboard } from 'react-copy-to-clipboard';

//import para realizar una notificacion usando react-hot-toast
import {Toaster, toast} from 'react-hot-toast';

import { useState } from 'react'; 

function ContactForm() {

  const {register, handleSubmit} = useForm ();

  const onSubmit = (data) =>{
    console.log(data);
  }


  return (
    <div className='separador'>
      
      <div className='container-form-contact'>

        <form className='formulario' onSubmit={handleSubmit(onSubmit)}>

          <div className='separador-form-div-name-email'>
            
            <div className='wrapper'>
              <label className='lbl-nombre' htmlFor='name'>Nombre</label>
              <input autoComplete='off' type='text' {...register('name')}/>
            </div>

            <div div className='wrapper'>
              <label className='lbl-nombre' htmlFor='email'>Email</label>
              <input autoComplete='off' type='email' {...register('email')}/>
            </div>

          </div>

          <div className='container-textarea'>
            <label className='lbl-nombre' htmlFor="message">Message</label>
            <textarea name="message" className='textarea-responsive' {...register('message')}/>
          </div>

          <button className='sendMessage' type='submit' onClick={() => toast.success('Email Enviado!',
          {position: 'bottom-center',
            style: {
              border: '1px solid rgba(28, 241, 4, 0.2)',
              backgroundColor: 'rgba(82, 5, 121, 0.5)',
              color: 'white'
            }})}
          >Enviar
          </button>
        </form>
        
        <div className='contact'>
          <h2 className='contact-title'>Let's Talk</h2>
          <p>More information contact:</p>
          <p><strong>¡Touch to copy!</strong></p>

          <div className='container-contact-info'>
            <div className='info info-sep'>
              <br />
              <h4>Email : </h4>
              <CopyToClipboard text='kreedlegend0@gmail.com'>
                <p className='clip'
                onClick={() => toast('Texto Copiado',
                {position: "bottom-center",
                style: {
                  border: '2px solid white',
                  padding: '1rem',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  background: 'black',
                  color: 'white'
                }})}>
                  Kreedlegend0@gmail.com
                </p>
              </CopyToClipboard>
            </div>
            <br />
            <div className='info'>
              <h4>Phone : </h4>
              <CopyToClipboard text='+52 9994552047'>
                <p 
                onClick={() => toast('Texto Copiado',
                {position: "bottom-center",
                style: {
                  border: '2px solid white',
                  padding: '1rem',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  background: 'black',
                  color: 'white'
                }})}>
                  +52 9994552047
                </p>
              </CopyToClipboard>
              <br />
            </div>
            <Toaster />
            <div className="cards">
              <section className='seccion-sociales-botones'>
                        <a href="https://github.com/GrandMostach0" target='_blank'>
                            <GitHubIcon color={"#fff"}/>
                        </a>
                        <a href="https://www.linkedin.com/in/victorchanvarguez/" target='_blank'>
                            <LinkedinIcon color={"#fff"} />
                        </a>
                        <a href="https://www.behance.net/victorchanva" target='_blank'>
                            <BehanceIcon color={"#fff"} />
                        </a>
                        <a href="#">
                            <TwitterIcon color={"#fff"} />
                        </a>
                    </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm