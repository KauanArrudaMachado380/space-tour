import styled from './Button.module.css';

function Button({ onClicked, onButtonChecked, nome, children, active}){

    return(
        <button className={`${styled.button} ${active && styled.buttonActive}`} onClick={() => {
            onClicked(nome)
            onButtonChecked(nome)
            }}>
            {children}
        </button>
    )
}

export default Button;