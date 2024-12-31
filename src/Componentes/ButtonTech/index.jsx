import styled from './ButtonTech.module.css'

import Button from './Button'

function ButtonTech({onClick}){
    return (
        <div className={styled.container}>
            <Button name='Launch vehicle' onButtonClicked={onClick}>1</Button>
            <Button name='Spaceport' onButtonClicked={onClick}>2</Button>
            <Button name='Space capsule' onButtonClicked={onClick}>3</Button>
        </div>
    )
}

export default ButtonTech;