import React, { useState } from "react";

const ItemCount = () => {

    const [contador, count ] = useState(1);

    const incrementar = () => {
        count(contador >= 10 ? count : contador + 1 );
    };

    //const decrementar: () => void
    
    const decrementar = () => {
        count(contador <= 1? count : contador - 1 );
    } 

    const confirm = () => {
        console.log("Item Agregado")
    }

    

    return(
        <div >
        
            <button onClick={incrementar}> + </button>
            <button onClick={decrementar}> - </button>
            <h1>{contador}</h1>
            <button onClick={confirm}> Agregar al Carrito </button>

        </div>
    )
}

export default ItemCount;