import styled from './Menu.module.css'
import MenuLinks from './MenuLinks';
import logo from './logo.svg';

function Menu() {
    return (
        <header className={styled.menu}>
            <div>
                <img src={logo} alt="Logo" />
                <nav className={styled.nav}>
                    <MenuLinks direction='/'>
                       00 HOME
                    </MenuLinks>
                    <MenuLinks direction='/destinations'>
                       01 DESTINATIONS
                    </MenuLinks>
                    <MenuLinks direction='/crew'>
                       02 CREW
                    </MenuLinks>
                    <MenuLinks direction='/technology'>
                       03 TECHNOLOGY
                    </MenuLinks>
                </nav>
            </div>
        </header>
    );
}

export default Menu;