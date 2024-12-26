import styled from './Button.module.css';

function Button({nome, children}){

    function readingName (name){
        return console.log(name);
    }

    return(
        <button key={nome} className={styled.button} onClick={(evento) => {
            evento.preventDefault();
            readingName(nome);
        }}>
            {children}
        </button>
    )
}

export default Button;