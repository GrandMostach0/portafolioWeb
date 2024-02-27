import React, {useState} from 'react';
import MenuBurger from './components/ButtonBurgerMenu';
import LogoPersonal from './components/icons/LogoPersonal';
import './menu.css';

function Menu(){
    const [clicked, setClicked] = useState(false);

    const handleClick = () =>{
        //cuando esta true lo paso a false y viceversa
        setClicked(!clicked);
    }
    return (
      <nav className="nav-container">
        <div className='logoPersonalContainer'>
          <LogoPersonal color={"#fff"} />
        </div>
        <div className="links">
          <a href="#">about</a>
          <a href="#">proyects</a>
          <a href="#">Contact</a>
          <a href="#">download cv</a>
        </div>
      </nav>
    );
}

export default Menu;