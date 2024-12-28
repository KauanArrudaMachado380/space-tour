import Background from '../../Componentes/Fundo';
import MenuDestinations from '../../Componentes/MenuDestinations';
import styled from './Destination.module.css';

import data from '../../json/data.json';
import { useState } from 'react';

function Destination() {

    const [destinations, setDestinations] = useState(data.destinations[0]);

    function changeDestination (nome) {
        const newDestination = data.destinations.find((destination) => destination.name === nome);
        setDestinations(newDestination);
    }

    return(
        <Background namePage='destination'>
            <div className={styled.container}>
                <h1><strong>01</strong> PICK YOUR DESTINATION</h1>
                <section className={styled.card}>
                    <img src={destinations.images.png} alt={destinations.name} />
                    <div className={styled.text}>
                        <MenuDestinations onButtonClick={changeDestination}/>
                        <h2>{destinations.name.toUpperCase()}</h2>
                        <p>{destinations.description}</p>
                        <div className={styled.metrics}>
                            <div>
                                <p>AVG. DISTANCE</p>
                                <h3>{destinations.distance.toUpperCase()}</h3>
                            </div>
                            <div>
                                <p>EST.TRAVEL TIME</p>
                                <h3>{destinations.travel.toUpperCase()}</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Background>
    )
}

export default Destination;