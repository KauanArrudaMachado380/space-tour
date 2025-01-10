import { useState } from 'react';
import Background from '../../Componentes/Fundo';
import styled from './Technology.module.css';

import data from '../../json/data.json'
import ButtonTech from '../../Componentes/ButtonTech';


function Technology() {

    /* parte responsável por controlar o conteúdo que será mostrado */

    const [tech, setTech] = useState(data.technology[0])

    function changeNewTech (name){
        const newTech = data.technology.find((tech) => tech.name === name);
        setTech(newTech);
    }

    return (
        <Background namePage='technology' className={styled.technology}>
            <section className={styled.container}>
                <h1><strong>03 </strong>SPACE LAUNCH 101</h1>
                <div className={styled.containerTech}>
                    <ButtonTech onClick={changeNewTech}/>
                    <div className={styled.text}>
                        <h3>THE TERMINOLOGY...</h3>
                        <h2>{tech.name.toUpperCase()}</h2>
                        <p>{tech.description}</p>
                    </div>
                    <div className={styled.containerImg}>
                        <img src={tech.images.portrait} alt={tech.name} />
                    </div>
                </div>
            </section>
        </Background>
    );
}

export default Technology;