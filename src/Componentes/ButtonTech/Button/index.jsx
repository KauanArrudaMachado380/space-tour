import styled from './Button.module.css';

function ButtonCrew({onButtonClicked, name, children}) {
    return(
        <button className={styled.button} onClick={() => onButtonClicked(name)}>
            {children}
        </button>
    )
}

export default ButtonCrew;