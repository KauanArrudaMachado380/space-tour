import {  useEffect, useState } from "react";

export const useSizeScreen = () => {

    /* hook personalizado que retorna o tamanho da tela */
    
    const [size, setSize] = useState(window.innerWidth);

    const changeSize = () => {
        setSize(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', changeSize)
        window.removeEventListener('resize', changeSize)
    }, [])

    return size;
}