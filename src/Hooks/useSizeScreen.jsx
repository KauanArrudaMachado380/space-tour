import {  useEffect, useState } from "react";

export const useSizeScreen = () => {
    
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