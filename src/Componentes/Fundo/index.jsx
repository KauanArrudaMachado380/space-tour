import { useSizeScreen } from '../../Hooks/useSizeScreen';


function Background({namePage, children}) {

    const size = useSizeScreen();

    const image = () => {
        if(size >= 450){
            return `background-${namePage}-mobile.jpg`
        } else if(size >= 1200){
            return `background-${namePage}-tablet.jpg`
        } else {
            return `background-${namePage}-desktop.jpg`
        }
    }

    return(
        <section style={{backgroundImage:`@/assets/${namePage}/${image}`}}>
            {children}
        </section>
    )
}

export default Background;