import { Outlet } from "react-router";
import Menu from "../../Componentes/Menu";

function PaginaPadrao() {
    return (      
        <main>
            <Menu />
            <Outlet/>
        </main>
    );
}

export default PaginaPadrao;