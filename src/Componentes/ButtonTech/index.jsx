import styled from './ButtonTech.module.css'
import Button from './Button'
import data from '../../json/data.json'
import { useState } from 'react';

function ButtonTech({onClick}){

    /* parte responsável por controlar o botão ativo */

    const [active, setActive] = useState(data.technology[0].name);

    function ButtonActive (name) {
        setActive(name);
    }

    /* parte responsável por criar os botoes */

    const elements = () => {
        let index = 0;
        const tech = data.technology.map((tech) => {
            return <Button
                key={tech.name}
                onButtonClicked={onClick}
                onButtonChecked={ButtonActive}
                name={tech.name} 
                active={active === `${tech.name}`}
            >
                {index += 1}    
            </Button>
        })
        return tech;
    }

    return (
        <div className={styled.container}>
            {elements()}
        </div>
    )
}

export default ButtonTech;