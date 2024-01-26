import React from 'react';
import Menu from './Menu';
import Cuerpo from './Cuerpo';
import './menu.css';

function App(){
    return(
        <div>
            <header className="menu">
                <img id="logoPersonal" src="src\assets\icons\i.svg" alt="imagen" />
                <Menu/>
            </header>
            <Cuerpo />
        </div>
    );
}

export default App;