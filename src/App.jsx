import React from "react";
import './app.css';

function App(){
    return(
        <div className="menu">
            <img id="logoPersonal" src="src\assets\icons\i.svg" alt="imagen" />
            <nav className="menu-opciones">
                <ul>
                    <li><a href="#">about</a></li>
                    <li><a href="#">proyects</a></li>
                    <li><a href="#">download cv</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default App;