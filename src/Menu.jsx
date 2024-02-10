import React, {useState} from 'react';
import Logo from './assets/icons/i.svg';
import MenuBurger from './components/ButtonBurgerMenu';
import './menu.css';

function Menu(){
    const [clicked, setClicked] = useState(false);

    const handleClick = () =>{
        //cuando esta true lo paso a false y viceversa
        setClicked(!clicked);
    }
    return(
        <>
        <nav className='nav-container'>
            <img id='logoPersonal' src={Logo} alt="LogoPersonal" />
            <div className={`links ${clicked ? 'active' : ''}`}>
                <a onClick={handleClick} href="#">Inicio</a>
                <a onClick={handleClick} href="#">about</a>
                <a onClick={handleClick} href="#">proyects</a>
                <a onClick={handleClick} href="#">Contact</a>
                <a onClick={handleClick} href="#">download cv</a>
            </div>
            <div className='menuBurgerDiv'>
                <MenuBurger clicked={clicked} handleClick={handleClick} />
            </div>
        </nav>
        </>
    );
}

export default Menu;