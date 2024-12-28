import Background from '../../Componentes/Fundo';
import styled from './Crew.module.css';

import data from '../../json/data.json';
import { useState } from 'react';
import ContainerButtonCrew from '../../Componentes/ButtonCrew/Button';

function Crew() {

    const [crew, setCrew] = useState(data.crew[0]);

    function changeCrew (nome) {
        const newCrew = data.crew.find((member) => member.name === nome);
        setCrew(newCrew);
    }

    return (
        <Background namePage='crew'>
            <main className={styled.container}>
                <h1><strong>02 </strong>MEET YOUR CREW</h1>
                <section className={styled.containerCrew}>
                    <div className={styled.crewText}>
                        <div className={styled.text}>
                            <h3>{crew.role.toUpperCase()}</h3>
                            <h2>{crew.name.toUpperCase()}</h2>
                            <p>{crew.bio}</p>
                        </div>
                        <ContainerButtonCrew onClicked={changeCrew}/>
                    </div>
                    <img src={crew.images.png} alt={crew.name} />
                </section>
            </main>
        </Background>
    );
}

export default Crew;