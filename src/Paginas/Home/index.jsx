import Background from '../../Componentes/Fundo';
import styled from './Home.module.css';

function Home() {
    return(
        <Background namePage='home' className={styled.home}>
            <h1>Home</h1>
        </Background>
    )
}

export default Home;