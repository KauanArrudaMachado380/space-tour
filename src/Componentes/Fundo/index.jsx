import { useEffect, useState } from 'react';
import { useSizeScreen } from '../../Hooks/useSizeScreen';
import styled from './Fundo.module.css';

function Background({namePage, children}) {

    /* parte responsável por controlar o background que será mostrado dependendo do tamanho da tela e de qual página estamos */

    const size = useSizeScreen();

    const [resize, setResize] = useState(size);

    /* caso a página seja recarregada ou o úsuario de zoomar a tela, o useEffect irá atualizar o tamanho da tela, e o background irá ser atualizado */

    useEffect(() => {
        window.addEventListener('resize', () => setResize(window.innerWidth));
    }, [])

    /* constante que chama uma arrow function que ira mudar o background dependendo do tamanho da tela */

    const image = () => {
        if(resize <= 450){
            return `background-${namePage}-mobile.jpg`
        } else if(resize <= 1300){
            return `background-${namePage}-tablet.jpg`
        } else {
            return `background-${namePage}-desktop.jpg`
        }
    }

    return(
        <section style={{backgroundImage:`url(/assets/${namePage}/${image()})`}} className={styled.container}>
            {children}
        </section>
    )
}

export default Background;