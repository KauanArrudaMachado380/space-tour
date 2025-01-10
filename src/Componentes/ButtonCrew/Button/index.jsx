import styled from './Button.module.css';

function ButtonCrew({onButtonClicked, name, onButtonChecked, active}) {

    return(
        <button className={`${styled.button} ${active && styled.buttonActive}`} onClick={() => {
            onButtonClicked(name);
            onButtonChecked(name)
        }
        }>
        </button>
    )
}

export default ButtonCrew;