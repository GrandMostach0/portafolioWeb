import React from 'react';
import { set, useForm } from 'react-hook-form';
import FotoPersonal from '../assets/images/foto.png';
import LogoGit from '../assets/icons/github-mark/github-mark-white.svg';
import LogoLinkedlin from '../assets/icons/icon-linkedlin.svg';
import LogoBehance from '../assets/icons/icon-behance.svg';
import LogoTwitter from '../assets/icons/icon-twitter.svg';
import './contactform.css';

//componente para relalizar el cipboard
import { CopyToClipboard } from 'react-copy-to-clipboard';

//import para realizar una notificacion usando react-hot-toast
import {Toaster, toast} from 'react-hot-toast';

import { useState } from 'react'; 
import styled from 'styled-components';

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

          <button className='sendMessage' type='submit'>Enviar</button>
        </form>
        
        <div className='contact'>
          <h2 className='contact-title'>Let's Talk</h2>
          <p>More information contact:</p>
          <p>¡Touch to copy!</p>

          <div className='container'>
            <div className='info info-sep'>
              <h4>Email: </h4>
              <CopyToClipboard text='kreedlegend0@gmail.com'>
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
                  Kreedlegend0@gmail.com
                </p>
              </CopyToClipboard>
            </div>
            <div className='info'>
              <h4>Phone: </h4>
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
            </div>
            <Toaster />
            <div className="info cards">
              <section className='seccion-sociales-botones'>
                    <a href="https://github.com/GrandMostach0" target='_blank'><img src={LogoGit} alt="git-hub"/></a>
                    <a href="https://www.linkedin.com/in/victorchanvarguez/" target='_blank'><img src={LogoLinkedlin} alt="linkedln"/></a>
                    <a href="https://www.behance.net/victorchanva" target='_blank'><img src={LogoBehance} alt="behance"/></a>
                    <a href="#"><img src={LogoTwitter} alt="twitter"/></a>
                </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm