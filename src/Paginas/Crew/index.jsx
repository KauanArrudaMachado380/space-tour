import Background from '../../Componentes/Fundo';
import styled from './Crew.module.css';

import data from '../../json/data.json';
import { useState } from 'react';
import ContainerButtonCrew from '../../Componentes/ButtonCrew';

function Crew() {

    /* parte responsável por controlar o conteúdo que será mostrado */

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
                        <ContainerButtonCrew onClicked={changeCrew} member={crew.name}/>
                    </div>
                    <div className={styled.crewImg}>
                        <img src={crew.images.webp} alt={crew.name} />
                        <div className={styled.line}></div>
                    </div>  
                </section>
            </main>
        </Background>
    );
}

export default Crew;