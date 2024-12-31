import styled from './Button.module.css';

function ButtonCrew({onButtonClicked, name}) {
    return(
        <button className={styled.button} onClick={() => onButtonClicked(name)}>
            
        </button>
    )
}

export default ButtonCrew;