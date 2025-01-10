import { Link } from 'react-router';
import styled from './Menu.module.css'
import logo from './logo.svg'
import Nav from './Nav';

function Menu() {

    return (
        <header className={styled.menu}>
            <div>
                <Link to='/'> 
                    <img className={styled.logo} src={logo} alt="Logo" />
                </Link>
                <div className={styled.line}></div>
                <Nav/>
            </div>
        </header>
    );
}

export default Menu;