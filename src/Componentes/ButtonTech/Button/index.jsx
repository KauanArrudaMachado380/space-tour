import styled from './Button.module.css';

function Button({onButtonClicked, onButtonChecked, name, children, active}) {
    return(
        <button key={name} className={`${styled.button} ${active && styled.buttonActive}`} onClick={() => {
            onButtonClicked(name)
            onButtonChecked(name)
        }}>
            {children}
        </button>
    )
}

export default Button;