import styled from  './Nav.module.css';
import NavMobile from './NavMobile/NavMobile';
import NavDesktop from './NavDesktop/NavDesktop';

function Nav (){

    return (
        <div className={styled.nav}>
            <NavDesktop/>
            <NavMobile/>
        </div>
    )
}

export default Nav;