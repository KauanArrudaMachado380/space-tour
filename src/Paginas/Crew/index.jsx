import Background from '../../Componentes/Fundo';
import styled from './Crew.module.css';

function Crew() {
    return (
        <Background namePage='crew' className={styled.crew}>
            <h1>Crew</h1>
        </Background>
    );
}

export default Crew;