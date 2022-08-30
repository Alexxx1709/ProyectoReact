import React, { useState } from "react";

const ItemCount = () => {

    const [contador, setContador ] = useState(1);

    const incrementar = () => {
        setContador(contador >= 10 ? setContador : contador + 1 );
    };

    //const decrementar: () => void
    
    const decrementar = () => {
        setContador(contador <= 1? setContador : contador - 1 );
    } 

    const confirm = () => {
        console.log("Item Agregado")
    }

    

    return(
        <div style={{marginLeft: "50%"}}>
        
            <button onClick={incrementar}> + </button>
            <button onClick={decrementar}> - </button>
            <h1>{contador}</h1>
            <button onClick={confirm}> Agregar al Carrito </button>

        </div>
    )
}

export default ItemCount;