import { useSizeScreen } from '../../Hooks/useSizeScreen';
import styled from './Menu.module.css'
import MenuLinks from './MenuLinks';
import logo from './logo.svg';

function Menu() {

    const size = useSizeScreen();

    const imagemBarra = () => {

    }

    return (
        <header className={styled.menu}>
            <div>
                <img className={styled.logo} src={logo} alt="Logo" />
                <div className={styled.line}></div>
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