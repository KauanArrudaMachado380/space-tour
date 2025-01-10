import styled from './ButtonCrew.module.css';
import ButtonCrew from './Button';

import data from '../../json/data.json';
import { useState } from 'react';

function ContainerButtonCrew({onClicked}) {

    /* parte responsável por controlar o botão ativo */

    const [active, setActive] = useState(data.crew[0].name);

    function ButtonActive (name) {
        setActive(name);
    }

    /* parte responsável por criar os botoes */

    const elements = () => {
        const crew = data.crew.map((member) => {
            return <ButtonCrew 
                key={member.name}
                onButtonClicked={onClicked}
                onButtonChecked={ButtonActive} 
                name={member.name} 
                active={active === `${member.name}`}
            >    
            </ButtonCrew>
        })
        return crew;
    }

    

    return(
        <div className={styled.containerButton}>
            {elements()}
        </div>
    )
}

export default ContainerButtonCrew;