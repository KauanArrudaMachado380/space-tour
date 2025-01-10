import Button from './Button';
import styled from './MenuDestinations.module.css';

import data from '../../json/data.json';
import { useState } from 'react';

function MenuDestinations ({onButtonClick}) {

    /* parte responsável por controlar o botão ativo */

    const [activeButton, setActiveButton] = useState(data.destinations[0].name);

    function ButtonActive (name) {
        setActiveButton(name);
    }

    /* parte responsável por criar os botoes */

    function elements () {
        const destinations = data.destinations.map((destination) => {
            return <Button
                key={destination.name}
                onClicked={onButtonClick}
                onButtonChecked={ButtonActive}
                nome={destination.name}
                active={activeButton === `${destination.name}`}
            > 
                {destination.name.toUpperCase()}  
            </Button>
        })
        return destinations;
    }

    return(
        <div className={styled.menu}>
            {elements()}
        </div>
    )
}

export default MenuDestinations;