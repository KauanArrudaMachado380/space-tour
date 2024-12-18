import styled from './Menu.module.css'
import MenuLinks from './MenuLinks';
import logo from './logo.svg';

function Menu() {
    return (
        <header className={styled.menu}>
            <img src={logo} alt="Logo" />
            <nav>
                <MenuLinks direction='/'>
                    Home
                </MenuLinks>
                <MenuLinks direction='/destinations'>
                    Destinations
                </MenuLinks>
                <MenuLinks direction='/crew'>
                    Crew
                </MenuLinks>
                <MenuLinks direction='/technology'>
                    Technology
                </MenuLinks>
            </nav>
        </header>
    );
}

export default Menu;