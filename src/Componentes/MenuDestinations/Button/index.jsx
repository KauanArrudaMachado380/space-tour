import styled from './Button.module.css';

function Button({ onClicked, nome, children}){

    return(
        <button className={styled.button} onClick={() => onClicked(nome)}>
            {children}
        </button>
    )
}

export default Button;