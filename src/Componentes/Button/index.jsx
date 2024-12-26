import { Link } from 'react-router';
import styled from './Button.module.css'

function Button({children}){

    return(
        <>
            <Link to='/destinations'>
                <button className={styled.button}>
                    {children}
                </button>
            </Link>
        </>
    )
}

export default Button;