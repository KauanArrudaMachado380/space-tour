import styled from './ButtonCrew.module.css';
import ButtonCrew from './Button';

function ContainerButtonCrew({onClicked}) {
    return(
        <div className={styled.containerButton}>
            <ButtonCrew onButtonClicked={onClicked} name='Douglas Hurley'></ButtonCrew>
            <ButtonCrew onButtonClicked={onClicked} name='Mark Shuttleworth'></ButtonCrew>
            <ButtonCrew onButtonClicked={onClicked} name='Victor Glover'></ButtonCrew>
            <ButtonCrew onButtonClicked={onClicked} name='Anousheh Ansari'></ButtonCrew>
        </div>
    )
}

export default ContainerButtonCrew;