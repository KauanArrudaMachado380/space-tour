import { Link} from 'react-router';
import styled from './Links.module.css'

function Links({children, direction}){

    return (
        <Link to={direction} className={styled.link}>
            {children}
        </Link>
    )
}

export default Links;