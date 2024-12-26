import Background from '../../Componentes/Fundo';
import MenuDestinations from '../../Componentes/MenuDestinations';
import styled from './Destination.module.css';

import destination from '../../json/data.json';

function Destination() {
    return(
        <Background namePage='destination' className={styled.destination}>
            <div className={styled.container}>
                <h1><strong>01</strong> PICK YOUR DESTINATION</h1>
                <section className={styled.card}>
                    <img src={destination.destinations[0].images.png} alt={destination.destinations[0].name} />
                    <div className={styled.text}>
                        <MenuDestinations />
                        <h2>{destination.destinations[0].name.toUpperCase()}</h2>
                        <p>{destination.destinations[0].description}</p>
                        <div className={styled.metrics}>
                            <div>
                                <p>AVG. DISTANCE</p>
                                <h3>{destination.destinations[0].distance.toUpperCase()}</h3>
                            </div>
                            <div>
                                <p>EST.TRAVEL TIME</p>
                                <h3>{destination.destinations[0].travel.toUpperCase()}</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Background>
    )
}

export default Destination;