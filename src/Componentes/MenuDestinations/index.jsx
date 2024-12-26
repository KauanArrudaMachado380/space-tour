import styled from './MenuDestinations.module.css';

function MenuDestinations () {


    return(
        <div className={styled.menu}>
            <button key='Moon'>MOON</button>
            <button key='Mars'>MARS</button>
            <button key='Europe'>EUROPE</button>
            <button Key='Titan'>TITAN</button>
        </div>
    )
}

export default MenuDestinations;