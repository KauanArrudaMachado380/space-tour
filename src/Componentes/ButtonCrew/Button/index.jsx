import styled from './Button.module.css';

function ButtonCrew({onButtonClicked, name}) {
    return(
        <button className={styled.button} onClick={() => onButtonClicked(name)}>
            1
        </button>
    )
}

export default ButtonCrew;