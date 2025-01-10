import MenuLinks from "../../MenuLinks";
import styled from './NavDesktop.module.css';

function NavDesktop (){
    return (
        <nav className={styled.navDesktop}>
            <MenuLinks/>
        </nav>
    )
}

export default NavDesktop;