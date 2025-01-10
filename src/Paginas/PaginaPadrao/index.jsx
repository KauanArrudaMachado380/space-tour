import { Outlet } from "react-router";
import Menu from "../../Componentes/Menu";

function PaginaPadrao() {

    /* página padrão que ira gerar o conteudo mostrado em todas as telas */

    return (      
        <main>
            <Menu />
            <Outlet/>
        </main>
    );
}

export default PaginaPadrao;