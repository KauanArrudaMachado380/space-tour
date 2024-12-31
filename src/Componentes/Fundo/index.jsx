import { useSizeScreen } from '../../Hooks/useSizeScreen';
import styled from './Fundo.module.css';

function Background({namePage, children}) {

    const size = useSizeScreen();

    const image = () => {
        if(size <= 450){
            return `background-${namePage}-mobile.jpg`
        } else if(size <= 1300){
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