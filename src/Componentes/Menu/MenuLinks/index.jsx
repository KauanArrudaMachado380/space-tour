import { useEffect, useState } from "react";
import Links from "./Links";
import styled from './MenuLinks.module.css';
import { useLocation } from "react-router";

function MenuLinks() {

    const [active, setActive] = useState(1);

    const location = useLocation();
    

    useEffect(() => {
        switch(location.pathname) {
            case '/':
                setActive(1);
                break;
            case '/destinations':
                setActive(2);
                break;
            case '/crew':
                setActive(3);
                break;
            case '/technology':
                setActive(4);
                break;
            default:
                setActive(1);
        }
    }, [location.pathname])

    return(
        <>
            <ul className={styled.ul}>
                <li className={active === 1 ? styled.liActive : ''}  onClick={() => setActive(1)}>
                    <Links direction='/'>00 HOME</Links>
                </li>
                <li className={active === 2  ? styled.liActive : ''}  onClick={() => setActive(2)}>
                    <Links direction='/destinations'>01 DESTINATION</Links>
                </li>
                <li className={active === 3  ? styled.liActive : ''}  onClick={() => setActive(3)}>
                    <Links direction='/crew'>02 CREW</Links>
                </li>
                <li className={active === 4  ? styled.liActive : ''}  onClick={() => setActive(4)}>
                    <Links direction='/technology'>03 TECHNOLOGY</Links>
                </li>
            </ul>
        </>
    )
}

export default MenuLinks;