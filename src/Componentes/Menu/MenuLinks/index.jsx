import { Link, useLocation } from 'react-router';
import styled from './MenuLinks.module.css'

function MenuLinks({children, direction}){

    const location = useLocation();

    return (
        <Link to={direction} className={`${styled.link} ${location.pathname === direction? styled.linkAcessado : '' }`}>
            {children}
        </Link>
    )
}

export default MenuLinks;