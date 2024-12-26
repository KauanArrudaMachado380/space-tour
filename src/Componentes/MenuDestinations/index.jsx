import Button from './Button';
import styled from './MenuDestinations.module.css';

function MenuDestinations () {



    return(
        <div className={styled.menu}>
            <Button nome='Moon'>MOON</Button>
            <Button nome='Mars'>MARS</Button>
            <Button nome='Europe'>EUROPE</Button>
            <Button nome='Titan'>TITAN</Button>
        </div>
    )
}

export default MenuDestinations;