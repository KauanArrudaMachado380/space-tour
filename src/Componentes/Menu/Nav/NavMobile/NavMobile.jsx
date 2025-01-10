import MenuLinks from "../../MenuLinks";
import styled from './NavMobile.module.css';
import menuBurger from './shared/icon-hamburger.svg';
import menuClose from './shared/icon-close.svg';
import { useState } from "react";

function NavMobile (){

    const [open, setOpen] = useState(false);

    const burger = <img src={menuBurger} alt="Menu Burger" className={styled.menuBurger} onClick={() => setOpen(!open)}/>

    const close = <img src={menuClose} alt="Menu Close" className={styled.menuBurger} onClick={() => setOpen(!open)}/>

    return (
        <nav className={styled.navMobile}>
            {open? close : burger}
            
            {open && <MenuLinks/>}
        </nav>
    )
}

export default NavMobile;