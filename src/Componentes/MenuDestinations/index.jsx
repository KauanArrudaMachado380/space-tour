import Button from './Button';
import styled from './MenuDestinations.module.css';

function MenuDestinations ({onButtonClick}) {

    return(
        <div className={styled.menu}>
            <Button onClicked={onButtonClick} nome='Moon'>MOON</Button>
            <Button onClicked={onButtonClick} nome='Mars'>MARS</Button>
            <Button onClicked={onButtonClick} nome='Europa'>EUROPA</Button>
            <Button onClicked={onButtonClick} nome='Titan'>TITAN</Button>
        </div>
    )
}

export default MenuDestinations;